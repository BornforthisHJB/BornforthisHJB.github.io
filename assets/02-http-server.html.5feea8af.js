import{_ as e}from"./gzh.1edf1a02.js";import{_ as p}from"./zsxq.e43ad827.js";import{_ as o}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c,a as n,d as s,b as t,e as l,r as u}from"./app.6b4237bb.js";const r={},d=l(`<h2 id="背景「background」" tabindex="-1"><a class="header-anchor" href="#背景「background」" aria-hidden="true">#</a> 背景「background」</h2><p>视频：[]</p><h2 id="获取计算机本机局域网-ip" tabindex="-1"><a class="header-anchor" href="#获取计算机本机局域网-ip" aria-hidden="true">#</a> 获取计算机本机局域网 IP</h2><h3 id="方法一" tabindex="-1"><a class="header-anchor" href="#方法一" aria-hidden="true">#</a> 方法一：</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> socket

<span class="token comment"># 获取本机计算机名称</span>
hostname <span class="token operator">=</span> socket<span class="token punctuation">.</span>gethostname<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token comment"># 获取本机ip</span>
ip <span class="token operator">=</span> socket<span class="token punctuation">.</span>gethostbyname<span class="token punctuation">(</span>hostname<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>ip<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="方法二" tabindex="-1"><a class="header-anchor" href="#方法二" aria-hidden="true">#</a> 方法二：</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> socket


<span class="token keyword">def</span> <span class="token function">get_host_ip</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    查询本机ip地址
    :return: ip
    &quot;&quot;&quot;</span>
    <span class="token keyword">global</span> s
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        s <span class="token operator">=</span> socket<span class="token punctuation">.</span>socket<span class="token punctuation">(</span>socket<span class="token punctuation">.</span>AF_INET<span class="token punctuation">,</span> socket<span class="token punctuation">.</span>SOCK_DGRAM<span class="token punctuation">)</span>
        s<span class="token punctuation">.</span>connect<span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token string">&#39;8.8.8.8&#39;</span><span class="token punctuation">,</span> <span class="token number">80</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        ip <span class="token operator">=</span> s<span class="token punctuation">.</span>getsockname<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
    <span class="token keyword">finally</span><span class="token punctuation">:</span>
        s<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>

    <span class="token keyword">return</span> ip


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>get_host_ip<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="服务器启动代码" tabindex="-1"><a class="header-anchor" href="#服务器启动代码" aria-hidden="true">#</a> 服务器启动代码</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># -*- coding: utf-8 -*-</span>
<span class="token comment"># @Time    : 2022/11/22 22:01</span>
<span class="token comment"># @Author  : AI悦创</span>
<span class="token comment"># @FileName: demo.py</span>
<span class="token comment"># @Software: PyCharm</span>
<span class="token comment"># @Blog    ：https://bornforthis.cn/</span>
<span class="token comment"># import tkinter as tk</span>
<span class="token keyword">from</span> http<span class="token punctuation">.</span>server <span class="token keyword">import</span> SimpleHTTPRequestHandler
<span class="token keyword">from</span> http<span class="token punctuation">.</span>server <span class="token keyword">import</span> CGIHTTPRequestHandler
<span class="token keyword">from</span> http<span class="token punctuation">.</span>server <span class="token keyword">import</span> ThreadingHTTPServer
<span class="token keyword">from</span> functools <span class="token keyword">import</span> partial
<span class="token keyword">import</span> contextlib
<span class="token keyword">import</span> sys
<span class="token keyword">import</span> os
<span class="token keyword">import</span> socket


<span class="token keyword">class</span> <span class="token class-name">DualStackServer</span><span class="token punctuation">(</span>ThreadingHTTPServer<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">server_bind</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># suppress exception when protocol is IPv4</span>
        <span class="token keyword">with</span> contextlib<span class="token punctuation">.</span>suppress<span class="token punctuation">(</span>Exception<span class="token punctuation">)</span><span class="token punctuation">:</span>
            self<span class="token punctuation">.</span>socket<span class="token punctuation">.</span>setsockopt<span class="token punctuation">(</span>socket<span class="token punctuation">.</span>IPPROTO_IPV6<span class="token punctuation">,</span> socket<span class="token punctuation">.</span>IPV6_V6ONLY<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token builtin">super</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>server_bind<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">run</span><span class="token punctuation">(</span>server_class<span class="token operator">=</span>DualStackServer<span class="token punctuation">,</span>
        handler_class<span class="token operator">=</span>SimpleHTTPRequestHandler<span class="token punctuation">,</span>
        port<span class="token operator">=</span><span class="token number">8080</span><span class="token punctuation">,</span>
        bind<span class="token operator">=</span><span class="token string">&#39;127.0.0.1&#39;</span><span class="token punctuation">,</span>
        cgi<span class="token operator">=</span><span class="token boolean">False</span><span class="token punctuation">,</span>
        directory<span class="token operator">=</span>os<span class="token punctuation">.</span>getcwd<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> cgi<span class="token punctuation">:</span>
        handler_class <span class="token operator">=</span> partial<span class="token punctuation">(</span>CGIHTTPRequestHandler<span class="token punctuation">,</span> directory<span class="token operator">=</span>directory<span class="token punctuation">)</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        handler_class <span class="token operator">=</span> partial<span class="token punctuation">(</span>SimpleHTTPRequestHandler<span class="token punctuation">,</span> directory<span class="token operator">=</span>directory<span class="token punctuation">)</span>

    <span class="token keyword">with</span> server_class<span class="token punctuation">(</span><span class="token punctuation">(</span>bind<span class="token punctuation">,</span> port<span class="token punctuation">)</span><span class="token punctuation">,</span> handler_class<span class="token punctuation">)</span> <span class="token keyword">as</span> httpd<span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>
            <span class="token string-interpolation"><span class="token string">f&quot;Serving HTTP on </span><span class="token interpolation"><span class="token punctuation">{</span>bind<span class="token punctuation">}</span></span><span class="token string"> port </span><span class="token interpolation"><span class="token punctuation">{</span>port<span class="token punctuation">}</span></span><span class="token string"> &quot;</span></span>
            <span class="token string-interpolation"><span class="token string">f&quot;(http://</span><span class="token interpolation"><span class="token punctuation">{</span>bind<span class="token punctuation">}</span></span><span class="token string">:</span><span class="token interpolation"><span class="token punctuation">{</span>port<span class="token punctuation">}</span></span><span class="token string">/) ...&quot;</span></span>
        <span class="token punctuation">)</span>
        <span class="token keyword">try</span><span class="token punctuation">:</span>
            httpd<span class="token punctuation">.</span>serve_forever<span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">except</span> KeyboardInterrupt<span class="token punctuation">:</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;\\nKeyboard interrupt received, exiting.&quot;</span><span class="token punctuation">)</span>
            sys<span class="token punctuation">.</span>exit<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    port <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;你的端口:&gt;&gt;&gt;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token builtin">dir</span> <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;你的路径:&gt;&gt;&gt;&quot;</span><span class="token punctuation">)</span>
    <span class="token comment"># run(port=9011, bind=&#39;127.0.0.1&#39;)</span>
    run<span class="token punctuation">(</span>port<span class="token operator">=</span>port<span class="token punctuation">,</span> bind<span class="token operator">=</span><span class="token string">&#39;127.0.0.1&#39;</span><span class="token punctuation">,</span> directory<span class="token operator">=</span><span class="token builtin">dir</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="整合代码" tabindex="-1"><a class="header-anchor" href="#整合代码" aria-hidden="true">#</a> 整合代码</h2><p>欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！</p><details class="custom-container details"><summary>公众号：AI悦创【二维码】</summary><p><img src="`+e+'" alt="" loading="lazy"></p></details>',12),k={class:"custom-container info"},v=n("p",{class:"custom-container-title"},"AI悦创·编程一对一",-1),m=n("p",null,"AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Web、Linux」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh",-1),b=n("p",null,"C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh",-1),h={href:"http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes",target:"_blank",rel:"noopener noreferrer"},_=n("p",null,"方法二：微信：Jiabcdefh",-1),y=n("p",null,[n("img",{src:p,alt:"",loading:"lazy"})],-1),g={href:"https://github.com/sorayuki/obs-multi-rtmp",target:"_blank",rel:"noopener noreferrer"};function f(w,q){const a=u("ExternalLinkIcon");return i(),c("div",null,[d,n("div",k,[v,m,b,n("p",null,[s("方法一："),n("a",h,[s("QQ"),t(a)])]),_]),y,n("p",null,[s("插件 GitHub："),n("a",g,[s("https://github.com/sorayuki/obs-multi-rtmp"),t(a)])])])}const H=o(r,[["render",f],["__file","02-http-server.html.vue"]]);export{H as default};
