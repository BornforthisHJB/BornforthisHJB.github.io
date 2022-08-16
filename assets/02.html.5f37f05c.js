import{_ as t}from"./gzh.d6f5697d.js";import{_ as e}from"./zsxq.200e4a27.js";import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";import{o,c,a as n,b as i,e as l,d as s,r}from"./app.83c0739e.js";const u={},d=l(`<blockquote><p>pyecharts.org \u4E0D\u505A\u7248\u672C\u7BA1\u7406\uFF0C\u60A8\u6240\u770B\u5230\u7684\u5F53\u524D\u6587\u6863\u4E3A\u6700\u65B0\u7248\u6587\u6863\uFF0C\u82E5\u6587\u6863\u4E0E\u60A8\u4F7F\u7528\u7684\u7248\u672C\u51FA\u73B0\u4E0D\u4E00\u81F4\u60C5\u51B5\uFF0C\u8BF7\u53CA\u65F6\u66F4\u65B0 pyecharts\u3002</p></blockquote><p>\u5982\u4F55\u67E5\u770B\u4F7F\u7528\u7684 pyecharts \u7248\u672C\uFF1F</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> pyecharts

<span class="token keyword">print</span><span class="token punctuation">(</span>pyecharts<span class="token punctuation">.</span>__version__<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u5982\u4F55\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#\u5982\u4F55\u5B89\u88C5" aria-hidden="true">#</a> <a href="">\u5982\u4F55\u5B89\u88C5</a></h2><p><strong>pip \u5B89\u88C5</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ pip<span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span> <span class="token function">install</span> pyecharts
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\u6E90\u7801\u5B89\u88C5</strong></p><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>$ <span class="token function">git</span> clone https://github.com/pyecharts/pyecharts.git
$ <span class="token builtin class-name">cd</span> pyecharts
$ pip <span class="token function">install</span> -r requirements.txt
$ python setup.py <span class="token function">install</span>
<span class="token comment"># \u6216\u8005\u6267\u884C python install.py</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_5-\u5206\u949F\u4E0A\u624B" tabindex="-1"><a class="header-anchor" href="#_5-\u5206\u949F\u4E0A\u624B" aria-hidden="true">#</a> <a href="">5 \u5206\u949F\u4E0A\u624B</a></h2><blockquote><p>\u9996\u5148\u5F00\u59CB\u6765\u7ED8\u5236\u4F60\u7684\u7B2C\u4E00\u4E2A\u56FE\u8868</p></blockquote><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">from</span> pyecharts<span class="token punctuation">.</span>charts <span class="token keyword">import</span> Bar

bar <span class="token operator">=</span> Bar<span class="token punctuation">(</span><span class="token punctuation">)</span>
bar<span class="token punctuation">.</span>add_xaxis<span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&quot;\u886C\u886B&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\u7F8A\u6BDB\u886B&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\u96EA\u7EBA\u886B&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\u88E4\u5B50&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\u9AD8\u8DDF\u978B&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;\u889C\u5B50&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
bar<span class="token punctuation">.</span>add_yaxis<span class="token punctuation">(</span><span class="token string">&quot;\u5546\u5BB6A&quot;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token number">5</span><span class="token punctuation">,</span> <span class="token number">20</span><span class="token punctuation">,</span> <span class="token number">36</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">,</span> <span class="token number">75</span><span class="token punctuation">,</span> <span class="token number">90</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token comment"># render \u4F1A\u751F\u6210\u672C\u5730 HTML \u6587\u4EF6\uFF0C\u9ED8\u8BA4\u4F1A\u5728\u5F53\u524D\u76EE\u5F55\u751F\u6210 render.html \u6587\u4EF6</span>
<span class="token comment"># \u4E5F\u53EF\u4EE5\u4F20\u5165\u8DEF\u5F84\u53C2\u6570\uFF0C\u5982 bar.render(&quot;mycharts.html&quot;)</span>
bar<span class="token punctuation">.</span>render<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6B22\u8FCE\u5173\u6CE8\u6211\u516C\u4F17\u53F7\uFF1AAI\u60A6\u521B\uFF0C\u6709\u66F4\u591A\u66F4\u597D\u73A9\u7684\u7B49\u4F60\u53D1\u73B0\uFF01</p><details class="custom-container details"><summary>\u516C\u4F17\u53F7\uFF1AAI\u60A6\u521B\u3010\u4E8C\u7EF4\u7801\u3011</summary><p><img src="`+t+'" alt=""></p></details>',13),m={class:"custom-container info"},k=n("p",{class:"custom-container-title"},"AI\u60A6\u521B\xB7\u7F16\u7A0B\u4E00\u5BF9\u4E00",-1),h=n("p",null,"AI\u60A6\u521B\xB7\u63A8\u51FA\u8F85\u5BFC\u73ED\u5566\uFF0C\u5305\u62EC\u300CPython \u8BED\u8A00\u8F85\u5BFC\u73ED\u3001C++ \u8F85\u5BFC\u73ED\u3001java \u8F85\u5BFC\u73ED\u3001\u7B97\u6CD5/\u6570\u636E\u7ED3\u6784\u8F85\u5BFC\u73ED\u3001\u5C11\u513F\u7F16\u7A0B\u3001pygame \u6E38\u620F\u5F00\u53D1\u300D\uFF0C\u5168\u90E8\u90FD\u662F\u4E00\u5BF9\u4E00\u6559\u5B66\uFF1A\u4E00\u5BF9\u4E00\u8F85\u5BFC + \u4E00\u5BF9\u4E00\u7B54\u7591 + \u5E03\u7F6E\u4F5C\u4E1A + \u9879\u76EE\u5B9E\u8DF5\u7B49\u3002\u5F53\u7136\uFF0C\u8FD8\u6709\u7EBF\u4E0B\u7EBF\u4E0A\u6444\u5F71\u8BFE\u7A0B\u3001Photoshop\u3001Premiere \u4E00\u5BF9\u4E00\u6559\u5B66\u3001QQ\u3001\u5FAE\u4FE1\u5728\u7EBF\uFF0C\u968F\u65F6\u54CD\u5E94\uFF01\u5FAE\u4FE1\uFF1AJiabcdefh",-1),v=n("p",null,"C++ \u4FE1\u606F\u5965\u8D5B\u9898\u89E3\uFF0C\u957F\u671F\u66F4\u65B0\uFF01\u957F\u671F\u62DB\u6536\u4E00\u5BF9\u4E00\u4E2D\u5C0F\u5B66\u4FE1\u606F\u5965\u8D5B\u96C6\u8BAD\uFF0C\u8386\u7530\u3001\u53A6\u95E8\u5730\u533A\u6709\u673A\u4F1A\u7EBF\u4E0B\u4E0A\u95E8\uFF0C\u5176\u4ED6\u5730\u533A\u7EBF\u4E0A\u3002\u5FAE\u4FE1\uFF1AJiabcdefh",-1),b=s("\u65B9\u6CD5\u4E00\uFF1A"),_={href:"http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes",target:"_blank",rel:"noopener noreferrer"},g=s("QQ"),y=n("p",null,"\u65B9\u6CD5\u4E8C\uFF1A\u5FAE\u4FE1\uFF1AJiabcdefh",-1),f=n("p",null,[n("img",{src:e,alt:""})],-1);function q(x,I){const a=r("ExternalLinkIcon");return o(),c("div",null,[d,n("div",m,[k,h,v,n("p",null,[b,n("a",_,[g,i(a)])]),y]),f])}var N=p(u,[["render",q],["__file","02.html.vue"]]);export{N as default};
