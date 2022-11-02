import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as o,a as n,d as s,b as p,e as i,r as c}from"./app.9b23c9fb.js";const l={},d=i(`<h2 id="_1-end-n" tabindex="-1"><a class="header-anchor" href="#_1-end-n" aria-hidden="true">#</a> 1. end=“\\n”</h2><h3 id="_1-1-代码1" tabindex="-1"><a class="header-anchor" href="#_1-1-代码1" aria-hidden="true">#</a> 1.1 代码1</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>a <span class="token operator">=</span> <span class="token string">&quot;Jaden&quot;</span>
b <span class="token operator">=</span> <span class="token string">&quot;Austin&quot;</span>
c <span class="token operator">=</span> <span class="token string">&quot;Dannie&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>Jaden
Austin
Dannie
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-代码2" tabindex="-1"><a class="header-anchor" href="#_1-2-代码2" aria-hidden="true">#</a> 1.2 代码2</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>a <span class="token operator">=</span> <span class="token string">&quot;Jaden&quot;</span>
b <span class="token operator">=</span> <span class="token string">&quot;Austin&quot;</span>
c <span class="token operator">=</span> <span class="token string">&quot;Dannie&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># new line</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>Jaden
Austin
Dannie
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-3-代码1-和代码2-是等价的" tabindex="-1"><a class="header-anchor" href="#_1-3-代码1-和代码2-是等价的" aria-hidden="true">#</a> 1.3 代码1 和代码2 是等价的！</h3><p>代码1 是默认是换行。</p><blockquote><p>print 代码结束，默认是换行</p></blockquote><div class="custom-container tip"><p class="custom-container-title">提示</p><p>sep：存在与多个变量同时输出，修改默认间隔。</p><p>end：是 print 的结尾，操作。</p></div><h3 id="_1-4-修改-end-默认值" tabindex="-1"><a class="header-anchor" href="#_1-4-修改-end-默认值" aria-hidden="true">#</a> 1.4 修改 end 默认值</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>a <span class="token operator">=</span> <span class="token string">&quot;Jaden&quot;</span>
b <span class="token operator">=</span> <span class="token string">&quot;Austin&quot;</span>
c <span class="token operator">=</span> <span class="token string">&quot;Dannie&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">&quot;、&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># new line</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>b<span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">&quot;，&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>c<span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">&quot;\\n\\n&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c<span class="token punctuation">,</span> end<span class="token operator">=</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># Jaden Austin Dannie</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>Jaden、Austin，Dannie

Jaden Austin Dannie
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！</p>`,18),r={class:"custom-container info"},u=n("p",{class:"custom-container-title"},"AI悦创·编程一对一",-1),k=n("p",null,"AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh",-1),v=n("p",null,"C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh",-1),m={href:"http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes",target:"_blank",rel:"noopener noreferrer"},h=n("p",null,"方法二：微信：Jiabcdefh",-1);function b(g,_){const a=c("ExternalLinkIcon");return t(),o("div",null,[d,n("div",r,[u,k,v,n("p",null,[s("方法一："),n("a",m,[s("QQ"),p(a)])]),h])])}const f=e(l,[["render",b],["__file","06.html.vue"]]);export{f as default};
