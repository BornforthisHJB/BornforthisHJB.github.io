import{_ as o}from"./gzh.aa7caba6.js";import{_ as p}from"./zsxq.96f46dfd.js";import{_ as c}from"./plugin-vue_export-helper.21dcd24c.js";import{o as l,c as i,a as n,b as t,d as s,e,r}from"./app.7a9351cd.js";const u={},d=n("p",null,"\u4F60\u597D\uFF0C\u6211\u662F\u60A6\u521B\u3002",-1),_=n("p",null,"\u5BF9\u8F93\u51FA\u683C\u5F0F\u7684\u63A7\u5236\u4E0D\u53EA\u662F\u6253\u5370\u7A7A\u683C\u5206\u9694\u7684\u503C\uFF0C\u8FD8\u9700\u8981\u66F4\u591A\u65B9\u5F0F\u3002\u683C\u5F0F\u5316\u8F93\u51FA\u5305\u62EC\u4EE5\u4E0B\u51E0\u79CD\u65B9\u6CD5\u3002",-1),h=s("\u4F7F\u7528 "),k={href:"https://docs.python.org/zh-cn/3/tutorial/inputoutput.html#tut-f-strings",target:"_blank",rel:"noopener noreferrer"},m=s("\u683C\u5F0F\u5316\u5B57\u7B26\u4E32\u5B57\u9762\u503C"),v=s(" \uFF0C\u8981\u5728\u5B57\u7B26\u4E32\u5F00\u5934\u7684\u5F15\u53F7/\u4E09\u5F15\u53F7\u524D\u6DFB\u52A0 "),b=n("code",null,"f",-1),g=s(" \u6216 "),f=n("code",null,"F",-1),y=s(" \u3002\u5728\u8FD9\u79CD\u5B57\u7B26\u4E32\u4E2D\uFF0C\u53EF\u4EE5\u5728 "),x=n("code",null,"{",-1),I=s(" \u548C "),z=n("code",null,"}",-1),E=s(" \u5B57\u7B26\u4E4B\u95F4\u8F93\u5165\u5F15\u7528\u7684\u53D8\u91CF\uFF0C\u6216\u5B57\u9762\u503C\u7684 Python \u8868\u8FBE\u5F0F\u3002"),T=e(`<div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>In <span class="token punctuation">[</span><span class="token number">56</span><span class="token punctuation">]</span><span class="token punctuation">:</span> year <span class="token operator">=</span> <span class="token number">2016</span>

In <span class="token punctuation">[</span><span class="token number">57</span><span class="token punctuation">]</span><span class="token punctuation">:</span> event <span class="token operator">=</span> <span class="token string">&#39;Referendum&#39;</span>

In <span class="token punctuation">[</span><span class="token number">58</span><span class="token punctuation">]</span><span class="token punctuation">:</span> s <span class="token operator">=</span> <span class="token string-interpolation"><span class="token string">f&#39;Results of the </span><span class="token interpolation"><span class="token punctuation">{</span>year<span class="token punctuation">}</span></span><span class="token string"> </span><span class="token interpolation"><span class="token punctuation">{</span>event<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span>

In <span class="token punctuation">[</span><span class="token number">59</span><span class="token punctuation">]</span><span class="token punctuation">:</span> s
Out<span class="token punctuation">[</span><span class="token number">59</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token string">&#39;Results of the 2016 Referendum&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,1),P=s("\u5B57\u7B26\u4E32\u7684 "),S={href:"https://docs.python.org/zh-cn/3/library/stdtypes.html#str.format",target:"_blank",rel:"noopener noreferrer"},q=n("code",null,"str.format()",-1),w=s(" \u65B9\u6CD5\u9700\u8981\u66F4\u591A\u624B\u52A8\u64CD\u4F5C\u3002\u8BE5\u65B9\u6CD5\u4E5F\u7528 "),A=n("code",null,"{",-1),N=s(" \u548C "),Q=n("code",null,"}",-1),R=s(" \u6807\u8BB0\u66FF\u6362\u53D8\u91CF\u7684\u4F4D\u7F6E\uFF0C\u867D\u7136\u8FD9\u79CD\u65B9\u6CD5\u652F\u6301\u8BE6\u7EC6\u7684\u683C\u5F0F\u5316\u6307\u4EE4\uFF0C\u4F46\u9700\u8981\u63D0\u4F9B\u683C\u5F0F\u5316\u4FE1\u606F\u3002"),V=e(`<div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>In <span class="token punctuation">[</span><span class="token number">62</span><span class="token punctuation">]</span><span class="token punctuation">:</span> yes_votes <span class="token operator">=</span> <span class="token number">42_572_654</span>

In <span class="token punctuation">[</span><span class="token number">63</span><span class="token punctuation">]</span><span class="token punctuation">:</span> no_votes <span class="token operator">=</span> <span class="token number">43_132_495</span>

In <span class="token punctuation">[</span><span class="token number">64</span><span class="token punctuation">]</span><span class="token punctuation">:</span> percentage <span class="token operator">=</span> yes_votes <span class="token operator">/</span> <span class="token punctuation">(</span>yes_votes <span class="token operator">+</span> no_votes<span class="token punctuation">)</span>

In <span class="token punctuation">[</span><span class="token number">65</span><span class="token punctuation">]</span><span class="token punctuation">:</span> s <span class="token operator">=</span> <span class="token string">&#39;{:-9} YES votes  {:2.2%}&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>yes_votes<span class="token punctuation">,</span> percentage<span class="token punctuation">)</span>

In <span class="token punctuation">[</span><span class="token number">66</span><span class="token punctuation">]</span><span class="token punctuation">:</span> s
Out<span class="token punctuation">[</span><span class="token number">66</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token string">&#39; 42572654 YES votes  49.67%&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li>\u6700\u540E\uFF0C\u8FD8\u53EF\u4EE5\u7528\u5B57\u7B26\u4E32\u5207\u7247\u548C\u5408\u5E76\u64CD\u4F5C\u5B8C\u6210\u5B57\u7B26\u4E32\u5904\u7406\u64CD\u4F5C\uFF0C\u521B\u5EFA\u4EFB\u4F55\u6392\u7248\u5E03\u5C40\u3002\u5B57\u7B26\u4E32\u7C7B\u578B\u8FD8\u652F\u6301\u5C06\u5B57\u7B26\u4E32\u6309\u7ED9\u5B9A\u5217\u5BBD\u8FDB\u884C\u586B\u5145\uFF0C\u8FD9\u4E9B\u65B9\u6CD5\u4E5F\u5F88\u6709\u7528\u3002</li></ul>`,2),B=s("\u5982\u679C\u4E0D\u9700\u8981\u82B1\u54E8\u7684\u8F93\u51FA\uFF0C\u53EA\u60F3\u5FEB\u901F\u663E\u793A\u53D8\u91CF\u8FDB\u884C\u8C03\u8BD5\uFF0C\u53EF\u4EE5\u7528 "),C={href:"https://docs.python.org/zh-cn/3/library/functions.html#repr",target:"_blank",rel:"noopener noreferrer"},J=n("code",null,"repr()",-1),O=s(" \u6216 "),F={href:"https://docs.python.org/zh-cn/3/library/stdtypes.html#str",target:"_blank",rel:"noopener noreferrer"},L=n("code",null,"str()",-1),Y=s(" \u51FD\u6570\u628A\u503C\u8F6C\u5316\u4E3A\u5B57\u7B26\u4E32\u3002"),j={href:"https://docs.python.org/zh-cn/3/library/stdtypes.html#str",target:"_blank",rel:"noopener noreferrer"},$=n("code",null,"str()",-1),D=s(" \u51FD\u6570\u8FD4\u56DE\u4F9B\u4EBA\u9605\u8BFB\u7684\u503C\uFF0C"),G={href:"https://docs.python.org/zh-cn/3/library/functions.html#repr",target:"_blank",rel:"noopener noreferrer"},H=n("code",null,"repr()",-1),K=s(" \u5219\u751F\u6210\u9002\u4E8E\u89E3\u91CA\u5668\u8BFB\u53D6\u7684\u503C\uFF08\u5982\u679C\u6CA1\u6709\u7B49\u6548\u7684\u8BED\u6CD5\uFF0C\u5219\u5F3A\u5236\u6267\u884C "),M={href:"https://docs.python.org/zh-cn/3/library/exceptions.html#SyntaxError",target:"_blank",rel:"noopener noreferrer"},U=n("code",null,"SyntaxError",-1),W=s("\uFF09\u3002\u5BF9\u4E8E\u6CA1\u6709\u652F\u6301\u4F9B\u4EBA\u9605\u8BFB\u5C55\u793A\u7ED3\u679C\u7684\u5BF9\u8C61\uFF0C "),X={href:"https://docs.python.org/zh-cn/3/library/stdtypes.html#str",target:"_blank",rel:"noopener noreferrer"},Z=n("code",null,"str()",-1),nn=s(" \u8FD4\u56DE\u4E0E "),sn={href:"https://docs.python.org/zh-cn/3/library/functions.html#repr",target:"_blank",rel:"noopener noreferrer"},an=n("code",null,"repr()",-1),tn=s(" \u76F8\u540C\u7684\u503C\u3002\u4E00\u822C\u60C5\u51B5\u4E0B\uFF0C\u6570\u5B57\u3001\u5217\u8868\u6216\u5B57\u5178\u7B49\u7ED3\u6784\u7684\u503C\uFF0C\u4F7F\u7528\u8FD9\u4E24\u4E2A\u51FD\u6570\u8F93\u51FA\u7684\u8868\u73B0\u5F62\u5F0F\u662F\u4E00\u6837\u7684\u3002\u5B57\u7B26\u4E32\u6709\u4E24\u79CD\u4E0D\u540C\u7684\u8868\u73B0\u5F62\u5F0F\u3002"),en=e(`<p>\u793A\u4F8B\u5982\u4E0B\uFF1A</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>In <span class="token punctuation">[</span><span class="token number">79</span><span class="token punctuation">]</span><span class="token punctuation">:</span> x <span class="token operator">=</span> <span class="token number">10</span> <span class="token operator">*</span> <span class="token number">3.25</span>

In <span class="token punctuation">[</span><span class="token number">80</span><span class="token punctuation">]</span><span class="token punctuation">:</span> y <span class="token operator">=</span> <span class="token number">200</span> <span class="token operator">*</span> <span class="token number">200</span>

In <span class="token punctuation">[</span><span class="token number">81</span><span class="token punctuation">]</span><span class="token punctuation">:</span> s <span class="token operator">=</span> <span class="token string">&#39;The value of x is &#39;</span> <span class="token operator">+</span> <span class="token builtin">repr</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;, and y is &#39;</span> <span class="token operator">+</span> <span class="token builtin">repr</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39;...&#39;</span>

In <span class="token punctuation">[</span><span class="token number">82</span><span class="token punctuation">]</span><span class="token punctuation">:</span> s
Out<span class="token punctuation">[</span><span class="token number">82</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token string">&#39;The value of x is 32.5, and y is 40000...&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),on={href:"https://docs.python.org/zh-cn/3/library/string.html#module-string",target:"_blank",rel:"noopener noreferrer"},pn=n("code",null,"string",-1),cn=s(" \u6A21\u5757\u5305\u542B "),ln={href:"https://docs.python.org/zh-cn/3/library/string.html#string.Template",target:"_blank",rel:"noopener noreferrer"},rn=n("code",null,"Template",-1),un=s(" \u7C7B\uFF0C\u63D0\u4F9B\u4E86\u5C06\u503C\u66FF\u6362\u4E3A\u5B57\u7B26\u4E32\u7684\u53E6\u4E00\u79CD\u65B9\u6CD5\u3002\u8BE5\u7C7B\u4F7F\u7528 "),dn=n("code",null,"$x",-1),_n=s(" \u5360\u4F4D\u7B26\uFF0C\u5E76\u7528\u5B57\u5178\u7684\u503C\u8FDB\u884C\u66FF\u6362\uFF0C\u4F46\u5BF9\u683C\u5F0F\u63A7\u5236\u7684\u652F\u6301\u6BD4\u8F83\u6709\u9650\u3002"),hn=n("h2",{id:"_7-1-1-\u683C\u5F0F\u5316\u5B57\u7B26\u4E32\u5B57\u9762\u503C",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_7-1-1-\u683C\u5F0F\u5316\u5B57\u7B26\u4E32\u5B57\u9762\u503C","aria-hidden":"true"},"#"),s(" 7.1.1. \u683C\u5F0F\u5316\u5B57\u7B26\u4E32\u5B57\u9762\u503C")],-1),kn={href:"https://docs.python.org/zh-cn/3/reference/lexical_analysis.html#f-strings",target:"_blank",rel:"noopener noreferrer"},mn=s("\u683C\u5F0F\u5316\u5B57\u7B26\u4E32\u5B57\u9762\u503C"),vn=s(" \uFF08\u7B80\u79F0\u4E3A f-\u5B57\u7B26\u4E32\uFF09\u5728\u5B57\u7B26\u4E32\u524D\u52A0\u524D\u7F00 "),bn=n("code",null,"f",-1),gn=s(" \u6216 "),fn=n("code",null,"F",-1),yn=s("\uFF0C\u901A\u8FC7 "),xn=n("code",null,"{expression}",-1),In=s(" \u8868\u8FBE\u5F0F\uFF0C\u628A Python \u8868\u8FBE\u5F0F\u7684\u503C\u6DFB\u52A0\u5230\u5B57\u7B26\u4E32\u5185\u3002"),zn=e(`<p>\u683C\u5F0F\u8BF4\u660E\u7B26\u662F\u53EF\u9009\u7684\uFF0C\u5199\u5728\u8868\u8FBE\u5F0F\u540E\u9762\uFF0C\u53EF\u4EE5\u66F4\u597D\u5730\u63A7\u5236\u683C\u5F0F\u5316\u503C\u7684\u65B9\u5F0F\u3002\u4E0B\u4F8B\u5C06 pi \u820D\u5165\u5230\u5C0F\u6570\u70B9\u540E\u4E09\u4F4D\uFF1A</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>In <span class="token punctuation">[</span><span class="token number">42</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token keyword">import</span> math

In <span class="token punctuation">[</span><span class="token number">43</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;The value of pi is approximately </span><span class="token interpolation"><span class="token punctuation">{</span>math<span class="token punctuation">.</span>pi<span class="token punctuation">:</span><span class="token format-spec">.3f</span><span class="token punctuation">}</span></span><span class="token string">.&#39;</span></span><span class="token punctuation">)</span>
The value of pi <span class="token keyword">is</span> approximately <span class="token number">3.142</span><span class="token punctuation">.</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5728 <code>&#39;:&#39;</code> \u540E\u4F20\u9012\u6574\u6570\uFF0C\u4E3A\u8BE5\u5B57\u6BB5\u8BBE\u7F6E\u6700\u5C0F\u5B57\u7B26\u5BBD\u5EA6\uFF0C\u5E38\u7528\u4E8E\u5217\u5BF9\u9F50\uFF1A</p><p>\u6B22\u8FCE\u5173\u6CE8\u6211\u516C\u4F17\u53F7\uFF1AAI\u60A6\u521B\uFF0C\u6709\u66F4\u591A\u66F4\u597D\u73A9\u7684\u7B49\u4F60\u53D1\u73B0\uFF01</p><details class="custom-container details"><summary>\u516C\u4F17\u53F7\uFF1AAI\u60A6\u521B\u3010\u4E8C\u7EF4\u7801\u3011</summary><p><img src="`+o+'" alt=""></p></details>',5),En={class:"custom-container info"},Tn=n("p",{class:"custom-container-title"},"AI\u60A6\u521B\xB7\u7F16\u7A0B\u4E00\u5BF9\u4E00",-1),Pn=n("p",null,"AI\u60A6\u521B\xB7\u63A8\u51FA\u8F85\u5BFC\u73ED\u5566\uFF0C\u5305\u62EC\u300CPython \u8BED\u8A00\u8F85\u5BFC\u73ED\u3001C++ \u8F85\u5BFC\u73ED\u3001java \u8F85\u5BFC\u73ED\u3001\u7B97\u6CD5/\u6570\u636E\u7ED3\u6784\u8F85\u5BFC\u73ED\u3001\u5C11\u513F\u7F16\u7A0B\u3001pygame \u6E38\u620F\u5F00\u53D1\u300D\uFF0C\u5168\u90E8\u90FD\u662F\u4E00\u5BF9\u4E00\u6559\u5B66\uFF1A\u4E00\u5BF9\u4E00\u8F85\u5BFC + \u4E00\u5BF9\u4E00\u7B54\u7591 + \u5E03\u7F6E\u4F5C\u4E1A + \u9879\u76EE\u5B9E\u8DF5\u7B49\u3002\u5F53\u7136\uFF0C\u8FD8\u6709\u7EBF\u4E0B\u7EBF\u4E0A\u6444\u5F71\u8BFE\u7A0B\u3001Photoshop\u3001Premiere \u4E00\u5BF9\u4E00\u6559\u5B66\u3001QQ\u3001\u5FAE\u4FE1\u5728\u7EBF\uFF0C\u968F\u65F6\u54CD\u5E94\uFF01\u5FAE\u4FE1\uFF1AJiabcdefh",-1),Sn=n("p",null,"C++ \u4FE1\u606F\u5965\u8D5B\u9898\u89E3\uFF0C\u957F\u671F\u66F4\u65B0\uFF01\u957F\u671F\u62DB\u6536\u4E00\u5BF9\u4E00\u4E2D\u5C0F\u5B66\u4FE1\u606F\u5965\u8D5B\u96C6\u8BAD\uFF0C\u8386\u7530\u3001\u53A6\u95E8\u5730\u533A\u6709\u673A\u4F1A\u7EBF\u4E0B\u4E0A\u95E8\uFF0C\u5176\u4ED6\u5730\u533A\u7EBF\u4E0A\u3002\u5FAE\u4FE1\uFF1AJiabcdefh",-1),qn=s("\u65B9\u6CD5\u4E00\uFF1A"),wn={href:"http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes",target:"_blank",rel:"noopener noreferrer"},An=s("QQ"),Nn=n("p",null,"\u65B9\u6CD5\u4E8C\uFF1A\u5FAE\u4FE1\uFF1AJiabcdefh",-1),Qn=n("p",null,[n("img",{src:p,alt:""})],-1);function Rn(Vn,Bn){const a=r("ExternalLinkIcon");return l(),i("div",null,[d,_,n("ul",null,[n("li",null,[h,n("a",k,[m,t(a)]),v,b,g,f,y,x,I,z,E])]),T,n("ul",null,[n("li",null,[P,n("a",S,[q,t(a)]),w,A,N,Q,R])]),V,n("p",null,[B,n("a",C,[J,t(a)]),O,n("a",F,[L,t(a)]),Y]),n("p",null,[n("a",j,[$,t(a)]),D,n("a",G,[H,t(a)]),K,n("a",M,[U,t(a)]),W,n("a",X,[Z,t(a)]),nn,n("a",sn,[an,t(a)]),tn]),en,n("p",null,[n("a",on,[pn,t(a)]),cn,n("a",ln,[rn,t(a)]),un,dn,_n]),hn,n("p",null,[n("a",kn,[mn,t(a)]),vn,bn,gn,fn,yn,xn,In]),zn,n("div",En,[Tn,Pn,Sn,n("p",null,[qn,n("a",wn,[An,t(a)])]),Nn]),Qn])}var Ln=c(u,[["render",Rn],["__file","format.html.vue"]]);export{Ln as default};
