import{_ as s}from"./zsxq.429a430e.js";import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{r as a,o as c,c as p,a as e,b as i,F as l,f as _,d as t}from"./app.adf15779.js";const r={},d=_(`<p>\u4F60\u597D\uFF0C\u6211\u662F\u60A6\u521B\u3002\u6B22\u8FCE\u6765\u5230 Python \u6838\u5FC3\u6280\u672F\u5B9E\u6218\uFF0C\u8FD9\u662F\u4F60\u7684\u7B2C\u4E00\u6B21\u6D4B\u8BD5\uFF0C\u52A0\u6CB9\uFF01</p><ol><li><p>\u4EE5\u4E0B\u54EA\u4E2A\u53D8\u91CF\u53EF\u4EE5\u505Apython\u7684\u53D8\u91CF\uFF1A</p><p>A. 01a</p><p>B. class</p><p>C. a_int</p><p>D. b-int</p></li></ol><div class="custom-container tip"><p class="custom-container-title">\u7B54\u6848\u89E3\u6790</p><p>\u6B63\u786E\u7B54\u6848\uFF1AC</p><p>\u6613\u9519\u9879\uFF1AB \uFF0C\u53D8\u91CF\u540D\u547D\u540D\u89C4\u5219\u5FC5\u987B\u662F\u5927\u5C0F\u5199\u82F1\u6587\u3001\u6570\u5B57\u548C_\u7684\u7EC4\u5408\uFF0C\u4E0D\u80FD\u7528\u6570\u5B57\u5F00\u5934\uFF0C\u4E14\u4E0D\u80FD\u4EE5 Python \u91CC\u7684\u5173\u952E\u5B57\u4F5C\u4E3A\u53D8\u91CF\u540D\u3002\u5176\u4E2D B \u4E3A Python \u4E2D\u5173\u952E\u5B57\uFF0C\u53EF\u5728\u547D\u4EE4\u884C\u4E2D\u8FDB\u5165\u4EA4\u4E92\u73AF\u5883\u8F93\u5165 <code>help(&#39;keywords&#39;)</code> \u6765\u67E5\u770B Python \u5173\u952E\u5B57\u5217\u8868\u3002</p></div><ol start="2"><li><p>\u4EE5\u4E0B\u54EA\u4E2A\u9009\u9879\u4E0D\u662F Python \u7684\u57FA\u672C\u6570\u636E\u7C7B\u578B\u5173\u952E\u5B57</p><p>A. int</p><p>B.bool</p><p>C. string</p><p>D. dict</p></li></ol><div class="custom-container tip"><p class="custom-container-title">\u7B54\u6848\u89E3\u6790</p><p>\u6B63\u786E\u7B54\u6848\uFF1AC</p><p>\u6613\u9519\u9879\uFF1AB \u5B57\u7B26\u4E32\u7684\u5173\u952E\u5B57\u5728 Python \u91CC\u662F str</p></div><ol start="3"><li><p>\u6B64\u9898\u65E0\u9700\u5728\u7EBF\u4F5C\u7B54\uFF0C\u8BF7\u5728\u7EB8\u4E0A\u4F5C\u7B54\u540E\u67E5\u770B\u7B54\u6848\u89E3\u6790 \u8BED\u53E5 <code>x, y, z = 1, 2, 3</code> \u6267\u884C\u540E\uFF0C\u53D8\u91CF y \u7684\u503C\u4E3A__<em>_____</em>_\u3002</p><p>\u8BF7\u5728\u8BE5\u6587\u7AE0\u4E0B\u9762\u7559\u8A00\uFF0C\u7559\u4E0B\u4F60\u7684\u7B54\u6848\uFF01</p></li></ol><div class="custom-container tip"><p class="custom-container-title">\u7B54\u6848\u89E3\u6790</p><p>\u6B63\u786E\u7B54\u6848\uFF1A2</p></div><ol start="4"><li>\u6B64\u9898\u65E0\u9700\u5728\u7EBF\u4F5C\u7B54\uFF0C\u8BF7\u5728\u7EB8\u4E0A\u4F5C\u7B54\u540E\u67E5\u770B\u7B54\u6848\u89E3\u6790 \u67E5\u770B\u53D8\u91CF\u7C7B\u578B\u7684 Python \u5185\u7F6E\u51FD\u6570\u662F________________\u3002</li></ol><div class="custom-container tip"><p class="custom-container-title">\u7B54\u6848\u89E3\u6790</p><p>\u6B63\u786E\u7B54\u6848\uFF1Atype()</p><p>\u8BB0\u5FC6\u6027\u77E5\u8BC6\u70B9</p></div><ol start="5"><li>\u6B64\u9898\u65E0\u9700\u5728\u7EBF\u4F5C\u7B54\uFF0C\u8BF7\u5728\u7EB8\u4E0A\u4F5C\u7B54\u540E\u67E5\u770B\u7B54\u6848\u89E3\u6790 \u8BF7\u5199\u51FA\u8BE5\u4EE3\u7801\u7684\u8F93\u51FA\u7ED3\u679C_____________\u3002</li></ol><div class="language-text ext-text line-numbers-mode"><pre class="language-text"><code>  a = &#39;ABC&#39;
  b = a
  a = &#39;XYZ&#39;
  print(b)
</code></pre><div class="line-numbers" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="custom-container tip"><p class="custom-container-title">\u7B54\u6848\u89E3\u6790</p><p>\u6B63\u786E\u7B54\u6848\uFF1AABC</p><p>\u6267\u884C <code>a = &#39;ABC&#39;</code>\uFF0C\u89E3\u91CA\u5668\u521B\u5EFA\u4E86\u5B57\u7B26\u4E32 <code>&#39;ABC&#39;</code> \u548C\u53D8\u91CF a\uFF0C\u5E76\u628A a \u6307\u5411 <code>&#39;ABC&#39;</code> \uFF1A \u6267\u884C <code>b = a</code> \uFF0C\u89E3\u91CA\u5668\u521B\u5EFA\u4E86\u53D8\u91CF b\uFF0C\u5E76\u628A b \u6307\u5411 a \u6307\u5411\u7684\u5B57\u7B26\u4E32 <code>&#39;ABC&#39;</code> \uFF1A \u6267\u884C <code>a = &#39;XYZ&#39;</code> \uFF0C\u89E3\u91CA\u5668\u521B\u5EFA\u4E86\u5B57\u7B26\u4E32 <code>&#39;XYZ&#39;</code>\uFF0C\u5E76\u628A a \u7684\u6307\u5411\u6539\u4E3A <code>&#39;XYZ&#39;</code>\uFF0C\u4F46 b \u5E76\u6CA1\u6709\u66F4\u6539\uFF1A \u6240\u4EE5\uFF0C\u6700\u540E\u6253\u5370\u53D8\u91CF b \u7684\u7ED3\u679C\u81EA\u7136\u662F &#39;ABC&#39; \u4E86\u3002</p></div>`,12),m={class:"custom-container info"},u=e("p",{class:"custom-container-title"},"AI\u60A6\u521B\xB7\u7F16\u7A0B\u4E00\u5BF9\u4E00",-1),h=e("p",null,"AI\u60A6\u521B\xB7\u63A8\u51FA\u8F85\u5BFC\u73ED\u5566\uFF0C\u5305\u62EC\u300CPython \u8BED\u8A00\u8F85\u5BFC\u73ED\u3001C++ \u8F85\u5BFC\u73ED\u3001java \u8F85\u5BFC\u73ED\u3001\u7B97\u6CD5/\u6570\u636E\u7ED3\u6784\u8F85\u5BFC\u73ED\u3001\u5C11\u513F\u7F16\u7A0B\u3001pygame \u6E38\u620F\u5F00\u53D1\u300D\uFF0C\u5168\u90E8\u90FD\u662F\u4E00\u5BF9\u4E00\u6559\u5B66\uFF1A\u4E00\u5BF9\u4E00\u8F85\u5BFC + \u4E00\u5BF9\u4E00\u7B54\u7591 + \u5E03\u7F6E\u4F5C\u4E1A + \u9879\u76EE\u5B9E\u8DF5\u7B49\u3002\u5F53\u7136\uFF0C\u8FD8\u6709\u7EBF\u4E0B\u7EBF\u4E0A\u6444\u5F71\u8BFE\u7A0B\u3001Photoshop\u3001Premiere \u4E00\u5BF9\u4E00\u6559\u5B66\u3001QQ\u3001\u5FAE\u4FE1\u5728\u7EBF\uFF0C\u968F\u65F6\u54CD\u5E94\uFF01\u5FAE\u4FE1\uFF1AJiabcdefh",-1),b=e("p",null,"C++ \u4FE1\u606F\u5965\u8D5B\u9898\u89E3\uFF0C\u957F\u671F\u66F4\u65B0\uFF01\u957F\u671F\u62DB\u6536\u4E00\u5BF9\u4E00\u4E2D\u5C0F\u5B66\u4FE1\u606F\u5965\u8D5B\u96C6\u8BAD\uFF0C\u8386\u7530\u3001\u53A6\u95E8\u5730\u533A\u6709\u673A\u4F1A\u7EBF\u4E0B\u4E0A\u95E8\uFF0C\u5176\u4ED6\u5730\u533A\u7EBF\u4E0A\u3002\u5FAE\u4FE1\uFF1AJiabcdefh",-1),v=t("\u65B9\u6CD5\u4E00\uFF1A"),f={href:"http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes",target:"_blank",rel:"noopener noreferrer"},y=t("QQ"),B=e("p",null,"\u65B9\u6CD5\u4E8C\uFF1A\u5FAE\u4FE1\uFF1AJiabcdefh",-1),C=e("p",null,[e("img",{src:s,alt:"",loading:"lazy"})],-1);function g(x,A){const o=a("ExternalLinkIcon");return c(),p(l,null,[d,e("div",m,[u,h,b,e("p",null,[v,e("a",f,[y,i(o)])]),B]),C],64)}var w=n(r,[["render",g],["__file","answer1.html.vue"]]);export{w as default};
