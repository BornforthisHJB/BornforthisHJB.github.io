import{_ as a}from"./gzh.aa7caba6.js";import{_ as t}from"./zsxq.96f46dfd.js";import{_ as o}from"./plugin-vue_export-helper.21dcd24c.js";import{r as p,o as r,c as i,a as e,b as c,F as l,e as d,d as n}from"./app.e4599610.js";const u={},h=d(`<h2 id="\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528" aria-hidden="true">#</a> \u4F7F\u7528</h2><p>\u5E73\u65F6\u5BFC\u51FA\u4F9D\u8D56\u4E00\u822C\u90FD\u662F\uFF1A</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>pip freeze <span class="token operator">&gt;</span>  requirements<span class="token punctuation">.</span>txt
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u8FD9\u79CD\u65B9\u5F0F\u5BFC\u51FA\u7684\u662F\u5F53\u524D Python \u73AF\u5883\u4E2D\u6240\u6709\u7684\u5305\uFF0C\u6709\u4E9B\u5E93\u4E0D\u662F\u5FC5\u9700\u7684\u4E5F\u8DDF\u7740\u5BFC\u51FA\u6765\uFF0C\u5B89\u88C5\u7684\u65F6\u5019\u4E5F\u8FC7\u4E8E\u9EBB\u70E6\u3002</p><p>\u8FD9\u79CD\u65F6\u5019\u5C31\u8981\u4F7F\u7528 <code>pipreqs</code> \uFF0C\u5B83\u53EA\u4F1A\u5BFC\u51FA\u5F53\u524D\u9879\u76EE\u8FD0\u884C\u6240\u4F9D\u8D56\u7684\u5305\u3002</p><p>\u4E0B\u8F7D\u547D\u4EE4\uFF1A</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>pip install pipreqs
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u4F7F\u7528\u547D\u4EE4\u5982\u4E0B\uFF0C\u8FDB\u5165\u9879\u76EE\u7684\u6839\u76EE\u5F55\u540E\u8F93\u5165\u5982\u4E0B\u547D\u4EE4\uFF1A</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>pipreqs <span class="token punctuation">.</span><span class="token operator">/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u7136\u540E\u4F1A\u5728\u5F53\u524D\u76EE\u5F55\u4E0B\u751F\u6210 <strong>requirements.txt</strong> \u6587\u4EF6\u3002</p><h2 id="\u95EE\u9898" tabindex="-1"><a class="header-anchor" href="#\u95EE\u9898" aria-hidden="true">#</a> \u95EE\u9898</h2><div class="custom-container warning"><p class="custom-container-title">\u6CE8\u610F</p><p>UnicodeDecodeError: &#39;gbk&#39; codec can&#39;t decode byte 0x80 in position 175: illegal multibyte sequence</p></div><h2 id="\u89E3\u51B3\u65B9\u6CD5-\u6307\u5B9A\u7F16\u7801\u683C\u5F0F" tabindex="-1"><a class="header-anchor" href="#\u89E3\u51B3\u65B9\u6CD5-\u6307\u5B9A\u7F16\u7801\u683C\u5F0F" aria-hidden="true">#</a> \u89E3\u51B3\u65B9\u6CD5\uFF1A\u6307\u5B9A\u7F16\u7801\u683C\u5F0F</h2><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>pipreqs <span class="token punctuation">.</span><span class="token operator">/</span> <span class="token operator">-</span><span class="token operator">-</span>encoding<span class="token operator">=</span>utf8
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u4E4B\u540E\u4FBF\u4F1A\u751F\u6210 <code>requirements.txt</code> \u6587\u4EF6\uFF0C\u5305\u542B\u4E86\u6B64\u8DEF\u5F84\u4E0B\u9879\u76EE\u4E2D\u7684\u4F9D\u8D56\u9879\u3002</p><h2 id="\u5BFC\u5165" tabindex="-1"><a class="header-anchor" href="#\u5BFC\u5165" aria-hidden="true">#</a> \u5BFC\u5165</h2><p>\u5BFC\u5165\u4F9D\u8D56\u5305\uFF1A</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>pip install <span class="token operator">-</span>r <span class="token punctuation">.</span><span class="token operator">/</span>requirements<span class="token punctuation">.</span>txt
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>\u5373\u53EF\u5B89\u88C5\u6240\u6709\u4F9D\u8D56\uFF0C\u53E6\u5916\u8FD8\u53EF\u4EE5\u4F7F\u7528\u5176\u4ED6\u6E90\u6765\u52A0\u901F\u4E0B\u8F7D\uFF0C\u5982\u6E05\u534E\u6E90\uFF1A</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>pip install <span class="token operator">-</span>r <span class="token punctuation">.</span><span class="token operator">/</span>requriements<span class="token punctuation">.</span>txt <span class="token operator">-</span>i https<span class="token punctuation">:</span><span class="token operator">//</span>pypi<span class="token punctuation">.</span>tuna<span class="token punctuation">.</span>tsinghua<span class="token punctuation">.</span>edu<span class="token punctuation">.</span>cn<span class="token operator">/</span>simple
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br></div></div><div class="custom-container info"><p class="custom-container-title">\u7EC6\u8282</p><p>\u6709\u4E9B\u5C0F\u7EC6\u8282\u4E5F\u662F\u503C\u5F97\u4E00\u63D0\u7684\uFF0C\u90A3\u5C31\u662F <code>pip freeze &gt; requirements.txt</code> \u6307\u4EE4\u5FC5\u987B\u7528\u5728\u6574\u4E2A\u5DE5\u7A0B\u9879\u76EE\u5B8C\u5168\u8DD1\u901A\u4E86\uFF08\u4E5F\u5C31\u662F\u9879\u76EE\u4F9D\u8D56\u5DF2\u7ECF\u5168\u90E8\u5B89\u88C5\u5B8C\u6210\uFF09\u7684\u60C5\u51B5\u4E0B\uFF0C\u624D\u80FD\u5C06\u6240\u6709\u7684\u6709\u5173\u4F9D\u8D56\u5E93\u5199\u5165 <code>requirements.txt</code> \u6587\u4EF6\u4E2D\u53BB\uFF0C\u800C <code>pip install -r requirements.txt</code> \u6307\u4EE4\u5219\u4F7F\u7528\u4E8E\u670D\u52A1\u5668\u90E8\u7F72\u65F6\u8F83\u4E3A\u5408\u9002\u3002</p></div><h2 id="\u8865\u5145-python-\u9879\u76EE\u73AF\u5883\u8FC1\u79FB" tabindex="-1"><a class="header-anchor" href="#\u8865\u5145-python-\u9879\u76EE\u73AF\u5883\u8FC1\u79FB" aria-hidden="true">#</a> \u8865\u5145\uFF1APython \u9879\u76EE\u73AF\u5883\u8FC1\u79FB</h2><p>\u5C06 Python \u9879\u76EE\u8FC1\u79FB\u5230\u65B0\u7535\u8111\u65F6\uFF0C\u4E0D\u53EF\u4EE5\u76F4\u63A5\u590D\u5236\u865A\u62DF\u73AF\u5883\uFF0C\u56E0\u4E3A\u5728\u5EFA\u7ACB\u865A\u62DF\u73AF\u5883\u65F6\uFF0C\u865A\u62DF\u73AF\u5883\u4E2D\u7684 <code>python.exe</code> , <code>pip.exe</code> ......\u7B49\u4E00\u4E9B\u6587\u4EF6\u4F1A\u201C<strong>\u786C\u7F16\u7801</strong>\u201D\uFF0C\u8BB0\u5F55\u7684\u662F\u7EDD\u5BF9\u8DEF\u5F84\uFF0C\u653E\u5230\u5176\u4ED6\u7535\u8111\u540E\uFF0C\u56E0\u4E3A\u8DEF\u5F84\u4E0D\u540C\u4F1A\u51FA\u9519\uFF01</p><p>\u6B63\u786E\u7684\u505A\u6CD5\u662F\u5728\u65B0\u7535\u8111\u4E2D\u521B\u5EFA\u65B0\u7684\u865A\u62DF\u73AF\u5883\uFF1A<code>python -m venv MyApp</code> \uFF0C\u63A5\u4E0B\u6765\uFF08\u65B9\u6CD5\u53EF\u4F9B\u9009\u62E9\uFF09\uFF1A</p><ol><li><p>\u590D\u5236\u4E4B\u524D\u7684 lib \u6587\u4EF6\u4E2D\u7684 packes \u76F4\u63A5\u5230\u65B0\u7535\u8111\u7684 lib \u6587\u4EF6\u4E2D</p></li><li><p><code>pip freeze &gt; requirements.txt</code> \u5C06\u5305\u76EE\u5F55\u5B58\u5728 txt \u4E2D\uFF0C\u590D\u5236 txt \u5230\u65B0\u73AF\u5883\uFF0Ccmd \u5230\u65B0\u73AF\u5883\uFF0C\u6267\u884C <code>pip install -r requirements.txt</code>\u3002</p></li></ol><p>\u6B22\u8FCE\u5173\u6CE8\u6211\u516C\u4F17\u53F7\uFF1AAI\u60A6\u521B\uFF0C\u6709\u66F4\u591A\u66F4\u597D\u73A9\u7684\u7B49\u4F60\u53D1\u73B0\uFF01</p><details class="custom-block details"><summary>\u516C\u4F17\u53F7\uFF1AAI\u60A6\u521B\u3010\u4E8C\u7EF4\u7801\u3011</summary><p><img src="`+a+'" alt="" loading="lazy"></p></details>',27),m={class:"custom-container info"},g=e("p",{class:"custom-container-title"},"AI\u60A6\u521B\xB7\u7F16\u7A0B\u4E00\u5BF9\u4E00",-1),_=e("p",null,"AI\u60A6\u521B\xB7\u63A8\u51FA\u8F85\u5BFC\u73ED\u5566\uFF0C\u5305\u62EC\u300CPython \u8BED\u8A00\u8F85\u5BFC\u73ED\u3001C++ \u8F85\u5BFC\u73ED\u3001java \u8F85\u5BFC\u73ED\u3001\u7B97\u6CD5/\u6570\u636E\u7ED3\u6784\u8F85\u5BFC\u73ED\u3001\u5C11\u513F\u7F16\u7A0B\u3001pygame \u6E38\u620F\u5F00\u53D1\u300D\uFF0C\u5168\u90E8\u90FD\u662F\u4E00\u5BF9\u4E00\u6559\u5B66\uFF1A\u4E00\u5BF9\u4E00\u8F85\u5BFC + \u4E00\u5BF9\u4E00\u7B54\u7591 + \u5E03\u7F6E\u4F5C\u4E1A + \u9879\u76EE\u5B9E\u8DF5\u7B49\u3002\u5F53\u7136\uFF0C\u8FD8\u6709\u7EBF\u4E0B\u7EBF\u4E0A\u6444\u5F71\u8BFE\u7A0B\u3001Photoshop\u3001Premiere \u4E00\u5BF9\u4E00\u6559\u5B66\u3001QQ\u3001\u5FAE\u4FE1\u5728\u7EBF\uFF0C\u968F\u65F6\u54CD\u5E94\uFF01\u5FAE\u4FE1\uFF1AJiabcdefh",-1),b=e("p",null,"C++ \u4FE1\u606F\u5965\u8D5B\u9898\u89E3\uFF0C\u957F\u671F\u66F4\u65B0\uFF01\u957F\u671F\u62DB\u6536\u4E00\u5BF9\u4E00\u4E2D\u5C0F\u5B66\u4FE1\u606F\u5965\u8D5B\u96C6\u8BAD\uFF0C\u8386\u7530\u3001\u53A6\u95E8\u5730\u533A\u6709\u673A\u4F1A\u7EBF\u4E0B\u4E0A\u95E8\uFF0C\u5176\u4ED6\u5730\u533A\u7EBF\u4E0A\u3002\u5FAE\u4FE1\uFF1AJiabcdefh",-1),v=n("\u65B9\u6CD5\u4E00\uFF1A"),y={href:"http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes",target:"_blank",rel:"noopener noreferrer"},k=n("QQ"),x=e("p",null,"\u65B9\u6CD5\u4E8C\uFF1A\u5FAE\u4FE1\uFF1AJiabcdefh",-1),f=e("p",null,[e("img",{src:t,alt:"",loading:"lazy"})],-1);function q(I,P){const s=p("ExternalLinkIcon");return r(),i(l,null,[h,e("div",m,[g,_,b,e("p",null,[v,e("a",y,[k,c(s)])]),x]),f],64)}var Q=o(u,[["render",q],["__file","requirements.html.vue"]]);export{Q as default};
