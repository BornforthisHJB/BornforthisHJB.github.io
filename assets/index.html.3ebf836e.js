import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{r as p,o,c as i,a as n,b as e,e as l,d as s}from"./app.e995ec24.js";var r="/assets/eec7c55447ce39942d9a45afe5b78874.a1f404b2.png",c="/assets/8548532f4a20f82e279613323a59c2d1.9d728a99.png",d="/assets/4395f54f4526bb7cc89801ed8cf28170.7c362282.png",u="/assets/bdd42555f809654c84ca35f9040a8bde.34530242.png",m="/assets/image-20220620162931624.e2d1ac9d.png";const k={},v=l('<blockquote><p>\u673A\u667A\u5982\u4F60\uFF0C\u8FD9\u6837\u4F60\u5C31\u53EF\u4EE5\u66F4\u52A0\u4E13\u6CE8\u7684\u6295\u5165\u5230\u5B66\u4E60\u4E2D\u53BB\uFF0C\u51C6\u5907\u597D\u6211\u4EEC\u5C31\u53EF\u4EE5\u626C\u5E06\u8FDC\u822A\u5566~</p></blockquote><p>\u4F60\u597D\uFF0C\u6211\u662F\u60A6\u521B\u3002\u5148\u5E26\u4F60\u4EEC\u8BA4\u8BC6\u4E00\u4E0B Python \u8FD9\u4E2A\u795E\u5947\u7684\u5DE5\u5177\u3002</p><p>\u4E00\u8BF4\u8D77 Python\uFF0C\u5927\u5BB6\u603B\u4F1A\u8054\u60F3\u5230\u8FD1\u6765\u8D85\u706B\u7206\u7684\u4EBA\u5DE5\u667A\u80FD\uFF0C\u6CA1\u9519\uFF0CPython \u5C31\u662F\u4EBA\u5DE5\u667A\u80FD\u7684\u5165\u95E8\u57FA\u7840\u3002</p><p>\u5E9F\u8BDD\u5C11\u8BF4\uFF0C\u60A6\u521B\u73B0\u5728\u5C31\u5E26\u4F60\u611F\u53D7\u4E00\u4E0B\u4F7F\u7528 Python \u5B9E\u73B0\u4EBA\u5DE5\u667A\u80FD\u3002</p><p>\u6709\u4E86 Python\uFF0C\u4F60\u4E0D\u5149\u53EF\u4EE5\u548C<strong>\u4EBA\u7C7B</strong>\u5BF9\u8BDD\uFF0C\u8FD8\u53EF\u4EE5\u548C<strong>\u673A\u5668\u4EBA</strong>\u5BF9\u8BDD\uFF0C\u53EF\u522B\u5C0F\u77A7\u4E86\u673A\u5668\u4EBA\u7684\u667A\u5546~</p><p><img src="'+r+`" alt="img" loading="lazy"></p><p>\u6211\u4EEC\u6765\u8BD5\u7740\u548C\u53EF\u7231\u7684\u673A\u5668\u4EBA\uFF0C\u60A6\u521B\u5B9D\u5B9D\u8BF4\u8BF4\u8BDD\u5427~</p><p>\u9996\u5148\uFF0C\u73B0\u5728\u4F60\u7535\u8111\u7684\u547D\u4EE4\u884C\u8F93\u5165\u5982\u4E0B\u547D\u4EE4\u5B89\u88C5\u6211\u5F00\u53D1\u7684\u5E93\uFF1A</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>pip install TuringRobots
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5B89\u88C5\u4E4B\u540E\uFF0C\u5982\u4E0B\u4EE3\u7801\u4F7F\u7528\uFF1A</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">from</span> TuringRobots <span class="token keyword">import</span> TuringRobots

times <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\u4F60\u597D\uFF0C\u6211\u662F\u804A\u5929\u673A\u5668\u4EBA-\u5C0F\u60A6\u3002\\n\u6709\u4EBA\u8BF4\u6211\u670910\u5C81\u4EBA\u7C7B\u7684\u667A\u5546\uFF0C\u4F60\u60F3\u8BD5\u8BD5\u5417\uFF1F\\n\u6211\u53EF\u4EE5\u56DE\u7B54\u4F603\u4E2A\u95EE\u9898\uFF0C\u6765\u5427\u3002&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
    userinput <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;\u7B2C{}\u4E2A\u95EE\u9898\uFF1A&#39;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>times<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\u5C0F\u60A6\uFF1A&#39;</span> <span class="token operator">+</span> TuringRobots<span class="token punctuation">(</span>userinput<span class="token punctuation">,</span> over_print<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> userinput <span class="token operator">==</span> <span class="token string">&#39;\u518D\u89C1&#39;</span> <span class="token keyword">or</span> times <span class="token operator">&gt;=</span> <span class="token number">3</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;\u5C0F\u60A6\uFF1A\u6211\u8981\u8D70\u4E86\uFF0C\u795D\u4F60\u5B66\u5F97\u5FEB\u4E50\uFF0C\u518D\u89C1\uFF01&#39;</span><span class="token punctuation">)</span>
        <span class="token keyword">break</span>
    times <span class="token operator">+=</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8F93\u51FA\u793A\u4F8B\uFF1A</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>\u4F60\u597D\uFF0C\u6211\u662F\u804A\u5929\u673A\u5668\u4EBA<span class="token operator">-</span>\u5C0F\u60A6\u3002
\u6709\u4EBA\u8BF4\u6211\u6709<span class="token number">10</span>\u5C81\u4EBA\u7C7B\u7684\u667A\u5546\uFF0C\u4F60\u60F3\u8BD5\u8BD5\u5417\uFF1F
\u6211\u53EF\u4EE5\u56DE\u7B54\u4F60<span class="token number">3</span>\u4E2A\u95EE\u9898\uFF0C\u6765\u5427\u3002
\u7B2C<span class="token number">1</span>\u4E2A\u95EE\u9898\uFF1A\u4F60\u662F\u8C01\uFF1F
\u5C0F\u60A6\uFF1A\u5728\u4E0B\u56FE\u7075\u673A\u5668\u4EBA\uFF0C\u8BF7\u591A\u591A\u6307\u6559\u3002
\u7B2C<span class="token number">2</span>\u4E2A\u95EE\u9898\uFF1A\u4F60\u662F\u8C01\uFF1F
\u5C0F\u60A6\uFF1A\u806A\u660E\u53C8\u5584\u89E3\u4EBA\u610F\u7684\u5C0F\u60A6\u5C31\u662F\u6211\u4E86
\u7B2C<span class="token number">3</span>\u4E2A\u95EE\u9898\uFF1A\u518D\u89C1
\u5C0F\u60A6\uFF1A\u4F60\u662F\u8981\u5148\u6E9C\u4E86\u5417\uFF1F
\u5C0F\u60A6\uFF1A\u6211\u8981\u8D70\u4E86\uFF0C\u795D\u4F60\u5B66\u5F97\u5FEB\u4E50\uFF0C\u518D\u89C1\uFF01

Process finished <span class="token keyword">with</span> exit code <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u521A\u624D\u548C\u4F60\u804A\u5929\u7684\u662F\u4E00\u4E2A10\u5C81\u4EBA\u7C7B\u667A\u5546\u7684\u673A\u5668\u4EBA\uFF0C\u662F\u4E0D\u662F\u8FD8\u86EE\u6709\u8DA3\u7684\uFF1F</p><p>\u533A\u533A\u51E0\u884C\u4EE3\u7801\u5C31\u80FD\u505A\u51FA\u4E00\u4E2A\u673A\u5668\u4EBA\uFF1FPython\u5C31\u662F\u8FD9\u4E48\u7B80\u5355\u6613\u5B66\uFF01</p><p>\u5F53\u7136\uFF0C\u7B80\u5355\u6613\u5B66\u5E76\u4E0D\u5F71\u54CD Python \u7684\u5F3A\u5927\uFF0C\u5728\u4FE1\u606F\u65F6\u4EE3\uFF0C\u5728\u4EBA\u5DE5\u667A\u80FD\u3001\u6570\u636E\u5206\u6790\u3001\u81EA\u52A8\u5316\u63A7\u5236\u3001\u7CFB\u7EDF\u5F00\u53D1\u7B49\u5404\u4E2A\u9886\u57DF\u90FD\u6709 Python \u7684\u8EAB\u5F71\u3002</p><p><img src="`+c+'" alt="img" loading="lazy"></p><p>\u8FD9\u4E9B\u90FD\u662F\u80FD\u7528 Python \u5B9E\u73B0\u7684\uFF0C\u751A\u81F3\u8FD8\u4E0D\u6B62\u8FD9\u4E9B\u3002\u76F8\u4FE1\u5C4F\u5E55\u524D\u7684\u4F60\u6B64\u523B\u5DF2\u7ECF\u6697\u6697\u7ACB\u4E0B\u4E86\u76EE\u6807\uFF0C\u5F53\u7136\uFF0C\u65E0\u8BBA\u4F60\u60F3\u9009\u62E9\u4EC0\u4E48\u65B9\u5411\uFF0C\u90FD\u5F97\u5148\u624E\u624E\u5B9E\u5B9E\u7684\u6253\u597D Python \u57FA\u7840\u3002</p><p>\u90A3\u5B66\u8FD9\u4E2A\u5230\u5E95\u8D5A\u4E0D\u8D5A\u94B1\u5462\uFF1F\u5F53\u7136\uFF01\u5C97\u4F4D\u9700\u6C42\u91CF\u975E\u5E38\u5927\uFF0C\u5728\u8FD9\u4E2A\u4EBA\u624D\u8FC7\u5269\u7684\u65F6\u4EE3\uFF0C\u5404\u5927\u516C\u53F8\u8FD8\u662F\u75AF\u72C2\u7684\u5728\u5BFB\u89C5\u61C2\u7F16\u7A0B\u548C\u4EBA\u5DE5\u667A\u80FD\u7684\u5458\u5DE5\uFF0C\u5E76\u4E14\u7ED9\u51FA\u76F8\u5F53\u4E30\u539A\u7684\u5DE5\u8D44\uFF01</p><p><img src="'+d+'" alt="img" loading="lazy"></p><p><img src="'+u+'" alt="img" loading="lazy"></p><p>\u4E0D\u5149\u6280\u672F\u4EBA\u5458\uFF0C\u5728\u5982\u4ECA\u81EA\u52A8\u5316\u529E\u516C\u7684\u8D8B\u52BF\u4E0B\uFF0C\u5F88\u591A\u975E\u6280\u672F\u4EBA\u5458\u4EE5\u53CA\u4E1A\u754C\u5927\u4F6C\uFF0C\u4E5F\u90FD\u5F00\u59CB\u4E86 Python \u4E4B\u65C5\uFF0C\u6BD4\u5982\u9500\u552E\u3001\u8D22\u52A1\u3001\u8FD0\u8425\u3001\u5206\u6790\u5E08\u7B49\u3002</p><p>\u6240\u4EE5\uFF0C\u4F60\u4E0D\u7528\u62C5\u5FC3\u81EA\u5DF1\u5B66\u4E0D\u4F1A\uFF0C\u65E0\u6CD5\u5C31\u4E1A\uFF0C\u6216\u8005\u4E0D\u9002\u5408\u81EA\u5DF1\uFF0C\u5927\u80C6\u7684\u8FC8\u51FA\u7B2C\u4E00\u6B65\u5427\uFF0C\u76F8\u4FE1\u4F60\u5728\u5C0F\u60A6\u7684\u5E26\u9886\u4E0B\uFF0C\u4E00\u5B9A\u80FD\u638C\u63E1\u8FD9\u4E2A\u6709\u8DA3\u5F3A\u5927\u7684\u6280\u80FD\u3002</p><p>\u63A5\u4E0B\u6765\u6211\u4EEC\u4F1A\u8BB2\u57FA\u7840\u77E5\u8BC6\uFF0C\u6BD4\u5982\u3010print \u51FD\u6570\u3011\u3001\u3010\u53D8\u91CF\u3011\u3001\u3010\u6570\u636E\u7C7B\u578B\u3011\u3001\u3010input \u51FD\u6570\u3011\u7B49\u7B49\uFF0C\u8D77\u521D\u7684\u77E5\u8BC6\u4F1A\u6BD4\u8F83\u7B80\u5355\uFF0C\u5927\u5BB6\u53EF\u4EE5\u5F88\u5FEB\u5B66\u4F1A\u5E76\u4E14\u4E0A\u624B\u7EC3\u4E60\u3002</p><p>\u7B49\u5B66\u5230\u540E\u9762\uFF0C\u4F60\u4EEC\u5C31\u53EF\u4EE5\u7528\u5404\u79CD\u6A21\u5757\u548C\u5E93\uFF0C\u968F\u5FC3\u6240\u6B32\u5B9E\u73B0\u4F60\u7684\u9700\u6C42\u5566~</p><p>\u5728\u6B63\u5F0F\u5F00\u59CB\u8BFE\u7A0B\u4E4B\u524D\uFF0C\u8FD9\u91CC\u8FD8\u6709\u975E\u5E38\u597D\u7528\u7684\u5B66 Python \u4E09\u5927\u6B66\u5668\uFF0C\u4E00\u5B9A\u8981\u975E\u5E38\u8BA4\u771F\u7684\u9605\u8BFB\u3002</p>',26),b={id:"\u7B2C\u4E00\u5927\u6B66\u5668-\u5728\u7EBF\u7F16\u8F91\u5668-https-py-bornforthis-cn",tabindex:"-1"},h=n("a",{class:"header-anchor",href:"#\u7B2C\u4E00\u5927\u6B66\u5668-\u5728\u7EBF\u7F16\u8F91\u5668-https-py-bornforthis-cn","aria-hidden":"true"},"#",-1),_=s(" \u7B2C\u4E00\u5927\u6B66\u5668\uFF1A"),g={href:"https://py.bornforthis.cn/#/",target:"_blank",rel:"noopener noreferrer"},y=s("\u5728\u7EBF\u7F16\u8F91\u5668"),f=s("\uFF1A"),x={href:"https://py.bornforthis.cn/#/",target:"_blank",rel:"noopener noreferrer"},P=s("https://py.bornforthis.cn/#/"),w=n("p",null,[n("img",{src:m,alt:"image-20220620162931624",loading:"lazy"})],-1),T=n("p",null,"\u5728\u57FA\u7840\u8BFE\u9636\u6BB5\uFF0C\u6211\u4EEC\u7EDF\u4E00\u4F7F\u7528\u7EBF\u4E0A\u7F16\u7A0B\u73AF\u5883\uFF0C\u53EF\u4EE5\u8282\u7701\u6389\u7E41\u7410\u7684\u5B89\u88C5\u6B65\u9AA4~\u7B49\u5B66\u597D\u4E86\u518D\u5B89\u88C5\u4E5F\u4E0D\u665A\u3002",-1),z=n("p",null,[s("\u6B64\u5904\u5212\u91CD\u70B9---\u5728\u7A0B\u5E8F\u5458\u7684\u795E\u79D8\u4E16\u754C\uFF0C\u4E0A\u56FE\u88AB\u79F0\u4E3A\u3010\u7F16\u8F91\u5668\u3011\uFF0C\u5DE6\u4E0A\u6846\u53EB\u3010\u4EE3\u7801\u7F16\u8F91\u533A\u3011\uFF0C\u53EF\u4EE5\u5199\u4EE3\u7801\uFF0C\u5DE6\u4E0B\u7684\u6846\u53EB\u3010\u7EC8\u7AEF\u3011\uFF0C\u53EF\u4EE5\u663E\u793A\u4EE3\u7801\u8FD0\u884C\u4E4B\u540E\u7684\u4E1C\u897F\u3002\u8BB0\u4F4F\u4EE5\u540E\u5C31\u53EF\u4EE5\u548C\u7A0B\u5E8F\u5458 battle \u5566o("),n("em",null,"\uFFE3\u25BD\uFFE3"),s(")\u30D6\u3002\u53F3\u8FB9\u662F\u4E3A\u4E86\u7ED9\u5C0F\u76C6\u53CB\u8BBE\u8BA1\u7684\u6E32\u67D3 turtle \u5E93\u3002")],-1),N=n("p",null,"\u5728\u4EE3\u7801\u6846\u5199\u597D\u4EE3\u7801\u4E4B\u540E\uFF0C\u6211\u4EEC\u70B9\u51FB**\u3010\u5F00\u59CB\u3011**\u6309\u94AE\uFF0C\u5982\u679C\u8FD0\u884C\u5931\u8D25\uFF0C\u53EF\u4EE5\u7559\u8A00\u5E76\u81EA\u884C debug \u4E00\u6CE2\uFF0C\u5F53\u7136\u4F60\u4E5F\u53EF\u4EE5\u9009\u62E9\u8DF3\u8FC7\uFF0C\u7EE7\u7EED\u5B66\u4E60\u540E\u7EED\u5185\u5BB9\u3002",-1),R=n("p",null,"\u9047\u5230\u4E0D\u4F1A\u7684\u95EE\u9898\uFF0C\u53EF\u4EE5\u70B9**\u3010\u6C42\u52A9\u3011**\u6309\u94AE\uFF0C\u626B\u7801\u5206\u4EAB\u5230\u5FAE\u4FE1\u7FA4\uFF0C\u52A9\u6559\u5C31\u53EF\u4EE5\u770B\u5230\u4F60\u7684\u4EE3\u7801\u5E2E\u4F60\u89E3\u7B54\u3002",-1);function V(B,E){const a=p("ExternalLinkIcon");return o(),i("div",null,[v,n("h2",b,[h,_,n("a",g,[y,e(a)]),f,n("a",x,[P,e(a)])]),w,T,z,N,R])}var L=t(k,[["render",V],["__file","index.html.vue"]]);export{L as default};
