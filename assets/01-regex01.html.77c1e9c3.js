import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o as t,c as p,a as n,b as o,d as s,e as l,r as i}from"./app.b77b2410.js";const c={},u=n("h2",{id:"_1-\u9700\u6C42",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-\u9700\u6C42","aria-hidden":"true"},"#"),s(" 1. \u9700\u6C42")],-1),r=s("\u6293\u53D6\u76EE\u6807\u7F51\u7AD9\uFF1A"),d={href:"https://bornforthis.cn/web_runing/crawler/regex/index.html",target:"_blank",rel:"noopener noreferrer"},k=s("https://bornforthis.cn/web_runing/crawler/regex/index.html"),v=n("li",null,[s("\u6280\u672F\u9650\u5236\uFF1A "),n("ol",null,[n("li",null,"requests"),n("li",null,"re"),n("li",null,"Python \u57FA\u7840\u8BED\u6CD5")])],-1),m=n("li",null,"\u6293\u53D6\u76EE\u6807\u97F3\u4E50",-1),b=n("li",null,"\u5B58\u50A8\u5236\u5B9A\u8DEF\u5F84\uFF1A/data/music/",-1),_=l(`<h2 id="_2-\u5BFC\u5165\u6240\u9700\u5E93" tabindex="-1"><a class="header-anchor" href="#_2-\u5BFC\u5165\u6240\u9700\u5E93" aria-hidden="true">#</a> 2. \u5BFC\u5165\u6240\u9700\u5E93</h2><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> requests
<span class="token keyword">import</span> re
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-\u7F16\u5199\u4EE3\u7801" tabindex="-1"><a class="header-anchor" href="#_3-\u7F16\u5199\u4EE3\u7801" aria-hidden="true">#</a> 3. \u7F16\u5199\u4EE3\u7801</h2><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> requests
<span class="token keyword">import</span> re
<span class="token keyword">from</span> requests<span class="token punctuation">.</span>exceptions <span class="token keyword">import</span> RequestException
<span class="token keyword">from</span> urllib<span class="token punctuation">.</span>parse <span class="token keyword">import</span> urljoin

BASE <span class="token operator">=</span> <span class="token string">&quot;https://bornforthis.cn/web_runing/crawler/regex/&quot;</span>


<span class="token keyword">def</span> <span class="token function">requests_fun</span><span class="token punctuation">(</span>url<span class="token punctuation">,</span> binary<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        response <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span>
        <span class="token keyword">if</span> response<span class="token punctuation">.</span>status_code <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">:</span>
            <span class="token keyword">if</span> binary<span class="token punctuation">:</span>
                <span class="token keyword">return</span> response<span class="token punctuation">.</span>content
            <span class="token keyword">else</span><span class="token punctuation">:</span>
                <span class="token keyword">return</span> response<span class="token punctuation">.</span>text
        <span class="token keyword">return</span> <span class="token boolean">None</span>
    <span class="token keyword">except</span> RequestException <span class="token keyword">as</span> e<span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token boolean">None</span>


<span class="token keyword">def</span> <span class="token function">save_music</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> binary<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> <span class="token string">&quot;wb&quot;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
        f<span class="token punctuation">.</span>write<span class="token punctuation">(</span>binary<span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">parse</span><span class="token punctuation">(</span>html<span class="token punctuation">)</span><span class="token punctuation">:</span>
    pattern <span class="token operator">=</span> <span class="token string">&#39;&lt;a.*?href=&quot;(.*?)&quot;.*?&lt;/a&gt;&#39;</span>
    result <span class="token operator">=</span> re<span class="token punctuation">.</span>findall<span class="token punctuation">(</span>pattern<span class="token punctuation">,</span> html<span class="token punctuation">)</span>
    <span class="token keyword">return</span> result


<span class="token keyword">def</span> <span class="token function">joint</span><span class="token punctuation">(</span>url_lst<span class="token punctuation">)</span><span class="token punctuation">:</span>
    url_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> url <span class="token keyword">in</span> url_lst<span class="token punctuation">:</span>
        url <span class="token operator">=</span> urljoin<span class="token punctuation">(</span>BASE<span class="token punctuation">,</span> url<span class="token punctuation">)</span>
        url_list<span class="token punctuation">.</span>append<span class="token punctuation">(</span>url<span class="token punctuation">)</span>
    <span class="token keyword">return</span> url_list


<span class="token keyword">def</span> <span class="token function">postfix</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">:</span>
    music_name <span class="token operator">=</span> url<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
    <span class="token keyword">return</span> music_name


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    url <span class="token operator">=</span> <span class="token string">&quot;https://bornforthis.cn/web_runing/crawler/regex/index.html&quot;</span>
    html <span class="token operator">=</span> requests_fun<span class="token punctuation">(</span>url<span class="token punctuation">)</span>
    <span class="token comment"># url_lst = parse(html)</span>
    url_list <span class="token operator">=</span> joint<span class="token punctuation">(</span>parse<span class="token punctuation">(</span>html<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token comment"># print(url_list)</span>
    <span class="token keyword">for</span> url <span class="token keyword">in</span> url_list<span class="token punctuation">:</span>
        <span class="token comment"># print(url)</span>
        binary_content <span class="token operator">=</span> requests_fun<span class="token punctuation">(</span>url<span class="token punctuation">,</span> binary<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
        <span class="token comment"># print(binary_content)</span>
        save_music<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;data/music/</span><span class="token interpolation"><span class="token punctuation">{</span>postfix<span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">,</span> binary_content<span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,4);function h(y,f){const a=i("ExternalLinkIcon");return t(),p("div",null,[u,n("ol",null,[n("li",null,[r,n("a",d,[k,o(a)])]),v,m,b]),_])}var x=e(c,[["render",h],["__file","01-regex01.html.vue"]]);export{x as default};
