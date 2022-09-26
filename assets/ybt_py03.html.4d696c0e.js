import{_ as e}from"./gzh.b03adfd2.js";import{_ as t}from"./zsxq.77f6dc86.js";import{_ as o}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as p,c as i,a as n,b as c,e as l,d as s,r}from"./app.f5ba506e.js";const d={},u=l(`<h2 id="\u3010\u9898\u76EE\u63CF\u8FF0\u3011" tabindex="-1"><a class="header-anchor" href="#\u3010\u9898\u76EE\u63CF\u8FF0\u3011" aria-hidden="true">#</a> \u3010\u9898\u76EE\u63CF\u8FF0\u3011</h2><p>\u67D0\u5546\u5E97\u7B14\u8BB0\u672C\u6709\u4FC3\u9500\u6D3B\u52A8\uFF0C\u89C4\u5B9A\u8D2D\u4E70 6 \u672C\u4EE5\u4E0A\uFF08\u542B 6 \u672C\uFF0910 \u672C\u4EE5\u4E0B\uFF08\u542B 10 \u672C\uFF09\u6253\u4E5D\u6298\uFF0C\u8D2D\u4E70 11 \u672C\u4EE5\u4E0A\uFF08\u542B 11 \u672C\uFF09\u6253\u516B\u6298\u3002\u7ED9\u5B9A\u7B14\u8BB0\u672C\u5355\u4EF7\u548C\u8D2D\u4E70\u6570\u91CF\uFF0C\u8BF7\u95EE\u8D2D\u4E70\u603B\u8D39\u7528\u3002</p><h3 id="\u3010\u8F93\u5165\u3011" tabindex="-1"><a class="header-anchor" href="#\u3010\u8F93\u5165\u3011" aria-hidden="true">#</a> \u3010\u8F93\u5165\u3011</h3><p>\u7B2C\u4E00\u884C\u4E00\u4E2A\u6574\u6570 s\uFF0C\u8868\u793A\u8D2D\u4E70 s \u672C\u7B14\u8BB0\u672C\u3002</p><p>\u7B2C\u4E8C\u884C\u4E00\u4E2A\u5B9E\u6570 p\uFF0C\u8868\u793A\u7B14\u8BB0\u672C\u5355\u4EF7\u662F p\u3002</p><h3 id="\u3010\u8F93\u51FA\u3011" tabindex="-1"><a class="header-anchor" href="#\u3010\u8F93\u51FA\u3011" aria-hidden="true">#</a> \u3010\u8F93\u51FA\u3011</h3><p>\u8F93\u51FA\u4E00\u884C\uFF0C\u8868\u793A\u603B\u8D39\u7528\u3002\u4FDD\u7559\u5C0F\u6570\u70B9\u540E\u4E00\u4F4D\u3002</p><h3 id="\u3010\u8F93\u5165\u6837\u4F8B\u3011" tabindex="-1"><a class="header-anchor" href="#\u3010\u8F93\u5165\u6837\u4F8B\u3011" aria-hidden="true">#</a> \u3010\u8F93\u5165\u6837\u4F8B\u3011</h3><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token number">100</span> <span class="token number">3.2</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h3 id="\u3010\u8F93\u51FA\u6837\u4F8B\u3011" tabindex="-1"><a class="header-anchor" href="#\u3010\u8F93\u51FA\u6837\u4F8B\u3011" aria-hidden="true">#</a> \u3010\u8F93\u51FA\u6837\u4F8B\u3011</h3><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token number">256.0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u4EE3\u7801" aria-hidden="true">#</a> \u4EE3\u7801</h2><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>s <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
p <span class="token operator">=</span> <span class="token builtin">float</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> s <span class="token operator">&lt;</span> <span class="token number">6</span><span class="token punctuation">:</span>
    j <span class="token operator">=</span> <span class="token number">1.0</span>
<span class="token keyword">elif</span> s <span class="token operator">&lt;=</span> <span class="token number">10</span><span class="token punctuation">:</span>
    j <span class="token operator">=</span> <span class="token number">0.9</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    j <span class="token operator">=</span> <span class="token number">0.8</span>
<span class="token comment"># \u6570\u91CF*\u5355\u4EF7*\u6253\u6298\u6570</span>
t <span class="token operator">=</span> s <span class="token operator">*</span> p <span class="token operator">*</span> j
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;%.1f&quot;</span> <span class="token operator">%</span>t<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6B22\u8FCE\u5173\u6CE8\u6211\u516C\u4F17\u53F7\uFF1AAI\u60A6\u521B\uFF0C\u6709\u66F4\u591A\u66F4\u597D\u73A9\u7684\u7B49\u4F60\u53D1\u73B0\uFF01</p><details class="custom-container details"><summary>\u516C\u4F17\u53F7\uFF1AAI\u60A6\u521B\u3010\u4E8C\u7EF4\u7801\u3011</summary><p><img src="`+e+'" alt="" loading="lazy"></p></details>',15),h={class:"custom-container info"},m=n("p",{class:"custom-container-title"},"AI\u60A6\u521B\xB7\u7F16\u7A0B\u4E00\u5BF9\u4E00",-1),k=n("p",null,"AI\u60A6\u521B\xB7\u63A8\u51FA\u8F85\u5BFC\u73ED\u5566\uFF0C\u5305\u62EC\u300CPython \u8BED\u8A00\u8F85\u5BFC\u73ED\u3001C++ \u8F85\u5BFC\u73ED\u3001java \u8F85\u5BFC\u73ED\u3001\u7B97\u6CD5/\u6570\u636E\u7ED3\u6784\u8F85\u5BFC\u73ED\u3001\u5C11\u513F\u7F16\u7A0B\u3001pygame \u6E38\u620F\u5F00\u53D1\uFF0C\u534E\u4E3A Python \u673A\u8BD5\u300D\uFF0C\u5168\u90E8\u90FD\u662F\u4E00\u5BF9\u4E00\u6559\u5B66\uFF1A\u4E00\u5BF9\u4E00\u8F85\u5BFC + \u4E00\u5BF9\u4E00\u7B54\u7591 + \u5E03\u7F6E\u4F5C\u4E1A + \u9879\u76EE\u5B9E\u8DF5\u7B49\u3002\u5F53\u7136\uFF0C\u8FD8\u6709\u7EBF\u4E0B\u7EBF\u4E0A\u6444\u5F71\u8BFE\u7A0B\u3001Photoshop\u3001Premiere \u4E00\u5BF9\u4E00\u6559\u5B66\u3001QQ\u3001\u5FAE\u4FE1\u5728\u7EBF\uFF0C\u968F\u65F6\u54CD\u5E94\uFF01\u5FAE\u4FE1\uFF1AJiabcdefh",-1),v=n("p",null,"C++ \u4FE1\u606F\u5965\u8D5B\u9898\u89E3\uFF0C\u957F\u671F\u66F4\u65B0\uFF01\u957F\u671F\u62DB\u6536\u4E00\u5BF9\u4E00\u4E2D\u5C0F\u5B66\u4FE1\u606F\u5965\u8D5B\u96C6\u8BAD\uFF0C\u8386\u7530\u3001\u53A6\u95E8\u5730\u533A\u6709\u673A\u4F1A\u7EBF\u4E0B\u4E0A\u95E8\uFF0C\u5176\u4ED6\u5730\u533A\u7EBF\u4E0A\u3002\u5FAE\u4FE1\uFF1AJiabcdefh",-1),b=s("\u65B9\u6CD5\u4E00\uFF1A"),_={href:"http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes",target:"_blank",rel:"noopener noreferrer"},f=s("QQ"),y=n("p",null,"\u65B9\u6CD5\u4E8C\uFF1A\u5FAE\u4FE1\uFF1AJiabcdefh",-1),g=n("p",null,[n("img",{src:t,alt:"",loading:"lazy"})],-1);function x(q,I){const a=r("ExternalLinkIcon");return p(),i("div",null,[u,n("div",h,[m,k,v,n("p",null,[b,n("a",_,[f,c(a)])]),y]),g])}const P=o(d,[["render",x],["__file","ybt_py03.html.vue"]]);export{P as default};
