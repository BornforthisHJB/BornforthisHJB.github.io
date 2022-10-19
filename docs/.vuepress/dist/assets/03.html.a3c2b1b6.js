import{_ as t}from"./gzh.e3bdf003.js";import{_ as e}from"./zsxq.5b71a58b.js";import{_ as o}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as p,c,a as n,d as s,b as i,e as l,r as u}from"./app.1ec90f96.js";const r={},d=l(`<p>\u4F60\u597D\uFF0C\u6211\u662F\u60A6\u521B\u3002</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> platform
<span class="token keyword">import</span> os
<span class="token keyword">import</span> sys
<span class="token keyword">import</span> time


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    content <span class="token operator">=</span> <span class="token string">&quot;\u4F60\u597D\uFF0C\u6211\u662F\u60A6\u521B\u3002\u3002\u3002&quot;</span>
    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
        <span class="token comment"># \u6E05\u7406\u5C4F\u5E55\u8F93\u51FA</span>
        <span class="token keyword">if</span> platform<span class="token punctuation">.</span>system<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>lower<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">==</span> <span class="token string">&quot;windows&quot;</span><span class="token punctuation">:</span>
            os<span class="token punctuation">.</span>system<span class="token punctuation">(</span><span class="token string">&quot;cls&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">elif</span> <span class="token string">&#39;ipykernel&#39;</span> <span class="token keyword">in</span> sys<span class="token punctuation">.</span>modules<span class="token punctuation">:</span>
            <span class="token keyword">from</span> IPython<span class="token punctuation">.</span>display <span class="token keyword">import</span> clear_output <span class="token keyword">as</span> clear
            clear<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            os<span class="token punctuation">.</span>system<span class="token punctuation">(</span><span class="token string">&quot;clear&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>content<span class="token punctuation">)</span>
        <span class="token comment"># \u4F11\u7720 300 \u6BEB\u79D2</span>
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">0.3</span><span class="token punctuation">)</span>
        content <span class="token operator">=</span> content<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span> <span class="token operator">+</span> content<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6B22\u8FCE\u5173\u6CE8\u6211\u516C\u4F17\u53F7\uFF1AAI\u60A6\u521B\uFF0C\u6709\u66F4\u591A\u66F4\u597D\u73A9\u7684\u7B49\u4F60\u53D1\u73B0\uFF01</p><details class="custom-container details"><summary>\u516C\u4F17\u53F7\uFF1AAI\u60A6\u521B\u3010\u4E8C\u7EF4\u7801\u3011</summary><p><img src="`+t+'" alt="" loading="lazy"></p></details>',4),k={class:"custom-container info"},m=n("p",{class:"custom-container-title"},"AI\u60A6\u521B\xB7\u7F16\u7A0B\u4E00\u5BF9\u4E00",-1),v=n("p",null,"AI\u60A6\u521B\xB7\u63A8\u51FA\u8F85\u5BFC\u73ED\u5566\uFF0C\u5305\u62EC\u300CPython \u8BED\u8A00\u8F85\u5BFC\u73ED\u3001C++ \u8F85\u5BFC\u73ED\u3001java \u8F85\u5BFC\u73ED\u3001\u7B97\u6CD5/\u6570\u636E\u7ED3\u6784\u8F85\u5BFC\u73ED\u3001\u5C11\u513F\u7F16\u7A0B\u3001pygame \u6E38\u620F\u5F00\u53D1\u300D\uFF0C\u5168\u90E8\u90FD\u662F\u4E00\u5BF9\u4E00\u6559\u5B66\uFF1A\u4E00\u5BF9\u4E00\u8F85\u5BFC + \u4E00\u5BF9\u4E00\u7B54\u7591 + \u5E03\u7F6E\u4F5C\u4E1A + \u9879\u76EE\u5B9E\u8DF5\u7B49\u3002\u5F53\u7136\uFF0C\u8FD8\u6709\u7EBF\u4E0B\u7EBF\u4E0A\u6444\u5F71\u8BFE\u7A0B\u3001Photoshop\u3001Premiere \u4E00\u5BF9\u4E00\u6559\u5B66\u3001QQ\u3001\u5FAE\u4FE1\u5728\u7EBF\uFF0C\u968F\u65F6\u54CD\u5E94\uFF01\u5FAE\u4FE1\uFF1AJiabcdefh",-1),_=n("p",null,"C++ \u4FE1\u606F\u5965\u8D5B\u9898\u89E3\uFF0C\u957F\u671F\u66F4\u65B0\uFF01\u957F\u671F\u62DB\u6536\u4E00\u5BF9\u4E00\u4E2D\u5C0F\u5B66\u4FE1\u606F\u5965\u8D5B\u96C6\u8BAD\uFF0C\u8386\u7530\u3001\u53A6\u95E8\u5730\u533A\u6709\u673A\u4F1A\u7EBF\u4E0B\u4E0A\u95E8\uFF0C\u5176\u4ED6\u5730\u533A\u7EBF\u4E0A\u3002\u5FAE\u4FE1\uFF1AJiabcdefh",-1),b={href:"http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes",target:"_blank",rel:"noopener noreferrer"},y=n("p",null,"\u65B9\u6CD5\u4E8C\uFF1A\u5FAE\u4FE1\uFF1AJiabcdefh",-1),f=n("p",null,[n("img",{src:e,alt:"",loading:"lazy"})],-1);function h(w,g){const a=u("ExternalLinkIcon");return p(),c("div",null,[d,n("div",k,[m,v,_,n("p",null,[s("\u65B9\u6CD5\u4E00\uFF1A"),n("a",b,[s("QQ"),i(a)])]),y]),f])}const N=o(r,[["render",h],["__file","03.html.vue"]]);export{N as default};
