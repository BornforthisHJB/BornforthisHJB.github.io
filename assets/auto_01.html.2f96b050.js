import{_ as a}from"./gzh.b03adfd2.js";import{_ as p}from"./zsxq.77f6dc86.js";import{_ as r}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as s,c as h,a as o,d as t,b as e,e as i,r as d}from"./app.4ec8f04c.js";const c="/assets/8ff8b55387fc65b06edd7ffced89abc7.5ddfd56a.png",l="/assets/8eaa498846e1809834d86e1ecda4b25b.baf5028f.png",g="/assets/647d5d1cdb6c0438845ca01426725c4a.695e7340.png",y={},_=i('<p><img src="'+c+'" alt="img" loading="lazy"></p><p>你好，我是悦创。</p><p>欢迎你来到《Python 自动化办公实战课》，在接下来的 3 个月时间里，我们一起通过办公自动化来提升工作效率。</p><p>工作 15 年来，我在教育公司做过技术总监，也在朋友公司做过技术经理，负责公司运维平台建设和相关工具的开发工作，几乎每天都在和 Linux 打交道。</p><p>在这门课之前，我已经在 Bornforthis 开设了两门课程：《零基础学 Python 私教》和《Linux 实战技能 100 讲私教》，为 Python 语言的初学者和运维工程师、开发工程师提供系统化的课程，目的就是解决他们在学习、实践中遇到的 80% 的问题。「目前还未上线，敬请关注公众号：AI悦创，并加入交流群。微信：Jiabcdefh。</p><p>所以，这次我又为你带来了《Python 自动化办公实战课》这门专栏课程。我总结了工作这些年来切身经历的、经常被问到的办公效率低下问题，以及对应的解决方案，我会把它们全部分享给你。</p><p>希望你学完这门课，能够<strong>告别重复、机械的工作，提高工作效率，同时也能把时间花在刀刃上，去提升自己的核心竞争力。</strong></p><p>说到这里，你脑中是不是回忆起了一幕幕的低效工作场景：</p><ul><li>需要对 Excel 文件中的内容进行拆分和合并，你要一个个手动拆分再合并；</li><li>文件夹里有大量图片需要重命名，你不得不挨个儿点击一张张图片，再重新命名；</li><li>网络中有大量新闻和图片需要下载，你就要手动把每个网页另存为文件；</li><li>需要把数据快速生成自己想要的图形，一个一个图形参数来设置；</li><li>需要让计算机在凌晨执行任务，你只能让闹钟在半夜把自己叫醒，人工执行，观察执行结果；</li><li>……</li></ul><p>这些工作其实难度都不大，但它们有一个共同的特点，就是 <strong>重复、机械的手工劳动，非常耗费时间和精力。</strong> 实际上，我们换一种方法，就可以快速完成这些工作，节省数倍的时间。如你所想，这些都是我要通过这门课帮助你解决的问题。</p><p>那具体怎么解决呢？</p><h2 id="解决这些低效问题-我的思路是什么" tabindex="-1"><a class="header-anchor" href="#解决这些低效问题-我的思路是什么" aria-hidden="true">#</a> 解决这些低效问题，我的思路是什么？</h2><p>其实，我们现在的办公环境，已经基本实现自动化了，Word、Excel、邮件、思维导图等各种各样的工具都非常顺手，表格的合并拆分、使用快捷键进行文件的各种操作等各种技巧也是随手一搜就能得到。但相应的问题也就来了，我们怎么用好这些工具、怎么内化这些技巧呢？</p><p>静下心来想一下，现在我们掌握的绝大多数办公工具和技巧，都是基于计算机的。那这个问题，就可以用计算机的思维从根儿上去解决了。所以，我们不妨引入《设计模式》的思路：<strong>代码封装得越“高级”，解决的问题就越具体；越深入计算机底层，解决的问题就越通用。</strong></p><p>如果你暂时不理解这句话的意思也没关系，只需要明白这样一点就可以：<strong>要想快速提高办公效率，解决方法不在各种小技巧和小软件，而在于理解底层逻辑，以及加快人和计算机的交互过程</strong>，能够高效地解决输入（格式转换）、输出（格式统一）、控制（内容处理）、运算（查找、替换）、存储（文件保存和绘图），自然就能解决大部分的效率问题。</p><p>只要对计算机的体系结构稍有了解，你就会听说过冯 · 诺依曼结构：计算机由运算器、控制器、存储器、输入设备和输出设备这五部分组成。所以，我们解决用好自动化办公工具和技巧的方法，和经典的冯 · 诺依曼结构是相吻合的，就是<strong>理解计算机的底层逻辑，从而提升我们和计算机交互的效率。</strong></p><p><img src="'+l+'" alt="img" loading="lazy"></p><p><img src="'+g+`" alt="img" loading="lazy"></p><p>说到这里，我可以给你分享一段我的工作经历。我曾经维护过日活超过 3 亿用户的私信平台，你可以看看我是怎么用计算机的思维，来提高自己和团队的工作效率的。</p><p>我们在一个业务模块中，需要批量替换 200 台服务器中的软件配置，而且每个服务器都有一个文件，需要将第五行内容, 由原有的接口版本 v1 统一替换成 v2。</p><p>面对这样的需求，其实有很多挑战在里面。第一个是替换的实效性，如果手动替换接口版本，由于服务器过多，用户就有可能访问到还没来得及替换的接口上，如后就有可能看到自己的消息是已读状态，一刷新页面，又变成了消息未读。第二个就是服务器数量很多，手动替换还没做完，下一个需求就接着来了。第三，手动替换这么多服务，非常容易出现拼写错误，也就是我们常说的手误，导致你要再花更多的时间来排捉 Bug。</p><p>这样很低效对不对？如果使用 Python 的话，我们就可以从 3 个方面来提升效率。</p><p>第一，用 Python 程序代替一个个的手动操作，实现文字内容的替换，这样就会解放人力，你的工作压力会减轻很多。</p><p>第二，我可以通过 Python 批量控制服务器，让服务器自动完成这些工作。</p><p>第三个就是灵活性方面的优化了, 我们可以让这段程序定时运行，又可以让它们能够同时运行，从一个一个执行，到五个五个执行。</p><p>这三方面的优化，我在课程中都会为你讲解到。</p><p>你可能会问，编程语言有那么多，比如 Java、Go 等等，我为什么要选择 Python 呢？或者说，为什么我会认为，Python 非常适合用来提升我们的工作效率呢？如果你不会 Python，可以学这门课吗？</p><p>不要着急，我来和你说下 Python 语言的几个特点，你就能明白了。</p><h2 id="为什么选择用-python-来解决" tabindex="-1"><a class="header-anchor" href="#为什么选择用-python-来解决" aria-hidden="true">#</a> 为什么选择用 Python 来解决？</h2><p><strong>首先，Python 的用法非常简洁、灵活，就像汉语、英语这类自然语言一样容易理解和使用。</strong> 世界著名程序员、软件开源运动旗手埃里克·雷蒙（Eric S. Raymond）在《如何成为一名黑客》中说道：</p><blockquote><p>如果你不懂任何计算机语言，我建议从 Python 入门。它设计整洁，文档良好，对初学者很友好。</p></blockquote><p>Python 用法简单，但是对于初学者，尤其是没有 Python 基础的话，那该怎么来学这门课呢？其实这也是我在设计这门课时重点考虑的一个问题。所以 <strong>不用担心，我为你准备好了 0 基础的学习路径。</strong></p><p><strong>第一，导读是整个课程的基石。</strong> 导读部分我会为你讲解 Python 最基础且最重要的五大语法部分，让你对 Python 有一个初步的了解，能够看懂基本的 Python 代码。这也是你入门 Python 学习的第一步。</p><p>同时，导读在整个课程中会起到一个引领的作用。其中的语法知识我会在之后的课程中讲解，所以在学习时如果有不懂的话，仍然可以回过头来看导读部分。</p><p><strong>第二，一定要动手来操作，</strong> 毕竟看一遍我的操作，跟你自己操作是不一样的。</p><p><strong>第三，如果你有时间的话，我还建议你去抄写每一段代码。</strong> 要知道，看一遍课程和把看的东西写出来的感觉是完全不一样的。这个建议我在之前的《零基础学 Python 私教》这门课中也提过，很多用户反映学习效果确实不错，提升速度很快。「想一对一系统学 Python 加我微信：Jiabcdefh」</p><p>问题都是在不断学习中解决掉的，所以最后我也建议你遇到问题不怕畏惧，跟着课程来慢慢学习就行了。</p><p>其次，<strong>Python 的扩展库很丰富，可以满足非常多的复杂场景的需求，能够替代非常多的手工操作。</strong> 这也是 Python 相对于其他编程语言的一大优势。</p><p>目前，Python 的扩展库已经覆盖了文件、声音、视频、数据科学、深度学习等众多行业。通过这些扩展库，我们可以用 Python 连接 Excel、Word、邮件等常用办公组件，轻松应对各类工作场景，不用自己手动写很多功能代码了。而连接方法也很简单，以操作 Word 文档为例，你只要掌握下面这行代码就可以了：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> docx
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>通过这样一行简单的代码，你的 Python 就能支持 Word 中的文字、字体、段落、样式、表格等各种功能进行读写操作了，当然了，为了实现你的各种定制需求，还需要继续编写代码（这里的优点是直接支持，其他语言是要先像是操作压缩文件一样，对 docx 格式解压缩，再对 xml 文件进行处理，非常复杂）。</p><p>最后，<strong>Python 还有一个你无法抗拒的优点，那就是它的跨平台性。</strong></p><p>也许有一天，你用的电脑的操作系统，从 macOS 变成了 Windows，或者从 Windows 变成了 macOS，那也完全不用担心。Python 的跨平台特性，可以帮你做到不用修改任何一行代码，就可以让已经写好的程序直接在新的平台上运行。</p><p>总结来说，Python 的简洁、扩展库丰富和跨平台特性这三点，就保证了你可以轻松学会这门课，用 Python 去实现办公自动化，提升自己的工作效率。</p><p>说了这么多，哪些工作可以用 Python 实现自动化，而我又会怎么给你讲这门课呢？</p><h2 id="这门课是怎么设计的" tabindex="-1"><a class="header-anchor" href="#这门课是怎么设计的" aria-hidden="true">#</a> 这门课是怎么设计的？</h2><p>在开头的时候我也说了，要用计算机的思维去解决办公自动化工具和技巧的问题，所以我就把常见的 30 个机械、重复的工作场景，按照任务类型划分成了输入、运算、控制、存储和输出这 5 个模块。</p><h3 id="输入-模块-解决不同文件类型的批量合并和拆分问题" tabindex="-1"><a class="header-anchor" href="#输入-模块-解决不同文件类型的批量合并和拆分问题" aria-hidden="true">#</a> “输入”模块：解决不同文件类型的批量合并和拆分问题</h3><p>这类任务往往包含了格式相似的大量文件，比如 Word、Excel、Txt 文件，我会带着你用 Python 去进行批量合并和拆分。</p><h3 id="运算-模块-扩展常用的统计、搜索和排序功能" tabindex="-1"><a class="header-anchor" href="#运算-模块-扩展常用的统计、搜索和排序功能" aria-hidden="true">#</a> “运算”模块：扩展常用的统计、搜索和排序功能</h3><p>很多软件自带的统计、搜索和排序功能，都很好用，但不支持在多个文件或者跨类型文件中使用。所以，在这个模块我们要学习的就是，怎么通过 Python 进行扩展，让这些好用、常用的功能，可以支持多个文件或不同类型的文件。</p><h3 id="控制-模块-通过插件的方式增强办公软件以及周边软件、硬件的交互能力" tabindex="-1"><a class="header-anchor" href="#控制-模块-通过插件的方式增强办公软件以及周边软件、硬件的交互能力" aria-hidden="true">#</a> “控制”模块：通过插件的方式增强办公软件以及周边软件、硬件的交互能力</h3><p>办公软件的核心功能，通常是支持文字和表格等内容的相关操作，对控制外部设备相对较薄弱。例如，Word 本身是不支持批量打印 Word 文件的，但批量打印又是一个常见的需求。这个需求，就可以通过脚本化来实现，达到打印自动化的目的。</p><h3 id="存储-模块-和文件相关的很多常用操作部分" tabindex="-1"><a class="header-anchor" href="#存储-模块-和文件相关的很多常用操作部分" aria-hidden="true">#</a> “存储”模块：和文件相关的很多常用操作部分</h3><p>在工作中，我们经常会面对这么几种需求：需要对大量文件进行重命名；需要通过网络批量下载视频和图片；需要在海量文件中快速找到自己想要的文件；等等。</p><p>这些需求最大的问题，就是我们需要手工重复操作，或者自带工具不好用。那么利用 Python 和文件、网络功能相结合，就完全可以实现目录下的批量改名、文件的批量下载，免去了手工重复操作的问题。</p><p>对于系统自带的文件查找工具来说，速度慢而且不够简洁，那我们可以使用 Python 根据自己定义的目录搜索，加快搜索文件的效率。</p><h3 id="输出-模块-智能化输出自己的工作成果" tabindex="-1"><a class="header-anchor" href="#输出-模块-智能化输出自己的工作成果" aria-hidden="true">#</a> “输出”模块：智能化输出自己的工作成果</h3><p>在这一部分，我要教你更直观和更智能地输出自己的工作成果。比如说你交付给同事的数据，可以通过 Python 一键转为图形，也可以根据你的需要将图形采用图片或网页的形式展示给你的同事，提高工作汇报的效率，更直观地展示自己的工作成果。</p><hr><p>在讲解这 5 个模块、30 个常见的办公场景的效率提升方法时，我还会带你剖析它们背后的原理，和你展示我分解任务、解决问题的思路。</p><p>因为提升办公效率的方法和技巧真的是非常非常多，但如果我们没能把这些方法和技巧做系统的梳理，那它们就是孤立的存在，知道得再多，也没办法根据自己的工作场景灵活运用。</p><p>如果到这里，你还是担心自己不会 Python 就学不会这门课、就没办法提升自己工作效率的话，我还可以再给你吃一颗定心丸，这也是我额外送你的一份礼物： <strong>在每节课的最后，我都会给你交付一个可运行的小程序。你只需要调整保存路径和几个简单的参数，就可以在自己的电脑上运行，就可以去应对你实际工作中相似场景的重复工作，提升自己的办公效率。</strong></p><p>所以， <strong>不但能用 Python 让你的工作效率翻无数倍，还可以收获编程思维、解决问题的思路，以及 30 个小程序。</strong></p><p>最后，我们来一起立个 Flag 吧：通过三个月的学习，让自己成为 10X 职场人！也欢迎你邀请你的小伙伴们一起来学习，共同成长！</p>`,65),m={href:"https://github.com/AndersonHJB/PythonAuto",target:"_blank",rel:"noopener noreferrer"},u={href:"https://pan.baidu.com/s/1UvEKDCGnU6yb0a7gHLSE4Q?pwd=5wf1",target:"_blank",rel:"noopener noreferrer"},P=o("p",null,"欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！",-1),f=o("details",{class:"custom-container details"},[o("summary",null,"公众号：AI悦创【二维码】"),o("p",null,[o("img",{src:a,alt:"",loading:"lazy"})])],-1),b={class:"custom-container info"},x=o("p",{class:"custom-container-title"},"AI悦创·编程一对一",-1),v=o("p",null,"AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh",-1),k=o("p",null,"C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh",-1),E={href:"http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes",target:"_blank",rel:"noopener noreferrer"},A=o("p",null,"方法二：微信：Jiabcdefh",-1),W=o("p",null,[o("img",{src:p,alt:"",loading:"lazy"})],-1);function J(w,B){const n=d("ExternalLinkIcon");return s(),h("div",null,[_,o("p",null,[t("编辑小提示：专栏的完整代码位置是 "),o("a",m,[t("https://github.com/AndersonHJB/PythonAuto"),e(n)]),t(" ，可点击链接下载查看。或者通过 "),o("a",u,[t("网盘链接"),e(n)]),t(" 提取后下载，提取码: 5wf1。")]),P,f,o("div",b,[x,v,k,o("p",null,[t("方法一："),o("a",E,[t("QQ"),e(n)])]),A]),W])}const Q=r(y,[["render",J],["__file","auto_01.html.vue"]]);export{Q as default};
