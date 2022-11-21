import{_ as i}from"./gzh.b03adfd2.js";import{_ as l}from"./zsxq.77f6dc86.js";import{_ as c}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as r,c as u,a as n,d as s,b as a,w as d,e as t,r as p}from"./app.b0eae2c5.js";const h="/assets/1596515593062-c8dfdd2c-6485-444d-aa18-ff550cf272bb.3d5051b1.png",m="/assets/1596515593165-68405d99-7ae1-478e-b6d3-02c85ea276d2.03e4d69b.png",k="/assets/1596515593266-d9ddec5c-6c63-4e60-aad5-fd12e47410d1.221a4bed.png",_={},g=t('<p>你好，我是悦创。</p><p>通过前面的介绍，同学们已经弄清楚了爬虫是什么，它是干什么的。以及它的反爬和一些奇淫技巧，接下来我们就开始在技术层面上探究一下它是如何工作的。</p><p><img src="'+h+'" alt="" loading="lazy"></p><p>互联网上，公开数据（各种网页）都是以 http（或加密的 http 即 https ）协议传输的。所以，我们这里介绍的爬虫技术都是基于http（https）协议的爬虫。</p><p>在 Python 的模块海洋里，支持 http 协议的模块是相当丰富的，既有官方的 urllib，也有大名鼎鼎的社区（第三方）模块 requests。它们都很好的封装了 http 协议请求的各种方法，因此，我们只需要熟悉这些模块的用法，不再进一步讨论 http 协议本身。</p><h2 id="_1-认识浏览器和服务器" tabindex="-1"><a class="header-anchor" href="#_1-认识浏览器和服务器" aria-hidden="true">#</a> 1. 认识浏览器和服务器</h2><p>同学们对浏览器应该一点都不陌生，可以说，只要上过网的人都知道浏览器。可是，明白浏览器各种原理的同学可不一定多哦。</p><p>作为要开发爬虫的者，是一定一定要明白浏览器的工作原理的。这是你写爬虫的必备工具，别无他。</p><p>不知道的同学们在面试的时候，有没有遇到这么一个非常宏观而又处处细节的解答题：</p><ul><li>请说说从你在浏览器地址栏输入网站到你看到网页中间都发生了什么？</li></ul><p>这真是一个考验知识面的题啊，经验老道的程序员既可以滔滔不绝的讲上三天三夜，也可以提炼出几分钟的精华讲个大概。而小白们恐怕对整个过程就一知半解了。</p><p>巧的是，对这个问题理解的越透彻，越对写爬虫有帮助。换句话说，爬虫是一个考验综合技能的领域。那么，同学们准备好迎接这个综合技能挑战了吗？</p><p>废话不多说，我们就从解答这个题目开始，认识浏览器和服务器，看看这中间有哪些知识是爬虫要用到的。</p>',13),b=n("strong",null,"从输入 url 到页面展现发生了什么？",-1),f=t(`<ol><li>浏览器发出请求</li><li>服务器做出响应</li><li>浏览器接收响应</li></ol><h2 id="_2-浏览器发出请求" tabindex="-1"><a class="header-anchor" href="#_2-浏览器发出请求" aria-hidden="true">#</a> 2. 浏览器发出请求</h2><p>在浏览器地址栏输入网址后回车，浏览器请服务器提出网页请求，也就是告诉服务器，我要看你的某个网页。</p><p>上面短短一句话，蕴藏了无数玄机啊，让我不得不费点口舌一一道来。主要讲述：</p><ul><li>网址是不是有效的？</li><li>服务器在哪里？</li><li>浏览器向服务器发送了些什么？</li><li>服务器返回了些什么？</li></ul><h3 id="_2-1-网址是不是有效的" tabindex="-1"><a class="header-anchor" href="#_2-1-网址是不是有效的" aria-hidden="true">#</a> 2.1 网址是不是有效的？</h3><p>首先，浏览器要判断你输入的网址（URL）是否合法有效。对应 URL，同学们并不陌生吧，以 http(s) 开头的那一长串的字符，但是你知道它还可以以 <code>ftp</code> ,  <code>mailto</code> , <code>file</code> , <code>data</code> , <code>irc</code>  开头吗？下面是它最完整的语法格式：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>URI <span class="token operator">=</span> scheme<span class="token punctuation">:</span><span class="token punctuation">[</span><span class="token operator">//</span>authority<span class="token punctuation">]</span>path<span class="token punctuation">[</span>?query<span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token comment">#fragment]</span>
<span class="token comment"># 其中， authority 又是这样的：</span>
authority <span class="token operator">=</span> <span class="token punctuation">[</span>userinfo@<span class="token punctuation">]</span>host<span class="token punctuation">[</span><span class="token punctuation">:</span>port<span class="token punctuation">]</span>
<span class="token comment"># userinfo可以同时包含user name和password，以：分割</span>
userinfo <span class="token operator">=</span> <span class="token punctuation">[</span>user_name<span class="token punctuation">:</span>password<span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>用图更形象的表现处理就是这样的：</p><p><img src="`+m+`" alt="" loading="lazy"></p><p><strong>悦创经验：要判断 URL 的合法性</strong></p><p>Python 里面可以用 <code>urllib.parse</code> 来进行 URL 的各种操作</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>In <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token keyword">import</span> urllib<span class="token punctuation">.</span>parse 

In <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">:</span> url <span class="token operator">=</span> <span class="token string">&#39;http://dachong:the_password@www.yuanrenxue.com/user/info?page=2&#39;</span>

In <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token punctuation">:</span> zz <span class="token operator">=</span> urllib<span class="token punctuation">.</span>parse<span class="token punctuation">.</span>urlparse<span class="token punctuation">(</span>url<span class="token punctuation">)</span>
Out<span class="token punctuation">[</span><span class="token number">4</span><span class="token punctuation">]</span><span class="token punctuation">:</span> ParseResult<span class="token punctuation">(</span>scheme<span class="token operator">=</span><span class="token string">&#39;http&#39;</span><span class="token punctuation">,</span> netloc<span class="token operator">=</span><span class="token string">&#39;dachong:the_password@www.yuanrenxue.com&#39;</span><span class="token punctuation">,</span> path<span class="token operator">=</span><span class="token string">&#39;/user/info&#39;</span><span class="token punctuation">,</span> params<span class="token operator">=</span><span class="token string">&#39;&#39;</span><span class="token punctuation">,</span> query<span class="token operator">=</span><span class="token string">&#39;page=2&#39;</span><span class="token punctuation">,</span> fragment<span class="token operator">=</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们看到，urlparse 函数把 URL 分析成了 6 部分：</p><p><code>scheme://netloc/path;params?query#fragment</code></p><p>需要主要的是 netloc 并不等同于 URL 语法定义中的 host</p><h3 id="_2-2-服务器在哪里" tabindex="-1"><a class="header-anchor" href="#_2-2-服务器在哪里" aria-hidden="true">#</a> 2.2 服务器在哪里？</h3><p>上面 URL 定义中的 host，就是互联网上的一台服务器，它可以是一个 IP 地址，但通常是我们所说的域名。域名通过 DNS 绑定到一个（或多个）IP 地址上。</p><p>浏览器要访问某个域名的网站就要先通过 DNS 服务器解析域名，得到真实的 IP 地址。</p><p>这里的域名解析一般是由操作系统完成的，爬虫不需要关心。然而，当你写一个大型爬虫，像 Google、百度搜索引擎那样的爬虫的时候，效率变得很主要，爬虫就要维护自己的 DNS 缓存。</p><p><strong>悦创经验：大型爬虫要维护自己的 DNS 缓存</strong></p><h3 id="_2-3-浏览器向服务器发送些什么" tabindex="-1"><a class="header-anchor" href="#_2-3-浏览器向服务器发送些什么" aria-hidden="true">#</a> 2.3 浏览器向服务器发送些什么？</h3><p>浏览器获得了网站服务器的 IP 地址，就可以向服务器发送请求了。</p>`,23),v={href:"https://en.wikipedia.org/wiki/URL",target:"_blank",rel:"noopener noreferrer"},y=t('<p><img src="'+k+'" alt="" loading="lazy"></p><p>同学们可能已经从图中看出来些端倪，发送的 http 请求头是类似一个字典的结构：</p><ul><li>authority: 就是访问的目标机器；</li><li>method: http请求的方法有很多： <ul><li>GET</li><li>HEAD</li><li>POST</li><li>PUT</li><li>DELETE</li><li>CONNECT</li><li>OPTIONS</li><li>TRACE</li><li>PATCH</li><li>一般，爬虫使用最多的是 <strong>GET</strong> 和 <strong>POST</strong></li></ul></li><li>path: 访问的网站的路径</li><li>scheme: 请求的协议类型，这里是https</li><li>accept: 能够接受的回应内容类型（Content-Types）</li><li>accept-encoding: 能够接受的编码方式列表</li><li>accept-language: 能够接受的回应内容的自然语言列表</li><li>cache-control: 指定在这次的请求/响应链中的所有缓存机制 都必须 遵守的指令</li><li>cookie: 之前由服务器通过 Set- Cookie发送的一个 超文本传输协议 Cookie 这是爬虫很关心的一个东东，登录信息都在这里。</li><li>upgrade-insecuree-requests: 非标准请求字段，可忽略之。</li><li>user-agent: 浏览器身份标识</li></ul><p>这也是爬虫很关心的部分。比如，你需要得到手机版页面，就要设置浏览器身份标识为手机浏览器的user-agent。</p><p><strong>悦创经验: 通过设置 headers 跟服务器沟通</strong></p><h3 id="_2-4-服务器返回了些什么" tabindex="-1"><a class="header-anchor" href="#_2-4-服务器返回了些什么" aria-hidden="true">#</a> 2.4 服务器返回了些什么？</h3><p>如果我们在浏览器地址栏输入一个网页网址（不是文件下载地址），回车后，很快就看到了一个网页，里面包含排版文字、图片、视频等数据，是一个丰富内容格式的页面。然而，我通过浏览器查看源代码，看到的却是一对文本格式的html代码。</p><p>没错，就是一堆的代码，却让浏览器给渲染成了漂亮的网页。这对代码里面有：</p><ul><li>css： 浏览器根据它来排版，安排文字、图片等的位置；</li><li>JavaScript： 浏览器运行它可以让用户和网页交互；</li><li>图片等链接： 浏览器再去下载这些链接，最终渲染成网页。</li></ul><p>而我们想要爬取的信息就藏在html代码中，我们可以通过解析方法提取其中我们想要的内容。如果html代码里面没有我们想要的数据，但是在网页里面却看到了，那就是浏览器通过 ajax 请求异步加载（偷偷下载）了那部分数据。</p><p>这个时候，我们就要通过观察浏览器的加载过程来发现具体是哪个 ajax 请求加载了我们需要的数据。</p><p>欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！</p><details class="custom-container details"><summary>公众号：AI悦创【二维码】</summary><p><img src="'+i+'" alt="" loading="lazy"></p></details>',13),w={class:"custom-container info"},x=n("p",{class:"custom-container-title"},"AI悦创·编程一对一",-1),I=n("p",null,"AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh",-1),P=n("p",null,"C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh",-1),L={href:"http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes",target:"_blank",rel:"noopener noreferrer"},R=n("p",null,"方法二：微信：Jiabcdefh",-1),T=n("p",null,[n("img",{src:l,alt:"",loading:"lazy"})],-1);function C(E,N){const o=p("RouterLink"),e=p("ExternalLinkIcon");return r(),u("div",null,[g,n("p",null,[s("前面也说过，这个问题可以讲上三天三夜，但我们没那么多时间，其中一些细节就略过，把大致流程结合爬虫讲一讲，分成三部分：「强迫症或者想认真补的学员呢，可以点击此文章阅读」"),a(o,{to:"/column/crawler/replenish03.html"},{default:d(()=>[b]),_:1})]),f,n("p",null,[s("这个请求就是遵循 http 协议的。写爬虫需要关心的就是 http 协议的 headers ，下面是访问 "),n("a",v,[s("en.wikipedia.org/wiki/URL"),a(e)]),s(" 时浏览器发送的请求 headers：")]),y,n("div",w,[x,I,P,n("p",null,[s("方法一："),n("a",L,[s("QQ"),a(e)])]),R]),T])}const A=c(_,[["render",C],["__file","s2_03.html.vue"]]);export{A as default};
