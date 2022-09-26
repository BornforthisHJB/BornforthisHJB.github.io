<template><div><p>你好，我是悦创。</p>
<p>本课时我们会详细讲解 HTTP 的基本原理，以及了解在浏览器中输入 URL 到获取网页内容之间发生了什么。了解了这些内容，有助于我们进一步掌握爬虫的基本原理。</p>
<h1 id="_1-uri-和-url" tabindex="-1"><a class="header-anchor" href="#_1-uri-和-url" aria-hidden="true">#</a> 1. URI 和 URL</h1>
<p>首先，我们来了解一下 URI 和 URL，URI 的全称为 Uniform Resource Identifier，即统一资源标志符，URL 的全称为 Universal Resource Locator，即统一资源定位符。</p>
<p>举例来说，<a href="https://github.com/favicon.ico" target="_blank" rel="noopener noreferrer">https://github.com/favicon.ico<ExternalLinkIcon/></a>，它是一个 URL，也是一个 URI。即有这样的一个图标资源，我们用 <code v-pre>URL/URI</code> 来唯一指定了它的访问方式，这其中包括了访问协议 HTTPS、访问路径（即根目录）和资源名称 <code v-pre>favicon.ico</code>。通过这样一个链接，我们便可以从互联网上找到这个资源，这就是 URL/URI。</p>
<p>URL 是 URI 的子集，也就是说每个 URL 都是 URI，但不是每个 URI 都是 URL。那么，什么样的 URI 不是 URL 呢？URI 还包括一个子类叫作 URN，它的全称为 Universal Resource Name，即统一资源名称。</p>
<p>URN 只命名资源而不指定如何定位资源，比如 <code v-pre>urn:isbn:0451450523</code> 指定了一本书的 ISBN，可以唯一标识这本书，但是没有指定到哪里定位这本书，这就是 URN。URL、URN 和 URI 的关系可以用图表示。</p>
<p><img src="@source/column/crawler/s2_05.assets/CgpOIF5XRxOAT9vMAAAwHI1kHMc253.jpg" alt="img" loading="lazy"></p>
<p>但是在目前的互联网，URN 的使用非常少，几乎所有的 URI 都是 URL，所以一般的网页链接我们可以称之为 URL，也可以称之为 URI，我个人习惯称之为 URL。</p>
<h1 id="_2-超文本" tabindex="-1"><a class="header-anchor" href="#_2-超文本" aria-hidden="true">#</a> 2. 超文本</h1>
<p>接下来，我们再了解一个概念 —— 超文本，其英文名称叫作 <code v-pre>Hypertext</code>，我们在浏览器里看到的网页就是超文本解析而成的，其网页源代码是一系列 HTML 代码，里面包含了一系列标签，比如 img 显示图片，p 指定显示段落等。浏览器解析这些标签后，便形成了我们平常看到的网页，而网页的源代码 HTML 就可以称作超文本。</p>
<p>例如，我们在 Chrome 浏览器里面打开任意一个页面，如淘宝首页，右击任一地方并选择 “检查” 项（或者直接按快捷键 F12），即可打开浏览器的开发者工具，这时在 Elements 选项卡即可看到当前网页的源代码，这些源代码都是超文本，如图所示。</p>
<p><img src="@source/column/crawler/s2_05.assets/image-20220517114240027.png" alt="image-20220517114240027" loading="lazy"></p>
<h1 id="_3-http-和-https" tabindex="-1"><a class="header-anchor" href="#_3-http-和-https" aria-hidden="true">#</a> 3. HTTP 和 HTTPS</h1>
<p><img src="@source/column/crawler/s2_05.assets/1596515794625-62c01947-c247-4f82-90c1-d14e32510784-165275919780821.png" alt="img" loading="lazy"></p>
<p>也就是在 <strong>TCP/IP</strong> 四层模型中添加了一层 <strong>SSL 层（或者叫 TLS）</strong> ，并且，根据加密程度不同，所需要的费用不同。</p>
<p>**04 资源消耗：**如果大家访问HTTPS网站呢，对我们的CPU来说需要更高程度的计算。上面我们讲到了，对于HTTPS来说，连接安全的同时它需要 <strong>加密传输和身份验证</strong> ，其实这是基于CPU的运算，需要我们电脑的CPU不断进行加密解密的运算，这样就会对我们电脑的CPU和占用一些资源。大家访问 HTTP、HTTPS，访问不同的网站，对我们电脑的CPU的消耗是不一样的，HTTPS需要很多很多的计算，才能进行加密验证。这些都是在我们电脑本地完成的。</p>
<h2 id="_3-1-http" tabindex="-1"><a class="header-anchor" href="#_3-1-http" aria-hidden="true">#</a> 3.1 HTTP</h2>
<blockquote>
<p>HTTP 是一个客户端（用户）和服务器端（网站）之间请求和应答的标准，通常使用 <a href="https://baike.baidu.com/item/TCP/33012?fromtitle=TCP%E5%8D%8F%E8%AE%AE&amp;fromid=8988699&amp;fr=aladdin" target="_blank" rel="noopener noreferrer">TCP协议<ExternalLinkIcon/></a>。通过使用<a href="https://baike.baidu.com/item/%E7%BD%91%E9%A1%B5%E6%B5%8F%E8%A7%88%E5%99%A8/8309940?fr=aladdin" target="_blank" rel="noopener noreferrer">网页浏览器<ExternalLinkIcon/></a>、<a href="https://baike.baidu.com/item/%E7%BD%91%E7%BB%9C%E7%88%AC%E8%99%AB" target="_blank" rel="noopener noreferrer">网络爬虫<ExternalLinkIcon/></a>或者其他的工具，客户端发起一个 HTTP 请求到服务器上指定端口（默认<a href="https://baike.baidu.com/item/%E7%AB%AF%E5%8F%A3" target="_blank" rel="noopener noreferrer">端口<ExternalLinkIcon/></a>为80）。我们称这个客户端为用户代理程序（user agent）。应答的服务器上存储着一些资源，比如 <strong>HTML</strong> 文件和图像。我们称这个应答服务器为源服务器（origin server）。在用户代理和源服务器中间可能存在多个”中见层“，比如：<a href="https://baike.baidu.com/item/%E4%BB%A3%E7%90%86%E6%9C%8D%E5%8A%A1%E5%99%A8/97996?fr=aladdin" target="_blank" rel="noopener noreferrer">代理服务器<ExternalLinkIcon/></a>、<a href="https://baike.baidu.com/item/%E7%BD%91%E5%85%B3" target="_blank" rel="noopener noreferrer">网关<ExternalLinkIcon/></a>或者<a href="https://baike.baidu.com/item/%E7%BD%91%E7%BB%9C%E9%9A%A7%E9%81%93/3993106?fr=aladdin" target="_blank" rel="noopener noreferrer">隧道<ExternalLinkIcon/></a>（tunnel）</p>
</blockquote>
<p>我们平时写爬虫的时候就直接一个 <strong>requestes</strong> 过去，我们的电脑扮演的是 <strong>客户端的角色</strong>，我们 <strong>requests 请求的网址</strong>我们称之为：<strong>服务器</strong>。</p>
<p>大家即使是一个简单的 <strong>get</strong> 在网络就要经历许多层。这个模式我们叫做 <strong>C/S 模式</strong>服务器客户端模式。</p>
<p>上面我们说在请求网络的过程中会经过许多层，那这个 <strong>层</strong> 指的是什么呢？<strong>有那几层呢？我们继续往下看！</strong></p>
<table>
<thead>
<tr>
<th>名称</th>
<th>对应的意思</th>
</tr>
</thead>
<tbody>
<tr>
<td>应用层</td>
<td>应用程序是指人们用于网络通信的软件程序。有些终端用户应用程序是网络感知程序，</td>
</tr>
<tr>
<td></td>
<td>即这些程序实现应用层协议，并可直接与协议栈的较低层通信。</td>
</tr>
<tr>
<td></td>
<td>电子邮件客户程序和 Web 浏览器就属于这种类型的应用程序。</td>
</tr>
<tr>
<td>网络层（IP）</td>
<td>cmd &gt;&gt;&gt; ipconfig</td>
</tr>
<tr>
<td></td>
<td>到网络层，就会进行 <strong>IP</strong> 的封装，（也就是把你电脑的本地 IP 封装，放在你的数据上，前面</td>
</tr>
<tr>
<td></td>
<td>就加个头说：我是来自192.168.0.1 的电脑，发往百度的 IP 一个是百度的 IP 一个是你自己的</td>
</tr>
<tr>
<td></td>
<td>IP ）之后就会携带着发起请求的目标服务器。（也就是是封装在你的 Get 请求上）</td>
</tr>
<tr>
<td>隧道</td>
<td>VPN</td>
</tr>
<tr>
<td>网关</td>
<td>加码解码（类似于，把一个英文网站翻译成中文网站）</td>
</tr>
<tr>
<td>课下</td>
<td>自行看 TCP／UDP</td>
</tr>
<tr>
<td>TCP</td>
<td>有连接的流形式，就类似我们打电话，也就类似我们的全双工，我可以和你说话，你也可以</td>
</tr>
<tr>
<td></td>
<td>和我说话。并且，我知道你能接起电话，你一定能听到我说话。</td>
</tr>
<tr>
<td>UDP</td>
<td>面向无连接，不在乎你是否收到了我的信息。就类似于：发邮件的时候，你知道你的邮件发</td>
</tr>
<tr>
<td></td>
<td>出去了，但不确定对方能不能收到。</td>
</tr>
<tr>
<td>对比</td>
<td>相对来说，UDP 回比 TCP 简单的多了。（我们的 HTPP 是使用 TCP的。）</td>
</tr>
</tbody>
</table>
<p>网络层就类似于我们的　<strong>IP</strong></p>
<p><img src="@source/column/crawler/s2_05.assets/1596515794458-0c232d25-5d2f-49b1-b3e9-5fa0a25376ad-165278440799424.png" alt="img" loading="lazy"></p>
<h3 id="_3-1-1-http-请求头详解" tabindex="-1"><a class="header-anchor" href="#_3-1-1-http-请求头详解" aria-hidden="true">#</a> 3.1.1 HTTP  请求头详解</h3>
<p><strong>HTTP 头部</strong></p>
<p><img src="@source/column/crawler/s2_05.assets/1596515794579-7b7e7ba1-80e5-4e25-bd72-e34c0006e551-165278446432427.png" alt="img" loading="lazy"></p>
<p>举个例子：</p>
<p><img src="@source/column/crawler/s2_05.assets/1596515794606-1856f7a1-d190-4797-84f1-9ee90e886e70-165278461481230.png" alt="img" loading="lazy"></p>
<p>上图中的 <strong>Request Header</strong> 有个</p>
<p><strong>Accept:text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,image/apng,</strong><em><strong>/</strong></em><strong>;q=0.8,application/signed-exchange;v=b3</strong></p>
<p>这个如果加在你的请求头里面，就只会返回你要求的数据。</p>
<h2 id="_3-2-https" tabindex="-1"><a class="header-anchor" href="#_3-2-https" aria-hidden="true">#</a> 3.2 HTTPS</h2>
<p>超文本传输安全协议（英语：HyperText Transfer Protocol Secure，缩写：HTTPS；常常称为：HTTP over TLS</p>
<p><img src="@source/column/crawler/s2_05.assets/1596515794624-a14f78ee-b11c-4067-ad67-fa18fd78bb31-165278469571433.png" alt="img" loading="lazy"></p>
<h2 id="_3-3-实例讲解" tabindex="-1"><a class="header-anchor" href="#_3-3-实例讲解" aria-hidden="true">#</a> 3.3 实例讲解</h2>
<p>在淘宝的首页 <a href="https://www.taobao.com/" target="_blank" rel="noopener noreferrer">https://www.taobao.com/<ExternalLinkIcon/></a> 中，URL 的开头会有 http 或 https，这个就是访问资源需要的协议类型，有时我们还会看到 ftp、sftp、smb 开头的 URL，那么这里的 ftp、sftp、smb 都是指的协议类型。在爬虫中，我们抓取的页面通常就是 http 或 https 协议的，我们在这里首先来了解一下这两个协议的含义。</p>
<p>HTTP 的全称是 Hyper Text Transfer Protocol，中文名叫作超文本传输协议，HTTP 协议是用于从网络传输超文本数据到本地浏览器的传送协议，它能保证高效而准确地传送超文本文档。HTTP 由万维网协会（World Wide Web Consortium）和 Internet 工作小组 IETF（Internet Engineering Task Force）共同合作制定的规范，目前广泛使用的是 HTTP 1.1 版本。</p>
<p>HTTPS 的全称是 Hyper Text Transfer Protocol over Secure Socket Layer，是以安全为目标的 HTTP 通道，简单讲是 HTTP 的安全版，即 HTTP 下加入 SSL 层，简称为 HTTPS。</p>
<p>HTTPS 的安全基础是 SSL，因此通过它传输的内容都是经过 SSL 加密的，它的主要作用可以分为两种：</p>
<ul>
<li>建立一个信息安全通道，来保证数据传输的安全。</li>
<li>确认网站的真实性，凡是使用了 HTTPS 的网站，都可以通过点击浏览器地址栏的锁头标志来查看网站认证之后的真实信息，也可以通过 CA 机构颁发的安全签章来查询。</li>
</ul>
<p><img src="@source/column/crawler/s2_05.assets/image-20220517185318734.png" alt="image-20220517185318734" loading="lazy"></p>
<p>现在越来越多的网站和 App 都已经向 HTTPS 方向发展。例如：</p>
<ul>
<li>
<p>苹果公司强制所有 iOS App 在 2017 年 1 月 1 日 前全部改为使用 HTTPS 加密，否则 App 就无法在应用商店上架。</p>
</li>
<li>
<p>谷歌从 2017 年 1 月推出的 Chrome 56 开始，对未进行 HTTPS 加密的网址链接亮出风险提示，即在地址栏的显著位置提醒用户 “此网页不安全”。</p>
</li>
<li>
<p>腾讯微信小程序的官方需求文档要求后台使用 HTTPS 请求进行网络通信，不满足条件的域名和协议无法请求。</p>
</li>
</ul>
<p>因此，HTTPS 已经已经是大势所趋。</p>
<h1 id="_4-http-请求过程" tabindex="-1"><a class="header-anchor" href="#_4-http-请求过程" aria-hidden="true">#</a> 4. HTTP 请求过程</h1>
<p><img src="@source/column/crawler/s2_05.assets/1596515794481-b90fd970-352e-48ac-85ff-ea944bd57e33.png" alt="img" loading="lazy"></p>
<p>我们在浏览器中输入一个 URL，回车之后便可以在浏览器中观察到页面内容。实际上，这个过程是浏览器向网站所在的服务器发送了一个请求，网站服务器接收到这个请求后进行处理和解析，然后返回对应的响应，接着传回给浏览器。响应里包含了页面的源代码等内容，浏览器再对其进行解析，便将网页呈现了出来，传输模型如图所示。</p>
<p><img src="@source/column/crawler/s2_05.assets/CgpOIF5XRxSANG0_AACovJPtMYQ497.jpg" alt="img" loading="lazy"></p>
<p>此处客户端即代表我们自己的 PC 或手机浏览器，服务器即要访问的网站所在的服务器。</p>
<p>为了更直观地说明这个过程，这里用 Chrome 浏览器的开发者模式下的 Network 监听组件来做下演示，它可以显示访问当前请求网页时发生的所有网络请求和响应。</p>
<p>打开 Chrome 浏览器，右击并选择 “检查” 项，即可打开浏览器的开发者工具。这里访问百度 <a href="https://www.baidu.com/" target="_blank" rel="noopener noreferrer">https://www.baidu.com/<ExternalLinkIcon/></a>，输入该 URL 后回车，观察这个过程中发生了怎样的网络请求。可以看到，在 Network 页面下方出现了一个个的条目，其中一个条目就代表一次发送请求和接收响应的过程，如图所示。</p>
<p><img src="@source/column/crawler/s2_05.assets/image-20220517191449991.png" alt="image-20220517191449991" loading="lazy"></p>
<p>我们先观察第一个网络请求，即 <a href="www.baidu.com">www.baidu.com</a>，其中各列的含义如下。</p>
<ul>
<li>第一列 Name：请求的名称，一般会将 URL 的最后一部分内容当作名称。</li>
<li>第二列 Status：响应的状态码，这里显示为 200，代表响应是正常的。通过状态码，我们可以判断发送了请求之后是否得到了正常的响应。</li>
<li>第三列 Type：请求的文档类型。这里为 document，代表我们这次请求的是一个 HTML 文档，内容就是一些 HTML 代码。</li>
<li>第四列 Initiator：请求源。用来标记请求是由哪个对象或进程发起的。</li>
<li>第五列 Size：从服务器下载的文件和请求的资源大小。如果是从缓存中取得的资源，则该列会显示 from cache。</li>
<li>第六列 Time：发起请求到获取响应所用的总时间。</li>
<li>第七列 Waterfall：网络请求的可视化瀑布流。</li>
</ul>
<p>我们点击这个条目即可看到其更详细的信息，如图所示。</p>
<p><img src="@source/column/crawler/s2_05.assets/CgpOIF5XRxSAXezkAAJwMNsqow0849.jpg" alt="img" loading="lazy"></p>
<p>首先是 General 部分，Request URL 为请求的 URL，Request Method 为请求的方法，Status Code 为响应状态码，Remote Address 为远程服务器的地址和端口，Referrer Policy 为 Referrer 判别策略。</p>
<p>再继续往下，可以看到，有 Response Headers 和 Request Headers，这分别代表响应头和请求头。请求头里带有许多请求信息，例如浏览器标识、Cookies、Host 等信息，这是请求的一部分，服务器会根据请求头内的信息判断请求是否合法，进而作出对应的响应。图中看到的 Response Headers 就是响应的一部分，例如其中包含了服务器的类型、文档类型、日期等信息，浏览器接受到响应后，会解析响应内容，进而呈现网页内容。</p>
<p>下面我们分别来介绍一下请求和响应都包含哪些内容。</p>
<h2 id="_4-1-请求" tabindex="-1"><a class="header-anchor" href="#_4-1-请求" aria-hidden="true">#</a> 4.1 请求</h2>
<p>请求，由客户端向服务端发出，可以分为 4 部分内容：请求方法（Request Method）、请求的网址（Request URL）、请求头（Request Headers）、请求体（Request Body）。</p>
<h2 id="_4-2-请求方法" tabindex="-1"><a class="header-anchor" href="#_4-2-请求方法" aria-hidden="true">#</a> 4.2 请求方法</h2>
<p>常见的请求方法有两种：GET 和 POST。</p>
<p>在浏览器中直接输入 URL 并回车，这便发起了一个 GET 请求，请求的参数会直接包含到 URL 里。例如，在百度中搜索 Python，这就是一个 GET 请求，链接为 <a href="https://www.baidu.com/s?wd=Python" target="_blank" rel="noopener noreferrer">https://www.baidu.com/s?wd=Python<ExternalLinkIcon/></a> ，其中 URL 中包含了请求的参数信息，这里参数 wd 表示要搜寻的关键字。POST 请求大多在表单提交时发起。比如，对于一个登录表单，输入用户名和密码后，点击 “登录” 按钮，这通常会发起一个 POST 请求，其数据通常以表单的形式传输，而不会体现在 URL 中。</p>
<p>GET 和 POST 请求方法有如下区别。</p>
<ul>
<li>GET 请求中的参数包含在 URL 里面，数据可以在 URL 中看到，而 POST 请求的 URL 不会包含这些数据，数据都是通过表单形式传输的，会包含在请求体中。</li>
<li>GET 请求提交的数据最多只有 1024 字节，而 POST 请求没有限制。</li>
</ul>
<p>一般来说，登录时，需要提交用户名和密码，其中包含了敏感信息，使用 GET 方式请求的话，密码就会暴露在 URL 里面，造成密码泄露，所以这里最好以 POST 方式发送。上传文件时，由于文件内容比较大，也会选用 POST 方式。</p>
<p>我们平常遇到的绝大部分请求都是 GET 或 POST 请求，另外还有一些请求方法，如 HEAD、PUT、DELETE、OPTIONS、CONNECT、TRACE 等，我们简单将其总结为下表。</p>
<p><img src="@source/column/crawler/s2_05.assets/Cgq2xl5XTMeAFYgXAADGW57EU8s068.png" alt="img" loading="lazy"></p>
<table>
<thead>
<tr>
<th>方法</th>
<th>描述</th>
</tr>
</thead>
<tbody>
<tr>
<td>GET</td>
<td>请求页面，并返回页面内容</td>
</tr>
<tr>
<td>HEAD</td>
<td>类似于 GET 请求，只不过返回的响应中没有具体的内容，用于获取报头</td>
</tr>
<tr>
<td>POST</td>
<td>大多用于提交表单或上传文件，数据包含在请求体中</td>
</tr>
<tr>
<td></td>
<td></td>
</tr>
</tbody>
</table>
</div></template>


