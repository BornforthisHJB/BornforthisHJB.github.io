import{_ as p}from"./gzh.b03adfd2.js";import{_ as t}from"./zsxq.77f6dc86.js";import{_ as o}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c,a as n,d as s,b as u,e as l,r as i}from"./app.b0eae2c5.js";const k={},r=l(`<p>你好，我是悦创。</p><p>废话少说，直接上代码。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>In <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">:</span> s <span class="token operator">=</span> <span class="token string">&quot;aiyuechuang&quot;</span>

In <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">:</span> s<span class="token punctuation">.</span>startswith<span class="token punctuation">(</span><span class="token string">&quot;ai&quot;</span><span class="token punctuation">)</span>
Out<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token boolean">True</span>

In <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">:</span> s<span class="token punctuation">.</span>startswith<span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span>
Out<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token boolean">True</span>

In <span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">:</span> s<span class="token punctuation">.</span>startswith<span class="token punctuation">(</span><span class="token string">&quot;a000ss&quot;</span><span class="token punctuation">)</span>
Out<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token boolean">False</span>

In <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">:</span> s<span class="token punctuation">.</span>endswith<span class="token punctuation">(</span><span class="token string">&quot;hjb&quot;</span><span class="token punctuation">)</span>
Out<span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token boolean">False</span>

In <span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">:</span> s<span class="token punctuation">.</span>endswith<span class="token punctuation">(</span><span class="token string">&quot;g&quot;</span><span class="token punctuation">)</span>
Out<span class="token punctuation">[</span><span class="token number">6</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token boolean">True</span>

In <span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">:</span> s<span class="token punctuation">.</span>endswith<span class="token punctuation">(</span><span class="token string">&quot;og&quot;</span><span class="token punctuation">)</span>
Out<span class="token punctuation">[</span><span class="token number">7</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token boolean">False</span>

In <span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">:</span> s<span class="token punctuation">.</span>endswith<span class="token punctuation">(</span><span class="token string">&quot;ng&quot;</span><span class="token punctuation">)</span>
Out<span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token boolean">True</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>简单实现：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>In <span class="token punctuation">[</span><span class="token number">9</span><span class="token punctuation">]</span><span class="token punctuation">:</span> a <span class="token operator">=</span> <span class="token string">&quot;ai&quot;</span>

In <span class="token punctuation">[</span><span class="token number">10</span><span class="token punctuation">]</span><span class="token punctuation">:</span> length <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>

In <span class="token punctuation">[</span><span class="token number">11</span><span class="token punctuation">]</span><span class="token punctuation">:</span> s <span class="token operator">=</span> <span class="token string">&quot;aiyuechuang&quot;</span>

In <span class="token punctuation">[</span><span class="token number">12</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token keyword">if</span> a <span class="token operator">==</span> s<span class="token punctuation">[</span><span class="token punctuation">:</span>length<span class="token punctuation">]</span><span class="token punctuation">:</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">:</span>     <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Suc&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">:</span> <span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">:</span>     <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Faild&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">:</span>
Suc
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>In <span class="token punctuation">[</span><span class="token number">16</span><span class="token punctuation">]</span><span class="token punctuation">:</span> a <span class="token operator">=</span> <span class="token string">&quot;aiyppp&quot;</span>

In <span class="token punctuation">[</span><span class="token number">17</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token keyword">if</span> a <span class="token operator">==</span> s<span class="token punctuation">[</span><span class="token punctuation">:</span>length<span class="token punctuation">]</span><span class="token punctuation">:</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">:</span>     <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Suc&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">:</span> <span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">:</span>     <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Faild&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">:</span>
Faild

In <span class="token punctuation">[</span><span class="token number">18</span><span class="token punctuation">]</span><span class="token punctuation">:</span> a <span class="token operator">=</span> <span class="token string">&quot;aiypppslslslsllsl&quot;</span>

In <span class="token punctuation">[</span><span class="token number">19</span><span class="token punctuation">]</span><span class="token punctuation">:</span> length <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>

In <span class="token punctuation">[</span><span class="token number">20</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token keyword">if</span> a <span class="token operator">==</span> s<span class="token punctuation">[</span><span class="token punctuation">:</span>length<span class="token punctuation">]</span><span class="token punctuation">:</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">:</span>     <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Suc&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">:</span> <span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">:</span>     <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Faild&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">:</span>
Faild

In <span class="token punctuation">[</span><span class="token number">21</span><span class="token punctuation">]</span><span class="token punctuation">:</span> a <span class="token operator">=</span> <span class="token string">&quot;aiypppslslslsllsl&quot;</span>

In <span class="token punctuation">[</span><span class="token number">22</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token keyword">if</span> a <span class="token operator">==</span> s<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token builtin">len</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">:</span>     <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Suc&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">:</span> <span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">:</span>     <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;Faild&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">:</span>
Faild

In <span class="token punctuation">[</span><span class="token number">23</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token string">&quot;aiyc&quot;</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">]</span>
Out<span class="token punctuation">[</span><span class="token number">23</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token string">&#39;&#39;</span>

In <span class="token punctuation">[</span><span class="token number">24</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token string">&quot;aiyc&quot;</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
Out<span class="token punctuation">[</span><span class="token number">24</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token string">&#39;c&#39;</span>

In <span class="token punctuation">[</span><span class="token number">25</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token string">&quot;aiyc&quot;</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
Out<span class="token punctuation">[</span><span class="token number">25</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token string">&#39;cy&#39;</span>

In <span class="token punctuation">[</span><span class="token number">26</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token string">&quot;aiyc&quot;</span><span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
Out<span class="token punctuation">[</span><span class="token number">26</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token string">&#39;cy&#39;</span>

In <span class="token punctuation">[</span><span class="token number">27</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token string">&quot;aiyc&quot;</span><span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">3</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
Out<span class="token punctuation">[</span><span class="token number">27</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token string">&#39;yc&#39;</span>

In <span class="token punctuation">[</span><span class="token number">28</span><span class="token punctuation">]</span><span class="token punctuation">:</span> s <span class="token operator">=</span> <span class="token string">&quot;believes&quot;</span>

In <span class="token punctuation">[</span><span class="token number">29</span><span class="token punctuation">]</span><span class="token punctuation">:</span> es
<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>
NameError                                 Traceback <span class="token punctuation">(</span>most recent call last<span class="token punctuation">)</span>
Input In <span class="token punctuation">[</span><span class="token number">29</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">in</span> <span class="token operator">&lt;</span>cell line<span class="token punctuation">:</span> <span class="token number">1</span><span class="token operator">&gt;</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">&gt;</span> <span class="token number">1</span> es

NameError<span class="token punctuation">:</span> name <span class="token string">&#39;es&#39;</span> <span class="token keyword">is</span> <span class="token keyword">not</span> defined

In <span class="token punctuation">[</span><span class="token number">30</span><span class="token punctuation">]</span><span class="token punctuation">:</span> s <span class="token operator">=</span> <span class="token string">&quot;believes&quot;</span>

In <span class="token punctuation">[</span><span class="token number">31</span><span class="token punctuation">]</span><span class="token punctuation">:</span> s<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">2</span><span class="token punctuation">]</span>
Out<span class="token punctuation">[</span><span class="token number">31</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token string">&#39;believ&#39;</span>

In <span class="token punctuation">[</span><span class="token number">32</span><span class="token punctuation">]</span><span class="token punctuation">:</span> s<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
Out<span class="token punctuation">[</span><span class="token number">32</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token string">&#39;believe&#39;</span>

In <span class="token punctuation">[</span><span class="token number">33</span><span class="token punctuation">]</span><span class="token punctuation">:</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！</p><details class="custom-container details"><summary>公众号：AI悦创【二维码】</summary><p><img src="`+p+'" alt="" loading="lazy"></p></details>',8),d={class:"custom-container info"},v=n("p",{class:"custom-container-title"},"AI悦创·编程一对一",-1),m=n("p",null,"AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh",-1),b=n("p",null,"C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh",-1),g={href:"http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes",target:"_blank",rel:"noopener noreferrer"},q=n("p",null,"方法二：微信：Jiabcdefh",-1),y=n("p",null,[n("img",{src:t,alt:"",loading:"lazy"})],-1);function h(I,_){const a=i("ExternalLinkIcon");return e(),c("div",null,[r,n("div",d,[v,m,b,n("p",null,[s("方法一："),n("a",g,[s("QQ"),u(a)])]),q]),y])}const x=o(k,[["render",h],["__file","12.html.vue"]]);export{x as default};
