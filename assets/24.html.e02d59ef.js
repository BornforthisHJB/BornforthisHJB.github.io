import{_ as i}from"./gzh.b03adfd2.js";import{_ as r}from"./zsxq.77f6dc86.js";import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as l,c,a,d as s,b as e,e as o,r as p}from"./app.88a785d1.js";const _="/assets/20190825104905887.7f2785d2.png",d="/assets/20190825105239273.31f832ca.png",m="/assets/20190825105138827.580109bc.png",g="/assets/2019082510535837.97ebc2f9.png",h="/assets/20190825105528890.a7e3eea9.png",u="/assets/20190825105701843.30f67d9c.png",f="/assets/20190825105909554.b9036287.png",x="/assets/20190825105909554.b9036287.png",y="/assets/20190825110302510.2aad9eab.png",b="/assets/20190825110416714.3fd67c54.png",w={},z=o('<h2 id="_0x01-安装和打开-wireshark" tabindex="-1"><a class="header-anchor" href="#_0x01-安装和打开-wireshark" aria-hidden="true">#</a> 0x01 安装和打开 wireshark</h2><ul><li>双击安装包，所有的安装下一步即可。</li><li>打开安装包后选择所使用的网卡，找不到网卡的应该是网卡名有改变，仔细查看。</li></ul><p><img src="'+_+'" alt="img" loading="lazy"></p><ul><li>双击后，进入抓包模式。</li></ul><h2 id="_0x02-访问网站" tabindex="-1"><a class="header-anchor" href="#_0x02-访问网站" aria-hidden="true">#</a> 0x02 访问网站</h2><ul><li>打开浏览器，访问目标网站，<code>www.4399.com</code>。</li></ul><p><img src="'+d+'" alt="img" loading="lazy"></p><p>待访问完成后，关闭抓包。</p><p><img src="'+m+'" alt="img" loading="lazy"></p><h2 id="_0x03-分析过程" tabindex="-1"><a class="header-anchor" href="#_0x03-分析过程" aria-hidden="true">#</a> 0x03 分析过程</h2><ul><li>先查 DNS，在显示过滤器中输入 DNS，回车。</li></ul><p><img src="'+g+'" alt="img" loading="lazy"></p>',12),k={href:"http://www.4399.com",target:"_blank",rel:"noopener noreferrer"},N=o('<p><img src="'+h+'" alt="img" loading="lazy"></p><p>打开回包，查看 DNS 应答，找到对应IP地址。</p><p><img src="'+u+'" alt="img" loading="lazy"></p><p>由于做了 CDN，所以这里显示了两个地址，先用其中一个地址进行查找。在显示过滤器中输入 <code>ip.addr == 116.207.132.239</code></p><p><img src="'+f+'" alt="img" loading="lazy"></p><p>这里直接找到了，如果没有流量就进行第二个地址的测试查找。接下来通过结合端口号来进行精确查找。在显示过滤器中输入 <code>ip.addr == 116.207.132.239 &amp;&amp; tcp.port == 80</code>。</p><p><img src="'+x+'" alt="img" loading="lazy"></p><p>我这里没有变化是因为，访问这个服务器的流量只有这一种，在流量多的时候精确查找还是必须的，接下进行跟踪流查寻，查看报文的详细信息。</p><p><img src="'+y+'" alt="img" loading="lazy"></p><p>由于我这里之间已经访问过，所以 http 服务器提示没有任何改变。</p><p><img src="'+b+'" alt="img" loading="lazy"></p><p>欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！</p><details class="custom-container details"><summary>公众号：AI悦创【二维码】</summary><p><img src="'+i+'" alt="" loading="lazy"></p></details>',13),I={class:"custom-container info"},v=a("p",{class:"custom-container-title"},"AI悦创·编程一对一",-1),q=a("p",null,"AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh",-1),A=a("p",null,"C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh",-1),C={href:"http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes",target:"_blank",rel:"noopener noreferrer"},D=a("p",null,"方法二：微信：Jiabcdefh",-1),P=a("p",null,[a("img",{src:r,alt:"",loading:"lazy"})],-1);function Q(S,V){const t=p("ExternalLinkIcon");return l(),c("div",null,[z,a("p",null,[s("报文比较多，使用 ctrl+F 进行搜索，选择 string，输入 "),a("a",k,[s("www.4399.com"),e(t)]),s("。")]),N,a("div",I,[v,q,A,a("p",null,[s("方法一："),a("a",C,[s("QQ"),e(t)])]),D]),P])}const $=n(w,[["render",Q],["__file","24.html.vue"]]);export{$ as default};
