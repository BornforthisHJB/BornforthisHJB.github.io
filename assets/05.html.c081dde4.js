import{_ as e}from"./gzh.d6f5697d.js";import{_ as t}from"./zsxq.200e4a27.js";import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";import{o as p,c,a as s,b as i,e as l,d as n,r}from"./app.dd258c1a.js";const u={},d=l(`<p>\u8981\u8BFB\u53D6\u672C\u5730 html \u5185\u5BB9\uFF0C\u8BF7\u4F7F\u7528 <code>lxml.html</code> \u548C <code>open()</code>\uFF1A</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">from</span> lxml <span class="token keyword">import</span> html
<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;test.html&#39;</span><span class="token punctuation">,</span><span class="token string">&#39;r&#39;</span><span class="token punctuation">,</span>encoding<span class="token operator">=</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
    text <span class="token operator">=</span> html<span class="token punctuation">.</span>fromstring<span class="token punctuation">(</span>f<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8981\u5728\u6D4F\u89C8\u5668\u4E2D\u6253\u5F00\uFF0C\u6211\u5C06\u4F7F\u7528 <code>webbrowser</code> \u6A21\u5757\uFF0C\u5E76\u5728\u672C\u5730\u8DEF\u5F84\u4E4B\u524D\u4F7F\u7528 <code>file://</code> \uFF1A</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> webbrowser
webbrowser<span class="token punctuation">.</span><span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&#39;file://test.html&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5C1D\u8BD5\u4F7F\u7528 <strong>subprocess</strong> \u547D\u4EE4\u8FD0\u884C\u7A0B\u5E8F\u65B9\u6CD5\uFF0C\u56E0\u4E3A\u60A8\u53EF\u4EE5\u901A\u8FC7\u952E\u5165\u201Cchrome path/to/htmlfile.html\u201D\u4F7F\u7528\u547D\u4EE4\u884C\u6253\u5F00 HTML \u6587\u4EF6</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> subprocess

<span class="token comment"># in case chrome browser</span>
subprocess<span class="token punctuation">.</span>run<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;chrome&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;path/to/htmlfile.html&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6B22\u8FCE\u5173\u6CE8\u6211\u516C\u4F17\u53F7\uFF1AAI\u60A6\u521B\uFF0C\u6709\u66F4\u591A\u66F4\u597D\u73A9\u7684\u7B49\u4F60\u53D1\u73B0\uFF01</p><details class="custom-container details"><summary>\u516C\u4F17\u53F7\uFF1AAI\u60A6\u521B\u3010\u4E8C\u7EF4\u7801\u3011</summary><p><img src="`+e+'" alt=""></p></details>',8),m={class:"custom-container info"},k=s("p",{class:"custom-container-title"},"AI\u60A6\u521B\xB7\u7F16\u7A0B\u4E00\u5BF9\u4E00",-1),h=s("p",null,"AI\u60A6\u521B\xB7\u63A8\u51FA\u8F85\u5BFC\u73ED\u5566\uFF0C\u5305\u62EC\u300CPython \u8BED\u8A00\u8F85\u5BFC\u73ED\u3001C++ \u8F85\u5BFC\u73ED\u3001java \u8F85\u5BFC\u73ED\u3001\u7B97\u6CD5/\u6570\u636E\u7ED3\u6784\u8F85\u5BFC\u73ED\u3001\u5C11\u513F\u7F16\u7A0B\u3001pygame \u6E38\u620F\u5F00\u53D1\u300D\uFF0C\u5168\u90E8\u90FD\u662F\u4E00\u5BF9\u4E00\u6559\u5B66\uFF1A\u4E00\u5BF9\u4E00\u8F85\u5BFC + \u4E00\u5BF9\u4E00\u7B54\u7591 + \u5E03\u7F6E\u4F5C\u4E1A + \u9879\u76EE\u5B9E\u8DF5\u7B49\u3002\u5F53\u7136\uFF0C\u8FD8\u6709\u7EBF\u4E0B\u7EBF\u4E0A\u6444\u5F71\u8BFE\u7A0B\u3001Photoshop\u3001Premiere \u4E00\u5BF9\u4E00\u6559\u5B66\u3001QQ\u3001\u5FAE\u4FE1\u5728\u7EBF\uFF0C\u968F\u65F6\u54CD\u5E94\uFF01\u5FAE\u4FE1\uFF1AJiabcdefh",-1),_=s("p",null,"C++ \u4FE1\u606F\u5965\u8D5B\u9898\u89E3\uFF0C\u957F\u671F\u66F4\u65B0\uFF01\u957F\u671F\u62DB\u6536\u4E00\u5BF9\u4E00\u4E2D\u5C0F\u5B66\u4FE1\u606F\u5965\u8D5B\u96C6\u8BAD\uFF0C\u8386\u7530\u3001\u53A6\u95E8\u5730\u533A\u6709\u673A\u4F1A\u7EBF\u4E0B\u4E0A\u95E8\uFF0C\u5176\u4ED6\u5730\u533A\u7EBF\u4E0A\u3002\u5FAE\u4FE1\uFF1AJiabcdefh",-1),v=n("\u65B9\u6CD5\u4E00\uFF1A"),b={href:"http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes",target:"_blank",rel:"noopener noreferrer"},g=n("QQ"),f=s("p",null,"\u65B9\u6CD5\u4E8C\uFF1A\u5FAE\u4FE1\uFF1AJiabcdefh",-1),y=s("p",null,[s("img",{src:t,alt:""})],-1);function w(x,q){const a=r("ExternalLinkIcon");return p(),c("div",null,[d,s("div",m,[k,h,_,s("p",null,[v,s("a",b,[g,i(a)])]),f]),y])}var V=o(u,[["render",w],["__file","05.html.vue"]]);export{V as default};
