import{_ as e}from"./gzh-DnOBNg6W.js";import{_ as o}from"./zsxq-BcdwOI-_.js";import{_ as t}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as r,o as a,a as n}from"./app-DuqmmGCS.js";const p="/assets/ff53754d5318668c1014674c3917d308-Bt3bB5RF.jpg",i="/assets/5c3daf49453370c3aa7ddf3bb36cab2d-CEiZtsXx.png",l="/assets/dee40d0f591d3f5e2f43839dccc24471-D8yHzgpg.png",s="/assets/f81efe2538074a3385b9ba70aced2cc9-CsBkOecG.png",h={},c=n('<figure><img src="'+p+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>你好，我是悦创。</p><p>Stack Overflow 曾在 2017 年底，发布了在该站上各种语言的提问流量。其中，Python 已经超过了 JavaScript 成为了流量最高的语言，预测在 2020 年前会远远甩开 JavaScript。</p><figure><img src="'+i+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>可能你已经知道，Python 在 14 年后的“崛起”，得益于机器学习和数学统计应用的兴起。那为什么 Python 如此适合数学统计和机器学习呢？作为“老司机”的我可以肯定地告诉你，Jupyter Notebook （<a href="https://jupyter.org/" target="_blank" rel="noopener noreferrer">https://jupyter.org/</a>）功不可没。</p><p>毫不夸张地说，根据我对 Facebook 等硅谷一线大厂的了解，一个 Python 工程师如果现在还不会使用 Jupyter Notebook 的话，可能就真的太落伍了。</p><p>磨刀不误砍柴工，高效的工具让我们的编程事半功倍。这一节课，我就来带你学习一下 Jupyter Notebook，为后面的 Python 学习打下必备基础。</p><h2 id="_1-什么是-jupyter-notebook" tabindex="-1"><a class="header-anchor" href="#_1-什么是-jupyter-notebook"><span>1. 什么是 Jupyter Notebook？</span></a></h2><p>说了这么多，到底什么是 Jupyter Notebook？按照 Jupyter 创始人 Fernando Pérez 的说法，他最初的梦想是做一个综合 Ju （Julia）、Py （Python）和 R 三种科学运算语言的计算工具平台，所以将其命名为 Ju-Py-te-R。发展到现在，Jupyter 已经成为一个几乎支持所有语言，能够把<strong>软件代码、计算输出、解释文档、多媒体资源</strong>整合在一起的多功能科学运算平台。</p><p>英文里说一图胜千言（A picture is worth a thousand words）。看下面这个图片，你就明白什么是 Jupyter Notebook 了。</p><figure><img src="'+l+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>你在一个框框中直接输入代码，运行，它立马就在下面给你输出。怎么样，是不是很酷？你可能会纳闷儿，这样一个看起来“华而不实”的玩意儿，真的就成了 Python 社区的颠覆者吗？说实话放在几年前我也是不信的。所以 Jupyter Notebook 的影响究竟有多大呢？</p><h2 id="_2-jupyter-notebook-的影响力" tabindex="-1"><a class="header-anchor" href="#_2-jupyter-notebook-的影响力"><span>2. Jupyter Notebook 的影响力</span></a></h2><p>我们衡量一个技术的影响力，或者说要用自己的技术去影响世界时，必定绕不开这个技术对教育界的影响力。</p><p>就拿微软的 Word 文本处理系统来说吧。从纯技术角度来讲，Word 的单机设计理念早已落后时代 20 年。但以 Google Doc 为代表的在线文档系统，却并没有像想象中那样，实现对 Word 的降维打击。</p><p>直观的原因是用户习惯，使用 Word 修改文档，那就来回发几十遍呗，用着也还可以。但更深刻来想，之所以养成这样的用户习惯，是因为我们的教育根源。教育系统从娃娃抓起，用小学中学大学十几年的时间，训练了用户 Word 的使用习惯。到工作中，老员工又会带着新员工继续使用 Word，如此行程技术影响力生生不息的正向反馈。</p><p>回到我们今天的主题，我们来看 Jupyter Notebook。从 2017 年开始，已有大量的北美顶尖计算机课程，开始完全使用 Jupyter Notebook 作为工具。比如李飞飞的 CS231N《计算机视觉与神经网络》课程，在 16 年时作业还是命令行 Python 的形式，但是 17 年的作业就全部在 Jupyter Notebook 上完成了。再如 UC Berkeley 的《数据科学基础》课程，从 17 年起，所有作业也全部用 Jupyter Notebook 完成。</p><p>而 Jupyter Notebook 在工业界的影响力更甚。在 Facebook，虽然大规模的后台开发仍然借助于功能齐全的 IDE，但是几乎所有的中小型程序，比如内部的一些线下分析软件，机器学习模块的训练都是借助于 Jupyter Notebook 完成的。据我了解，在别的硅谷一线大厂，例如 Google 的 AI Research 部门 Google Brain，也是清一色地全部使用 Jupyter Notebook，虽然用的是他们自己的改进定制版，叫 Google Colab。</p><p>看到这里，相信你已经认可了 Jupter Notebook 现如今的江湖地位。不过，说到技术的选择，有些人会说，这个技术流行，我们应该用；有些人认为，阿里已经在用这个技术了，这就是未来，我们也要用等等。不得不说，这些都是片面的认知。不管是阿里还是 Facebook 用的技术，其实不一定适用你的应用场景。</p><p>我经常会鼓励技术同行，对于技术选择要有独立的思考，不要人云亦云。最起码你要去思考，Facebook 为什么选择这个技术？这个技术解决了哪些问题？Facebook 为什么不选择别的技术？有哪些局限？单从选择结果而言，Facebook 选择的技术很可能是因为它有几百个产品线，几万个工程师。而同样的技术，在一个十人的团队里，反而成了拖累。</p><p>在这里，我不想忽悠你任何技术，我想教会你的是辩证分析技术的思考方法。接下来，我们就来看看，Jupyter 究竟解决了哪些别人没有解决的问题。</p><h2 id="_3-jupyter-的优点" tabindex="-1"><a class="header-anchor" href="#_3-jupyter-的优点"><span>3. Jupyter 的优点</span></a></h2><h3 id="_3-1-整合所有的资源" tabindex="-1"><a class="header-anchor" href="#_3-1-整合所有的资源"><span>3.1 整合所有的资源</span></a></h3><p>在真正的软件开发中，上下文切换占用了大量的时间。什么意思呢？举个例子你就很好理解了，比如你需要切换窗口去看一些文档，再切换窗口去用另一个工具画图等等。这些都是影响生产效率的因素。</p><p>正如我前面提到的，Jupyter 通过把所有和软件编写有关的资源全部放在一个地方，解决了这个问题。当你打开一个 Jupyter Notebook 时，就已经可以看到相应的文档、图表、视频和相应的代码。这样，你就不需要切换窗口去找资料，只要看一个文件，就可以获得项目的所有信息。</p><h3 id="_3-2-交互性编程体验" tabindex="-1"><a class="header-anchor" href="#_3-2-交互性编程体验"><span>3.2 交互性编程体验</span></a></h3><p>在机器学习和数学统计领域，Python 编程的实验性特别强，经常出现的情况是，一小块代码需要重写 100 遍，比如为了尝试 100 种不同的方法，但别的代码都不想动。这一点和传统的 Python 开发有很大不同。如果是在传统的 Python 开发流程中，每一次实验都要把所有代码重新跑一遍，会花费开发者很多时间。特别是在像 Facebook 这样千万行级别的代码库里，即使整个公司的底层架构已经足够优化，真要重新跑一遍，也需要几分钟的时间。</p><p>而 Jupyter Notebook 引进了 Cell 的概念，每次实验可以只跑一小个 Cell 里的代码；并且，所见即所得，在代码下面立刻就可以看到结果。这样强的互动性，让 Python 研究员可以专注于问题本身，不被繁杂的工具链所累，不用在命令行直接切换，所有科研工作都能在 Jupyter 上完成。</p><h3 id="_3-3-零成本重现结果" tabindex="-1"><a class="header-anchor" href="#_3-3-零成本重现结果"><span>3.3 零成本重现结果</span></a></h3><p>同样在机器学习和数学统计领域，Python 的使用是非常短平快的。常见的场景是，我在论文里看到别人的方法效果很好，可是当我去重现时，却发现需要 pip 重新安装一堆依赖软件。这些准备工作可能会消耗你 80% 的时间，却并不是真正的生产力。</p><p>Jupyter Notebook 如何解决这个问题呢？</p><p>其实最初的 Jupyter Notebook 也是挺麻烦的，需要你先在本机上安装 IPython 引擎及其各种依赖软件。不过现在的技术趋势，则是彻底云端化了，例如 Jupyter 官方的 Binder 平台（介绍文档：<a href="https://mybinder.readthedocs.io/en/latest/index.html" target="_blank" rel="noopener noreferrer">https://mybinder.readthedocs.io/en/latest/index.html</a>）和 Google 提供的 Google Colab 环境（介绍：<a href="https://colab.research.google.com/notebooks/welcome.ipynb" target="_blank" rel="noopener noreferrer">https://colab.research.google.com/notebooks/welcome.ipynb</a>）。它们让 Jupyter Notebook 变得和石墨文档、Google Doc 在线文档一样，在浏览器点开链接就能运行。</p><p>所以，现在当你用 Binder 打开一份 GitHub 上的 Jupyter Notebook 时，你不需要安装任何软件，直接在浏览器打开一份代码，就能在云端运行。</p><h2 id="_4-jupyter-notebook-初体验" tabindex="-1"><a class="header-anchor" href="#_4-jupyter-notebook-初体验"><span>4. Jupyter Notebook 初体验</span></a></h2><p>学习技术的最好方法就是用技术。不过，在今天的篇幅里，我不可能带你完全学会 Jupyter Notebook 的所有技巧。我想先带你直接感受一下，使用 Jupyter Notebook 的工作体验。</p><p>比如这样一个 <a href="https://github.com/binder-examples/python2_with_3/blob/master/index3.ipynb" target="_blank" rel="noopener noreferrer">GitHub 文件</a> 。在 <a href="https://mybinder.org/" target="_blank" rel="noopener noreferrer">Binder</a> 中，你只要输入其对应的 GitHub Repository 的名字或者 URL，就能在云端打开整个 Repository，选择你需要的 <a href="https://mybinder.org/v2/gh/binder-examples/python2_with_3/master?filepath=index3.ipynb" target="_blank" rel="noopener noreferrer">notebook</a> ，你就能看到下图这个界面。</p><figure><img src="'+s+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>每一个 Jupyter 的运行单元都包含了 In、Out 的 Cell。如图所示，你可以使用 Run 按钮，运行单独的一个 Cell。当然，你也可以在此基础上加以修改，或者新建一个 notebook，写成自己想要的程序。赶紧打开链接试一试吧！</p><p>另外，我还推荐下面这些 Jupyter Notebook，作为你实践的第一站。</p><ul><li>第一个是 Jupyter 官方：<a href="https://mybinder.org/v2/gh/binder-examples/matplotlib-versions/mpl-v2.0/?filepath=matplotlib_versions_demo.ipynb" target="_blank" rel="noopener noreferrer">https://mybinder.org/v2/gh/binder-examples/matplotlib-versions/mpl-v2.0/?filepath=matplotlib_versions_demo.ipynb</a></li><li>第二个是 Google Research 提供的 Colab 环境，尤其适合机器学习的实践应用：<a href="https://colab.research.google.com/notebooks/basic_features_overview.ipynb" target="_blank" rel="noopener noreferrer">https://colab.research.google.com/notebooks/basic_features_overview.ipynb</a></li></ul><blockquote><p>如果你想在本地或者远程的机器上安装 Jupyter Notebook，可以参考下面的两个文档。</p></blockquote><ul><li>安装：<a href="https://jupyter.org/install.html" target="_blank" rel="noopener noreferrer">https://jupyter.org/install.html</a></li><li>运行：<a href="https://jupyter.readthedocs.io/en/latest/running.html#running" target="_blank" rel="noopener noreferrer">https://jupyter.readthedocs.io/en/latest/running.html#running</a></li></ul><h2 id="_5-总结" tabindex="-1"><a class="header-anchor" href="#_5-总结"><span>5. 总结</span></a></h2><p>这节课，我为你介绍了 Jupyter Notebook，并告诉你它为什么日趋成为 Python 社区的必学技术。这主要是因为它的三大特点：<strong>整合所有的资源、交互性编程体验和零成本重现结果。</strong> 但还是那句话，学习技术必须动手实操。这节课后，希望你能自己动手试一试 Jupyter Notebook，后面我们的一些课程代码，我也会用 Jupyter Notebook 的形式分享给你。</p><h2 id="_6-思考题" tabindex="-1"><a class="header-anchor" href="#_6-思考题"><span>6. 思考题</span></a></h2><p>你尝试 Jupyter Notebook 了吗？欢迎在留言区和我分享你的使用体验。</p><p>欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！</p><details class="hint-container details"><summary>公众号：AI悦创【二维码】</summary><figure><img src="'+e+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></details><div class="hint-container info"><p class="hint-container-title">AI悦创·编程一对一</p><p>AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh</p><p>C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh</p><p>方法一：<a href="http://wpa.qq.com/msgrd?v=3&amp;uin=1432803776&amp;site=qq&amp;menu=yes" target="_blank" rel="noopener noreferrer">QQ</a></p><p>方法二：微信：Jiabcdefh</p></div><figure><img src="'+o+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',50),b=[c];function u(d,y){return a(),r("div",null,b)}const _=t(h,[["render",u],["__file","02.html.vue"]]),J=JSON.parse('{"path":"/Python/Python-core-technology-and-practice/02.html","title":"02-Jupyter Notebook为什么是现代Python的必学技术？","lang":"zh-CN","frontmatter":{"title":"02-Jupyter Notebook为什么是现代Python的必学技术？","icon":"python","date":"2022-11-22T00:29:36.000Z","author":"AI悦创","isOriginal":true,"category":"Python 进阶","tag":["Python 进阶"],"sticky":false,"star":false,"article":true,"timeline":true,"image":false,"navbar":true,"sidebarIcon":true,"headerDepth":5,"comment":true,"lastUpdated":true,"editLink":false,"backToTop":true,"toc":true,"feed":false,"seo":false,"head":[]},"headers":[{"level":2,"title":"1. 什么是 Jupyter Notebook？","slug":"_1-什么是-jupyter-notebook","link":"#_1-什么是-jupyter-notebook","children":[]},{"level":2,"title":"2. Jupyter Notebook 的影响力","slug":"_2-jupyter-notebook-的影响力","link":"#_2-jupyter-notebook-的影响力","children":[]},{"level":2,"title":"3. Jupyter 的优点","slug":"_3-jupyter-的优点","link":"#_3-jupyter-的优点","children":[{"level":3,"title":"3.1 整合所有的资源","slug":"_3-1-整合所有的资源","link":"#_3-1-整合所有的资源","children":[]},{"level":3,"title":"3.2 交互性编程体验","slug":"_3-2-交互性编程体验","link":"#_3-2-交互性编程体验","children":[]},{"level":3,"title":"3.3 零成本重现结果","slug":"_3-3-零成本重现结果","link":"#_3-3-零成本重现结果","children":[]}]},{"level":2,"title":"4. Jupyter Notebook 初体验","slug":"_4-jupyter-notebook-初体验","link":"#_4-jupyter-notebook-初体验","children":[]},{"level":2,"title":"5. 总结","slug":"_5-总结","link":"#_5-总结","children":[]},{"level":2,"title":"6. 思考题","slug":"_6-思考题","link":"#_6-思考题","children":[]}],"git":{"createdTime":1705215474000,"updatedTime":1705215474000,"contributors":[{"name":"AndersonHJB","email":"cleland1432803776@icloud.com","commits":1}]},"readingTime":{"minutes":9.42,"words":2825},"filePathRelative":"Python/Python-core-technology-and-practice/02.md","localizedDate":"2022年11月22日","copyright":{"author":"AI悦创"}}');export{_ as comp,J as data};
