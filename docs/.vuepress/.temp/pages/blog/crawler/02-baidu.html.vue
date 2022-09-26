<template><div><p>有兴趣的可以自行部署在服务器上，做成每日自动提交，或者 webhook 触发等。</p>
<p>百度提交页面：<a href="https://ziyuan.baidu.com/linksubmit/index" target="_blank" rel="noopener noreferrer">https://ziyuan.baidu.com/linksubmit/index<ExternalLinkIcon/></a></p>
<p>通过此页面可以向百度搜索主动推送资源，同时百度也提供了 API 提交接口，这样可以缩短爬虫发现网站链接的时间，但百度不保证收录和展现效果。</p>
<p>以本站为例，百度提供了 API 提交的样例参数。</p>
<h2 id="推送脚本" tabindex="-1"><a class="header-anchor" href="#推送脚本" aria-hidden="true">#</a> 推送脚本</h2>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">import</span> requests
<span class="token keyword">import</span> re


<span class="token comment"># 根据站点地图获取链接</span>
<span class="token keyword">def</span> <span class="token function">get_urls</span><span class="token punctuation">(</span>sitemap<span class="token punctuation">)</span><span class="token punctuation">:</span>
    response <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token operator">=</span>sitemap<span class="token punctuation">)</span>
    urls <span class="token operator">=</span> re<span class="token punctuation">.</span>findall<span class="token punctuation">(</span><span class="token string">'&lt;loc>(.*?)&lt;/loc>'</span><span class="token punctuation">,</span> response<span class="token punctuation">.</span>text<span class="token punctuation">)</span>
    <span class="token keyword">return</span> urls


<span class="token comment"># 推送百度 (参数：网站网址，token，网站站点地图)</span>
<span class="token keyword">def</span> <span class="token function">submit_baidu</span><span class="token punctuation">(</span>site<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">,</span> token<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">,</span> sitemap<span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    msg <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    url_list <span class="token operator">=</span> get_urls<span class="token punctuation">(</span>sitemap<span class="token punctuation">)</span>
    <span class="token comment"># print(url_list)</span>
    url_content <span class="token operator">=</span> <span class="token string">"\n"</span><span class="token punctuation">.</span>join<span class="token punctuation">(</span>url_list<span class="token punctuation">)</span>
    response <span class="token operator">=</span> requests<span class="token punctuation">.</span>post<span class="token punctuation">(</span>url<span class="token operator">=</span><span class="token string-interpolation"><span class="token string">f"http://data.zz.baidu.com/urls?site=</span><span class="token interpolation"><span class="token punctuation">{</span>site<span class="token punctuation">}</span></span><span class="token string">&amp;token=</span><span class="token interpolation"><span class="token punctuation">{</span>token<span class="token punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">,</span>
                             headers<span class="token operator">=</span><span class="token punctuation">{</span>
                                 <span class="token string">"User-Agent"</span><span class="token punctuation">:</span> <span class="token string">"curl/7.12.1"</span><span class="token punctuation">,</span>
                                 <span class="token string">"Host"</span><span class="token punctuation">:</span> <span class="token string">"data.zz.baidu.com"</span><span class="token punctuation">,</span>
                                 <span class="token string">"Content-Type"</span><span class="token punctuation">:</span> <span class="token string">"text/plain"</span><span class="token punctuation">,</span>
                                 <span class="token string">"Content-Length"</span><span class="token punctuation">:</span> <span class="token string">"83"</span>
                             <span class="token punctuation">}</span><span class="token punctuation">,</span>
                             data<span class="token operator">=</span>url_content
                             <span class="token punctuation">)</span>
    <span class="token keyword">if</span> response<span class="token punctuation">.</span>status_code <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">:</span>
        data <span class="token operator">=</span> response<span class="token punctuation">.</span>json<span class="token punctuation">(</span><span class="token punctuation">)</span>
        msg<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f"成功推送的 url 条数 </span><span class="token interpolation"><span class="token punctuation">{</span>data<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">'success'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">)</span>
        msg<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f"当天剩余的可推送url条数 </span><span class="token interpolation"><span class="token punctuation">{</span>data<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">'remain'</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">)</span>
        msg<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f'今日推送的 url 列表:'</span></span><span class="token punctuation">)</span>

        <span class="token keyword">for</span> url <span class="token keyword">in</span> url_list<span class="token punctuation">:</span>
            msg<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f"</span><span class="token interpolation"><span class="token punctuation">{</span>url<span class="token punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> data<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">'not_same_site'</span><span class="token punctuation">)</span> <span class="token keyword">is</span> <span class="token keyword">not</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
            msg<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token string">'由于不是本站url而未处理的url列表:'</span><span class="token punctuation">)</span>
            <span class="token keyword">for</span> url <span class="token keyword">in</span> data<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">'not_same_site'</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
                msg<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f"</span><span class="token interpolation"><span class="token punctuation">{</span>url<span class="token punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">)</span>
        <span class="token keyword">if</span> data<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">'not_valid'</span><span class="token punctuation">)</span> <span class="token keyword">is</span> <span class="token keyword">not</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
            msg<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token string">'不合法的url列表:'</span><span class="token punctuation">)</span>
            <span class="token keyword">for</span> url <span class="token keyword">in</span> data<span class="token punctuation">.</span>get<span class="token punctuation">(</span><span class="token string">'not_valid'</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
                msg<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f"</span><span class="token interpolation"><span class="token punctuation">{</span>url<span class="token punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">)</span>

    <span class="token keyword">else</span><span class="token punctuation">:</span>
        msg<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f'推送失败\n</span><span class="token interpolation"><span class="token punctuation">{</span>response<span class="token punctuation">.</span>json<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token string">'</span></span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> msg


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">'__main__'</span><span class="token punctuation">:</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        info <span class="token operator">=</span> submit_baidu<span class="token punctuation">(</span>site<span class="token operator">=</span><span class="token string">'https://bornforthis.cn'</span><span class="token punctuation">,</span> token<span class="token operator">=</span><span class="token string">'rJcdDY5O4W9rd9eG'</span><span class="token punctuation">,</span>
                            sitemap<span class="token operator">=</span><span class="token string">'https://www.bornforthis.cn/sitemap.xml'</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'\n'</span><span class="token punctuation">.</span>join<span class="token punctuation">(</span>info<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">except</span> Exception <span class="token keyword">as</span> e<span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>e<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="进阶版本代码" tabindex="-1"><a class="header-anchor" href="#进阶版本代码" aria-hidden="true">#</a> 进阶版本代码</h2>
<p>使用前需要注意替换真实参数：</p>
<ul>
<li>site</li>
<li>token</li>
<li>sitemap_path</li>
</ul>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token comment"># -*- coding: UTF-8 -*-</span>

<span class="token keyword">import</span> requests
<span class="token keyword">import</span> json
<span class="token keyword">import</span> re


<span class="token keyword">class</span> <span class="token class-name">Pusher</span><span class="token punctuation">:</span>
    <span class="token comment"># 初始化参数</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> site<span class="token punctuation">,</span> token<span class="token punctuation">,</span> sitemap_path<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>site <span class="token operator">=</span> site
        self<span class="token punctuation">.</span>token <span class="token operator">=</span> token
        self<span class="token punctuation">.</span>sitemap_path <span class="token operator">=</span> sitemap_path

    <span class="token comment"># 批量提交 url</span>
    <span class="token keyword">def</span> <span class="token function">post</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> urls<span class="token punctuation">)</span><span class="token punctuation">:</span>
        post_url <span class="token operator">=</span> <span class="token string-interpolation"><span class="token string">f"http://data.zz.baidu.com/urls?site=</span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>site<span class="token punctuation">}</span></span><span class="token string">&amp;token=</span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>token<span class="token punctuation">}</span></span><span class="token string">"</span></span>
        headers <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token string">'User-Agent'</span><span class="token punctuation">:</span> <span class="token string">'curl/7.12.1'</span><span class="token punctuation">,</span>
            <span class="token string">'Host'</span><span class="token punctuation">:</span> <span class="token string">'data.zz.baidu.com'</span><span class="token punctuation">,</span>
            <span class="token string">'Content-Type'</span><span class="token punctuation">:</span> <span class="token string">'text/plain'</span><span class="token punctuation">,</span>
            <span class="token string">'Content-Length'</span><span class="token punctuation">:</span> <span class="token builtin">str</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>urls<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
        response <span class="token operator">=</span> requests<span class="token punctuation">.</span>post<span class="token punctuation">(</span>post_url<span class="token punctuation">,</span> headers<span class="token operator">=</span>headers<span class="token punctuation">,</span> data<span class="token operator">=</span>urls<span class="token punctuation">)</span>

        <span class="token keyword">if</span> response<span class="token punctuation">.</span>status_code <span class="token operator">!=</span> <span class="token number">200</span><span class="token punctuation">:</span>
            msg_s <span class="token operator">=</span> <span class="token string-interpolation"><span class="token string">f"推送失败（异常状态码）：</span><span class="token interpolation"><span class="token punctuation">{</span>response<span class="token punctuation">.</span>status_code<span class="token punctuation">}</span></span><span class="token string">\n</span><span class="token interpolation"><span class="token punctuation">{</span>response<span class="token punctuation">.</span>json<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token string">"</span></span>
            <span class="token keyword">print</span><span class="token punctuation">(</span>msg_s<span class="token punctuation">)</span>
            <span class="token keyword">return</span> <span class="token boolean">None</span>
        response <span class="token operator">=</span> response<span class="token punctuation">.</span>text
        response <span class="token operator">=</span> json<span class="token punctuation">.</span>loads<span class="token punctuation">(</span>response<span class="token punctuation">)</span>

        <span class="token keyword">if</span> <span class="token string">"error"</span> <span class="token keyword">in</span> response<span class="token punctuation">:</span>
            msg_s <span class="token operator">=</span> <span class="token string-interpolation"><span class="token string">f"推送失败（error）:\n</span><span class="token interpolation"><span class="token punctuation">{</span>response<span class="token punctuation">}</span></span><span class="token string">"</span></span>
            <span class="token keyword">print</span><span class="token punctuation">(</span>msg_s<span class="token punctuation">)</span>
            <span class="token keyword">return</span> <span class="token boolean">None</span>

        <span class="token keyword">if</span> <span class="token string">"success"</span> <span class="token keyword">not</span> <span class="token keyword">in</span> response<span class="token punctuation">:</span>
            msg_s <span class="token operator">=</span> <span class="token string-interpolation"><span class="token string">f"推送异常（百度已更改返回体格式）:\n</span><span class="token interpolation"><span class="token punctuation">{</span>response<span class="token punctuation">}</span></span><span class="token string">"</span></span>
            <span class="token keyword">print</span><span class="token punctuation">(</span>msg_s<span class="token punctuation">)</span>
            <span class="token keyword">return</span> <span class="token boolean">None</span>

        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f"已成功推送 </span><span class="token interpolation"><span class="token punctuation">{</span>response<span class="token punctuation">[</span><span class="token string">'success'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span><span class="token string"> 条 url"</span></span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f"当天剩余的可推送 url 条数 ---> </span><span class="token interpolation"><span class="token punctuation">{</span>response<span class="token punctuation">[</span><span class="token string">'remain'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f"由于不是本站url而未处理的 url 列表:</span><span class="token interpolation"><span class="token punctuation">{</span>response<span class="token punctuation">[</span><span class="token string">'not_same_site'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f"不合法的 url 列表:</span><span class="token interpolation"><span class="token punctuation">{</span>response<span class="token punctuation">[</span><span class="token string">'not_valid'</span><span class="token punctuation">]</span><span class="token punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token boolean">None</span>

    <span class="token comment"># 获取站点 sitemap.xml 文件内容, 解析 url</span>
    <span class="token keyword">def</span> <span class="token function">get_url_from_sitemap</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        url <span class="token operator">=</span> <span class="token string-interpolation"><span class="token string">f"</span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>site<span class="token punctuation">}</span></span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>sitemap_path<span class="token punctuation">}</span></span><span class="token string">"</span></span>
        headers <span class="token operator">=</span> <span class="token punctuation">{</span>
            <span class="token string">'User-Agent'</span><span class="token punctuation">:</span> <span class="token string">'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/86.0.4240.198 Safari/537.36'</span><span class="token punctuation">,</span>
        <span class="token punctuation">}</span>
        response <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">,</span> headers<span class="token operator">=</span>headers<span class="token punctuation">)</span>

        <span class="token keyword">if</span> response<span class="token punctuation">.</span>status_code <span class="token operator">!=</span> <span class="token number">200</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f"获取站点 xml 文件失败（异常状态码）：</span><span class="token interpolation"><span class="token punctuation">{</span>response<span class="token punctuation">.</span>status_code<span class="token punctuation">}</span></span><span class="token string">"</span></span><span class="token punctuation">)</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            exit<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

        sitemap_xml <span class="token operator">=</span> response<span class="token punctuation">.</span>text

        urls <span class="token operator">=</span> re<span class="token punctuation">.</span>findall<span class="token punctuation">(</span><span class="token string">r'&lt;loc>(.*?)&lt;/loc>'</span><span class="token punctuation">,</span> sitemap_xml<span class="token punctuation">,</span> re<span class="token punctuation">.</span>S<span class="token punctuation">)</span>

        <span class="token keyword">if</span> urls <span class="token keyword">is</span> <span class="token boolean">None</span> <span class="token keyword">or</span> urls <span class="token operator">==</span> <span class="token punctuation">[</span><span class="token punctuation">]</span> <span class="token keyword">or</span> urls <span class="token operator">==</span> <span class="token string">""</span><span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f"解析 url 失败（该站点不存在 sitemap.xml 或内容为空）"</span></span><span class="token punctuation">)</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
            exit<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>

        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f"获取站点 xml 文件成功, 共有：</span><span class="token interpolation"><span class="token punctuation">{</span><span class="token builtin">len</span><span class="token punctuation">(</span>urls<span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token string"> 条 url"</span></span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>urls<span class="token punctuation">)</span>
        <span class="token keyword">return</span> urls

    <span class="token comment"># 入口</span>
    <span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        urls <span class="token operator">=</span> <span class="token string">"\n"</span><span class="token punctuation">.</span>join<span class="token punctuation">(</span>self<span class="token punctuation">.</span>get_url_from_sitemap<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>post<span class="token punctuation">(</span>urls<span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">'__main__'</span><span class="token punctuation">:</span>
    <span class="token comment"># 站点</span>
    site <span class="token operator">=</span> <span class="token string">"https://bornforthis.cn"</span>
    <span class="token comment"># 百度提交页面提供的 token</span>
    token <span class="token operator">=</span> <span class="token string">"rJcdDY5O4W9rd9eG"</span>
    <span class="token comment"># 站点 sitemap uri</span>
    <span class="token comment"># sitemap_path = "/zh-cn/sitemap.xml"</span>
    sitemap_path <span class="token operator">=</span> <span class="token string">"/sitemap.xml"</span>

    pusher <span class="token operator">=</span> Pusher<span class="token punctuation">(</span>site<span class="token punctuation">,</span> token<span class="token punctuation">,</span> sitemap_path<span class="token punctuation">)</span>
    pusher<span class="token punctuation">.</span>main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="参考文件" tabindex="-1"><a class="header-anchor" href="#参考文件" aria-hidden="true">#</a> 参考文件</h2>
<ul>
<li><a href="https://ziyuan.baidu.com/college/courseinfo?id=267&amp;page=3s" target="_blank" rel="noopener noreferrer">https://ziyuan.baidu.com/college/courseinfo?id=267&amp;page=3s<ExternalLinkIcon/></a></li>
<li></li>
</ul>
<p>欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">import</span> requests
<span class="token keyword">import</span> re
<span class="token keyword">import</span> time
headers <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">'User-Agent'</span><span class="token punctuation">:</span> <span class="token string">'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/87.0.4280.141 Safari/537.36,'</span><span class="token punctuation">,</span>
    <span class="token string">'Host'</span><span class="token punctuation">:</span> <span class="token string">'data.zz.baidu.com'</span><span class="token punctuation">,</span>
    <span class="token string">'Content-Length'</span><span class="token punctuation">:</span><span class="token string">'83'</span>
<span class="token punctuation">}</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"*"</span><span class="token operator">*</span><span class="token number">30</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'links.txt示例:\nhttps://xxxxx.html\nhttps://xxxxx.html\nhttps://xxxxx.html\nhttps://xxxxx.html'</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"*"</span><span class="token operator">*</span><span class="token number">30</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'api示例:\nhttp://data.zz.baidu.com/urls?site=xxxxxxxxxxx'</span><span class="token punctuation">)</span>
push_num <span class="token operator">=</span> <span class="token number">1</span>
<span class="token keyword">while</span> push_num <span class="token operator">&lt;</span> <span class="token number">9999</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> push_num <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">:</span>
        answer <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">"请问你是否已经将链接填入links.txt，api填入api.txt中呢，如果是则回答1\n"</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> answer <span class="token operator">==</span> <span class="token string">'1'</span><span class="token punctuation">:</span>
        <span class="token keyword">try</span><span class="token punctuation">:</span>
            <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">'links.txt'</span><span class="token punctuation">,</span> <span class="token string">'r'</span><span class="token punctuation">)</span> <span class="token keyword">as</span> links<span class="token punctuation">:</span>
                links <span class="token operator">=</span> links<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">except</span> FileNotFoundError<span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"links.txt文件不存在"</span><span class="token punctuation">)</span>
        <span class="token keyword">try</span><span class="token punctuation">:</span>
            <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">'api.txt'</span><span class="token punctuation">,</span> <span class="token string">'r'</span><span class="token punctuation">)</span> <span class="token keyword">as</span> api<span class="token punctuation">:</span>
                api <span class="token operator">=</span> api<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">except</span> FileNotFoundError<span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"links.txt文件不存在"</span><span class="token punctuation">)</span>

        <span class="token keyword">def</span> <span class="token function">thinklink</span><span class="token punctuation">(</span>links<span class="token punctuation">,</span> api<span class="token punctuation">)</span><span class="token punctuation">:</span>
            <span class="token keyword">if</span> links <span class="token operator">==</span> <span class="token string">''</span><span class="token punctuation">:</span>
                <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"links.txt文件为空"</span><span class="token punctuation">)</span>
            <span class="token keyword">else</span><span class="token punctuation">:</span>
                <span class="token keyword">if</span> api <span class="token operator">==</span> <span class="token string">''</span><span class="token punctuation">:</span>
                    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'api.txt为空'</span><span class="token punctuation">)</span>
                <span class="token keyword">else</span><span class="token punctuation">:</span>
                    <span class="token keyword">try</span><span class="token punctuation">:</span>
                        html_result <span class="token operator">=</span> requests<span class="token punctuation">.</span>post<span class="token punctuation">(</span>api<span class="token punctuation">,</span> headers<span class="token operator">=</span>headers<span class="token punctuation">,</span> timeout<span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">,</span> data<span class="token operator">=</span>links<span class="token punctuation">)</span><span class="token punctuation">.</span>text
                        <span class="token keyword">return</span> html_result
                    <span class="token keyword">except</span><span class="token punctuation">:</span>
                        <span class="token keyword">return</span> <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"失败"</span><span class="token punctuation">)</span>
        push_result <span class="token operator">=</span> thinklink<span class="token punctuation">(</span>links<span class="token punctuation">,</span> api<span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'提交完成:'</span><span class="token operator">+</span>push_result<span class="token punctuation">)</span>
        surplus_push_num <span class="token operator">=</span> re<span class="token punctuation">.</span>findall<span class="token punctuation">(</span><span class="token string">'"remain":(.*),"'</span><span class="token punctuation">,</span> push_result<span class="token punctuation">)</span>
        surplus_push_num <span class="token operator">=</span> surplus_push_num<span class="token punctuation">.</span>pop<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'剩余'</span> <span class="token operator">+</span> surplus_push_num <span class="token operator">+</span> <span class="token string">'次提交机会'</span><span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"请将内容填充!5秒钟后自动关闭"</span><span class="token punctuation">)</span>
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
        <span class="token keyword">break</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">'*'</span><span class="token operator">*</span><span class="token number">30</span><span class="token punctuation">)</span>
    new_answer <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">"是否还需要提交，如果是的话请先去更改一下相应文件，如果是请输入1,如果否请输入0\n"</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> new_answer <span class="token operator">==</span> <span class="token string">'0'</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"提交结束,5秒钟后自动关闭"</span><span class="token punctuation">)</span>
        time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span>
        <span class="token keyword">break</span>
    push_num <span class="token operator">+=</span> <span class="token number">1</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"现在开始第"</span><span class="token operator">+</span><span class="token builtin">str</span><span class="token punctuation">(</span>push_num<span class="token punctuation">)</span><span class="token operator">+</span><span class="token string">'次提交'</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>需要在 python 文件新建两个 txt 文件，分别放 token 和链接。</p>
<p>然后其实就可以直接双击打开 python 文件进行提交了。如果有什么疑问可以直接问。</p>
<p>利用 python 向百度推送网站链接</p>
<p>欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！</p>
<details class="custom-container details"><summary>公众号：AI悦创【二维码】</summary>
<p><img src="/gzh.jpg" alt="" loading="lazy"></p>
</details>
<div class="custom-container info">
<p class="custom-container-title">AI悦创·编程一对一</p>
<p>AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh</p>
<p>C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh</p>
<p>方法一：<a href="http://wpa.qq.com/msgrd?v=3&amp;uin=1432803776&amp;site=qq&amp;menu=yes" target="_blank" rel="noopener noreferrer">QQ<ExternalLinkIcon/></a></p>
<p>方法二：微信：Jiabcdefh</p>
</div>
<p><img src="/zsxq.jpg" alt="" loading="lazy"></p>
</div></template>


