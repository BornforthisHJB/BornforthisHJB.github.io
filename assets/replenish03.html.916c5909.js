import{_ as i}from"./gzh.b03adfd2.js";import{_ as r}from"./zsxq.77f6dc86.js";import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as l,c,a as e,d as t,b as o,e as s,r as d}from"./app.9b23c9fb.js";const h="/assets/20200717172147-165242050764310.0d1a5984.png",p={},_=e("p",null,"你好，我是悦创。",-1),g=e("blockquote",null,[e("p",null,"从用户的角度出发，得益于各大浏览器厂商的不懈努力，这一切都显得已经很理所当然，输入一个地址，访问网络，显示一个绚丽多彩的界面，你可以可以在上面浏览视频，看文章，甚至玩游戏。 但是站在开发者的角度，这是一个纵观全局的大问题，每一个步骤都是一个可以延伸的话题。对于项目的优化都离不开这里的方方面面，是有深入理解的价值的。我们可以从一个总览出发，看看背后发生了什么。")],-1),u=e("h2",{id:"_1-大致是如下步骤",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-大致是如下步骤","aria-hidden":"true"},"#"),t(" 1. 大致是如下步骤")],-1),m={href:"https://zh.wikipedia.org/wiki/%E5%9F%9F%E5%90%8D%E7%B3%BB%E7%BB%9F",target:"_blank",rel:"noopener noreferrer"},f=e("li",null,"通过 IP 向服务器发起 TCP 连接",-1),S=e("li",null,"向服务器发起请求",-1),T=e("li",null,"服务器返回请求内容",-1),N=e("li",null,"浏览器开始解析渲染页面并显示",-1),I=e("li",null,"关闭连接",-1),b=s('<p><img src="'+h+`" alt="clipboard.png"></p><hr><h2 id="_2-dns" tabindex="-1"><a class="header-anchor" href="#_2-dns" aria-hidden="true">#</a> 2. DNS</h2><p>首先我们要知道什么是 DNS</p><blockquote><p>域名系统（英文：Domain Name System，缩写：DNS）是互联网的一项服务。它作为将域名和 IP 地址相互映射的一个分布式数据库，能够使人更方便地访问互联网。DNS 使用 TCP 和 UDP 端口 53。当前，对于每一级域名长度的限制是 63 个字符，域名总长度则不能超过 253 个字符。 --维基百科</p></blockquote><p>域名解析的过程是逐级查询的</p><ol><li><strong>浏览器缓存</strong>: 首先会向浏览器的缓存中读取上一次访问的记录，在 chrome 可以通过地址栏中输入 <code>chrome://net-internals/#dns</code> 查看缓存的当前状态</li><li><strong>操作系统缓存</strong>：查找存储在系统运行内存中的缓存。在mac中可以通过下面的命令清除系统中的DNS缓存。</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>dscacheutil <span class="token operator">-</span>flushcache
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,8),C=e("li",null,[e("p",null,[e("strong",null,"在 host 文件中查找"),t("：如果在缓存中都查找不到的情况下，就会读取系统中预设的 host 文件中的设置。")])],-1),A=e("li",null,[e("p",null,[e("strong",null,"路由器缓存"),t("：有些路由器也有DNS缓存的功能，访问过的域名会存在路由器上。")])],-1),x=e("li",null,[e("p",null,[e("strong",null,"ISP DNS 缓存"),t("：互联网服务提供商（如中国电信）也会提供 DNS 服务，比如比较著名的 "),e("code",null,"114.114.114.114"),t(" ，在本地查找不到的情况下，就会向 ISP 进行查询，ISP 会在当前服务器的缓存内查找是否有记录，如果有，则返回这个IP，若没有，则会开始向根域名服务器请求查询。")])],-1),P=e("strong",null,"顶级 DNS 服务器/根 DNS 服务器",-1),k=e("code",null,".com",-1),E={href:"http://nicefilm.com",target:"_blank",rel:"noopener noreferrer"},v={href:"http://www.nicefilm.com",target:"_blank",rel:"noopener noreferrer"},y=s(`<p>我们可以通过 dig 命令查看域名解析的记录</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>dig math.stackexchange.com
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我们重点看返回的应答，会看到有四条记录，返回了该网址的四个 IP</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>;; ANSWER SECTION:
math.stackexchange.com.    31    IN    A    151.101.1.69
math.stackexchange.com.    31    IN    A    151.101.129.69
math.stackexchange.com.    31    IN    A    151.101.193.69
math.stackexchange.com.    31    IN    A    151.101.65.69
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>31是 TTL 的值，表示该域名的缓存时间，即该时间内不用重新查询。A 是该 DNS 查询的记录类型，表示返回一个IPv4格式的地址。还有其他记录类型诸如 NS（返回查询的服务器地址）、AAAA（返回IPV6格式的地址）、CNAME（域名的别名）等。</p><hr><h2 id="_3-tcp-连接" tabindex="-1"><a class="header-anchor" href="#_3-tcp-连接" aria-hidden="true">#</a> 3. TCP 连接</h2><p>拿到了要请求的资源服务器 IP 后，浏览器通过操作 OS 的 socket 与服务器进行 TCP 连接（一般来说操作系统已经封装好了 TCP/IP 等协议，提供套接字给应用去使用，该部分涉及到标准网络模型的知识，另外再开篇拓展。） 这个连接就是我们所熟知的<strong>三次握手</strong> 本机主动打开连接</p><ul><li>第一次，本机将标识位 SYN 置为 1, <code>seq = x(Sequence number)</code> 发送给服务端。此时本机状态为 <strong>SYN-SENT</strong></li><li>第二次，服务器收到包之后，将状态切换为<strong>SYN-RECEIVED</strong>，并将标识位 SYN 和 ACK都置为1, <code>seq = y</code> , <code>ack = x + 1</code> , 并发送给客户端。</li><li>第三次，客户端收到包后，将状态切换为 <strong>ESTABLISHED</strong>，并将标识位 ACK 置为 1，<code>seq = x + 1</code> , <code>ack = y + 1</code> , 并发送给服务端。服务端收到包之后，也将状态切换为 <strong>ESTABLISHED</strong>。</li></ul><p><strong>需要注意的一点是，有一些文章对ACK标识位 和 ack（Acknowledgement Number）的解释比较模糊，有一些画图的时候干脆就写在一起了。虽然这两者有关联，但不是同一个东西，搞清楚这个误区可以更方便去理解。还有一些会把第二次握手描述成两个包（比如某百科……），实际上这也是不正确的</strong></p><ul><li>标识位 ACK 置为 1 表示我已确认收到 seq 为 x 的包，并回复确认序号 <code>ack = x + 1</code></li><li>而 SYN 表示这是我第一次随机生成 seq 的序列 x，此后我每次发送的包都会在上一次发送的基础上增加 y（有数据的时候，y 是数据的长度，没有的时候 y = 1）。<strong>所以，当seq已初始化完成之后，没必要再把 SYN 置为1</strong></li></ul><p>理解了这两点，也就不难理解为什么三次握手分别是 SYN、ACK/SYN、ACK了。</p><h3 id="_3-1-标识位-tcp-flag" tabindex="-1"><a class="header-anchor" href="#_3-1-标识位-tcp-flag" aria-hidden="true">#</a> 3.1 标识位（TCP FLAG）</h3><p>TCP 的头部固定有 20 个字节，其中分配了 6bits 给 TCP FLAG ，组合起来用来表示当前包的类型。分别是 URGACKPSHRSTSYNFIN（ CWRECE 放在保留位，暂不考虑）</p><ul><li><strong>URG</strong>：紧急指针，用于将要发送的包标识为“紧急”，这意味着不必等待前段数据被响应处理完即可发送给接收端。</li><li><strong>ACK</strong>：确认标识，用于表示对数据包的成功接收。</li><li><strong>PSH</strong>：推送标识，表示这个数据包应该被立即发送，不需要等待额外的数据。</li><li><strong>RST</strong>：reset 标识，用来异常关闭连接。</li><li><strong>SYN</strong>：同步标识，表示TCP连接已初始化。</li><li><strong>FIN</strong>：完成标识，用于拆除上一个SYN标识。一个完整的TCP连接过程一定会有SYN 和 FIN包。</li></ul><p>至此我们了解了一个TCP 连接的过程，通道通了，是时候利用这个通道送东西了。 我们从传输层再回到应用层。</p><hr><h2 id="_4-http请求与响应" tabindex="-1"><a class="header-anchor" href="#_4-http请求与响应" aria-hidden="true">#</a> 4. HTTP请求与响应</h2>`,18),D={href:"https://zh.wikipedia.org/wiki/%E8%B6%85%E6%96%87%E6%9C%AC%E4%BC%A0%E8%BE%93%E5%8D%8F%E8%AE%AE",target:"_blank",rel:"noopener noreferrer"},L={href:"https://www.segmentfault.com",target:"_blank",rel:"noopener noreferrer"},M=s('<ul><li><strong>请求行</strong>：请求行中包括请求的方法，路径和协议版本。</li><li><strong>请求头</strong>：请求头中包含了请求的一些附加的信息，一般是以键值的形式成对存在，比如设置请求文件的类型accept-type，以及服务器对缓存的设置。</li><li><strong>空行</strong>：协议中规定请求头和请求主体间必须用一个空行隔开</li><li><strong>请求主体</strong>：对于post请求，所需要的参数都不会放在 url 中，这时候就需要一个载体了，这个载体就是请求主题。</li></ul><p>服务端收到请求之后，会根据url匹配到的路径做相应的处理，最后返回浏览器需要的页面资源。浏览器会收到一个响应报文，而所需要的资源就就在报文主体上。与请求报文相同，响应报文也有与之对应的起始行、首部、空行、报文主体，不同的地方在于包含的东西不一样。</p><ul><li><strong>响应行</strong>：响应报文的起始行同样包含了协议版本，与请求的起始行不同的是其包含的还有状态码和状态码的原因短语。</li><li><strong>响应头</strong>：对应请求报文中的请求头，格式一致，但是各自有不同的首部。也有一起用的通用首部。</li><li><strong>空行</strong></li><li><strong>报文主体</strong>：请求所需要的资源。</li></ul><h3 id="_4-1-http缓存" tabindex="-1"><a class="header-anchor" href="#_4-1-http缓存" aria-hidden="true">#</a> 4.1 http缓存</h3><p>请求是浏览器的一个优化点，我们可以通过缓存来减少不必要的请求，进而加快页面的呈现。通过简单地设置http头部可以使用缓存的功能。一般来说有三种设置的方式</p><h3 id="_4-2-last-modify-响应头-if-modified-since-请求头" tabindex="-1"><a class="header-anchor" href="#_4-2-last-modify-响应头-if-modified-since-请求头" aria-hidden="true">#</a> 4.2 Last-Modify(响应头) + If-Modified-Since（请求头）</h3><p>服务器在返回资源的时候设置Last-Modify当前资源最后一次修改的时间，浏览器会把这个时间保存下来，在下次请求的时候，请求头部If-Modified-Since 会包含这个时间，服务端收到请求后，会比对资源最后更新的时间是否在 If-Modified-Since 设置的时间之后，<strong>如果不是，返回304状态码，浏览器将从缓存中获取资源。反之返回200和资源内容</strong>。</p><h3 id="_4-3-etag-响应头-if-none-match-请求头" tabindex="-1"><a class="header-anchor" href="#_4-3-etag-响应头-if-none-match-请求头" aria-hidden="true">#</a> 4.3 ETag（响应头） + If-None-Match（请求头）</h3><p>根据资源标识符来确定文件是否存在修改，服务器每一次返回资源，都会在 Etag 中存放资源的标识符，浏览器收到这个标识符，在下一次请求的时候将标识符放在 If-None-Match 中，服务端将判断是否匹配，<strong>如果不匹配，返回200以及新的资源，反之返回304，浏览器从缓存中获取资源</strong></p><h3 id="_4-4-cache-control-expires-响应头" tabindex="-1"><a class="header-anchor" href="#_4-4-cache-control-expires-响应头" aria-hidden="true">#</a> 4.4 Cache-Control/Expires(响应头)</h3><p>首先这不是一种方法，而是协议更替中的一种演化。 在 http 1.0 的时代，我们基于 Pragma 和 Expires 控制缓存的生命周期。我们可以通过设置 Pragma 为 no-cache 关闭缓存功能，同样也可以在Expires中设置一个缓存失效的时间。需要注意的是，这个失效的时间是相对于服务器的实践而言的，如果人为地改变了客户端的时间，是会导致缓存失效的。 所以，为了解决这个问题，HTTP1.1的协议加入了Cache-Control，通过设置 Cache-Control 的 max-age 可以控制缓存的周期。在这个周期内，资源是新鲜的，浏览器再一次需要使用资源的时候，就不会发出请求了。</p><hr><h2 id="_5-页面呈现" tabindex="-1"><a class="header-anchor" href="#_5-页面呈现" aria-hidden="true">#</a> 5. 页面呈现</h2><p>至此浏览器已经拿到了一个 HTML 文档，并为了呈现文档而开始解析。呈现引擎开始工作，基本流程如下（以webkit为例）</p><ul><li>通过 HTML 解析器解析HTML文档，构建一个 DOM Tree，同时通过 CSS 解析器解析 HTML 中存在的 CSS，构建 Style Rules ，两者结合形成一个Attachment。</li><li>通过 Attachment 构造出一个呈现树（Render Tree）</li><li>Render Tree 构建完毕，进入到布局阶段（layout/reflow），将会为每个阶段分配一个应出现在屏幕上的确切坐标。</li><li>最后将全部的节点遍历绘制出来后，一个页面就展现出来了。</li></ul><p>从构建 DOM 树到呈现的过程如下 需要注意的是，这是一个渐进的过程，呈现引擎为了力求显示的及时，会在文档请求不完全的情况下就开始渲染页面，同时，如果在解析的过程中遇到script的时候，文档的解析将会停止下来，立即解析执行脚本，如果脚本是外部的，则会等待请求完成并解析执行。所以，为了不阻塞页面地呈现，一般会把 script 脚本放在文档的最后。 在最新的 HTML4 和 HTML5 规范中，也可以将脚本标注为 defer，这样就不会停止文档解析，而是等到解析结束后才执行。HTML5 增加了一个选项，可将脚本标记为 async，以便由其他线程解析和执行。</p><hr><h2 id="_6-连接关闭" tabindex="-1"><a class="header-anchor" href="#_6-连接关闭" aria-hidden="true">#</a> 6. 连接关闭</h2><p>现在的页面为了优化请求的耗时，默认都会开启持久连接（keep-alive），那么一个TCP连接确切关闭的时机，是这个tab标签页关闭的时候。这个关闭的过程就是著名的四次挥手。关闭是一个全双工的过程，发包的顺序的不一定的。一般来说是客户端主动发起的关闭，过程如下。 假如最后一次客户端发出的数据 <code>seq = x</code> , <code>ack = y</code> ;</p><ol><li>客户端发送一个FIN置为1的包，<code>ack = y</code> ， <code>seq = x + 1</code> ，此时客户端的状态为 <strong>FIN_WAIT_1</strong></li><li>服务端收到包后，状态切换为 <strong>CLOSE_WAIT</strong> 发送一个ACK为1的包， <code>ack = x + 2</code>。客户端收到包之后状态切换为<strong>FNI_WAIT_2</strong></li><li>服务端处理完任务后，向客户端发送一个 <code>FIN</code> 包，<code>seq = y</code> ; 同时将自己的状态置为 <strong>LAST_ACK</strong></li><li>客户端收到包后状态切换为 <strong>TIME_WAIT</strong>，并向服务端发送 ACK 包，<code>ack = y + 1</code> ，等待 2MSL 后关闭连接。</li></ol><h3 id="_6-1-为什么客户端等待2msl" tabindex="-1"><a class="header-anchor" href="#_6-1-为什么客户端等待2msl" aria-hidden="true">#</a> 6.1 为什么客户端等待2MSL？</h3><p>MSL: 全程 Maximum Segment Lifetime，中文可以翻译为报文最大生存时间。 等待是为了保证连接的可靠性，确保服务端收到ACK包，如果服务端没有收到这个ACK包，将会重发FIN包给客户端，而这个时间刚好是服务端等待超时重发的时间 + FIN的传输时间。</p><p>欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！</p><details class="custom-container details"><summary>公众号：AI悦创【二维码】</summary><p><img src="'+i+'" alt=""></p></details>',24),w={class:"custom-container info"},H=e("p",{class:"custom-container-title"},"AI悦创·编程一对一",-1),q=e("p",null,"AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh",-1),F=e("p",null,"C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh",-1),B={href:"http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes",target:"_blank",rel:"noopener noreferrer"},K=e("p",null,"方法二：微信：Jiabcdefh",-1),R=e("p",null,[e("img",{src:r,alt:""})],-1);function Y(V,W){const n=d("ExternalLinkIcon");return l(),c("div",null,[_,g,u,e("ol",null,[e("li",null,[t("根据地址栏输入的地址向 "),e("a",m,[t("DNS（Domain Name System）"),o(n)]),t(" 查询IP")]),f,S,T,N,I]),b,e("ol",null,[C,A,x,e("li",null,[e("p",null,[P,t("：根域名收到请求后，会判别这个域名("),k,t(")是授权给哪台服务器管理,并返回这个顶级 DNS 服务器的 IP。请求者收到这台顶级 DNS 的服务器IP后，会向该服务器发起查询，如果该服务器无法解析，该服务器就会返回下一级的DNS 服务器 IP（"),e("a",E,[t("nicefilm.com"),o(n)]),t("），本机继续查找，直到服务器找到("),e("a",v,[t("www.nicefilm.com"),o(n)]),t(")的主机。")])])]),y,e("blockquote",null,[e("p",null,[e("a",D,[t("超文本传输协议"),o(n)]),t("（英文：HyperText Transfer Protocol，缩写：HTTP）是一种用于分布式、协作式和超媒体信息系统的应用层协议[1]。HTTP是万维网的数据通信的基础。设计HTTP最初的目的是为了提供一种发布和接收HTML页面的方法。通过HTTP或者HTTPS协议请求的资源由统一资源标识符（Uniform Resource Identifiers，URI）来标识。 --wiki")])]),e("p",null,[t("我们用 "),e("a",L,[t("https://www.segmentfault.com"),o(n)]),t(" 举例子。 在应用层，浏览器会分析这个 url，并设置好请求报文发出。请求报文中包括请求行、请求头、空行、请求主体。https 默认请求端口443， http 默认80。")]),M,e("div",w,[H,q,F,e("p",null,[t("方法一："),e("a",B,[t("QQ"),o(n)])]),K]),R])}const J=a(p,[["render",Y],["__file","replenish03.html.vue"]]);export{J as default};
