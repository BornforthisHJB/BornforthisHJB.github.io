import{_ as e}from"./gzh.aa7caba6.js";import{_ as t}from"./zsxq.96f46dfd.js";import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";import{r as o,o as c,c as i,a as n,b as l,e as u,d as s}from"./app.869604e4.js";const r={},d=u(`<p>\u4F60\u597D\uFF0C\u6211\u662F\u60A6\u521B\u3002</p><h2 id="\u5199\u5165-excel-\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u5199\u5165-excel-\u6587\u4EF6" aria-hidden="true">#</a> \u5199\u5165 Excel \u6587\u4EF6</h2><p>\u672C\u8282\u8BFE\uFF0C\u6211\u4EEC\u6765\u719F\u6089\u4E0B Excel \u7684\u8BFB\u548C\u5199\u64CD\u4F5C\u3002</p><p>\u9996\u5148\u6765\u5B66\u4E60\u4E0B\uFF0C\u968F\u673A\u751F\u6210\u6570\u636E\uFF0C\u5199\u5165\u4E00\u4E2AExcel\u6587\u4EF6\u5E76\u4FDD\u5B58\uFF0C\u6240\u4F7F\u7528\u5230\u7684\u5E93\uFF0C\u662F xlwt\uFF0C\u5B89\u88C5\u547D\u4EE4 <code>pip install xlwt</code> \uFF0C\u5B89\u88C5\u7B80\u5355\u65B9\u4FBF\uFF0C\u65E0\u4F9D\u8D56\uFF0C\u5F88\u5FEB\u3002</p><div class="language-cmd ext-cmd line-numbers-mode"><pre class="language-cmd"><code>pip install xlwt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u65B0\u5EFA Python \u6587\u4EF6\uFF0C\u7B2C\u4E00\u4E2A\u4EE3\u7801\u5757\uFF0C\u5148\u5BFC\u5165 xlwt \u8FD9\u4E2A\u5E93\uFF0C\u5E76\u65B0\u5EFA\u4E00\u4E2A WorkBook \u5BF9\u8C61\u3002</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> xlwt

wb <span class="token operator">=</span> xlwt<span class="token punctuation">.</span>Workbook<span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token comment"># \u65B0\u5EFA\u4E00\u4E2A workbook \u5BF9\u8C61</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Excel \u7684\u6BCF\u4E2A\u6587\u4EF6\uFF0C\u91CC\u9762\u53EF\u4EE5\u6709\u5F88\u591A sheet\uFF0C\u6240\u4EE5\u6709\u4E86 workbook\uFF0C\u8FD8\u9700\u8981\u65B0\u5EFA sheet\uFF1A</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>sheet <span class="token operator">=</span> wb<span class="token punctuation">.</span>add_sheet<span class="token punctuation">(</span><span class="token string">&#39;\u7B2C\u4E00\u4E2Asheet&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6709\u4E86 sheet\uFF0C\u5C31\u53EF\u4EE5\u5F00\u59CB\u5199\u5165\u6570\u636E\u4E86\u3002sheet \u91CC\u9762\u662F\u4E00\u4E2A\u4E8C\u7EF4\u7684\u8868\u683C\uFF0C\u5E76\u4E14\u7D22\u5F15\u662F\u4ECE 0 \u5F00\u59CB\u7684\uFF0C\u6240\u4EE5\u7B2C\u4E00\u6B65\uFF0C\u5148\u5199\u5934\u90E8\u6570\u636E\u3002</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>head_data <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&#39;\u59D3\u540D&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u5730\u5740&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u624B\u673A\u53F7&#39;</span><span class="token punctuation">,</span> <span class="token string">&#39;\u57CE\u5E02&#39;</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> head <span class="token keyword">in</span> head_data<span class="token punctuation">:</span>
	sheet<span class="token punctuation">.</span>write<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> head_data<span class="token punctuation">.</span>index<span class="token punctuation">(</span>head<span class="token punctuation">)</span><span class="token punctuation">,</span> head<span class="token punctuation">)</span>
	<span class="token comment"># sheet.write(\u884C, \u5217, \u5199\u5165\u6570\u636E)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>write \u51FD\u6570\u5199\u5165\uFF0C\u5206\u522B\u662F <code>x \u884C, x \u5217, \u6570\u636E</code>\uFF0C\u5934\u90E8\u6570\u636E\u6C38\u8FDC\u662F\u7B2C\u4E00\u884C\uFF0C\u6240\u4EE5\u7B2C 0 \u884C\u3002\u6570\u636E\u7684\u5217\uFF0C\u5219\u662F\u5F53\u524D\u6570\u636E\u6240\u5728\u5217\u8868\u7684\u7D22\u5F15\uFF0C\u76F4\u63A5\u4F7F\u7528index \u51FD\u6570\u5373\u53EF\u3002</p><p>\u6709\u4E86\u5934\u90E8\u6570\u636E\uFF0C\u73B0\u5728\u5C31\u5F00\u59CB\u5199\u5165\u5185\u5BB9\u4E86\uFF0C\u5206\u522B\u662F\uFF1A\u968F\u673A\u59D3\u540D\u3001\u968F\u673A\u5730\u5740\u3001\u968F\u673A\u53F7\u7801\u3001\u968F\u673A\u57CE\u5E02\uFF0C\u6570\u636E\u7684\u6765\u6E90\u90FD\u662F faker \u5E93\uFF0C\u4E00\u4E2A\u4E13\u95E8\u521B\u5EFA\u865A\u5047\u6570\u636E\u7528\u6765\u6D4B\u8BD5\u7684\u5E93\uFF0C\u5B89\u88C5\u547D\u4EE4\uFF1A<code>pip install faker</code>\u3002</p><div class="language-cmd ext-cmd line-numbers-mode"><pre class="language-cmd"><code>pip install faker
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u56E0\u4E3A\u5934\u90E8\u4FE1\u606F\u5DF2\u7ECF\u5199\u597D\uFF0C\u6240\u4EE5\u63A5\u4E0B\u6765\u662F\u4ECE\u7B2C 1 \u884C\u5F00\u59CB\u5199\u6570\u636E\uFF0C\u6BCF\u884C\u56DB\u4E2A\u6570\u636E\uFF0C\u51C6\u5907\u5199 99 \u4E2A\u7528\u6237\u6570\u636E\uFF0C\u6240\u4EE5\u7528\u5FAA\u73AF\uFF0C\u5FAA\u73AF 99 \u6B21\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> faker

fake <span class="token operator">=</span> faker<span class="token punctuation">.</span>Faker<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
	sheet<span class="token punctuation">.</span>write<span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> fake<span class="token punctuation">.</span>first_name<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39; &#39;</span> <span class="token operator">+</span> fake<span class="token punctuation">.</span>last_name<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	sheet<span class="token punctuation">.</span>write<span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> fake<span class="token punctuation">.</span>address<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	sheet<span class="token punctuation">.</span>write<span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> fake<span class="token punctuation">.</span>phone_number<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	sheet<span class="token punctuation">.</span>write<span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> fake<span class="token punctuation">.</span>city<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6570\u636E\u5168\u90E8\u5199\u597D\u4E86\uFF0C\u4F46\u662F\u6B64\u65F6\u6570\u636E\u4FDD\u5B58\u5728 wb \u8FD9\u4E2A\u5BF9\u8C61\u4E2D\uFF0Cwb \u5C31\u662F\u6700\u5F00\u59CB\u7684 Workbook\u3002</p><p><strong>\u4F46\u662F wb \u4E2D\u7684\u6570\u636E\uFF0C\u4E0D\u662F\u6C38\u4E45\u7684\uFF1B\u4FDD\u5B58\u6210\u6587\u4EF6\uFF0C\u624D\u662F\u6C38\u4E45\u7684\u3002</strong></p><p>Workbook \u5BF9\u8C61\uFF0C\u63D0\u4F9B save \u51FD\u6570\uFF0C\u53EF\u4EE5\u76F4\u63A5\u4FDD\u5B58\u6210 xls \u6587\u4EF6\uFF0C\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>wb.save(&#39;\u865A\u5047\u7528\u6237\u6570\u636E.xls&#39;)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u7136\u540E\u627E\u5230\u6587\u4EF6\uFF0C\u6587\u4EF6\u7684\u4F4D\u7F6E\u5C31\u662F\u4F60 Python \u4EE3\u7801\u6587\u4EF6\u7684\u65C1\u8FB9\u3002\u4F7F\u7528 office \u6216\u8005 wps \u6253\u5F00\u8FD9\u4E2A xls \u6587\u4EF6\uFF0C\u5982\u4E0B\u622A\u56FE\uFF1A</p><p>\u6B22\u8FCE\u5173\u6CE8\u6211\u516C\u4F17\u53F7\uFF1AAI\u60A6\u521B\uFF0C\u6709\u66F4\u591A\u66F4\u597D\u73A9\u7684\u7B49\u4F60\u53D1\u73B0\uFF01</p><details class="custom-container details"><summary>\u516C\u4F17\u53F7\uFF1AAI\u60A6\u521B\u3010\u4E8C\u7EF4\u7801\u3011</summary><p><img src="`+e+'" alt=""></p></details>',23),k={class:"custom-container info"},m=n("p",{class:"custom-container-title"},"AI\u60A6\u521B\xB7\u7F16\u7A0B\u4E00\u5BF9\u4E00",-1),v=n("p",null,"AI\u60A6\u521B\xB7\u63A8\u51FA\u8F85\u5BFC\u73ED\u5566\uFF0C\u5305\u62EC\u300CPython \u8BED\u8A00\u8F85\u5BFC\u73ED\u3001C++ \u8F85\u5BFC\u73ED\u3001java \u8F85\u5BFC\u73ED\u3001\u7B97\u6CD5/\u6570\u636E\u7ED3\u6784\u8F85\u5BFC\u73ED\u3001\u5C11\u513F\u7F16\u7A0B\u3001pygame \u6E38\u620F\u5F00\u53D1\u300D\uFF0C\u5168\u90E8\u90FD\u662F\u4E00\u5BF9\u4E00\u6559\u5B66\uFF1A\u4E00\u5BF9\u4E00\u8F85\u5BFC + \u4E00\u5BF9\u4E00\u7B54\u7591 + \u5E03\u7F6E\u4F5C\u4E1A + \u9879\u76EE\u5B9E\u8DF5\u7B49\u3002\u5F53\u7136\uFF0C\u8FD8\u6709\u7EBF\u4E0B\u7EBF\u4E0A\u6444\u5F71\u8BFE\u7A0B\u3001Photoshop\u3001Premiere \u4E00\u5BF9\u4E00\u6559\u5B66\u3001QQ\u3001\u5FAE\u4FE1\u5728\u7EBF\uFF0C\u968F\u65F6\u54CD\u5E94\uFF01\u5FAE\u4FE1\uFF1AJiabcdefh",-1),h=n("p",null,"C++ \u4FE1\u606F\u5965\u8D5B\u9898\u89E3\uFF0C\u957F\u671F\u66F4\u65B0\uFF01\u957F\u671F\u62DB\u6536\u4E00\u5BF9\u4E00\u4E2D\u5C0F\u5B66\u4FE1\u606F\u5965\u8D5B\u96C6\u8BAD\uFF0C\u8386\u7530\u3001\u53A6\u95E8\u5730\u533A\u6709\u673A\u4F1A\u7EBF\u4E0B\u4E0A\u95E8\uFF0C\u5176\u4ED6\u5730\u533A\u7EBF\u4E0A\u3002\u5FAE\u4FE1\uFF1AJiabcdefh",-1),b=s("\u65B9\u6CD5\u4E00\uFF1A"),_={href:"http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes",target:"_blank",rel:"noopener noreferrer"},g=s("QQ"),x=n("p",null,"\u65B9\u6CD5\u4E8C\uFF1A\u5FAE\u4FE1\uFF1AJiabcdefh",-1),f=n("p",null,[n("img",{src:t,alt:""})],-1);function w(y,E){const a=o("ExternalLinkIcon");return c(),i("div",null,[d,n("div",k,[m,v,h,n("p",null,[b,n("a",_,[g,l(a)])]),x]),f])}var B=p(r,[["render",w],["__file","auto_base05.html.vue"]]);export{B as default};
