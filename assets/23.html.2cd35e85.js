const e=JSON.parse('{"key":"v-1d13069b","path":"/blog/2022/23.html","title":"wireshark 抓包新手使用教程","lang":"zh-CN","frontmatter":{"title":"wireshark 抓包新手使用教程","date":"2022-10-17T09:55:10.000Z","author":"AI悦创","isOriginal":true,"category":["Chrome","网络安全工程师","抓包","Kali/工具"],"tag":["Chrome","网络安全工程师","抓包","Kali/工具"],"icon":"web","sticky":false,"star":false,"password":false,"article":true,"timeline":true,"image":false,"navbar":true,"sidebarIcon":true,"headerDepth":5,"comment":true,"lastUpdated":true,"editLink":true,"backToTop":true,"toc":true,"summary":"你好，我是悦创。我一个朋友问到这样的抓包问题： Wireshark 是非常流行的网络封包分析软件，可以截取各种网络数据包，并显示数据包详细信息。常用于开发测试过程各种问题定位。本文主要内容包括： 1、Wireshark 软件下载和安装以及 Wireshark 主界面介绍。 2、WireShark 简单抓包示例。通过该例子学会怎么抓包以及如何简单查看分析数据包","head":[["meta",{"property":"og:url","content":"https://bornforthis.cn/blog/2022/23.html"}],["meta",{"property":"og:site_name","content":"AI悦创"}],["meta",{"property":"og:title","content":"wireshark 抓包新手使用教程"}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://bornforthis.cn/"}],["meta",{"property":"og:updated_time","content":"2022-11-15T13:54:51.000Z"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"name":"twitter:card","content":"summary_large_image"}],["meta",{"name":"twitter:image:alt","content":"wireshark 抓包新手使用教程"}],["meta",{"property":"article:author","content":"AI悦创"}],["meta",{"property":"article:tag","content":"Chrome"}],["meta",{"property":"article:tag","content":"网络安全工程师"}],["meta",{"property":"article:tag","content":"抓包"}],["meta",{"property":"article:tag","content":"Kali/工具"}],["meta",{"property":"article:published_time","content":"2022-10-17T09:55:10.000Z"}],["meta",{"property":"article:modified_time","content":"2022-11-15T13:54:51.000Z"}]]},"excerpt":"","headers":[{"level":2,"title":"Wireshark 软件安装","slug":"wireshark-软件安装","link":"#wireshark-软件安装","children":[{"level":3,"title":"1. 打开 wireshark 4.0.0，主界面如下：","slug":"_1-打开-wireshark-4-0-0-主界面如下","link":"#_1-打开-wireshark-4-0-0-主界面如下","children":[]},{"level":3,"title":"2. 选择菜单栏上 Capture -> Option，勾选 WLAN 网卡（这里需要根据各自电脑网卡使用情况选择，简单的办法可以看使用的 IP 对应的网卡）。点击 Start。启动抓包。","slug":"_2-选择菜单栏上-capture-option-勾选-wlan-网卡-这里需要根据各自电脑网卡使用情况选择-简单的办法可以看使用的-ip-对应的网卡-。点击-start。启动抓包。","link":"#_2-选择菜单栏上-capture-option-勾选-wlan-网卡-这里需要根据各自电脑网卡使用情况选择-简单的办法可以看使用的-ip-对应的网卡-。点击-start。启动抓包。","children":[]},{"level":3,"title":"3. wireshark 启动后，wireshark 处于抓包状态中。","slug":"_3-wireshark-启动后-wireshark-处于抓包状态中。","link":"#_3-wireshark-启动后-wireshark-处于抓包状态中。","children":[]},{"level":3,"title":"4. 执行需要抓包的操作，如在cmd 窗口下执行ping www.baidu.com。","slug":"_4-执行需要抓包的操作-如在cmd-窗口下执行ping-www-baidu-com。","link":"#_4-执行需要抓包的操作-如在cmd-窗口下执行ping-www-baidu-com。","children":[]},{"level":3,"title":"5. 作完成后相关数据包就抓取到了。为避免其他无用的数据包影响分析，可以通过在过滤栏设置过滤条件进行数据包列表过滤，获取结果如下。","slug":"_5-作完成后相关数据包就抓取到了。为避免其他无用的数据包影响分析-可以通过在过滤栏设置过滤条件进行数据包列表过滤-获取结果如下。","link":"#_5-作完成后相关数据包就抓取到了。为避免其他无用的数据包影响分析-可以通过在过滤栏设置过滤条件进行数据包列表过滤-获取结果如下。","children":[]},{"level":3,"title":"6. wireshark 抓包完成，就这么简单。关于 wireshark 显示过滤条件、抓包过滤条件、以及如何查看数据包中的详细内容在后面介绍。","slug":"_6-wireshark-抓包完成-就这么简单。关于-wireshark-显示过滤条件、抓包过滤条件、以及如何查看数据包中的详细内容在后面介绍。","link":"#_6-wireshark-抓包完成-就这么简单。关于-wireshark-显示过滤条件、抓包过滤条件、以及如何查看数据包中的详细内容在后面介绍。","children":[]}]},{"level":2,"title":"Wireshakr 抓包界面介绍","slug":"wireshakr-抓包界面介绍","link":"#wireshakr-抓包界面介绍","children":[{"level":3,"title":"WireShark 主要分为这几个界面","slug":"wireshark-主要分为这几个界面","link":"#wireshark-主要分为这几个界面","children":[]},{"level":3,"title":"TCP 包的具体内容","slug":"tcp-包的具体内容","link":"#tcp-包的具体内容","children":[]}]},{"level":2,"title":"Wireshark 过滤器设置","slug":"wireshark-过滤器设置","link":"#wireshark-过滤器设置","children":[{"level":3,"title":"（1）抓包过滤器","slug":"_1-抓包过滤器","link":"#_1-抓包过滤器","children":[]},{"level":3,"title":"（2）显示过滤器","slug":"_2-显示过滤器","link":"#_2-显示过滤器","children":[]}]},{"level":2,"title":"wireshark 过滤器表达式的规则","slug":"wireshark-过滤器表达式的规则","link":"#wireshark-过滤器表达式的规则","children":[{"level":3,"title":"1. 抓包过滤器语法和实例","slug":"_1-抓包过滤器语法和实例","link":"#_1-抓包过滤器语法和实例","children":[]},{"level":3,"title":"2. 显示过滤器语法和实例","slug":"_2-显示过滤器语法和实例","link":"#_2-显示过滤器语法和实例","children":[]}]},{"level":2,"title":"Wireshark 抓包分析 TCP 三次握手","slug":"wireshark-抓包分析-tcp-三次握手","link":"#wireshark-抓包分析-tcp-三次握手","children":[{"level":3,"title":"（1）TCP 三次握手连接建立过程","slug":"_1-tcp-三次握手连接建立过程","link":"#_1-tcp-三次握手连接建立过程","children":[]},{"level":3,"title":"（2）wireshark 抓包获取访问指定服务端数据包","slug":"_2-wireshark-抓包获取访问指定服务端数据包","link":"#_2-wireshark-抓包获取访问指定服务端数据包","children":[]}]},{"level":2,"title":"Wireshark 分析常用操作","slug":"wireshark-分析常用操作","link":"#wireshark-分析常用操作","children":[]}],"git":{"createdTime":1665972140000,"updatedTime":1668520491000,"contributors":[{"name":"iMac-Aiyuechuang","email":"1432803776@qq.com","commits":13},{"name":"AndersonHJB","email":"cleland1432803776@icloud.com","commits":1}]},"readingTime":{"minutes":12.18,"words":3653},"copyright":"著作权归黄家宝|AI悦创所有\\n原文链接：https://bornforthis.cn/blog/2022/23.html","filePathRelative":"blog/2022/23.md","localizedDate":"2022年10月17日"}');export{e as data};
