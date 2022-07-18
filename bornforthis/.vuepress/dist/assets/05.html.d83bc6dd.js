import{_ as e}from"./gzh.d6f5697d.js";import{_ as p}from"./zsxq.200e4a27.js";import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";import{r as c,o as i,c as l,a as n,b as t,d as s,e as u}from"./app.92410fa3.js";const r={},d=n("p",null,[n("strong",null,"\u7EDF\u8BA1\u4E66\u672C\u7684\u5E73\u5747\u8BC4\u5206")],-1),k=n("ol",null,[n("li",null,"\u8BFB\u53D6\u6587\u4EF6 rating.txt \u4E2D\u7684\u7684\u6570\u636E\u5E76\u5206\u6790")],-1),m=n("ul",null,[n("li",null,"\u5171\u6709 10000 \u672C\u4E66\uFF0C\u4EE5\u6570\u5B57 id \u8868\u793A"),n("li",null,"\u6BCF\u4E2A\u7528\u6237\u7684\u6253\u5206\u4E3A1~5"),n("li",null,"\u6BCF\u4E00\u884C\u6570\u636E\u6709 3 \u4E2A\u6570\u5B57\uFF1A\u5206\u522B\u8868\u793A\u7528\u6237 ID\uFF0C\u4E66\u672C ID\uFF0C\u8BE5\u7528\u6237\u5BF9\u8BE5\u4E66\u7684\u6253\u5206")],-1),_=n("strong",null,"\u8981\u6C42\u8F93\u51FA\uFF1A \u6240\u6709\u4E66\u672C\u5404\u81EA\u7684\u5E73\u5747\u5F97\u5206",-1),v=s(" \u6570\u636E\u96C6\u94FE\u63A5\uFF1A"),b={href:"https://www.bornforthis.cn/data-analysis-data-set",target:"_blank",rel:"noopener noreferrer"},g=s("https://www.bornforthis.cn/data-analysis-data-set"),h=s(" \u8BF7\u5C06\u4F60\u7684\u4EE3\u7801\uFF0C\u5728\u4E0B\u65B9\u7559\u8A00\u3002 \u9898\u76EE\u89E3\u6790\u5DF2\u7ECF\u7B54\u6848\uFF0C\u8BF7\u81EA\u884C\u8D2D\u4E70\uFF1A "),y={href:"https://www.yuque.com/aiyuechuang/fisb2l/fus7c5",target:"_blank",rel:"noopener noreferrer"},f=s("https://www.yuque.com/aiyuechuang/fisb2l/fus7c5"),w=s(),x=n("strong",null,"\u4F5C\u4E1A\u89E3\u6790",-1),I=s(" \u6587\u4EF6\u8F83\u5927\uFF0C\u6CA1\u5FC5\u8981\u5728\u6D4B\u8BD5\u7684\u65F6\u5019\u6BCF\u6B21\u8BFB\u53D6\u5168\u90E8\u6570\u636E\uFF0C\u6211\u4EEC\u53EF\u4EE5\u521B\u5EFA\u4E2A\u6570\u636E\u526F\u672C\uFF0C\u6570\u636E\u5C11\u4E00\u4E9B\u3002"),q=u(`<ol><li>\u8BFB\u53D6\u6570\u636E\u5E76\u8F6C\u6362\u4E3A\u6574\u6570</li></ol><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np

data <span class="token operator">=</span> np<span class="token punctuation">.</span>genfromtxt<span class="token punctuation">(</span><span class="token string">&#39;rating.txt&#39;</span><span class="token punctuation">,</span> delimiter<span class="token operator">=</span><span class="token string">&#39;,&#39;</span><span class="token punctuation">)</span>
data <span class="token operator">=</span> data<span class="token punctuation">.</span>astype<span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>\u521B\u5EFA\u4E24\u4E2A\u6570\u7EC4\u5206\u522B\u5B58\u653E\u5404\u4E2A\u4E66\u7C4D\u7684\u603B\u8BC4\u5206\u548C\u603B\u8BC4\u5206\u4EBA\u6570</li></ol><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>rating_sum <span class="token operator">=</span> np<span class="token punctuation">.</span>zeros<span class="token punctuation">(</span><span class="token number">10000</span><span class="token punctuation">)</span>
rating_people_count <span class="token operator">=</span> np<span class="token punctuation">.</span>zeros<span class="token punctuation">(</span><span class="token number">10000</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>For \u5FAA\u73AF\u8BFB\u53D6\u6BCF\u884C\u7684\u6570\u636E</li></ol><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">for</span> rating <span class="token keyword">in</span> data<span class="token punctuation">:</span>
    book_id <span class="token operator">=</span> rating<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">-</span> <span class="token number">1</span>
    rating_sum<span class="token punctuation">[</span>book_id<span class="token punctuation">]</span> <span class="token operator">+=</span> rating<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>
    rating_people_count<span class="token punctuation">[</span>book_id<span class="token punctuation">]</span> <span class="token operator">+=</span> <span class="token number">1</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7B2C\u4E00\u5217\u662F\u7528\u6237\u7684 ID \u5176\u5B9E\u5BF9\u4E8E\u6211\u4EEC\u8FD9\u9053\u9898\u76EE\u6765\u8BF4\u6CA1\u4EC0\u4E48\u7528\uFF0C\u6240\u4EE5\u6211\u4EEC\u4E0D\u9700\u8981\u53BB\u7BA1\u5B83\u3002 \u8FD9\u91CC\u6211 <code>rating[1] - 1</code> \u662F\u4E3A\u4EC0\u4E48\u51CF\u53BB 1 \u5462\uFF1F \u540C\u5B66\u4EEC\u5E94\u8BE5\u662F\u77E5\u9053\u7684\uFF0C\u7F16\u7A0B\u4E2D\u548C\u6570\u7EC4\u7684\u7D22\u5F15\u90FD\u662F\u4ECE 0 \u5F00\u59CB\u7684\uFF0C\u6240\u4EE5 \u51CF 1 \u5C31\u662F\u4E3A\u4E86\u53EF\u4EE5\u76F4\u63A5\u4F7F\u7528\u4E66\u672C\u7684 ID \u8FDB\u884C\u7D22\u5F15\u3002</p><ol start="4"><li>\u5B8C\u6574\u4EE3\u7801</li></ol><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np

data <span class="token operator">=</span> np<span class="token punctuation">.</span>genfromtxt<span class="token punctuation">(</span><span class="token string">&#39;rating.txt&#39;</span><span class="token punctuation">,</span> delimiter<span class="token operator">=</span><span class="token string">&#39;,&#39;</span><span class="token punctuation">)</span>
data <span class="token operator">=</span> data<span class="token punctuation">.</span>astype<span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">)</span>
<span class="token comment"># print(data)</span>

rating_sum <span class="token operator">=</span> np<span class="token punctuation">.</span>zeros<span class="token punctuation">(</span><span class="token number">10000</span><span class="token punctuation">)</span>
rating_people_count <span class="token operator">=</span> np<span class="token punctuation">.</span>zeros<span class="token punctuation">(</span><span class="token number">10000</span><span class="token punctuation">)</span>

<span class="token keyword">for</span> rating <span class="token keyword">in</span> data<span class="token punctuation">:</span>
    book_id <span class="token operator">=</span> rating<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">-</span> <span class="token number">1</span>
    rating_sum<span class="token punctuation">[</span>book_id<span class="token punctuation">]</span> <span class="token operator">+=</span> rating<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>
    rating_people_count<span class="token punctuation">[</span>book_id<span class="token punctuation">]</span> <span class="token operator">+=</span> <span class="token number">1</span>

<span class="token comment"># \u8BA1\u7B97\u65B9\u6CD5\u4E00\uFF1A</span>
result <span class="token operator">=</span> rating_sum <span class="token operator">/</span> rating_people_count
<span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
<span class="token comment"># \u8BA1\u7B97\u65B9\u6CD5\u4E8C\uFF1A</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>np<span class="token punctuation">.</span>true_divide<span class="token punctuation">(</span>rating_sum<span class="token punctuation">,</span> rating_people_count<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># \u8F93\u51FA</span>
<span class="token punctuation">[</span><span class="token number">4.27970709</span> <span class="token number">4.35135011</span> <span class="token number">3.21434056</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token number">4.32352941</span> <span class="token number">3.70769231</span> <span class="token number">4.00900901</span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token number">4.27970709</span> <span class="token number">4.35135011</span> <span class="token number">3.21434056</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token number">4.32352941</span> <span class="token number">3.70769231</span> <span class="token number">4.00900901</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6B22\u8FCE\u5173\u6CE8\u6211\u516C\u4F17\u53F7\uFF1AAI\u60A6\u521B\uFF0C\u6709\u66F4\u591A\u66F4\u597D\u73A9\u7684\u7B49\u4F60\u53D1\u73B0\uFF01</p><details class="custom-container details"><summary>\u516C\u4F17\u53F7\uFF1AAI\u60A6\u521B\u3010\u4E8C\u7EF4\u7801\u3011</summary><p><img src="`+e+'" alt=""></p></details>',11),z={class:"custom-container info"},A=n("p",{class:"custom-container-title"},"AI\u60A6\u521B\xB7\u7F16\u7A0B\u4E00\u5BF9\u4E00",-1),D=n("p",null,"AI\u60A6\u521B\xB7\u63A8\u51FA\u8F85\u5BFC\u73ED\u5566\uFF0C\u5305\u62EC\u300CPython \u8BED\u8A00\u8F85\u5BFC\u73ED\u3001C++ \u8F85\u5BFC\u73ED\u3001java \u8F85\u5BFC\u73ED\u3001\u7B97\u6CD5/\u6570\u636E\u7ED3\u6784\u8F85\u5BFC\u73ED\u3001\u5C11\u513F\u7F16\u7A0B\u3001pygame \u6E38\u620F\u5F00\u53D1\u300D\uFF0C\u5168\u90E8\u90FD\u662F\u4E00\u5BF9\u4E00\u6559\u5B66\uFF1A\u4E00\u5BF9\u4E00\u8F85\u5BFC + \u4E00\u5BF9\u4E00\u7B54\u7591 + \u5E03\u7F6E\u4F5C\u4E1A + \u9879\u76EE\u5B9E\u8DF5\u7B49\u3002\u5F53\u7136\uFF0C\u8FD8\u6709\u7EBF\u4E0B\u7EBF\u4E0A\u6444\u5F71\u8BFE\u7A0B\u3001Photoshop\u3001Premiere \u4E00\u5BF9\u4E00\u6559\u5B66\u3001QQ\u3001\u5FAE\u4FE1\u5728\u7EBF\uFF0C\u968F\u65F6\u54CD\u5E94\uFF01\u5FAE\u4FE1\uFF1AJiabcdefh",-1),N=n("p",null,"C++ \u4FE1\u606F\u5965\u8D5B\u9898\u89E3\uFF0C\u957F\u671F\u66F4\u65B0\uFF01\u957F\u671F\u62DB\u6536\u4E00\u5BF9\u4E00\u4E2D\u5C0F\u5B66\u4FE1\u606F\u5965\u8D5B\u96C6\u8BAD\uFF0C\u8386\u7530\u3001\u53A6\u95E8\u5730\u533A\u6709\u673A\u4F1A\u7EBF\u4E0B\u4E0A\u95E8\uFF0C\u5176\u4ED6\u5730\u533A\u7EBF\u4E0A\u3002\u5FAE\u4FE1\uFF1AJiabcdefh",-1),Q=s("\u65B9\u6CD5\u4E00\uFF1A"),V={href:"http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes",target:"_blank",rel:"noopener noreferrer"},B=s("QQ"),C=n("p",null,"\u65B9\u6CD5\u4E8C\uFF1A\u5FAE\u4FE1\uFF1AJiabcdefh",-1),E=n("p",null,[n("img",{src:p,alt:""})],-1);function J(P,L){const a=c("ExternalLinkIcon");return i(),l("div",null,[d,k,m,n("p",null,[_,v,n("a",b,[g,t(a)]),h,n("a",y,[f,t(a)]),w,x,I]),q,n("div",z,[A,D,N,n("p",null,[Q,n("a",V,[B,t(a)])]),C]),E])}var G=o(r,[["render",J],["__file","05.html.vue"]]);export{G as default};
