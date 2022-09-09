import{_ as e}from"./gzh.aa7caba6.js";import{_ as t}from"./zsxq.96f46dfd.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{o,c as p,a as n,b as c,e as l,d as s,r}from"./app.723adf63.js";var d="/assets/image-20220520161417800.b6f90188.png";const u={},m=l('<h2 id="_1-\u6309\u7167\u4E0B\u9762\u8DEF\u5F84\u4EE5\u6B64\u6253\u5F00" tabindex="-1"><a class="header-anchor" href="#_1-\u6309\u7167\u4E0B\u9762\u8DEF\u5F84\u4EE5\u6B64\u6253\u5F00" aria-hidden="true">#</a> 1. \u6309\u7167\u4E0B\u9762\u8DEF\u5F84\u4EE5\u6B64\u6253\u5F00</h2><p><img src="'+d+`" alt="image-20220520161417800"></p><h2 id="_2-\u8BBE\u7F6E\u76F8\u5173\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#_2-\u8BBE\u7F6E\u76F8\u5173\u4EE3\u7801" aria-hidden="true">#</a> 2. \u8BBE\u7F6E\u76F8\u5173\u4EE3\u7801</h2><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment">##!/usr/bin/python3</span>
<span class="token comment"># -*- coding: utf-8 -*-</span>
<span class="token comment"># @Time    : \${DATE} \${TIME}</span>
<span class="token comment"># @Author  : AI\u60A6\u521B</span>
<span class="token comment"># @FileName: \${NAME}.py</span>
<span class="token comment"># @Software: \${PRODUCT_NAME}</span>
<span class="token comment"># @Blog    \uFF1Ahttps://bornforthis.cn/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8BBE\u5B9A\u7684\u89C4\u5219\u8BF4\u660E\u5982\u4E0B\uFF1A</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>\uFF08a\uFF09shebang\u884C

<span class="token comment">#!/usr/bin/python3</span>

\uFF08b\uFF09\u9884\u5B9A\u4E49\u7684\u53D8\u91CF\u8981\u6269\u5C55\u4E3A\u683C\u5F0F\u4E3A$ <span class="token punctuation">{</span><span class="token operator">&lt;</span>variable_name<span class="token operator">&gt;</span><span class="token punctuation">}</span>\u7684\u76F8\u5E94\u503C\u3002

\u53EF\u7528\u7684\u9884\u5B9A\u4E49\u6587\u4EF6\u6A21\u677F\u53D8\u91CF\u4E3A\uFF1A

$ <span class="token punctuation">{</span>PROJECT_NAME<span class="token punctuation">}</span> <span class="token operator">-</span> \u5F53\u524D\u9879\u76EE\u7684\u540D\u79F0\u3002

$ <span class="token punctuation">{</span>NAME<span class="token punctuation">}</span> <span class="token operator">-</span> \u5728\u6587\u4EF6\u521B\u5EFA\u8FC7\u7A0B\u4E2D\u5728\u201C\u65B0\u5EFA\u6587\u4EF6\u201D\u5BF9\u8BDD\u6846\u4E2D\u6307\u5B9A\u7684\u65B0\u6587\u4EF6\u7684\u540D\u79F0\u3002

$ <span class="token punctuation">{</span>USER<span class="token punctuation">}</span> <span class="token operator">-</span> \u5F53\u524D\u7528\u6237\u7684\u767B\u5F55\u540D\u3002

$ <span class="token punctuation">{</span>DATE<span class="token punctuation">}</span> <span class="token operator">-</span> \u5F53\u524D\u7684\u7CFB\u7EDF\u65E5\u671F\u3002

$ <span class="token punctuation">{</span>TIME<span class="token punctuation">}</span> <span class="token operator">-</span> \u5F53\u524D\u7CFB\u7EDF\u65F6\u95F4\u3002

$ <span class="token punctuation">{</span>YEAR<span class="token punctuation">}</span> <span class="token operator">-</span> \u4ECA\u5E74\u3002

$ <span class="token punctuation">{</span>MONTH<span class="token punctuation">}</span> <span class="token operator">-</span> \u5F53\u6708\u3002

$ <span class="token punctuation">{</span>DAY<span class="token punctuation">}</span> <span class="token operator">-</span> \u5F53\u6708\u7684\u5F53\u5929\u3002

$ <span class="token punctuation">{</span>HOUR<span class="token punctuation">}</span> <span class="token operator">-</span> \u76EE\u524D\u7684\u5C0F\u65F6\u3002

$ <span class="token punctuation">{</span>MINUTE<span class="token punctuation">}</span> <span class="token operator">-</span> \u5F53\u524D\u5206\u949F\u3002

$ <span class="token punctuation">{</span>PRODUCT_NAME<span class="token punctuation">}</span> <span class="token operator">-</span> \u5C06\u5728\u5176\u4E2D\u521B\u5EFA\u6587\u4EF6\u7684IDE\u7684\u540D\u79F0\u3002

$ <span class="token punctuation">{</span>MONTH_NAME_SHORT<span class="token punctuation">}</span> <span class="token operator">-</span> \u6708\u4EFD\u540D\u79F0\u7684\u524D<span class="token number">3</span>\u4E2A\u5B57\u6BCD\u3002 \u793A\u4F8B\uFF1A<span class="token number">1</span>\u6708\uFF0C<span class="token number">2</span>\u6708\u7B49

$ <span class="token punctuation">{</span>MONTH_NAME_FULL<span class="token punctuation">}</span> <span class="token operator">-</span> \u4E00\u4E2A\u6708\u7684\u5168\u540D\u3002 \u793A\u4F8B\uFF1A<span class="token number">1</span>\u6708\uFF0C<span class="token number">2</span>\u6708\u7B49
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6B22\u8FCE\u5173\u6CE8\u6211\u516C\u4F17\u53F7\uFF1AAI\u60A6\u521B\uFF0C\u6709\u66F4\u591A\u66F4\u597D\u73A9\u7684\u7B49\u4F60\u53D1\u73B0\uFF01</p><details class="custom-container details"><summary>\u516C\u4F17\u53F7\uFF1AAI\u60A6\u521B\u3010\u4E8C\u7EF4\u7801\u3011</summary><p><img src="`+e+'" alt=""></p></details>',8),v={class:"custom-container info"},b=n("p",{class:"custom-container-title"},"AI\u60A6\u521B\xB7\u7F16\u7A0B\u4E00\u5BF9\u4E00",-1),k=n("p",null,"AI\u60A6\u521B\xB7\u63A8\u51FA\u8F85\u5BFC\u73ED\u5566\uFF0C\u5305\u62EC\u300CPython \u8BED\u8A00\u8F85\u5BFC\u73ED\u3001C++ \u8F85\u5BFC\u73ED\u3001java \u8F85\u5BFC\u73ED\u3001\u7B97\u6CD5/\u6570\u636E\u7ED3\u6784\u8F85\u5BFC\u73ED\u3001\u5C11\u513F\u7F16\u7A0B\u3001pygame \u6E38\u620F\u5F00\u53D1\u300D\uFF0C\u5168\u90E8\u90FD\u662F\u4E00\u5BF9\u4E00\u6559\u5B66\uFF1A\u4E00\u5BF9\u4E00\u8F85\u5BFC + \u4E00\u5BF9\u4E00\u7B54\u7591 + \u5E03\u7F6E\u4F5C\u4E1A + \u9879\u76EE\u5B9E\u8DF5\u7B49\u3002\u5F53\u7136\uFF0C\u8FD8\u6709\u7EBF\u4E0B\u7EBF\u4E0A\u6444\u5F71\u8BFE\u7A0B\u3001Photoshop\u3001Premiere \u4E00\u5BF9\u4E00\u6559\u5B66\u3001QQ\u3001\u5FAE\u4FE1\u5728\u7EBF\uFF0C\u968F\u65F6\u54CD\u5E94\uFF01\u5FAE\u4FE1\uFF1AJiabcdefh",-1),_=n("p",null,"C++ \u4FE1\u606F\u5965\u8D5B\u9898\u89E3\uFF0C\u957F\u671F\u66F4\u65B0\uFF01\u957F\u671F\u62DB\u6536\u4E00\u5BF9\u4E00\u4E2D\u5C0F\u5B66\u4FE1\u606F\u5965\u8D5B\u96C6\u8BAD\uFF0C\u8386\u7530\u3001\u53A6\u95E8\u5730\u533A\u6709\u673A\u4F1A\u7EBF\u4E0B\u4E0A\u95E8\uFF0C\u5176\u4ED6\u5730\u533A\u7EBF\u4E0A\u3002\u5FAE\u4FE1\uFF1AJiabcdefh",-1),h=s("\u65B9\u6CD5\u4E00\uFF1A"),f={href:"http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes",target:"_blank",rel:"noopener noreferrer"},g=s("QQ"),E=n("p",null,"\u65B9\u6CD5\u4E8C\uFF1A\u5FAE\u4FE1\uFF1AJiabcdefh",-1),$=n("p",null,[n("img",{src:t,alt:""})],-1);function A(y,N){const a=r("ExternalLinkIcon");return o(),p("div",null,[m,n("div",v,[b,k,_,n("p",null,[h,n("a",f,[g,c(a)])]),E]),$])}var O=i(u,[["render",A],["__file","skill_pycharm1.html.vue"]]);export{O as default};
