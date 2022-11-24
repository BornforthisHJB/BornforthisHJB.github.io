import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as l,a as n,b as a,w as e,e as i,r as c,d as p}from"./app.5affaf34.js";const u="/assets/image-20221121211905098.e6998dfc.png",r="/assets/image-20221121213214660.3428275b.png",d="/assets/image-20221124215223391.3c86394f.png",k={},m={class:"table-of-contents"},v=i('<p><img src="'+u+'" alt="image-20221121211905098" loading="lazy"></p><p><img src="'+r+`" alt="image-20221121213214660" loading="lazy"></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>rain <span class="token operator">=</span> <span class="token boolean">True</span>
球场开门 <span class="token operator">=</span> <span class="token boolean">True</span>
<span class="token keyword">if</span> rain <span class="token operator">==</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;打游戏&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">elif</span> 球场开门 <span class="token operator">==</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;打球去&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;自习&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>a <span class="token operator">=</span> <span class="token number">5</span>
<span class="token keyword">if</span> <span class="token builtin">type</span><span class="token punctuation">(</span>a <span class="token operator">/</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token builtin">int</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;偶数&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;奇数&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>奇数
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>a <span class="token operator">=</span> <span class="token number">5</span>
<span class="token keyword">if</span> <span class="token punctuation">(</span>a <span class="token operator">%</span> <span class="token number">2</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;偶数&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;奇数&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_1025-【例3-1】购买笔记本-粤版" tabindex="-1"><a class="header-anchor" href="#_1025-【例3-1】购买笔记本-粤版" aria-hidden="true">#</a> 1025：【例3.1】购买笔记本(粤版)</h2><h3 id="【题目描述】" tabindex="-1"><a class="header-anchor" href="#【题目描述】" aria-hidden="true">#</a> 【题目描述】</h3><p>某商店笔记本有促销活动，规定购买6本以上（含6本）10本以下（含10本）打九折，购买11本以上（含11本）打八折。给定笔记本单价和购买数量，请问购买总费用。</p><h3 id="【输入】" tabindex="-1"><a class="header-anchor" href="#【输入】" aria-hidden="true">#</a> 【输入】</h3><p>第一行一个整数s，表示购买s本笔记本。</p><p>第二行一个实数p，表示笔记本单价是p。</p><h3 id="【输出】" tabindex="-1"><a class="header-anchor" href="#【输出】" aria-hidden="true">#</a> 【输出】</h3><p>输出一行，表示总费用。保留小数点后一位。</p><h3 id="【输入样例】" tabindex="-1"><a class="header-anchor" href="#【输入样例】" aria-hidden="true">#</a> 【输入样例】</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>100 3.2
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="【输出样例】" tabindex="-1"><a class="header-anchor" href="#【输出样例】" aria-hidden="true">#</a> 【输出样例】</h3><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>256.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="答案" tabindex="-1"><a class="header-anchor" href="#答案" aria-hidden="true">#</a> 答案</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>s <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>  <span class="token comment"># 笔记本数量</span>
p <span class="token operator">=</span> <span class="token builtin">float</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">if</span> s <span class="token operator">&lt;</span> <span class="token number">6</span><span class="token punctuation">:</span>  <span class="token comment"># 不打折</span>
    j <span class="token operator">=</span> <span class="token number">1.0</span>
<span class="token keyword">elif</span> s <span class="token operator">&lt;=</span> <span class="token number">10</span><span class="token punctuation">:</span>  <span class="token comment"># 打九折</span>
    j <span class="token operator">=</span> <span class="token number">0.9</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>  <span class="token comment"># 打八折</span>
    j <span class="token operator">=</span> <span class="token number">0.8</span>
t <span class="token operator">=</span> s <span class="token operator">*</span> p <span class="token operator">*</span> j  <span class="token comment"># 总费用</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;%.1f&quot;</span> <span class="token operator">%</span> t<span class="token punctuation">)</span>  <span class="token comment"># 保留到小数点后一位</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="题目2" tabindex="-1"><a class="header-anchor" href="#题目2" aria-hidden="true">#</a> 题目2</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 获取用户输入判断：</span>
<span class="token comment"># 小于 10，输出：数字小于10</span>
<span class="token comment"># 大于10小于60输出：数字在10与60之间</span>
<span class="token comment"># 大于60：输出：你可真秀</span>
s <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> s <span class="token operator">&lt;</span> <span class="token operator">=</span><span class="token number">10</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>

<span class="token keyword">elif</span> s <span class="token operator">&lt;=</span> <span class="token number">60</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span>

<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;你可真秀&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+d+`" alt="image-20221124215223391" loading="lazy"></p><h2 id="进阶题目" tabindex="-1"><a class="header-anchor" href="#进阶题目" aria-hidden="true">#</a> 进阶题目</h2><h3 id="q1-区分奇数、偶数" tabindex="-1"><a class="header-anchor" href="#q1-区分奇数、偶数" aria-hidden="true">#</a> Q1：区分奇数、偶数</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># Q1：区分奇数、偶数</span>
lst <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">,</span> <span class="token number">99</span><span class="token punctuation">,</span> <span class="token number">44</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">,</span> <span class="token number">88</span><span class="token punctuation">]</span>
even_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>  <span class="token comment"># 存偶数</span>
unerven_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment"># 存奇数</span>
<span class="token comment"># [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]</span>
<span class="token comment"># print(lst)</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> lst<span class="token punctuation">:</span>
    <span class="token comment"># print(i)</span>
    <span class="token comment"># ......补充判断代码</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>答案：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># Q1：区分奇数、偶数</span>
lst <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> <span class="token number">33</span><span class="token punctuation">,</span> <span class="token number">99</span><span class="token punctuation">,</span> <span class="token number">44</span><span class="token punctuation">,</span> <span class="token number">22</span><span class="token punctuation">,</span> <span class="token number">11</span><span class="token punctuation">,</span> <span class="token number">16</span><span class="token punctuation">,</span> <span class="token number">88</span><span class="token punctuation">]</span>
even_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>  <span class="token comment"># 存偶数</span>
unerven_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token comment"># 存奇数</span>
<span class="token comment"># [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19]</span>
<span class="token comment"># print(lst)</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> lst<span class="token punctuation">:</span>
    <span class="token comment"># print(i)</span>
    <span class="token comment"># ......补充判断代码</span>
    <span class="token keyword">if</span> i <span class="token operator">%</span> <span class="token number">2</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
        even_list<span class="token punctuation">.</span>append<span class="token punctuation">(</span>i<span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        unerven_list<span class="token punctuation">.</span>append<span class="token punctuation">(</span>i<span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span>even_list<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>unerven_list<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,29);function b(h,g){const s=c("router-link");return o(),l("div",null,[n("nav",m,[n("ul",null,[n("li",null,[a(s,{to:"#_1025-【例3-1】购买笔记本-粤版"},{default:e(()=>[p("1025：【例3.1】购买笔记本(粤版)")]),_:1}),n("ul",null,[n("li",null,[a(s,{to:"#【题目描述】"},{default:e(()=>[p("【题目描述】")]),_:1})]),n("li",null,[a(s,{to:"#【输入】"},{default:e(()=>[p("【输入】")]),_:1})]),n("li",null,[a(s,{to:"#【输出】"},{default:e(()=>[p("【输出】")]),_:1})]),n("li",null,[a(s,{to:"#【输入样例】"},{default:e(()=>[p("【输入样例】")]),_:1})]),n("li",null,[a(s,{to:"#【输出样例】"},{default:e(()=>[p("【输出样例】")]),_:1})]),n("li",null,[a(s,{to:"#答案"},{default:e(()=>[p("答案")]),_:1})])])]),n("li",null,[a(s,{to:"#题目2"},{default:e(()=>[p("题目2")]),_:1})]),n("li",null,[a(s,{to:"#进阶题目"},{default:e(()=>[p("进阶题目")]),_:1}),n("ul",null,[n("li",null,[a(s,{to:"#q1-区分奇数、偶数"},{default:e(()=>[p("Q1：区分奇数、偶数")]),_:1})])])])])]),v])}const f=t(k,[["render",b],["__file","16.html.vue"]]);export{f as default};
