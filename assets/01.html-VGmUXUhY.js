import{_ as l}from"./gzh-X2g0OvFa.js";import{_ as t}from"./zsxq-YQJ_sFB4.js";import{_ as i}from"./plugin-vue_export-helper-x3n3nnut.js";import{r as c,o as m,c as p,a as s,b as a,d as r,e as n}from"./app-om0jBo81.js";const o="/assets/5dea246400017ceb08640148-RdHs7RCI.png",h="/assets/5dea246c0001c9ef06180414-UqM38vdt.png",g={},d=n('<div class="hint-container tip"><p class="hint-container-title">手札</p><p>勤能补拙是良训，一分辛劳一分才。——华罗庚</p></div><h2 id="_1-算法的定义" tabindex="-1"><a class="header-anchor" href="#_1-算法的定义" aria-hidden="true">#</a> 1. 算法的定义</h2><p>你好，我是悦创。</p><p>对于算法的解释，全世界的定义是不唯一的。</p><p>我给出的算法的定义是：<strong><span style="color:orange;">一系列用来解决单个或多个问题，或有执行计算功能的命令的集合。再结合上输入与输出，算法就是将输入转换为输出的一系列计算步骤的集合。</span></strong></p><p>听起来很拗口，对不对？</p><p>没关系，我们可以把一个算法比作是一个菜谱。如图1-1所示，原材料就是输入，做出来的成品即为输出，而算法，就是做菜过程中的复杂步骤。</p><figure><img src="'+o+'" alt="图1-1" tabindex="0" loading="lazy"><figcaption>图1-1</figcaption></figure>',8),u=s("p",null,[a("再换一种方式看算法，算法的本质其实是数学的理论与推导。在还没有发明求和公式之前，如何求出 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"1"),s("mo",null,"+"),s("mn",null,"2"),s("mo",null,"+"),s("mn",null,"3"),s("mo",null,"+"),s("mn",null,"4"),s("mo",null,"+"),s("mn",null,"5"),s("mo",null,"+"),s("mo",null,"…"),s("mo",null,"+"),s("mi",null,"n"),s("mo",{stretchy:"false"},"?")]),s("annotation",{encoding:"application/x-tex"},"1+2+3+4+5+…+n ?")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"2"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"3"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"4"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"5"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6667em","vertical-align":"-0.0833em"}}),s("span",{class:"minner"},"…"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6944em"}}),s("span",{class:"mord mathnormal"},"n"),s("span",{class:"mclose"},"?")])])]),a(" 逐个数求和虽能算出答案，但过于繁杂。但反观求和公式，无论 n 取多大的值，计算的步骤和繁琐程度基本不会增加。这就是算法存在的意义。人类在解决复杂问题时所采用的一系列特定的方法，即为算法。")],-1),_=n('<h2 id="_2-算法与程序的区别" tabindex="-1"><a class="header-anchor" href="#_2-算法与程序的区别" aria-hidden="true">#</a> 2. 算法与程序的区别</h2><p>明白了什么是算法，再来看算法和程序的区别。通常来说，程序指一组计算机能识别和执行，并有一定功能的指令。</p><p>后者的定义似乎和算法很相似，但算法和程序之间最大的区别在于程序是以计算机能够理解的各式各样的编程语言编写而成的，而算法是可以通过编程语言、图绘、口述等人能够理解的方式来描述的，不一定局限于编程语言的诠释，如图1-2 所示。</p><figure><img src="'+h+'" alt="图1-2" tabindex="0" loading="lazy"><figcaption>图1-2</figcaption></figure><p>刚才曾提过，算法是一种以数学为本质的计算方法。然而作为方法，则必有正确（可行）、不正确（不可行）和高效、低效之分。</p><p>若一个算法对于每一个恰当的输入都以正确的输出终止程序，则可以称这算法是正确的，并正确地解决了给定的问题。若算法以不正确的输出而终止程序，或根本无法终止程序，则这个算法是不正确的。</p><p>但显而易见，不是所有的算法都可以通过输入和输出被正确和不正确而简单地分为两大类。譬如人们要预测未来特定事件发生概率，而这种问题无法用结果来检验解决方法是正确与否。因此，算法的正确性的检验也可以回溯到其本质，就是数学的检验，也就是说用数学来证明算法的正确性或可行性。</p><p>对于算法至关重要的不只有其正确性，还有它的效率。人类至今的发展，提高最迅速的可以说是计算的效率了。从原始人的结绳计数，到现在的超级计算机太湖之光，计算能力的提升不是区区几个数量级能说明清楚的。</p><p>但很不幸，当今计算机的运算速度不是无限快，存储器也不是免费的，如果是，那还研究算法干什么呢？所以如何高效地利用好有限的时间和空间就是算法存在的意义。有趣的是，求解相同问题而设计的不同算法在效率方面通常有着显著的差异，而这些算法效率上的差异要比在硬件或者软件效率上的差异大得多。</p>',9),y=s("p",null,[a("回到 "),s("span",{class:"katex"},[s("span",{class:"katex-mathml"},[s("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[s("semantics",null,[s("mrow",null,[s("mn",null,"1"),s("mo",null,"+"),s("mn",null,"2"),s("mo",null,"+"),s("mn",null,"3"),s("mo",null,"+"),s("mn",null,"4"),s("mo",null,"+"),s("mn",null,"5"),s("mo",null,"+"),s("mo",null,"…"),s("mo",null,"+"),s("mi",null,"n")]),s("annotation",{encoding:"application/x-tex"},"1+2+3+4+5+…+n")])])]),s("span",{class:"katex-html","aria-hidden":"true"},[s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"1"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"2"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"3"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"4"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.7278em","vertical-align":"-0.0833em"}}),s("span",{class:"mord"},"5"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.6667em","vertical-align":"-0.0833em"}}),s("span",{class:"minner"},"…"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}}),s("span",{class:"mbin"},"+"),s("span",{class:"mspace",style:{"margin-right":"0.2222em"}})]),s("span",{class:"base"},[s("span",{class:"strut",style:{height:"0.4306em"}}),s("span",{class:"mord mathnormal"},"n")])])]),a(" 这个求和问题中。一定程度上说，逐个数相加也可以被看作一种解决求和问题的算法，一种简单，低效的算法。相反，求和公式则是一种较复杂的，高效的算法。但如何来评判一个算法是否高效？时间复杂度和空间复杂度就是很好的丈量工具。时间复杂度和空间复杂度将会在后面的章节中介绍。")],-1),b=n('<h2 id="_3-算法的应用" tabindex="-1"><a class="header-anchor" href="#_3-算法的应用" aria-hidden="true">#</a> 3. 算法的应用</h2><p>算法的应用无处不在，小到普通的排序问题，大到最近举世瞩目的神经网络和深度学习，都很容易寻觅到算法的影子。列举几个赫赫有名的例子：</p><h3 id="_3-1-机器学习" tabindex="-1"><a class="header-anchor" href="#_3-1-机器学习" aria-hidden="true">#</a> 3.1 机器学习</h3><p>神经网络和深度学习可谓当今最热门的算法，而如今这两个算法的应用范围有目共睹——从图像识别到 Alpha Go，再到语音识别和机器翻译，人工智能一次又一次地刷新人们对信息学的认识。</p><p>深度学习的主旨在于强调神经网络模型的深度。其在神经网络模型的基础上减少了参数的繁杂度，更加逼近人脑工作的机制。最著名的例子便是卷积神经网络 (CNN)，其极大地加强了计算机的图像识别功能。</p><h3 id="_3-2-搜索引擎和网络爬虫" tabindex="-1"><a class="header-anchor" href="#_3-2-搜索引擎和网络爬虫" aria-hidden="true">#</a> 3.2 搜索引擎和网络爬虫</h3><p>搜索引擎的核心机制其实就是网络爬虫。为了高效地为客户提供搜索结果，搜索引擎往往会先收集互联网中成千上万的网页，并根据网页中的关键字建立数据索引库。</p><p>搜索引擎和网络爬虫收集网页的过程都会以基础的 BFS（广度优先搜索），DFS（深度优先搜索）为核心思想，并针对要抓取的网页附加更有针对性的复杂算法，如网页过滤算法等。</p><p>随着搜索技术越来越成熟，其算法的复杂程度也逐渐提高，但溯其本源仍是简单的搜索算法。刚刚提到的广度优先搜索、深度优先搜索等算法都会在后面章节中详细讲解，希望读者们能够认真学习掌握。</p><h2 id="_4-小结" tabindex="-1"><a class="header-anchor" href="#_4-小结" aria-hidden="true">#</a> 4. 小结</h2><p>本章详细介绍了算法的本质、意义和应用。算法是编程的核心，就像一台计算机的 CPU，算法的好坏决定了一个系统的效率高低。同时也是谷歌、阿里等大厂主要考察的内容。修炼好算法这门“内功”，再辅以新技术这些“招式”，才能独霸“武林”。</p><p>欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！</p><details class="hint-container details"><summary>公众号：AI悦创【二维码】</summary><figure><img src="'+l+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></details>',13),f={class:"hint-container info"},x=s("p",{class:"hint-container-title"},"AI悦创·编程一对一",-1),v=s("p",null,"AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh",-1),k=s("p",null,"C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh",-1),w={href:"http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes",target:"_blank",rel:"noopener noreferrer"},I=s("p",null,"方法二：微信：Jiabcdefh",-1),M=s("figure",null,[s("img",{src:t,alt:"",tabindex:"0",loading:"lazy"}),s("figcaption")],-1);function C(N,q){const e=c("ExternalLinkIcon");return m(),p("div",null,[d,u,_,y,b,s("div",f,[x,v,k,s("p",null,[a("方法一："),s("a",w,[a("QQ"),r(e)])]),I]),M])}const P=i(g,[["render",C],["__file","01.html.vue"]]);export{P as default};
