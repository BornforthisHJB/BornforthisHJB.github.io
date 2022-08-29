import{_ as e}from"./gzh.aa7caba6.js";import{_ as t}from"./zsxq.96f46dfd.js";import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";import{o,c as i,a as n,b as l,e as c,d as s,r as u}from"./app.2f2e4e4d.js";var r="/assets/image-20220712135438520.684278c0.png";const d={},k=c(`<h2 id="xlutils-\u5E93\u7684\u5B89\u88C5" tabindex="-1"><a class="header-anchor" href="#xlutils-\u5E93\u7684\u5B89\u88C5" aria-hidden="true">#</a> xlutils \u5E93\u7684\u5B89\u88C5</h2><p>\u4F60\u597D\uFF0C\u6211\u662F\u60A6\u521B\u3002</p><h3 id="\u9700\u6C42" tabindex="-1"><a class="header-anchor" href="#\u9700\u6C42" aria-hidden="true">#</a> \u9700\u6C42</h3><p>\u5F80\u201C<strong>\u865A\u5047\u7528\u6237\u6570\u636E.xls</strong>\u201D\u91CC\u9762\uFF0C\u8FFD\u52A0\u989D\u5916\u7684 50 \u6761\u7528\u6237\u6570\u636E\uFF0C\u5C31\u662F<strong>\u6807\u9898+\u6570\u636E</strong>\uFF0C\u8FBE\u5230 150 \u6761\u3002</p><h3 id="\u601D\u8DEF" tabindex="-1"><a class="header-anchor" href="#\u601D\u8DEF" aria-hidden="true">#</a> \u601D\u8DEF</h3><ul><li>xlrd \u662F\u8BFB\u53D6 Excel \u6587\u4EF6\u7684\u5E93</li><li>xlwt \u662F\u5199\u5165 Excel \u7684\u5E93</li></ul><p>\u5982\u679C\u4F7F\u7528\u4EE5\u4E0A\u4E24\u4E2A\u5E93\uFF0C\u53EF\u4EE5\u4E00\u8FB9\u8BFB\u53D6\uFF0C\u4E00\u8FB9\u5199\u5165\u65B0\u6587\u4EF6\u3002</p><p>\u4E0D\u8FC7\u5728\u6B64\uFF0C\u6709\u53E6\u4E00\u4E2A\u65B9\u4FBF\u4F7F\u7528\u7684\u5E93\uFF0C\u5E93\u540D\u662F xlutils\uFF0C\u5B89\u88C5\u547D\u4EE4\uFF1A<code>pip install xlutils</code>\u3002</p><div class="language-cmd ext-cmd line-numbers-mode"><pre class="language-cmd"><code>pip install xlutils
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5B89\u88C5\u597D\u4E4B\u540E\uFF0C\u5F00\u59CB\u5199\u4EE3\u7801\uFF0C\u5B8C\u6210\u8FFD\u52A0 50 \u6761\u6570\u636E\u7684\u9700\u6C42\u3002</p><h2 id="\u4E66\u5199\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#\u4E66\u5199\u4EE3\u7801" aria-hidden="true">#</a> \u4E66\u5199\u4EE3\u7801</h2><ol><li>\u5BFC\u5165\u6240\u9700\u7684\u5E93\uFF0C\u5206\u522B\u662F xlrd \u548C xlutils</li></ol><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> xlrd
<span class="token keyword">from</span> xlutils<span class="token punctuation">.</span>copy <span class="token keyword">import</span> copy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>\u4F7F\u7528 xlrd \u6253\u5F00\u6587\u4EF6\uFF0C\u7136\u540E xlutils \u8D4B\u503C\u6253\u5F00\u540E\u7684 workbook\uFF0C\u5982\u4E0B\u4EE3\u7801\uFF1A</li></ol><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>wb <span class="token operator">=</span> xlrd<span class="token punctuation">.</span>open_workbook<span class="token punctuation">(</span><span class="token string">&#39;\u865A\u5047\u7528\u6237\u6570\u636E.xls&#39;</span><span class="token punctuation">,</span> formatting_info<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
xwb <span class="token operator">=</span> copy<span class="token punctuation">(</span>wb<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>wb \u5BF9\u8C61\u662F workbook\uFF0Cxwb \u4E5F\u662F workbook\uFF0C\u4F46\u662F\u540E\u8005\u53EF\u4EE5\u5199\u64CD\u4F5C\uFF0C\u524D\u8005\u4E0D\u53EF\u4EE5\u3002</p><ol start="3"><li>\u6709\u4E86 workbook \u4E4B\u540E\uFF0C\u5C31\u5F00\u59CB\u6307\u5B9A sheet\uFF0C\u5E76\u83B7\u53D6\u8FD9\u4E2A sheet \u7684\u603B\u884C\u6570\u3002</li></ol><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>sheet <span class="token operator">=</span> xwb<span class="token punctuation">.</span>get_sheet<span class="token punctuation">(</span><span class="token string">&#39;\u7B2C\u4E00\u4E2Asheet&#39;</span><span class="token punctuation">)</span>
rows <span class="token operator">=</span> sheet<span class="token punctuation">.</span>get_rows<span class="token punctuation">(</span><span class="token punctuation">)</span>
length <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>rows<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>length<span class="token punctuation">)</span>  <span class="token comment"># \u8F93\u51FA 100</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6307\u5B9A\u540D\u79F0\u4E3A\u201C<strong>\u7B2C\u4E00\u4E2Asheet</strong>\u201D\u7684 sheet\uFF0C\u7136\u540E\u83B7\u53D6\u5168\u90E8\u7684\u884C\uFF0C\u5E76\u8F93\u51FA\u603B\u91CF\uFF0C\u5C31\u5F97\u5230\u4E86 sheet \u4E2D\u6709 100 \u884C\u3002</p><ol start="4"><li>\u6709\u4E86\u5177\u4F53\u7684\u884C\u6570\uFF0C\u7136\u540E\u4FDD\u8BC1\u539F\u6709\u6570\u636E\u4E0D\u53D8\u52A8\u7684\u60C5\u51B5\u4E0B\uFF0C\u4ECE\u7B2C 101 \u884C\u5199\u6570\u636E\u3002101 \u884C\u7684\u7D22\u5F15\u662F 100\uFF0C\u7D22\u5F15\u5FAA\u73AF\u7684\u8D77\u59CB\u6570\u503C\u662F 100\u3002</li></ol><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> faker

fake <span class="token operator">=</span> faker<span class="token punctuation">.</span>Faker<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>rows<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    sheet<span class="token punctuation">.</span>write<span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> fake<span class="token punctuation">.</span>first_name<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39; &#39;</span> <span class="token operator">+</span> fake<span class="token punctuation">.</span>last_name<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    sheet<span class="token punctuation">.</span>write<span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> fake<span class="token punctuation">.</span>address<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    sheet<span class="token punctuation">.</span>write<span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> fake<span class="token punctuation">.</span>phone_number<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    sheet<span class="token punctuation">.</span>write<span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> fake<span class="token punctuation">.</span>city<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>range \u51FD\u6570\uFF0C\u4ECE <code>len(rows)</code> \u5F00\u59CB\uFF0C\u5230 <code>150-1</code> \u7ED3\u675F\uFF0C\u5171 50 \u6761\u3002 faker \u5E93\u662F\u5236\u9020\u865A\u5047\u6570\u636E\u7684\uFF0C\u8FD9\u4E2A\u5728\u524D\u9762\u5199\u6570\u636E\u6709\u7528\u8FC7\uFF0C\u5FAA\u73AF\u5199\u5165\u4E86 50\u6761\u3002</p><ol start="5"><li>\u6700\u540E\u4FDD\u5B58\u5C31\u53EF\u4EE5\u4E86</li></ol><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>xwb<span class="token punctuation">.</span>save<span class="token punctuation">(</span><span class="token string">&#39;\u865A\u5047\u7528\u6237\u6570\u636E.xls&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u4F7F\u7528 xwb\uFF0C\u4E5F\u5C31\u662F\u64CD\u4F5C\u4E4B\u540E\u7684 workbook \u5BF9\u8C61\uFF0C\u76F4\u63A5\u4FDD\u5B58\u539F\u6765\u7684\u6587\u4EF6\u540D\u5C31\u53EF\u4EE5\u4E86\u3002</p><h2 id="office-\u529E\u516C\u8F6F\u4EF6\u67E5\u770B\u6570\u636E\u7ED3\u679C" tabindex="-1"><a class="header-anchor" href="#office-\u529E\u516C\u8F6F\u4EF6\u67E5\u770B\u6570\u636E\u7ED3\u679C" aria-hidden="true">#</a> Office \u529E\u516C\u8F6F\u4EF6\u67E5\u770B\u6570\u636E\u7ED3\u679C</h2><p>\u6700\u540E\u4F7F\u7528 Excel \u8F6F\u4EF6\u6253\u5F00\u8FD9\u4E2A xls \u6587\u4EF6\uFF0C\u67E5\u770B\u6570\u636E\u6709\u591A\u5C11\u884C\uFF0C\u5982\u4E0B\u4EE3\u7801\uFF1A</p><p><img src="`+r+'" alt="image-20220712135438520"></p><p>\u603B\u5171 150 \u884C\uFF0C\u539F\u6709\u6570\u636E 100 \u884C\uFF0C\u52A0\u4E0A\u65B0\u5199\u5165\u7684 50 \u884C\uFF0C\u6570\u636E\u6CA1\u95EE\u9898\u3002</p><p>\u5C06\u4EE5\u4E0A\u7684\u4EE3\u7801\uFF0C\u5408\u5E76\u8D77\u6765\u591A\u6B21\u8FD0\u884C\uFF0C\u201C<strong>\u865A\u5047\u7528\u6237\u6570\u636E.xls</strong>\u201D \u7684\u6570\u636E\u91CF\u4F1A\u9010\u6B65\u589E\u52A0\uFF0C\u8FD0\u884C\u4E00\u6B21\u589E\u52A0 50 \u884C\u3002</p><p>xlutils \u662F <code>xlrd+xlwt</code> \u7684\u64CD\u4F5C\u5408\u96C6\uFF0C\u4F46\u53C8\u4E0D\u7B49\u4E8E\u4ED6\u4EEC\u76F8\u52A0\u3002\u5E93\u4E0D\u4E00\u6837\uFF0C\u5B8C\u6210\u7684\u64CD\u4F5C\u4E0D\u4E00\u6837\uFF0C\u6240\u9700\u7684\u573A\u666F\u4E5F\u4E0D\u540C\uFF0C\u4E0D\u540C\u7684\u9700\u6C42\u7528\u4E0D\u540C\u7684\u5E93\u3002</p><p>\u6B22\u8FCE\u5173\u6CE8\u6211\u516C\u4F17\u53F7\uFF1AAI\u60A6\u521B\uFF0C\u6709\u66F4\u591A\u66F4\u597D\u73A9\u7684\u7B49\u4F60\u53D1\u73B0\uFF01</p><details class="custom-container details"><summary>\u516C\u4F17\u53F7\uFF1AAI\u60A6\u521B\u3010\u4E8C\u7EF4\u7801\u3011</summary><p><img src="'+e+'" alt=""></p></details>',33),m={class:"custom-container info"},h=n("p",{class:"custom-container-title"},"AI\u60A6\u521B\xB7\u7F16\u7A0B\u4E00\u5BF9\u4E00",-1),v=n("p",null,"AI\u60A6\u521B\xB7\u63A8\u51FA\u8F85\u5BFC\u73ED\u5566\uFF0C\u5305\u62EC\u300CPython \u8BED\u8A00\u8F85\u5BFC\u73ED\u3001C++ \u8F85\u5BFC\u73ED\u3001java \u8F85\u5BFC\u73ED\u3001\u7B97\u6CD5/\u6570\u636E\u7ED3\u6784\u8F85\u5BFC\u73ED\u3001\u5C11\u513F\u7F16\u7A0B\u3001pygame \u6E38\u620F\u5F00\u53D1\u300D\uFF0C\u5168\u90E8\u90FD\u662F\u4E00\u5BF9\u4E00\u6559\u5B66\uFF1A\u4E00\u5BF9\u4E00\u8F85\u5BFC + \u4E00\u5BF9\u4E00\u7B54\u7591 + \u5E03\u7F6E\u4F5C\u4E1A + \u9879\u76EE\u5B9E\u8DF5\u7B49\u3002\u5F53\u7136\uFF0C\u8FD8\u6709\u7EBF\u4E0B\u7EBF\u4E0A\u6444\u5F71\u8BFE\u7A0B\u3001Photoshop\u3001Premiere \u4E00\u5BF9\u4E00\u6559\u5B66\u3001QQ\u3001\u5FAE\u4FE1\u5728\u7EBF\uFF0C\u968F\u65F6\u54CD\u5E94\uFF01\u5FAE\u4FE1\uFF1AJiabcdefh",-1),b=n("p",null,"C++ \u4FE1\u606F\u5965\u8D5B\u9898\u89E3\uFF0C\u957F\u671F\u66F4\u65B0\uFF01\u957F\u671F\u62DB\u6536\u4E00\u5BF9\u4E00\u4E2D\u5C0F\u5B66\u4FE1\u606F\u5965\u8D5B\u96C6\u8BAD\uFF0C\u8386\u7530\u3001\u53A6\u95E8\u5730\u533A\u6709\u673A\u4F1A\u7EBF\u4E0B\u4E0A\u95E8\uFF0C\u5176\u4ED6\u5730\u533A\u7EBF\u4E0A\u3002\u5FAE\u4FE1\uFF1AJiabcdefh",-1),g=s("\u65B9\u6CD5\u4E00\uFF1A"),x={href:"http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes",target:"_blank",rel:"noopener noreferrer"},_=s("QQ"),f=n("p",null,"\u65B9\u6CD5\u4E8C\uFF1A\u5FAE\u4FE1\uFF1AJiabcdefh",-1),w=n("p",null,[n("img",{src:t,alt:""})],-1);function y(E,I){const a=u("ExternalLinkIcon");return o(),i("div",null,[k,n("div",m,[h,v,b,n("p",null,[g,n("a",x,[_,l(a)])]),f]),w])}var V=p(d,[["render",y],["__file","index.html.vue"]]);export{V as default};
