import{_ as t}from"./gzh.b03adfd2.js";import{_ as p}from"./zsxq.77f6dc86.js";import{_ as o}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as l,a as n,d as s,b as e,e as c,r as u}from"./app.f3859691.js";const r={},d=n("h2",{id:"_1-需求",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#_1-需求","aria-hidden":"true"},"#"),s(" 1. 需求")],-1),k={href:"https://bornforthis.cn/web_runing/crawler/regex/index.html",target:"_blank",rel:"noopener noreferrer"},v=n("li",null,[s("技术限制： "),n("ol",null,[n("li",null,"requests"),n("li",null,"re"),n("li",null,"Python 基础语法")])],-1),m=n("li",null,"抓取目标音乐",-1),b=n("li",null,"存储制定路径：/data/music/",-1),_=c(`<h2 id="_2-导入所需库" tabindex="-1"><a class="header-anchor" href="#_2-导入所需库" aria-hidden="true">#</a> 2. 导入所需库</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> requests
<span class="token keyword">import</span> re
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-编写代码" tabindex="-1"><a class="header-anchor" href="#_3-编写代码" aria-hidden="true">#</a> 3. 编写代码</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> requests
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
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！</p><details class="custom-container details"><summary>公众号：AI悦创【二维码】</summary><p><img src="`+t+'" alt="" loading="lazy"></p></details>',6),h={class:"custom-container info"},y=n("p",{class:"custom-container-title"},"AI悦创·编程一对一",-1),f=n("p",null,"AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh",-1),w=n("p",null,"C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh",-1),g={href:"http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes",target:"_blank",rel:"noopener noreferrer"},x=n("p",null,"方法二：微信：Jiabcdefh",-1),q=n("p",null,[n("img",{src:p,alt:"",loading:"lazy"})],-1);function E(A,I){const a=u("ExternalLinkIcon");return i(),l("div",null,[d,n("ol",null,[n("li",null,[s("抓取目标网站："),n("a",k,[s("https://bornforthis.cn/web_runing/crawler/regex/index.html"),e(a)])]),v,m,b]),_,n("div",h,[y,f,w,n("p",null,[s("方法一："),n("a",g,[s("QQ"),e(a)])]),x]),q])}const Q=o(r,[["render",E],["__file","01-regex01.html.vue"]]);export{Q as default};
