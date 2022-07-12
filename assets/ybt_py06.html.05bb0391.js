import{_ as e}from"./gzh.aa7caba6.js";import{_ as t}from"./zsxq.96f46dfd.js";import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";import{r as i,o as c,c as p,a as n,b as l,e as r,d as a}from"./app.bda415d8.js";const d={},u=r(`<h2 id="\u3010\u9898\u76EE\u63CF\u8FF0\u3011" tabindex="-1"><a class="header-anchor" href="#\u3010\u9898\u76EE\u63CF\u8FF0\u3011" aria-hidden="true">#</a> \u3010\u9898\u76EE\u63CF\u8FF0\u3011</h2><p>\u4E09\u6B3E\u7B14\u8BB0\u672C\u7684\u4F18\u60E0\u4EF7\u4E0D\u540C\uFF0C\u8BF7\u7ED9\u51FA\u4F18\u60E0\u4EF7\u6700\u5927\u503C\u3002</p><h3 id="\u3010\u8F93\u5165\u3011" tabindex="-1"><a class="header-anchor" href="#\u3010\u8F93\u5165\u3011" aria-hidden="true">#</a> \u3010\u8F93\u5165\u3011</h3><p>\u4E00\u884C\u4E09\u4E2A\u5B9E\u6570\uFF0C\u5206\u522B\u8868\u793A\u4E09\u6B3E\u7B14\u8BB0\u672C\u7684\u4F18\u60E0\u4EF7\u3002</p><h3 id="\u3010\u8F93\u51FA\u3011" tabindex="-1"><a class="header-anchor" href="#\u3010\u8F93\u51FA\u3011" aria-hidden="true">#</a> \u3010\u8F93\u51FA\u3011</h3><p>\u8F93\u51FA\u4E00\u4E2A\u5B9E\u6570\uFF0C\u8868\u793A\u4F18\u60E0\u4EF7\u6700\u5927\u503C\u3002</p><h2 id="\u3010\u8F93\u5165\u6837\u4F8B\u3011" tabindex="-1"><a class="header-anchor" href="#\u3010\u8F93\u5165\u6837\u4F8B\u3011" aria-hidden="true">#</a> \u3010\u8F93\u5165\u6837\u4F8B\u3011</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>32.5 63.4 78
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u3010\u8F93\u51FA\u6837\u4F8B\u3011" tabindex="-1"><a class="header-anchor" href="#\u3010\u8F93\u51FA\u6837\u4F8B\u3011" aria-hidden="true">#</a> \u3010\u8F93\u51FA\u6837\u4F8B\u3011</h2><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>78.0
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801" aria-hidden="true">#</a> \u4EE3\u7801</h2><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># \u8BFB\u5165\u4E00\u884C\u5B57\u7B26\u4E32\uFF0Csplit() \u5C06\u5B57\u7B26\u4E32\u4EE5\u7A7A\u683C\u5206\u5F00</span>
a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># float(a) \u5C06\u5B57\u7B26\u4E32 a \u8F6C\u5316\u4E3A\u6D6E\u70B9\u6570</span>
a<span class="token punctuation">,</span> b<span class="token punctuation">,</span> c <span class="token operator">=</span> <span class="token builtin">float</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token builtin">float</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token builtin">float</span><span class="token punctuation">(</span>c<span class="token punctuation">)</span>
<span class="token keyword">if</span> a <span class="token operator">&gt;</span> b<span class="token punctuation">:</span>  <span class="token comment"># \u6BD4\u8F83 a, b \u4EF7\u94B1\uFF0C\u5927\u7684\u8D4B\u503C\u7ED9 m</span>
	m <span class="token operator">=</span> a
<span class="token keyword">else</span><span class="token punctuation">:</span>
	m <span class="token operator">=</span> b

<span class="token keyword">if</span> c <span class="token operator">&gt;</span> m<span class="token punctuation">:</span>  <span class="token comment"># \u82E5 c \u6BD4 a, b \u5927\uFF0C\u5219 m \u7B49\u4E8E c</span>
	m <span class="token operator">=</span> c
<span class="token keyword">print</span><span class="token punctuation">(</span>m<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6B22\u8FCE\u5173\u6CE8\u6211\u516C\u4F17\u53F7\uFF1AAI\u60A6\u521B\uFF0C\u6709\u66F4\u591A\u66F4\u597D\u73A9\u7684\u7B49\u4F60\u53D1\u73B0\uFF01</p><details class="custom-container details"><summary>\u516C\u4F17\u53F7\uFF1AAI\u60A6\u521B\u3010\u4E8C\u7EF4\u7801\u3011</summary><p><img src="`+e+'" alt=""></p></details>',14),m={class:"custom-container info"},h=n("p",{class:"custom-container-title"},"AI\u60A6\u521B\xB7\u7F16\u7A0B\u4E00\u5BF9\u4E00",-1),k=n("p",null,"AI\u60A6\u521B\xB7\u63A8\u51FA\u8F85\u5BFC\u73ED\u5566\uFF0C\u5305\u62EC\u300CPython \u8BED\u8A00\u8F85\u5BFC\u73ED\u3001C++ \u8F85\u5BFC\u73ED\u3001java \u8F85\u5BFC\u73ED\u3001\u7B97\u6CD5/\u6570\u636E\u7ED3\u6784\u8F85\u5BFC\u73ED\u3001\u5C11\u513F\u7F16\u7A0B\u3001pygame \u6E38\u620F\u5F00\u53D1\uFF0C\u534E\u4E3A Python \u673A\u8BD5\u300D\uFF0C\u5168\u90E8\u90FD\u662F\u4E00\u5BF9\u4E00\u6559\u5B66\uFF1A\u4E00\u5BF9\u4E00\u8F85\u5BFC + \u4E00\u5BF9\u4E00\u7B54\u7591 + \u5E03\u7F6E\u4F5C\u4E1A + \u9879\u76EE\u5B9E\u8DF5\u7B49\u3002\u5F53\u7136\uFF0C\u8FD8\u6709\u7EBF\u4E0B\u7EBF\u4E0A\u6444\u5F71\u8BFE\u7A0B\u3001Photoshop\u3001Premiere \u4E00\u5BF9\u4E00\u6559\u5B66\u3001QQ\u3001\u5FAE\u4FE1\u5728\u7EBF\uFF0C\u968F\u65F6\u54CD\u5E94\uFF01\u5FAE\u4FE1\uFF1AJiabcdefh",-1),v=n("p",null,"C++ \u4FE1\u606F\u5965\u8D5B\u9898\u89E3\uFF0C\u957F\u671F\u66F4\u65B0\uFF01\u957F\u671F\u62DB\u6536\u4E00\u5BF9\u4E00\u4E2D\u5C0F\u5B66\u4FE1\u606F\u5965\u8D5B\u96C6\u8BAD\uFF0C\u8386\u7530\u3001\u53A6\u95E8\u5730\u533A\u6709\u673A\u4F1A\u7EBF\u4E0B\u4E0A\u95E8\uFF0C\u5176\u4ED6\u5730\u533A\u7EBF\u4E0A\u3002\u5FAE\u4FE1\uFF1AJiabcdefh",-1),_=a("\u65B9\u6CD5\u4E00\uFF1A"),b={href:"http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes",target:"_blank",rel:"noopener noreferrer"},f=a("QQ"),x=n("p",null,"\u65B9\u6CD5\u4E8C\uFF1A\u5FAE\u4FE1\uFF1AJiabcdefh",-1),g=n("p",null,[n("img",{src:t,alt:""})],-1),y=n("p",null,"P105",-1);function I(w,P){const s=i("ExternalLinkIcon");return c(),p("div",null,[u,n("div",m,[h,k,v,n("p",null,[_,n("a",b,[f,l(s)])]),x]),g,y])}var V=o(d,[["render",I],["__file","ybt_py06.html.vue"]]);export{V as default};
