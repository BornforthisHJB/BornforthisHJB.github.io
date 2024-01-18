import{_ as o}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as i,o as l,c,d as u,w as a,e as r,b as s,a as n}from"./app-e-rXghbg.js";const d="/assets/image-20231208131933540--FCZrLKE.png",k="/assets/image-20231208133549593-uDPObaGQ.png",v="/assets/image-20231208133942865-cnGeUbVN.png",m="/assets/image-20231208141259131-mrqZd7r1.png",b="/assets/image-20231211161559839-UueSs9hO.png",g="/assets/image-20231214174641525-5AoEno32.png",h="/assets/image-20231214175112464-vAqbDp9h.png",y={},q=r('<h2 id="_1-字符串的定义" tabindex="-1"><a class="header-anchor" href="#_1-字符串的定义" aria-hidden="true">#</a> 1. 字符串的定义</h2><p><strong>字符串是由字母、数字和特殊字符来组成的序列。</strong></p><figure><img src="'+d+`" alt="有序性" tabindex="0" loading="lazy"><figcaption>有序性</figcaption></figure><h2 id="_2-创建字符串" tabindex="-1"><a class="header-anchor" href="#_2-创建字符串" aria-hidden="true">#</a> 2. 创建字符串</h2><p><strong>如何创建字符串？</strong></p><p>——使用 <strong><span style="color:orange;">单引号、双引号</span>或者<span style="color:orange;">三引号</span></strong>。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>name <span class="token operator">=</span> <span class="token string">&#39;bornforthis&#39;</span>
number <span class="token operator">=</span> <span class="token string">&quot;18&quot;</span>
paragraph <span class="token operator">=</span> <span class="token triple-quoted-string string">&#39;&#39;&#39;Hello,Bornforthis!
Hello,World!&#39;&#39;&#39;</span>
paragraph_two <span class="token operator">=</span> <span class="token triple-quoted-string string">&quot;&quot;&quot;Hello,Bornforthis!
Hello,World!&quot;&quot;&quot;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>为什么 Python 同时支持三种创建字符串的方法？</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&#39;I am bornforthis.&#39;</span>  <span class="token comment"># 在英文当中的常规表达式</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>但是英文当中可以缩写如下：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&#39;I&#39;</span>m bornforthis<span class="token punctuation">.</span>&#39;  <span class="token comment"># 在英文当中也可以这样缩写</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span>


<span class="token comment"># 输出</span>
  File <span class="token string">&quot;/Users/huangjiabao/GitHub/iMac/Pycharm/StudentCoder/39-YDN/lesson2.py&quot;</span><span class="token punctuation">,</span> line <span class="token number">15</span>
    string <span class="token operator">=</span> <span class="token string">&#39;I&#39;</span>m bornforthis<span class="token punctuation">.</span>&#39;  <span class="token comment"># 在英文当中也可以这样缩写</span>
                <span class="token operator">^</span>
SyntaxError<span class="token punctuation">:</span> invalid syntax
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>因为，开头是单引号，所以 Python 会寻找到下一个第一次出现的单引号进行匹配。而第一个单引号不在字符串的末尾，所以导致整个字符串异常。（没有完全包裹字符串全部内容）</strong></p><p>如何解决上面描述的问题呢？——使用双引号。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;I&#39;m bornforthis.&quot;</span>  <span class="token comment"># 外面使用双引号进行包裹即可</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span>

<span class="token comment"># 输出</span>
I&#39;m bornforthis<span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>有时候我们需要字符串里面有单引号或双引号，此时发挥作用： <strong><span style="color:orange;">单双引号混用，是第一个原因</span></strong></li></ul><p>那么三引号呢？</p><p>假设我们现在需要存储如下文本：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创

浅者见浅，深者见深——黄家宝

起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。

先实现功能，再去优化，否则一切会很乱。——AI悦创

凡是你不能清晰写下来的东西，都是你还没有真正理解的东西
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>放入字符串，我们如何在 Python 代码实现呢？</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> &quot;我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创

浅者见浅，深者见深——黄家宝

起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。

先实现功能，再去优化，否则一切会很乱。——AI悦创

凡是你不能清晰写下来的东西，都是你还没有真正理解的东西&quot;  <span class="token comment"># 外面使用双引号进行包裹即可</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span>

<span class="token comment"># 输出</span>
  File <span class="token string">&quot;/Users/huangjiabao/GitHub/iMac/Pycharm/StudentCoder/39-YDN/lesson2.py&quot;</span><span class="token punctuation">,</span> line <span class="token number">15</span>
    string <span class="token operator">=</span> &quot;我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创
                                                     <span class="token operator">^</span>
SyntaxError<span class="token punctuation">:</span> EOL <span class="token keyword">while</span> scanning string literal
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>常规的单引号、双引号是不支持多行文本，但是有一个方法可以间接实现看似多行文本，但实际是单行，在每一行的末尾添加 <code>\\</code>：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> &quot;我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创 \\
\\
浅者见浅，深者见深——黄家宝\\
\\
起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。\\
\\
先实现功能，再去优化，否则一切会很乱。——AI悦创\\
\\
凡是你不能清晰写下来的东西，都是你还没有真正理解的东西&quot;  <span class="token comment"># 外面使用双引号进行包裹即可</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span>

<span class="token comment"># 输出</span>
我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创 浅者见浅，深者见深——黄家宝起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。先实现功能，再去优化，否则一切会很乱。——AI悦创凡是你不能清晰写下来的东西，都是你还没有真正理解的东西
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上面的输出可知，每行结尾添加 <code>\\</code> 只能实现看起来换行，实际上还是一行。「就是：一行显示不完，换行显示而已，但是本身还是一行」</p><figure><img src="`+k+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>此时，我们使用三引号测试：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token triple-quoted-string string">&quot;&quot;&quot;我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创 

浅者见浅，深者见深——黄家宝

起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。

先实现功能，再去优化，否则一切会很乱。——AI悦创

凡是你不能清晰写下来的东西，都是你还没有真正理解的东西&quot;&quot;&quot;</span>  <span class="token comment"># 外面使用双引号进行包裹即可</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span>


<span class="token comment"># 输出</span>
我们有时候不仅仅要看选择项以内的答案，也要去思考选择项以外的答案。——AI悦创 

浅者见浅，深者见深——黄家宝

起的最早的是理想主义者，跑的最快的是骗子，而胆子最大的是那些冒险家，害怕错过一切，疯狂往里冲的是韭菜，而真正的成功者，可能还没有入场。

先实现功能，再去优化，否则一切会很乱。——AI悦创

凡是你不能清晰写下来的东西，都是你还没有真正理解的东西
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以从上面的输出可知，原本什么格式，输出就是什么格式。「原样输出」「三个单引号的效果和上面一样」</p><ul><li><strong><span style="color:orange;">三个单引号或者三个双引号，实现原样输出。</span></strong></li><li><strong><span style="color:orange;">多行注释</span></strong></li><li><strong><span style="color:orange;">单双三引号混用</span></strong>（代码略）</li></ul><figure><img src="`+v+`" alt="多行注释" tabindex="0" loading="lazy"><figcaption>多行注释</figcaption></figure><h2 id="_3-字符串长度" tabindex="-1"><a class="header-anchor" href="#_3-字符串长度" aria-hidden="true">#</a> 3. 字符串长度</h2><p>如何获取一个字符串的长度呢？——使用 <code>len()</code></p><p><strong><code>len()</code>: 返回字符串中字符长度或者字符数。</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>paragraph <span class="token operator">=</span> <span class="token string">&quot;Hello,Bornforthis!&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>paragraph<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># 输出</span>
<span class="token number">18</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在使用 len 获取字符串长度时，是从数字 1 开始数的。</p><h2 id="_4-字符串中的字符获取" tabindex="-1"><a class="header-anchor" href="#_4-字符串中的字符获取" aria-hidden="true">#</a> 4. 字符串中的字符获取</h2><h3 id="_4-1-获取单个字符" tabindex="-1"><a class="header-anchor" href="#_4-1-获取单个字符" aria-hidden="true">#</a> 4.1 获取单个字符</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;bornforthis&quot;</span>
<span class="token comment"># 获取字符 b</span>
select <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select<span class="token punctuation">)</span>

<span class="token comment"># 提取 f</span>
select <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select<span class="token punctuation">)</span>

<span class="token comment"># s 「使用三种方法实现」</span>
select1 <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span>
select2 <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token builtin">len</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">]</span>
select3 <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select1<span class="token punctuation">,</span> select2<span class="token punctuation">,</span> select3<span class="token punctuation">)</span>

<span class="token comment"># 输出</span>
b
f
s s s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-2-获取多个连续字符「子字符串」" tabindex="-1"><a class="header-anchor" href="#_4-2-获取多个连续字符「子字符串」" aria-hidden="true">#</a> 4.2 获取多个连续字符「子字符串」</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;bornforthis&quot;</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
语法: string = &quot;bornforthis&quot;
select = string[start: end]
PS: end 记得 +1
&quot;&quot;&quot;</span>
<span class="token comment"># 获取字符 bor</span>
select <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">]</span>  <span class="token comment"># bo</span>
select <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">]</span>  <span class="token comment"># bor</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select<span class="token punctuation">)</span>

<span class="token comment"># 提取 for</span>
select <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">:</span><span class="token number">7</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select<span class="token punctuation">)</span>

<span class="token comment"># this</span>
select <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">:</span><span class="token number">12</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select<span class="token punctuation">)</span>

<span class="token comment"># 输出</span>
bor
<span class="token keyword">for</span>
this
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-3-获取多个不连续的字符" tabindex="-1"><a class="header-anchor" href="#_4-3-获取多个不连续的字符" aria-hidden="true">#</a> 4.3 获取多个不连续的字符</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;0123456789&quot;</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
语法: string = &quot;0123456789&quot;
select = string[start: end: sep]
PS: end 记得 +1
&quot;&quot;&quot;</span>
<span class="token comment"># 获取字符 02468</span>
select <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token builtin">len</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select<span class="token punctuation">)</span>

<span class="token comment"># 提取 13579</span>
select <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token builtin">len</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select<span class="token punctuation">)</span>

<span class="token comment"># 提取 bnri</span>
string <span class="token operator">=</span> <span class="token string">&quot;bornforthis&quot;</span>
select <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span> <span class="token builtin">len</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select<span class="token punctuation">)</span>

<span class="token comment"># 提取 ofts</span>
select <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span> <span class="token builtin">len</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select<span class="token punctuation">)</span>

<span class="token comment"># 输出</span>
<span class="token number">02468</span>
<span class="token number">13579</span>
bnri
ofts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-4-优化" tabindex="-1"><a class="header-anchor" href="#_4-4-优化" aria-hidden="true">#</a> 4.4 优化</h3><p>如果，我们要提取的字符是从开头到结尾，则我们可以省略开头和结尾，留空即可。</p><p>所以上面 4.3 的代码可以等价如下：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;0123456789&quot;</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
语法: string = &quot;0123456789&quot;
select = string[start: end: sep]
PS: end 记得 +1
&quot;&quot;&quot;</span>
<span class="token comment"># 获取字符 02468</span>
select <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select<span class="token punctuation">)</span>

<span class="token comment"># 提取 13579</span>
select <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select<span class="token punctuation">)</span>

<span class="token comment"># 提取 bnri</span>
string <span class="token operator">=</span> <span class="token string">&quot;bornforthis&quot;</span>
select <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select<span class="token punctuation">)</span>

<span class="token comment"># 提取 ofts</span>
select <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select<span class="token punctuation">)</span>

<span class="token comment"># 输出</span>
<span class="token number">02468</span>
<span class="token number">13579</span>
bnri
ofts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_4-5-字符串倒序" tabindex="-1"><a class="header-anchor" href="#_4-5-字符串倒序" aria-hidden="true">#</a> 4.5 字符串倒序</h3><h4 id="_4-5-1-实现" tabindex="-1"><a class="header-anchor" href="#_4-5-1-实现" aria-hidden="true">#</a> 4.5.1 实现</h4><p>字符串的第三个位置，控制的是字符提取的方向。默认为正数 1，如果我们改成 -1，则会变成反方向。</p><div class="hint-container warning"><p class="hint-container-title">注意</p><p>正负控制方向，数字大小控制步长。</p></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;bornforthis&quot;</span>
select <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select<span class="token punctuation">)</span>

<span class="token comment"># 输出</span>
sihtrofnrob
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h4 id="_4-5-2-存在的问题" tabindex="-1"><a class="header-anchor" href="#_4-5-2-存在的问题" aria-hidden="true">#</a> 4.5.2 存在的问题</h4><div class="hint-container info"><p class="hint-container-title">思考🤔</p><p>上面代码 <code>string[::-1]</code> 前两位省略了什么数字？尝试填写上去。</p></div><p>你有可能是这么想的：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;bornforthis&quot;</span>
<span class="token comment"># print(len(string))</span>
select <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">11</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select<span class="token punctuation">)</span>  <span class="token comment"># 无结果</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>想必你也发现了，没有得到结果也没有报错。</p><p><strong>Why？</strong></p><figure><img src="`+m+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>由上面分析，我们应该如何解决？</p><h4 id="_4-5-3-解决方法" tabindex="-1"><a class="header-anchor" href="#_4-5-3-解决方法" aria-hidden="true">#</a> 4.5.3 解决方法</h4><h5 id="_4-5-3-1-方法一-调换位置" tabindex="-1"><a class="header-anchor" href="#_4-5-3-1-方法一-调换位置" aria-hidden="true">#</a> 4.5.3.1 方法一：调换位置</h5><ul><li>能否解决：可以</li><li>存在什么问题？：少了一个字符</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;bornforthis&quot;</span>
select <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token number">11</span><span class="token punctuation">:</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select<span class="token punctuation">)</span>  <span class="token comment"># sihtrofnro</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>为什么少一个字符？</strong></p><p>——存在一个悖论，因为结束🔚是 0，但是 <code>0 + 1</code> 时得到 1，而 1 是从左到右的第二个字符。故而 +1 是无法实现和解决了。</p><p>但是，我们可以利用不写结尾，得到最后一个缺失的字符：<code>string[11::-1]</code> 。</p><p>虽然解决，但是我们偏离了我的一开始的问题：<strong>前两位省略了什么数字？</strong>「因为，又回到了一开始省略的状态」</p><h5 id="_4-5-3-2-方法二-重写开始结尾" tabindex="-1"><a class="header-anchor" href="#_4-5-3-2-方法二-重写开始结尾" aria-hidden="true">#</a> 4.5.3.2 方法二：重写开始结尾</h5><p><strong>想想字符串的有序性，从右到左。</strong></p><p>为什么要纠结前面两个空的数字是多少？——为了之后得到某一部分的字符倒序。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;bornforthis&quot;</span>
select <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">12</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select<span class="token punctuation">)</span>  <span class="token comment"># sihtrofnrob</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+b+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p><strong>小试牛刀：</strong> 获取 <code>rofn</code></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;bornforthis&quot;</span>
select <span class="token operator">=</span> string<span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">5</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">9</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>select<span class="token punctuation">)</span>  <span class="token comment"># rofn</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-字符串内置方法" tabindex="-1"><a class="header-anchor" href="#_5-字符串内置方法" aria-hidden="true">#</a> 5. 字符串内置方法</h2><h3 id="_5-1-upper" tabindex="-1"><a class="header-anchor" href="#_5-1-upper" aria-hidden="true">#</a> 5.1 .upper()</h3><p>将字符串内容，全部转成大写。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;bornforthis&quot;</span>
upper_string <span class="token operator">=</span> string<span class="token punctuation">.</span>upper<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>upper_string<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
BORNFORTHIS
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-2-lower" tabindex="-1"><a class="header-anchor" href="#_5-2-lower" aria-hidden="true">#</a> 5.2 .lower()</h3><p>将字符串的内容，全部转成小写。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;BORNFORTHIS&quot;</span>
lower_string <span class="token operator">=</span> string<span class="token punctuation">.</span>lower<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>lower_string<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
bornforthis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-3-capitalize" tabindex="-1"><a class="header-anchor" href="#_5-3-capitalize" aria-hidden="true">#</a> 5.3 .capitalize()</h3><p>将字符串首字母，转换成大写。「只对第一个字母大写，其它后面的不会变成大写」</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;bornforthis to aiyc&quot;</span>
capitalize_string <span class="token operator">=</span> string<span class="token punctuation">.</span>capitalize<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>capitalize_string<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
Bornforthis to aiyc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-4-title" tabindex="-1"><a class="header-anchor" href="#_5-4-title" aria-hidden="true">#</a> 5.4 .title()</h3><p>将字符串中的每个单词的首字母，转换成大写。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;bornforthis to aiyc&quot;</span>
title_string <span class="token operator">=</span> string<span class="token punctuation">.</span>title<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>title_string<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
Bornforthis To Aiyc


string <span class="token operator">=</span> <span class="token string">&quot;bornforthis-to-aiyc&quot;</span>  <span class="token comment"># 不管是什么间隔，都会转换成首字母大写</span>
title_string <span class="token operator">=</span> string<span class="token punctuation">.</span>title<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>title_string<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
Bornforthis<span class="token operator">-</span>To<span class="token operator">-</span>Aiyc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-5-startswith" tabindex="-1"><a class="header-anchor" href="#_5-5-startswith" aria-hidden="true">#</a> 5.5 .startswith()</h3><p>检测字符串是不是以特定字符或单词开头，返回布尔值。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;bornforthis&quot;</span>
startswith_string <span class="token operator">=</span> string<span class="token punctuation">.</span>startswith<span class="token punctuation">(</span><span class="token string">&quot;b&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>startswith_string<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
<span class="token boolean">True</span>

string <span class="token operator">=</span> <span class="token string">&quot;bornforthis&quot;</span>
startswith_string <span class="token operator">=</span> string<span class="token punctuation">.</span>startswith<span class="token punctuation">(</span><span class="token string">&quot;bo&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>startswith_string<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
<span class="token boolean">True</span>


string <span class="token operator">=</span> <span class="token string">&quot;bornforthis&quot;</span>
startswith_string <span class="token operator">=</span> string<span class="token punctuation">.</span>startswith<span class="token punctuation">(</span><span class="token string">&quot;p&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>startswith_string<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
<span class="token boolean">False</span>

string <span class="token operator">=</span> <span class="token string">&quot;bornforthis&quot;</span>
startswith_string <span class="token operator">=</span> string<span class="token punctuation">.</span>startswith<span class="token punctuation">(</span><span class="token string">&quot;b1&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>startswith_string<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
<span class="token boolean">False</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-6-endswith" tabindex="-1"><a class="header-anchor" href="#_5-6-endswith" aria-hidden="true">#</a> 5.6 .endswith()</h3><p>检测字符串是不是以特定字符或单词结尾，返回布尔值。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;bornforthis&quot;</span>
endswith_string <span class="token operator">=</span> string<span class="token punctuation">.</span>endswith<span class="token punctuation">(</span><span class="token string">&quot;s&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>endswith_string<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
<span class="token boolean">True</span>

string <span class="token operator">=</span> <span class="token string">&quot;bornforthis&quot;</span>
endswith_string <span class="token operator">=</span> string<span class="token punctuation">.</span>endswith<span class="token punctuation">(</span><span class="token string">&quot;is&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>endswith_string<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
<span class="token boolean">True</span>

string <span class="token operator">=</span> <span class="token string">&quot;bornforthis&quot;</span>
endswith_string <span class="token operator">=</span> string<span class="token punctuation">.</span>endswith<span class="token punctuation">(</span><span class="token string">&quot;i&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>endswith_string<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
<span class="token boolean">False</span>

string <span class="token operator">=</span> <span class="token string">&quot;bornforthis&quot;</span>
endswith_string <span class="token operator">=</span> string<span class="token punctuation">.</span>endswith<span class="token punctuation">(</span><span class="token string">&quot;s6&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>endswith_string<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
<span class="token boolean">False</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-7-count" tabindex="-1"><a class="header-anchor" href="#_5-7-count" aria-hidden="true">#</a> 5.7 .count()</h3><p>计算特定字符或单词在目标字符串中存在的次数。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;bornforthis&quot;</span>
new_string <span class="token operator">=</span> string<span class="token punctuation">.</span>count<span class="token punctuation">(</span><span class="token string">&#39;r&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>new_string<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
<span class="token number">2</span>

string <span class="token operator">=</span> <span class="token string">&quot;bornforthis&quot;</span>
new_string <span class="token operator">=</span> string<span class="token punctuation">.</span>count<span class="token punctuation">(</span><span class="token string">&#39;or&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>new_string<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
<span class="token number">2</span>

string <span class="token operator">=</span> <span class="token string">&quot;bornforthis&quot;</span>
new_string <span class="token operator">=</span> string<span class="token punctuation">.</span>count<span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>new_string<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
<span class="token number">0</span>


string <span class="token operator">=</span> <span class="token string">&quot;bornforthis&quot;</span>
new_string <span class="token operator">=</span> string<span class="token punctuation">.</span>count<span class="token punctuation">(</span><span class="token string">&#39;ap&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>new_string<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
<span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-8-find" tabindex="-1"><a class="header-anchor" href="#_5-8-find" aria-hidden="true">#</a> 5.8 .find()</h3><p>寻找目标字符或单词在特定字符串中，第一次出现的下标。「也就是出现重复，也只是返回第一次出现的下标」如果是查找单词，那么 <code>find()</code> 返回目标单词的第一个字符的下标。</p><p>如果，查询的字符或单词不存在，则返回 <code>-1</code>。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;bornforthis&quot;</span>
new_string <span class="token operator">=</span> string<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>new_string<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
<span class="token number">0</span>

string <span class="token operator">=</span> <span class="token string">&quot;bornforthis&quot;</span>
new_string <span class="token operator">=</span> string<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>new_string<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
<span class="token operator">-</span><span class="token number">1</span>


string <span class="token operator">=</span> <span class="token string">&quot;bornforthis&quot;</span>
new_string <span class="token operator">=</span> string<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">&#39;for&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>new_string<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
<span class="token number">4</span>


string <span class="token operator">=</span> <span class="token string">&quot;bornforthis&quot;</span>
new_string <span class="token operator">=</span> string<span class="token punctuation">.</span>find<span class="token punctuation">(</span><span class="token string">&#39;aiyc&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>new_string<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
<span class="token operator">-</span><span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-9-index" tabindex="-1"><a class="header-anchor" href="#_5-9-index" aria-hidden="true">#</a> 5.9 .index()</h3><p>寻找目标字符或单词在特定字符串中，第一次出现的下标。如果是查找单词，那么 <code>index()</code> 返回目标单词的第一个字符的下标。</p><p>如果，查询的字符或单词不存在，则<strong>报错</strong>。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;bornforthis&quot;</span>
result <span class="token operator">=</span> string<span class="token punctuation">.</span>index<span class="token punctuation">(</span><span class="token string">&#39;b&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
<span class="token number">0</span>

string <span class="token operator">=</span> <span class="token string">&quot;bornforthis&quot;</span>
result <span class="token operator">=</span> string<span class="token punctuation">.</span>index<span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
Traceback <span class="token punctuation">(</span>most recent call last<span class="token punctuation">)</span><span class="token punctuation">:</span>
  File <span class="token string">&quot;/Users/huangjiabao/GitHub/iMac/Pycharm/StudentCoder/39-YDN/lesson3.py&quot;</span><span class="token punctuation">,</span> line <span class="token number">83</span><span class="token punctuation">,</span> <span class="token keyword">in</span> <span class="token operator">&lt;</span>module<span class="token operator">&gt;</span>
    new_string <span class="token operator">=</span> string<span class="token punctuation">.</span>index<span class="token punctuation">(</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">)</span>
ValueError<span class="token punctuation">:</span> substring <span class="token keyword">not</span> found

string <span class="token operator">=</span> <span class="token string">&quot;bornforthis&quot;</span>
result <span class="token operator">=</span> string<span class="token punctuation">.</span>index<span class="token punctuation">(</span><span class="token string">&#39;for&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
<span class="token number">4</span>

string <span class="token operator">=</span> <span class="token string">&quot;bornforthis&quot;</span>
result <span class="token operator">=</span> string<span class="token punctuation">.</span>index<span class="token punctuation">(</span><span class="token string">&#39;aiyc&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
Traceback <span class="token punctuation">(</span>most recent call last<span class="token punctuation">)</span><span class="token punctuation">:</span>
  File <span class="token string">&quot;/Users/huangjiabao/GitHub/iMac/Pycharm/StudentCoder/39-YDN/lesson3.py&quot;</span><span class="token punctuation">,</span> line <span class="token number">83</span><span class="token punctuation">,</span> <span class="token keyword">in</span> <span class="token operator">&lt;</span>module<span class="token operator">&gt;</span>
    new_string <span class="token operator">=</span> string<span class="token punctuation">.</span>index<span class="token punctuation">(</span><span class="token string">&#39;aiyc&#39;</span><span class="token punctuation">)</span>
ValueError<span class="token punctuation">:</span> substring <span class="token keyword">not</span> found
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-10-isdigit" tabindex="-1"><a class="header-anchor" href="#_5-10-isdigit" aria-hidden="true">#</a> 5.10 .isdigit()</h3><p>判断字符串是不是纯数字字符串，字符串中但凡有一个字符是非数字，则返回 False。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;12345678&quot;</span>
result <span class="token operator">=</span> string<span class="token punctuation">.</span>isdigit<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
<span class="token boolean">True</span>

string <span class="token operator">=</span> <span class="token string">&quot;123 45678&quot;</span>
result <span class="token operator">=</span> string<span class="token punctuation">.</span>isdigit<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
<span class="token boolean">False</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-11-isalpha" tabindex="-1"><a class="header-anchor" href="#_5-11-isalpha" aria-hidden="true">#</a> 5.11 .isalpha()</h3><p>判断字符串是不是纯字母字符串，字符串中但凡有一个非字母的，则返回 False。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;bornforthis&quot;</span>
result <span class="token operator">=</span> string<span class="token punctuation">.</span>isalpha<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
<span class="token boolean">True</span>


string <span class="token operator">=</span> <span class="token string">&quot;born forthis&quot;</span>
result <span class="token operator">=</span> string<span class="token punctuation">.</span>isalpha<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
<span class="token boolean">False</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-12-isalnum" tabindex="-1"><a class="header-anchor" href="#_5-12-isalnum" aria-hidden="true">#</a> 5.12 .isalnum()</h3><p>判断字符串是不是纯数字或纯字母、纯数字字母字符串，字符串中但凡出现非数字、字母元素，则返回 False。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;bornforthis&quot;</span>
boolean <span class="token operator">=</span> string<span class="token punctuation">.</span>isalnum<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>boolean<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
<span class="token boolean">True</span>


string <span class="token operator">=</span> <span class="token string">&quot;12345678&quot;</span>
boolean <span class="token operator">=</span> string<span class="token punctuation">.</span>isalnum<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>boolean<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
<span class="token boolean">True</span>


string <span class="token operator">=</span> <span class="token string">&quot;bornforthis8888888888&quot;</span>
boolean <span class="token operator">=</span> string<span class="token punctuation">.</span>isalnum<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>boolean<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
<span class="token boolean">True</span>


string <span class="token operator">=</span> <span class="token string">&quot;bornforthis 8888888888&quot;</span>
boolean <span class="token operator">=</span> string<span class="token punctuation">.</span>isalnum<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>boolean<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
<span class="token boolean">False</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-13-isupper" tabindex="-1"><a class="header-anchor" href="#_5-13-isupper" aria-hidden="true">#</a> 5.13 .isupper()</h3><p>判断字符串中的字符否全大写，全大写则返回 True，否则返回 False。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;BORNFORTHIS&quot;</span>
boolean <span class="token operator">=</span> string<span class="token punctuation">.</span>isupper<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>boolean<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
<span class="token boolean">True</span>


string <span class="token operator">=</span> <span class="token string">&quot;BORNFORTHIS12-、&quot;</span>
boolean <span class="token operator">=</span> string<span class="token punctuation">.</span>isupper<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>boolean<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
<span class="token boolean">True</span>


string <span class="token operator">=</span> <span class="token string">&quot;BORNforthis&quot;</span>
boolean <span class="token operator">=</span> string<span class="token punctuation">.</span>isupper<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>boolean<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
<span class="token boolean">False</span>


string <span class="token operator">=</span> <span class="token string">&quot;bornforthis&quot;</span>
boolean <span class="token operator">=</span> string<span class="token punctuation">.</span>isupper<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>boolean<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
<span class="token boolean">False</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-14-islower" tabindex="-1"><a class="header-anchor" href="#_5-14-islower" aria-hidden="true">#</a> 5.14 .islower()</h3><p>判断字符串是不分全小写，全小写则返回 True，否则返回 False。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;bornforthis&quot;</span>
boolean <span class="token operator">=</span> string<span class="token punctuation">.</span>islower<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>boolean<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
<span class="token boolean">True</span>

string <span class="token operator">=</span> <span class="token string">&quot;bornforthis121-、&quot;</span>
boolean <span class="token operator">=</span> string<span class="token punctuation">.</span>islower<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>boolean<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
<span class="token boolean">True</span>

string <span class="token operator">=</span> <span class="token string">&quot;bornforthisA121-、&quot;</span>
boolean <span class="token operator">=</span> string<span class="token punctuation">.</span>islower<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>boolean<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
<span class="token boolean">False</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-15-isspace" tabindex="-1"><a class="header-anchor" href="#_5-15-isspace" aria-hidden="true">#</a> 5.15 .isspace()</h3><p>判断字符串是否为纯空格，多少个空格都可以。纯空格则返回 True，否则返回 False。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;   &quot;</span>
boolean <span class="token operator">=</span> string<span class="token punctuation">.</span>isspace<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>boolean<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
<span class="token boolean">True</span>

string <span class="token operator">=</span> <span class="token string">&quot;&quot;</span>
boolean <span class="token operator">=</span> string<span class="token punctuation">.</span>isspace<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>boolean<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
<span class="token boolean">False</span>

string <span class="token operator">=</span> <span class="token string">&quot;bornforthis&quot;</span>
boolean <span class="token operator">=</span> string<span class="token punctuation">.</span>isspace<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>boolean<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
<span class="token boolean">False</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-16-strip" tabindex="-1"><a class="header-anchor" href="#_5-16-strip" aria-hidden="true">#</a> 5.16 .strip()</h3><p>默认去掉目标字符串的前后空白字符，如果指定参数，则去掉指定字符。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;   bornforthis   &quot;</span>
strip_string <span class="token operator">=</span> string<span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;原本的字符串:&quot;</span><span class="token punctuation">,</span> string<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;去掉前后空白字符后:&quot;</span><span class="token punctuation">,</span> strip_string<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
原本的字符串<span class="token punctuation">:</span>    bornforthis   
去掉前后空白字符后<span class="token punctuation">:</span> bornforthis


string <span class="token operator">=</span> <span class="token string">&quot;-----bornforthis-----&quot;</span>
strip_string <span class="token operator">=</span> string<span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token string">&#39;-&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;原本的字符串:&quot;</span><span class="token punctuation">,</span> string<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;去掉前后 &#39;-&#39; 字符后:&quot;</span><span class="token punctuation">,</span> strip_string<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
原本的字符串<span class="token punctuation">:</span> <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>bornforthis<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>
去掉前后 <span class="token string">&#39;-&#39;</span> 字符后<span class="token punctuation">:</span> bornforthis


string <span class="token operator">=</span> <span class="token string">&quot;--- --bornforthis-- ---&quot;</span>
strip_string <span class="token operator">=</span> string<span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token string">&#39;-&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># 只去掉连续的减号</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;原本的字符串:&quot;</span><span class="token punctuation">,</span> string<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;去掉前后 &#39;-&#39; 字符后:&quot;</span><span class="token punctuation">,</span> strip_string<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
原本的字符串<span class="token punctuation">:</span> <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span> <span class="token operator">-</span><span class="token operator">-</span>bornforthis<span class="token operator">-</span><span class="token operator">-</span> <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>
去掉前后 <span class="token string">&#39;-&#39;</span> 字符后<span class="token punctuation">:</span>  <span class="token operator">-</span><span class="token operator">-</span>bornforthis<span class="token operator">-</span><span class="token operator">-</span> 



string <span class="token operator">=</span> <span class="token string">&quot;--- --bornforthis-- ---&quot;</span>  <span class="token comment"># 如果想去掉减号和空格呢？</span>
strip_string <span class="token operator">=</span> string<span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token string">&#39;- &#39;</span><span class="token punctuation">)</span>  <span class="token comment"># 填入要去掉的字符「不计较先后顺序」</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;原本的字符串:&quot;</span><span class="token punctuation">,</span> string<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;去掉前后 &#39;- &#39; 字符后:&quot;</span><span class="token punctuation">,</span> strip_string<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
原本的字符串<span class="token punctuation">:</span> <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span> <span class="token operator">-</span><span class="token operator">-</span>bornforthis<span class="token operator">-</span><span class="token operator">-</span> <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>
去掉前后 <span class="token string">&#39;- &#39;</span> 字符后<span class="token punctuation">:</span> bornforthis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-17-lstrip" tabindex="-1"><a class="header-anchor" href="#_5-17-lstrip" aria-hidden="true">#</a> 5.17 .lstrip()</h3><p>默认去掉字符串左边的空白字符，如果指定参数，则去掉左边的指定字符。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;   bornforthis   &quot;</span>
lstrip_string <span class="token operator">=</span> string<span class="token punctuation">.</span>lstrip<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;原本的字符串:&quot;</span><span class="token punctuation">,</span> string<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;去掉左边空白字符后:&quot;</span><span class="token punctuation">,</span> lstrip_string<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
原本的字符串<span class="token punctuation">:</span>    bornforthis   
去掉左边空白字符后<span class="token punctuation">:</span> bornforthis   


string <span class="token operator">=</span> <span class="token string">&quot;----bornforthis----&quot;</span>
lstrip_string <span class="token operator">=</span> string<span class="token punctuation">.</span>lstrip<span class="token punctuation">(</span><span class="token string">&#39;-&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;原本的字符串:&quot;</span><span class="token punctuation">,</span> string<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;去掉左边 &#39;-&#39; 后:&quot;</span><span class="token punctuation">,</span> lstrip_string<span class="token punctuation">)</span>


<span class="token comment"># ---output---</span>
原本的字符串<span class="token punctuation">:</span> <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>bornforthis<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>
去掉左边 <span class="token string">&#39;-&#39;</span> 后<span class="token punctuation">:</span> bornforthis<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>

string <span class="token operator">=</span> <span class="token string">&quot;-- --bornforthis----&quot;</span>
lstrip_string <span class="token operator">=</span> string<span class="token punctuation">.</span>lstrip<span class="token punctuation">(</span><span class="token string">&#39;- &#39;</span><span class="token punctuation">)</span>  <span class="token comment"># 不分先后顺序</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;原本的字符串:&quot;</span><span class="token punctuation">,</span> string<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;去掉左边 &#39;- &#39; 后:&quot;</span><span class="token punctuation">,</span> lstrip_string<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
原本的字符串<span class="token punctuation">:</span> <span class="token operator">-</span><span class="token operator">-</span> <span class="token operator">-</span><span class="token operator">-</span>bornforthis<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>
去掉左边 <span class="token string">&#39;- &#39;</span> 后<span class="token punctuation">:</span> bornforthis<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-18-rstrip" tabindex="-1"><a class="header-anchor" href="#_5-18-rstrip" aria-hidden="true">#</a> 5.18 .rstrip()</h3><p>默认去掉字符串右边的空白字符，如果指定参数，则去掉右边的指定字符。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;   bornforthis   &quot;</span>
rstrip_string <span class="token operator">=</span> string<span class="token punctuation">.</span>rstrip<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;原本的字符串:&quot;</span><span class="token punctuation">,</span> string<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;去掉右边空白字符后:&quot;</span><span class="token punctuation">,</span> rstrip_string<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
原本的字符串<span class="token punctuation">:</span>    bornforthis   
去掉右边空白字符后<span class="token punctuation">:</span>    bornforthis


string <span class="token operator">=</span> <span class="token string">&quot;----bornforthis----&quot;</span>
rstrip_string <span class="token operator">=</span> string<span class="token punctuation">.</span>rstrip<span class="token punctuation">(</span><span class="token string">&#39;-&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;原本的字符串:&quot;</span><span class="token punctuation">,</span> string<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;去掉右边 &#39;-&#39; 后:&quot;</span><span class="token punctuation">,</span> rstrip_string<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
原本的字符串<span class="token punctuation">:</span> <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>bornforthis<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>
去掉右边 <span class="token string">&#39;-&#39;</span> 后<span class="token punctuation">:</span> <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>bornforthis


string <span class="token operator">=</span> <span class="token string">&quot;----bornforthis-- --&quot;</span>
rstrip_string <span class="token operator">=</span> string<span class="token punctuation">.</span>rstrip<span class="token punctuation">(</span><span class="token string">&#39;- &#39;</span><span class="token punctuation">)</span>  <span class="token comment"># 不分先后顺序</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;原本的字符串:&quot;</span><span class="token punctuation">,</span> string<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;去掉右边 &#39;- &#39; 后:&quot;</span><span class="token punctuation">,</span> rstrip_string<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
原本的字符串<span class="token punctuation">:</span> <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>bornforthis<span class="token operator">-</span><span class="token operator">-</span> <span class="token operator">-</span><span class="token operator">-</span>
去掉右边 <span class="token string">&#39;- &#39;</span> 后<span class="token punctuation">:</span> <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>bornforthis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-19-replace" tabindex="-1"><a class="header-anchor" href="#_5-19-replace" aria-hidden="true">#</a> 5.19 .replace()</h3><p><code>.replace(old, new, count)</code> 第一个位置传入待替换的旧「old」字符，第二个位置传入要替换的新字符「new」，默认替换全部，count 控制替换次数。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;   bornforthis   &quot;</span>
replace_string <span class="token operator">=</span> string<span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">&#39; &#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;*&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># 把空白字符替换成 *</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;原本的字符串:&quot;</span><span class="token punctuation">,</span> string<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;替换后:&quot;</span><span class="token punctuation">,</span> replace_string<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
原本的字符串<span class="token punctuation">:</span>    bornforthis   
替换后<span class="token punctuation">:</span> <span class="token operator">**</span><span class="token operator">*</span>bornforthis<span class="token operator">**</span><span class="token operator">*</span>



string <span class="token operator">=</span> <span class="token string">&quot;ai-bornforthis-ai&quot;</span>
replace_string <span class="token operator">=</span> string<span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">&#39;ai&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;love&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># 把 ai 替换成 love，默认全部替换</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;原本的字符串:&quot;</span><span class="token punctuation">,</span> string<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;替换后:&quot;</span><span class="token punctuation">,</span> replace_string<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
原本的字符串<span class="token punctuation">:</span> ai<span class="token operator">-</span>bornforthis<span class="token operator">-</span>ai
替换后<span class="token punctuation">:</span> love<span class="token operator">-</span>bornforthis<span class="token operator">-</span>love



string <span class="token operator">=</span> <span class="token string">&quot;ai-bornforthis-ai&quot;</span>
replace_string <span class="token operator">=</span> string<span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">&#39;ai&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;love&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>  <span class="token comment"># 替换一次</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;原本的字符串:&quot;</span><span class="token punctuation">,</span> string<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;替换后:&quot;</span><span class="token punctuation">,</span> replace_string<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
原本的字符串<span class="token punctuation">:</span> ai<span class="token operator">-</span>bornforthis<span class="token operator">-</span>ai
替换后<span class="token punctuation">:</span> love<span class="token operator">-</span>bornforthis<span class="token operator">-</span>ai
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-20-split" tabindex="-1"><a class="header-anchor" href="#_5-20-split" aria-hidden="true">#</a> 5.20 .split()</h3><p><code>.split(sep, maxsplit)</code> 以特定字符进行分割，默认空格分割。如果传入参数「sep」，则以参数进行分割。返回分割后的列表。maxsplit 用于控制分割几次。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;ai bornforthis ai&quot;</span>
split_string <span class="token operator">=</span> string<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;原本的字符串:&quot;</span><span class="token punctuation">,</span> string<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;分割后:&quot;</span><span class="token punctuation">,</span> split_string<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
原本的字符串<span class="token punctuation">:</span> ai bornforthis ai
分割后<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;ai&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;bornforthis&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;ai&#39;</span><span class="token punctuation">]</span>


string <span class="token operator">=</span> <span class="token string">&quot;ai-bornforthis-ai&quot;</span>
split_string <span class="token operator">=</span> string<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&#39;-&#39;</span><span class="token punctuation">)</span>  <span class="token comment"># 以 - 好分割</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;原本的字符串:&quot;</span><span class="token punctuation">,</span> string<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;分割后:&quot;</span><span class="token punctuation">,</span> split_string<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
原本的字符串<span class="token punctuation">:</span> ai<span class="token operator">-</span>bornforthis<span class="token operator">-</span>ai
分割后<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;ai&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;bornforthis&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;ai&#39;</span><span class="token punctuation">]</span>


string <span class="token operator">=</span> <span class="token string">&quot;ai-bornforthis-love&quot;</span>
split_string <span class="token operator">=</span> string<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&#39;-&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;原本的字符串:&quot;</span><span class="token punctuation">,</span> string<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;分割后:&quot;</span><span class="token punctuation">,</span> split_string<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
原本的字符串<span class="token punctuation">:</span> ai<span class="token operator">-</span>bornforthis<span class="token operator">-</span>love
分割后<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;ai&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;bornforthis-love&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-21-rsplit" tabindex="-1"><a class="header-anchor" href="#_5-21-rsplit" aria-hidden="true">#</a> 5.21 .rsplit()</h3><p><code>.rsplit(sep, maxsplit)</code> 从字符串右边进行分割，也可以传入参数「sep」，进行指定分割。返回分割后的列表。maxsplit 指定分割次数。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;ai-bornforthis-love&quot;</span>
rsplit_string <span class="token operator">=</span> string<span class="token punctuation">.</span>rsplit<span class="token punctuation">(</span><span class="token string">&#39;-&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;原本的字符串:&quot;</span><span class="token punctuation">,</span> string<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;分割后:&quot;</span><span class="token punctuation">,</span> rsplit_string<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
原本的字符串<span class="token punctuation">:</span> ai<span class="token operator">-</span>bornforthis<span class="token operator">-</span>love
分割后<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;ai&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;bornforthis&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;love&#39;</span><span class="token punctuation">]</span>


string <span class="token operator">=</span> <span class="token string">&quot;ai-bornforthis-love&quot;</span>
rsplit_string <span class="token operator">=</span> string<span class="token punctuation">.</span>rsplit<span class="token punctuation">(</span><span class="token string">&#39;-&#39;</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;原本的字符串:&quot;</span><span class="token punctuation">,</span> string<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;分割后:&quot;</span><span class="token punctuation">,</span> rsplit_string<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
原本的字符串<span class="token punctuation">:</span> ai<span class="token operator">-</span>bornforthis<span class="token operator">-</span>love
分割后<span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;ai-bornforthis&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;love&#39;</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_5-22-join" tabindex="-1"><a class="header-anchor" href="#_5-22-join" aria-hidden="true">#</a> 5.22 .join()</h3><p>以特定字符使字符串间隔。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;bornforthis&quot;</span>
join_string <span class="token operator">=</span> <span class="token string">&#39;-&#39;</span><span class="token punctuation">.</span>join<span class="token punctuation">(</span>string<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;原本的字符串:&quot;</span><span class="token punctuation">,</span> string<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;拼接后:&quot;</span><span class="token punctuation">,</span> join_string<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
原本的字符串<span class="token punctuation">:</span> bornforthis
分割后<span class="token punctuation">:</span> b<span class="token operator">-</span>o<span class="token operator">-</span>r<span class="token operator">-</span>n<span class="token operator">-</span>f<span class="token operator">-</span>o<span class="token operator">-</span>r<span class="token operator">-</span>t<span class="token operator">-</span>h<span class="token operator">-</span>i<span class="token operator">-</span>s
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-字符串格式化" tabindex="-1"><a class="header-anchor" href="#_6-字符串格式化" aria-hidden="true">#</a> 6. 字符串格式化</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;Hi Bornforthis,Welcome to XiaMen.&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
Hi Bornforthis<span class="token punctuation">,</span>Welcome to XiaMen<span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>所存在的问题：需要换一个人名或者地区，就需要重新创建一个全新的字符串。</li><li>我们更希望有类似模版，让我们不同的人名、地面填写进去。而不是每个人都从头创建一个新字符串。</li></ul><p>当然，这个时候有可能会想到使用字符串的加法，但字符串加法存在问题。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>name <span class="token operator">=</span> <span class="token string">&quot;Bornforthis&quot;</span>
region <span class="token operator">=</span> <span class="token string">&quot;XiaMen&quot;</span>
string1 <span class="token operator">=</span> <span class="token string">&quot;Hi &quot;</span>
string2 <span class="token operator">=</span> <span class="token string">&quot;,Welcome to &quot;</span>
string3 <span class="token operator">=</span> <span class="token string">&quot;.&quot;</span>
result <span class="token operator">=</span> string1 <span class="token operator">+</span> name <span class="token operator">+</span> string2 <span class="token operator">+</span> region <span class="token operator">+</span> string3
<span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
Hi Bornforthis<span class="token punctuation">,</span>Welcome to XiaMen<span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>由上面的代码可知，虽然实现了。但是很繁琐，如果更复杂的字符串就不合适了。</p><p>而且另一个问题就是，在 Python 中不同的数据类型不能直接相加，除非强制转换类型为字符串：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;Money is &quot;</span> <span class="token operator">+</span> <span class="token number">190</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span>


<span class="token comment"># ---output---</span>
Traceback <span class="token punctuation">(</span>most recent call last<span class="token punctuation">)</span><span class="token punctuation">:</span>
  File <span class="token string">&quot;/Users/huangjiabao/GitHub/iMac/Pycharm/StudentCoder/40-YEWENTE/demo1.py&quot;</span><span class="token punctuation">,</span> line <span class="token number">1</span><span class="token punctuation">,</span> <span class="token keyword">in</span> <span class="token operator">&lt;</span>module<span class="token operator">&gt;</span>
    string <span class="token operator">=</span> <span class="token string">&quot;Money is &quot;</span> <span class="token operator">+</span> <span class="token number">190</span>
TypeError<span class="token punctuation">:</span> can only concatenate <span class="token builtin">str</span> <span class="token punctuation">(</span><span class="token keyword">not</span> <span class="token string">&quot;int&quot;</span><span class="token punctuation">)</span> to <span class="token builtin">str</span>


string <span class="token operator">=</span> <span class="token string">&quot;Money is &quot;</span> <span class="token operator">+</span> <span class="token builtin">str</span><span class="token punctuation">(</span><span class="token number">190</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span>
<span class="token comment"># ---output---</span>
Money <span class="token keyword">is</span> <span class="token number">190</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>—— <strong>format</strong> 就应运而生了。</p><h3 id="_6-1-format" tabindex="-1"><a class="header-anchor" href="#_6-1-format" aria-hidden="true">#</a> 6.1 .format()</h3><ol><li>单个花括号 <code>{}</code></li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;Hi {},Welcome to XiaMen.&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token string">&quot;aiyuechuang&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
Hi aiyuechuang<span class="token punctuation">,</span>Welcome to XiaMen<span class="token punctuation">.</span>



template_string <span class="token operator">=</span> <span class="token string">&quot;Hi {},Welcome to XiaMen.&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>template_string<span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token string">&quot;Bornforthis&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
Hi Bornforthis<span class="token punctuation">,</span>Welcome to XiaMen<span class="token punctuation">.</span>



new_string <span class="token operator">=</span> template_string<span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token string">&quot;AI悦创&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>new_string<span class="token punctuation">)</span>


<span class="token comment"># ---output---</span>
Hi AI悦创<span class="token punctuation">,</span>Welcome to XiaMen<span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>一个花括号以上「按顺序填充」</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;Hi {},Welcome to {}.&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token string">&quot;aiyuechuang&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;厦门&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
Hi aiyuechuang<span class="token punctuation">,</span>Welcome to 厦门<span class="token punctuation">.</span>


template_string <span class="token operator">=</span> <span class="token string">&quot;Hi {},Welcome to {}.&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>template_string<span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token string">&quot;Bornforthis&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;上海&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
Hi Bornforthis<span class="token punctuation">,</span>Welcome to 上海<span class="token punctuation">.</span>


new_string <span class="token operator">=</span> template_string<span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token string">&quot;AI悦创&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;北京&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>new_string<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
Hi AI悦创<span class="token punctuation">,</span>Welcome to 北京<span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>多个花括号指定位置</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;Hi {1},Welcome to {0}.&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token string">&quot;厦门&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;aiyuechuang&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
Hi aiyuechuang<span class="token punctuation">,</span>Welcome to 厦门<span class="token punctuation">.</span>


template_string <span class="token operator">=</span> <span class="token string">&quot;Hi {1},Welcome to {0}.&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>template_string<span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token string">&quot;上海&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Bornforthis&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
Hi Bornforthis<span class="token punctuation">,</span>Welcome to 上海<span class="token punctuation">.</span>


new_string <span class="token operator">=</span> template_string<span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token string">&quot;北京&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;AI悦创&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>new_string<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
Hi AI悦创<span class="token punctuation">,</span>Welcome to 北京<span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="4"><li>参数指定</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;Hi {name},Welcome to {region}.&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>region<span class="token operator">=</span><span class="token string">&#39;厦门&#39;</span><span class="token punctuation">,</span> name<span class="token operator">=</span><span class="token string">&#39;aiyuechuang&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
Hi aiyuechuang<span class="token punctuation">,</span>Welcome to 厦门<span class="token punctuation">.</span>

template_string <span class="token operator">=</span> <span class="token string">&quot;Hi {name},Welcome to {region}.&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>template_string<span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>name<span class="token operator">=</span><span class="token string">&quot;Bornforthis&quot;</span><span class="token punctuation">,</span> region<span class="token operator">=</span><span class="token string">&#39;上海&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
Hi Bornforthis<span class="token punctuation">,</span>Welcome to 上海<span class="token punctuation">.</span>

new_string <span class="token operator">=</span> template_string<span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>name<span class="token operator">=</span><span class="token string">&#39;AI悦创&#39;</span><span class="token punctuation">,</span> region<span class="token operator">=</span><span class="token string">&#39;北京&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>new_string<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
Hi AI悦创<span class="token punctuation">,</span>Welcome to 北京<span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="5"><li>保留指定小数位</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;Money is {:.3f}.&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span><span class="token number">190</span><span class="token punctuation">)</span>  <span class="token comment"># .3f 保留三位小数</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
Money <span class="token keyword">is</span> <span class="token number">190.000</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-2-f" tabindex="-1"><a class="header-anchor" href="#_6-2-f" aria-hidden="true">#</a> 6.2 f</h3><ol><li>直接读取变量</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>name <span class="token operator">=</span> <span class="token string">&quot;Bornforthis&quot;</span>
region <span class="token operator">=</span> <span class="token string">&quot;厦门&quot;</span>
string <span class="token operator">=</span> <span class="token string-interpolation"><span class="token string">f&quot;Hi </span><span class="token interpolation"><span class="token punctuation">{</span>name<span class="token punctuation">}</span></span><span class="token string">,Welcome to </span><span class="token interpolation"><span class="token punctuation">{</span>region<span class="token punctuation">}</span></span><span class="token string">.&quot;</span></span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
Hi Bornforthis<span class="token punctuation">,</span>Welcome to 厦门<span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>保留小数位</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>money <span class="token operator">=</span> <span class="token number">190</span>
string <span class="token operator">=</span> <span class="token string-interpolation"><span class="token string">f&quot;Money is </span><span class="token interpolation"><span class="token punctuation">{</span>money<span class="token punctuation">:</span><span class="token format-spec">.3f</span><span class="token punctuation">}</span></span><span class="token string">.&quot;</span></span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span>


<span class="token comment"># ---output---</span>
Money <span class="token keyword">is</span> <span class="token number">190.000</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-3-格式化" tabindex="-1"><a class="header-anchor" href="#_6-3-格式化" aria-hidden="true">#</a> 6.3 % 格式化</h3><ul><li><code>%d</code>: 整数</li><li><code>%s</code>: 字符串</li><li><code>%f</code>: 浮点数</li></ul><ol><li>单个位置传入</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;Money is %d&quot;</span>
new_s <span class="token operator">=</span> string <span class="token operator">%</span> <span class="token number">13</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>new_s<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string <span class="token operator">%</span> <span class="token number">19</span><span class="token punctuation">)</span>
string <span class="token operator">=</span> <span class="token string">&quot;Money is %d&quot;</span> <span class="token operator">%</span> <span class="token number">190</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
new_string<span class="token punctuation">:</span> Money <span class="token keyword">is</span> <span class="token number">13</span>
直接放<span class="token punctuation">:</span> Money <span class="token keyword">is</span> <span class="token number">19</span>
Money <span class="token keyword">is</span> <span class="token number">190</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>多个位置传入</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;Money is %d %s&quot;</span>
new_s <span class="token operator">=</span> string <span class="token operator">%</span> <span class="token punctuation">(</span><span class="token number">13</span><span class="token punctuation">,</span> <span class="token string">&#39;发大财&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>new_s<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string <span class="token operator">%</span> <span class="token punctuation">(</span><span class="token number">888</span><span class="token punctuation">,</span> <span class="token string">&#39;暴富&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
string <span class="token operator">=</span> <span class="token string">&quot;Money is %d %s&quot;</span> <span class="token operator">%</span> <span class="token punctuation">(</span><span class="token number">190</span><span class="token punctuation">,</span> <span class="token string">&quot;超有钱&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
Money <span class="token keyword">is</span> <span class="token number">13</span> 发大财
Money <span class="token keyword">is</span> <span class="token number">888</span> 暴富
Money <span class="token keyword">is</span> <span class="token number">190</span> 超有钱
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;Money is %d %s&quot;</span>
new_s <span class="token operator">=</span> string <span class="token operator">%</span> <span class="token punctuation">(</span><span class="token number">13</span><span class="token punctuation">,</span> <span class="token string">&#39;make a million&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>new_s<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string <span class="token operator">%</span> <span class="token punctuation">(</span><span class="token number">888</span><span class="token punctuation">,</span> <span class="token string">&#39;sudden wealth&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
string <span class="token operator">=</span> <span class="token string">&quot;Money is %d %s&quot;</span> <span class="token operator">%</span> <span class="token punctuation">(</span><span class="token number">190</span><span class="token punctuation">,</span> <span class="token string">&#39;super rich&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
Money <span class="token keyword">is</span> <span class="token number">13</span> make a million
Money <span class="token keyword">is</span> <span class="token number">888</span> sudden wealth
Money <span class="token keyword">is</span> <span class="token number">190</span> <span class="token builtin">super</span> rich
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>保留小数位</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>string <span class="token operator">=</span> <span class="token string">&quot;Money is %.3f&quot;</span>
new_s <span class="token operator">=</span> string <span class="token operator">%</span> <span class="token number">19</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>new_s<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string <span class="token operator">%</span> <span class="token number">18</span><span class="token punctuation">)</span>
string <span class="token operator">=</span> <span class="token string">&quot;Money is %.3f&quot;</span> <span class="token operator">%</span> <span class="token number">180</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>string<span class="token punctuation">)</span>


<span class="token comment"># ---output---</span>
Money <span class="token keyword">is</span> <span class="token number">19.000</span>
Money <span class="token keyword">is</span> <span class="token number">18.000</span>
Money <span class="token keyword">is</span> <span class="token number">180.000</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_6-4-f-和-format、-的优缺点" tabindex="-1"><a class="header-anchor" href="#_6-4-f-和-format、-的优缺点" aria-hidden="true">#</a> 6.4 f 和 format、% 的优缺点</h3><p>format 和 % 都像模版，提前做好模版后面有需要试可以直接使用；</p><p>而 f 就像在银行当中，柜员边问你边登记，不能提前做好模版。</p><h2 id="_7-字符串不可变性" tabindex="-1"><a class="header-anchor" href="#_7-字符串不可变性" aria-hidden="true">#</a> 7. 字符串不可变性</h2><p>字符串是不可变的，不可以改变字符串中的任何元素，如需改变字符串中的元素，则需要新建一个字符串。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>s <span class="token operator">=</span> <span class="token string">&quot;hello bornforthis&quot;</span>
s<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;a&quot;</span>

<span class="token comment"># ---output---</span>
Traceback <span class="token punctuation">(</span>most recent call last<span class="token punctuation">)</span><span class="token punctuation">:</span>
  File <span class="token string">&quot;/Users/huangjiabao/GitHub/iMac/Pycharm/StudentCoder/39-YDN/lesson3.py&quot;</span><span class="token punctuation">,</span> line <span class="token number">2</span><span class="token punctuation">,</span> <span class="token keyword">in</span> <span class="token operator">&lt;</span>module<span class="token operator">&gt;</span>
    s<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;a&quot;</span>
TypeError<span class="token punctuation">:</span> <span class="token string">&#39;str&#39;</span> <span class="token builtin">object</span> does <span class="token keyword">not</span> support item assignment
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>除了使用 replace 还可以使用字符串拼接：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>s <span class="token operator">=</span> <span class="token string">&quot;hello bornforthis&quot;</span>
news <span class="token operator">=</span> <span class="token string">&quot;a&quot;</span> <span class="token operator">+</span> s<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>news<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
aello bornforthis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_8-字符串转义" tabindex="-1"><a class="header-anchor" href="#_8-字符串转义" aria-hidden="true">#</a> 8. 字符串转义</h2><table><thead><tr><th>转义字符</th><th>含义</th><th>例子</th></tr></thead><tbody><tr><td><code>\\\\</code></td><td>反斜杠符号，为了在字符串中得到 <code>\\</code></td><td><code>s = &quot;bor\\\\nforthis&quot;</code></td></tr><tr><td><code>\\b</code></td><td>退格，类似删除键</td><td><code>s = &quot;bornff\\borthis&quot;</code></td></tr><tr><td><code>\\n</code></td><td>换行</td><td><code>s = &quot;bornfor\\nthis&quot;</code></td></tr><tr><td><code>\\t</code></td><td>制表符</td><td><code>s = &quot;born\\tfor\\tthis&quot;</code></td></tr><tr><td><code>r</code></td><td>取消转义「R 和 r」都可以</td><td><code>s = r&quot;born\\tfor\\tthis&quot;</code></td></tr></tbody></table><p>示例代码：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>s <span class="token operator">=</span> <span class="token string">&quot;bor\\\\nforthis&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
bor\\nforthis


s <span class="token operator">=</span> <span class="token string">&quot;bornff\\borthis&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
bornforthis

s <span class="token operator">=</span> <span class="token string">&quot;bornfor\\nthis&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
bornfor
this



s <span class="token operator">=</span> <span class="token string">&quot;born\\tfor\\tthis&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
born    <span class="token keyword">for</span>    this
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_9-字符串的连接" tabindex="-1"><a class="header-anchor" href="#_9-字符串的连接" aria-hidden="true">#</a> 9. 字符串的连接</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>s1 <span class="token operator">=</span> <span class="token string">&#39;born&#39;</span>
s2 <span class="token operator">=</span> <span class="token string">&#39;forthis&#39;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s1 <span class="token operator">+</span> s2<span class="token punctuation">)</span>  <span class="token comment"># 形成了一个字符串</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s1<span class="token punctuation">,</span> s2<span class="token punctuation">)</span>  <span class="token comment"># 还是两个独立的字符串</span>

<span class="token comment"># ---output---</span>
bornforthis
born forthis


s1 <span class="token operator">=</span> <span class="token string">&#39;*-love-&#39;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s1 <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
<span class="token operator">*</span><span class="token operator">-</span>love<span class="token operator">-</span><span class="token operator">*</span><span class="token operator">-</span>love<span class="token operator">-</span><span class="token operator">*</span><span class="token operator">-</span>love<span class="token operator">-</span><span class="token operator">*</span><span class="token operator">-</span>love<span class="token operator">-</span><span class="token operator">*</span><span class="token operator">-</span>love<span class="token operator">-</span><span class="token operator">*</span><span class="token operator">-</span>love<span class="token operator">-</span><span class="token operator">*</span><span class="token operator">-</span>love<span class="token operator">-</span><span class="token operator">*</span><span class="token operator">-</span>love<span class="token operator">-</span><span class="token operator">*</span><span class="token operator">-</span>love<span class="token operator">-</span><span class="token operator">*</span><span class="token operator">-</span>love<span class="token operator">-</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我想在上面的输出添加末尾加一个 <code>*</code> 怎么办呢？</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>原本<span class="token punctuation">:</span><span class="token operator">*</span><span class="token operator">-</span>love<span class="token operator">-</span><span class="token operator">*</span><span class="token operator">-</span>love<span class="token operator">-</span><span class="token operator">*</span><span class="token operator">-</span>love<span class="token operator">-</span><span class="token operator">*</span><span class="token operator">-</span>love<span class="token operator">-</span><span class="token operator">*</span><span class="token operator">-</span>love<span class="token operator">-</span><span class="token operator">*</span><span class="token operator">-</span>love<span class="token operator">-</span><span class="token operator">*</span><span class="token operator">-</span>love<span class="token operator">-</span><span class="token operator">*</span><span class="token operator">-</span>love<span class="token operator">-</span><span class="token operator">*</span><span class="token operator">-</span>love<span class="token operator">-</span><span class="token operator">*</span><span class="token operator">-</span>love<span class="token operator">-</span>
目标<span class="token punctuation">:</span><span class="token operator">*</span><span class="token operator">-</span>love<span class="token operator">-</span><span class="token operator">*</span><span class="token operator">-</span>love<span class="token operator">-</span><span class="token operator">*</span><span class="token operator">-</span>love<span class="token operator">-</span><span class="token operator">*</span><span class="token operator">-</span>love<span class="token operator">-</span><span class="token operator">*</span><span class="token operator">-</span>love<span class="token operator">-</span><span class="token operator">*</span><span class="token operator">-</span>love<span class="token operator">-</span><span class="token operator">*</span><span class="token operator">-</span>love<span class="token operator">-</span><span class="token operator">*</span><span class="token operator">-</span>love<span class="token operator">-</span><span class="token operator">*</span><span class="token operator">-</span>love<span class="token operator">-</span><span class="token operator">*</span><span class="token operator">-</span>love<span class="token operator">-</span><span class="token operator">*</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>思考一下，如何实现。</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>s1 <span class="token operator">=</span> <span class="token string">&#39;*-love-&#39;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>s1 <span class="token operator">*</span> <span class="token number">10</span><span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">&#39;*&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_10-读取用户输入" tabindex="-1"><a class="header-anchor" href="#_10-读取用户输入" aria-hidden="true">#</a> 10. 读取用户输入</h2><h3 id="_10-1-input-基本使用" tabindex="-1"><a class="header-anchor" href="#_10-1-input-基本使用" aria-hidden="true">#</a> 10.1 input() 基本使用</h3><p>使用 <code>input()</code> 获取用户输入。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>user_input <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>user_input<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
bornforthis
bornforthis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_10-2-input-使用输入提示" tabindex="-1"><a class="header-anchor" href="#_10-2-input-使用输入提示" aria-hidden="true">#</a> 10.2 input() 使用输入提示</h3><p>但是上面的代码，有点小问题：在运行的时候并不能很直观的知道，程序需要我们输入，何况非程序员用户呢？</p><figure><img src="`+g+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>如何解决？——使用输入提示。</p><p><code>input()</code> 函数里面支持我们写入字符串进行提示。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>user_input <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;Enter your name:&gt;&gt;&gt;&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;user input name:&quot;</span><span class="token punctuation">,</span> user_input<span class="token punctuation">)</span>

<span class="token comment"># ---output---</span>
Enter your name<span class="token punctuation">:</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span>bornforthis
user <span class="token builtin">input</span> name<span class="token punctuation">:</span> bornforthis
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+h+`" alt="这样就很直观了" tabindex="0" loading="lazy"><figcaption>这样就很直观了</figcaption></figure><h3 id="_10-3-input-的特点" tabindex="-1"><a class="header-anchor" href="#_10-3-input-的特点" aria-hidden="true">#</a> 10.3 input() 的特点</h3><h4 id="_10-3-1-input-得到类型皆为字符串「str」" tabindex="-1"><a class="header-anchor" href="#_10-3-1-input-得到类型皆为字符串「str」" aria-hidden="true">#</a> 10.3.1 input() 得到类型皆为字符串「str」</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>In <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token builtin">type</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;:&gt;&gt;&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">:</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span>bornforthis
Out<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token builtin">str</span>

In <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token builtin">type</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;:&gt;&gt;&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">:</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token number">12</span>
Out<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token builtin">str</span>

In <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token builtin">type</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;:&gt;&gt;&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">:</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token number">12.1</span>
Out<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token builtin">str</span>

In <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token builtin">type</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;:&gt;&gt;&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">:</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">)</span>
Out<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token builtin">str</span>

In <span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token builtin">type</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;:&gt;&gt;&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">:</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">]</span>  
Out<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token builtin">str</span>

In <span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token builtin">type</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;:&gt;&gt;&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">:</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">}</span>
Out<span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token builtin">str</span>

In <span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token builtin">type</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;:&gt;&gt;&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">:</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">:</span> <span class="token number">19</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">:</span> <span class="token number">20</span><span class="token punctuation">}</span>
Out<span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token builtin">str</span>

In <span class="token punctuation">[</span><span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token builtin">type</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;:&gt;&gt;&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">:</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token boolean">True</span>
Out<span class="token punctuation">[</span><span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token builtin">str</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>通过上面的代码示例，我们可以知道：通过 <code>input()</code> 获取用户输入，得到的数据类型都是<strong>字符串</strong>。</p><p>得知 <code>input()</code> 的特点后，如何解决这个问题呢？——用户如何实现：直接输入原有的类型并得到原有的类型。</p><h4 id="_10-3-2-方法一-强制类型转换" tabindex="-1"><a class="header-anchor" href="#_10-3-2-方法一-强制类型转换" aria-hidden="true">#</a> 10.3.2 方法一：强制类型转换</h4><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>In <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">:</span> n <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;:&gt;&gt;&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">:</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token number">12</span>

In <span class="token punctuation">[</span><span class="token number">11</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token builtin">type</span><span class="token punctuation">(</span>n<span class="token punctuation">)</span>
Out<span class="token punctuation">[</span><span class="token number">11</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token builtin">int</span>

In <span class="token punctuation">[</span><span class="token number">12</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token comment"># 存在一些问题</span>

In <span class="token punctuation">[</span><span class="token number">13</span><span class="token punctuation">]</span><span class="token punctuation">:</span> s <span class="token operator">=</span> <span class="token builtin">list</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;:&gt;&gt;&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">:</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">4</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">]</span>

In <span class="token punctuation">[</span><span class="token number">14</span><span class="token punctuation">]</span><span class="token punctuation">:</span> s  <span class="token comment"># 把每一个字符拆开</span>
Out<span class="token punctuation">[</span><span class="token number">14</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token punctuation">[</span><span class="token string">&#39;[&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;1&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;,&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39; &#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;2&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;,&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39; &#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;3&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;,&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39; &#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;4&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;,&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39; &#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;5&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;]&#39;</span><span class="token punctuation">]</span>

In <span class="token punctuation">[</span><span class="token number">15</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token builtin">type</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>
Out<span class="token punctuation">[</span><span class="token number">15</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token builtin">list</span>

In <span class="token punctuation">[</span><span class="token number">16</span><span class="token punctuation">]</span><span class="token punctuation">:</span> b <span class="token operator">=</span> <span class="token builtin">bool</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;:&gt;&gt;&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">:</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token boolean">True</span>

In <span class="token punctuation">[</span><span class="token number">17</span><span class="token punctuation">]</span><span class="token punctuation">:</span> b
Out<span class="token punctuation">[</span><span class="token number">17</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token boolean">True</span>

In <span class="token punctuation">[</span><span class="token number">18</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token builtin">type</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
Out<span class="token punctuation">[</span><span class="token number">18</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token builtin">bool</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>适合：数字「整数、浮点数」、字符串、布尔型</li><li>不适合：列表、元组、字典、集合</li></ul><h4 id="_10-3-3-方法二-使用-eval" tabindex="-1"><a class="header-anchor" href="#_10-3-3-方法二-使用-eval" aria-hidden="true">#</a> 10.3.3 方法二：使用 eval()</h4><ol><li><code>eval()</code> 的妙用</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>In <span class="token punctuation">[</span><span class="token number">28</span><span class="token punctuation">]</span><span class="token punctuation">:</span> s <span class="token operator">=</span> <span class="token builtin">eval</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;:&gt;&gt;&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">:</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token number">12</span>

In <span class="token punctuation">[</span><span class="token number">29</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token builtin">type</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">,</span> s
Out<span class="token punctuation">[</span><span class="token number">29</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">)</span>

In <span class="token punctuation">[</span><span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">:</span> s <span class="token operator">=</span> <span class="token builtin">eval</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;:&gt;&gt;&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">:</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>

In <span class="token punctuation">[</span><span class="token number">31</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token builtin">type</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">,</span> s
Out<span class="token punctuation">[</span><span class="token number">31</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token builtin">list</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

In <span class="token punctuation">[</span><span class="token number">32</span><span class="token punctuation">]</span><span class="token punctuation">:</span> s <span class="token operator">=</span> <span class="token builtin">eval</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;:&gt;&gt;&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">:</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span>

In <span class="token punctuation">[</span><span class="token number">33</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token builtin">type</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">,</span> s
Out<span class="token punctuation">[</span><span class="token number">33</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token builtin">tuple</span><span class="token punctuation">,</span> <span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

In <span class="token punctuation">[</span><span class="token number">34</span><span class="token punctuation">]</span><span class="token punctuation">:</span> s <span class="token operator">=</span> <span class="token builtin">eval</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;:&gt;&gt;&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">:</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span>

In <span class="token punctuation">[</span><span class="token number">35</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token builtin">type</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">,</span> s
Out<span class="token punctuation">[</span><span class="token number">35</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token builtin">set</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">}</span><span class="token punctuation">)</span>

In <span class="token punctuation">[</span><span class="token number">36</span><span class="token punctuation">]</span><span class="token punctuation">:</span> s <span class="token operator">=</span> <span class="token builtin">eval</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;:&gt;&gt;&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">:</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token boolean">True</span>

In <span class="token punctuation">[</span><span class="token number">37</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token builtin">type</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">,</span> s
Out<span class="token punctuation">[</span><span class="token number">37</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token builtin">bool</span><span class="token punctuation">,</span> <span class="token boolean">True</span><span class="token punctuation">)</span>

In <span class="token punctuation">[</span><span class="token number">38</span><span class="token punctuation">]</span><span class="token punctuation">:</span> s <span class="token operator">=</span> <span class="token builtin">eval</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;:&gt;&gt;&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">:</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">{</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">}</span>

In <span class="token punctuation">[</span><span class="token number">39</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token builtin">type</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">,</span> s
Out<span class="token punctuation">[</span><span class="token number">39</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token builtin">dict</span><span class="token punctuation">,</span> <span class="token punctuation">{</span><span class="token string">&#39;a&#39;</span><span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;b&#39;</span><span class="token punctuation">:</span> <span class="token number">2</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li><code>eval()</code> 伴随着的问题</li></ol><p>上面的代码看似解决了我们所遇到的问题，但是也伴随着我们需要注意的问题。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>In <span class="token punctuation">[</span><span class="token number">40</span><span class="token punctuation">]</span><span class="token punctuation">:</span> s <span class="token operator">=</span> <span class="token builtin">eval</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;:&gt;&gt;&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">:</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span>string 
<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>
NameError                                 Traceback <span class="token punctuation">(</span>most recent call last<span class="token punctuation">)</span>
Cell In<span class="token punctuation">[</span><span class="token number">40</span><span class="token punctuation">]</span><span class="token punctuation">,</span> line <span class="token number">1</span>
<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token number">1</span> s <span class="token operator">=</span> <span class="token builtin">eval</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;:&gt;&gt;&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

File <span class="token operator">&lt;</span>string<span class="token operator">&gt;</span><span class="token punctuation">:</span><span class="token number">1</span>

NameError<span class="token punctuation">:</span> name <span class="token string">&#39;string&#39;</span> <span class="token keyword">is</span> <span class="token keyword">not</span> defined
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>稍微分析一下 <code>eval()</code> 的功能“大概”实现原因：</p><ul><li>input 获取用户输入，得到字符串类型。</li></ul><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>In <span class="token punctuation">[</span><span class="token number">44</span><span class="token punctuation">]</span><span class="token punctuation">:</span> s <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;:&gt;&gt;&gt;&#39;</span><span class="token punctuation">)</span>
<span class="token punctuation">:</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">]</span>

In <span class="token punctuation">[</span><span class="token number">45</span><span class="token punctuation">]</span><span class="token punctuation">:</span> s
Out<span class="token punctuation">[</span><span class="token number">45</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token string">&#39;[1, 2, 3]&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>从上面的代码可以得知，eval 大概率实现的是去掉字符串左右两边的引号。「这个地方 eval 或许不是按我说的实现，但是为了让你们更好理解原理，先这样来。」</p><p>所以，为什么会导致上面的报错呢？</p><ol><li>获取用户输入：<code>s = eval(input(&#39;:&gt;&gt;&gt;&#39;))</code></li><li>其中 input 会得到 <code>&#39;string&#39;</code>，而通过 <code>eval</code> 转换之后，就类似于 <code>string</code> 变量。但是我们实际上我们在我们之前的代码中，并没有创建 string 这个变量。</li><li>故而报错，当然没有通过上面的分析也可以大概预料到问题，因为报错很直观：<code>NameError: name &#39;string&#39; is not defined</code> 。</li><li>所以，解决方法很直白： <ol><li>一种是你在获取用户输入之前直接提前创建一个叫做 string 的变量；「显然，不是我们想要的」</li><li>另一种则是输入的时，有意加上单引号或者双引号、三引号。</li></ol></li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>In <span class="token punctuation">[</span><span class="token number">50</span><span class="token punctuation">]</span><span class="token punctuation">:</span> string <span class="token operator">=</span> <span class="token string">&#39;hello this string&#39;</span>

In <span class="token punctuation">[</span><span class="token number">51</span><span class="token punctuation">]</span><span class="token punctuation">:</span> s <span class="token operator">=</span> <span class="token builtin">eval</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;:&gt;&gt;&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">:</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span>string

In <span class="token punctuation">[</span><span class="token number">52</span><span class="token punctuation">]</span><span class="token punctuation">:</span> s
Out<span class="token punctuation">[</span><span class="token number">52</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token string">&#39;hello this string&#39;</span>

In <span class="token punctuation">[</span><span class="token number">53</span><span class="token punctuation">]</span><span class="token punctuation">:</span> num <span class="token operator">=</span> <span class="token number">12</span>

In <span class="token punctuation">[</span><span class="token number">54</span><span class="token punctuation">]</span><span class="token punctuation">:</span> s <span class="token operator">=</span> <span class="token builtin">eval</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;:&gt;&gt;&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">:</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span>num

In <span class="token punctuation">[</span><span class="token number">55</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token builtin">type</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">,</span> s
Out<span class="token punctuation">[</span><span class="token number">55</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">,</span> <span class="token number">12</span><span class="token punctuation">)</span>

In <span class="token punctuation">[</span><span class="token number">56</span><span class="token punctuation">]</span><span class="token punctuation">:</span> s <span class="token operator">=</span> <span class="token builtin">eval</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;:&gt;&gt;&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">:</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token string">&#39;string&#39;</span>

In <span class="token punctuation">[</span><span class="token number">57</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token builtin">type</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">,</span> s
Out<span class="token punctuation">[</span><span class="token number">57</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token punctuation">(</span><span class="token builtin">str</span><span class="token punctuation">,</span> <span class="token string">&#39;string&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li><code>eval()</code> 小技巧</li></ol><p>任务要求：获取户输入，实现两位的加减乘除。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>In <span class="token punctuation">[</span><span class="token number">58</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token builtin">eval</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;:&gt;&gt;&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">:</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token number">1</span> <span class="token operator">+</span> <span class="token number">1</span>
Out<span class="token punctuation">[</span><span class="token number">58</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token number">2</span>

In <span class="token punctuation">[</span><span class="token number">59</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token builtin">eval</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;:&gt;&gt;&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">:</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token number">2</span> <span class="token operator">-</span> <span class="token number">1</span>
Out<span class="token punctuation">[</span><span class="token number">59</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token number">1</span>

In <span class="token punctuation">[</span><span class="token number">60</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token builtin">eval</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;:&gt;&gt;&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">:</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token number">9</span> <span class="token operator">*</span> <span class="token number">8</span>
Out<span class="token punctuation">[</span><span class="token number">60</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token number">72</span>

In <span class="token punctuation">[</span><span class="token number">61</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token builtin">eval</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;:&gt;&gt;&gt;&#39;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">:</span><span class="token operator">&gt;&gt;</span><span class="token operator">&gt;</span><span class="token number">9</span> <span class="token operator">/</span> <span class="token number">3</span>
Out<span class="token punctuation">[</span><span class="token number">61</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token number">3.0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_11-小试牛刀" tabindex="-1"><a class="header-anchor" href="#_11-小试牛刀" aria-hidden="true">#</a> 11. 小试牛刀</h2><p>获取用户输入来看两个整数，得到两个整数的和。</p><p><strong>要求：</strong></p><ul><li>只能使用一个 input 函数；</li><li>用户输入格式：num1 num2</li><li>输出计算结果；</li></ul><p><strong>输入：</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token number">5</span> <span class="token number">6</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>输出：</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token number">11</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,237),f=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{class:"language-python"},[n("code",null,[s("nums "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token builtin"},"eval"),n("span",{class:"token punctuation"},"("),n("span",{class:"token builtin"},"input"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"':>>>'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s("replace"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"' '"),n("span",{class:"token punctuation"},","),s(),n("span",{class:"token string"},"'+'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"print"),n("span",{class:"token punctuation"},"("),s("nums"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1),w=n("div",{class:"language-python line-numbers-mode","data-ext":"py"},[n("pre",{class:"language-python"},[n("code",null,[s("nums "),n("span",{class:"token operator"},"="),s(),n("span",{class:"token builtin"},"input"),n("span",{class:"token punctuation"},"("),n("span",{class:"token string"},"':>>>'"),n("span",{class:"token punctuation"},")"),n("span",{class:"token punctuation"},"."),s("split"),n("span",{class:"token punctuation"},"("),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token builtin"},"sum"),s(),n("span",{class:"token operator"},"="),s(),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},"("),s("nums"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"0"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(),n("span",{class:"token operator"},"+"),s(),n("span",{class:"token builtin"},"int"),n("span",{class:"token punctuation"},"("),s("nums"),n("span",{class:"token punctuation"},"["),n("span",{class:"token number"},"1"),n("span",{class:"token punctuation"},"]"),n("span",{class:"token punctuation"},")"),s(`
`),n("span",{class:"token keyword"},"print"),n("span",{class:"token punctuation"},"("),n("span",{class:"token builtin"},"sum"),n("span",{class:"token punctuation"},")"),s(`
`)])]),n("div",{class:"line-numbers","aria-hidden":"true"},[n("div",{class:"line-number"}),n("div",{class:"line-number"}),n("div",{class:"line-number"})])],-1);function _(x,I){const e=i("CodeTabs");return l(),c("div",null,[q,u(e,{id:"802",data:[{id:"Code1"},{id:"Code2"}]},{title0:a(({value:t,isActive:p})=>[s("Code1")]),title1:a(({value:t,isActive:p})=>[s("Code2")]),tab0:a(({value:t,isActive:p})=>[f]),tab1:a(({value:t,isActive:p})=>[w]),_:1})])}const O=o(y,[["render",_],["__file","04-python-string.html.vue"]]);export{O as default};
