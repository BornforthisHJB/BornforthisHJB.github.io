import{_ as d}from"./gzh.b03adfd2.js";import{_ as o}from"./zsxq.77f6dc86.js";import{_ as l}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as r,a as e,d as n,b as i,e as a,r as c}from"./app.5f91f38d.js";const u="/assets/666de2b821ea4af8850f1ff8c015d51f.c5f3a434.png",p="/assets/ad6a78896e38466b8151a78952fb8355.ad8aa67a.png",m={},v=e("p",null,"你好，我是悦创。",-1),b=e("blockquote",null,[e("p",null,"详细的记录了一步步搭建自己的电子文档笔记")],-1),h=e("h1",{id:"_1-环境搭建",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-环境搭建","aria-hidden":"true"},"#"),n(" 1. 环境搭建")],-1),g=e("h2",{id:"_1-1-安装-nodejs",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#_1-1-安装-nodejs","aria-hidden":"true"},"#"),n(" 1.1 安装 Nodejs")],-1),k=e("p",null,"大佬级别直接看下面这句话，就没啥问题：",-1),_={href:"https://nodejs.org/en/",target:"_blank",rel:"noopener noreferrer"},f=e("p",null,"小白继续看看下来：",-1),x={href:"http://nodejs.cn/download/",target:"_blank",rel:"noopener noreferrer"},E=e("p",null,"安装 Node.js 的其中一种非常便捷的方式是通过软件包管理器。 对于这种情况，每种操作系统都有其自身的软件包管理器。",-1),M={href:"https://brew.sh/",target:"_blank",rel:"noopener noreferrer"},w=e("div",{class:"language-cmd line-numbers-mode","data-ext":"cmd"},[e("pre",{class:"language-cmd"},[e("code",null,`brew install node
`)]),e("div",{class:"line-numbers","aria-hidden":"true"},[e("div",{class:"line-number"})])],-1),A={href:"https://nodejs.org/en/download/package-manager/",target:"_blank",rel:"noopener noreferrer"},R=e("p",null,"nvm 是一种流行的运行 Node.js 的方式。 例如，它可以轻松地切换 Node.js 版本，也可以安装新版本用以尝试并且当出现问题时轻松地回滚。",-1),q=e("p",null,"这对于使用旧版本的 Node.js 来测试代码非常有用。",-1),D={href:"https://github.com/creationix/nvm",target:"_blank",rel:"noopener noreferrer"},j=a(`<p>建议，如果刚入门并且还没有用过 Homebrew，则使用官方的安装程序，否则，Homebrew 是更好的解决方案。</p><p>无论如何，当安装 Node.js 之后，就可以在命令行中访问 node 可执行程序。</p><h2 id="_1-2-gitbook-cli-脚手架安装" tabindex="-1"><a class="header-anchor" href="#_1-2-gitbook-cli-脚手架安装" aria-hidden="true">#</a> 1.2 gitbook-cli 脚手架安装</h2><ol><li>命令安装</li></ol><div class="language-nodejs line-numbers-mode" data-ext="nodejs"><pre class="language-nodejs"><code>npm install -g gitbook-cli
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ol start="2"><li>版本验证</li></ol><div class="language-nodejs line-numbers-mode" data-ext="nodejs"><pre class="language-nodejs"><code># gitbook -V
CLI version: 2.3.2
GitBook version: 3.2.3
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li><p>编译器的选择:推荐下面两个</p></li><li><p>vscode</p></li><li><p>Typora</p></li><li><p>sublimeText3</p></li></ol><h1 id="_2-创建目录-初始化" tabindex="-1"><a class="header-anchor" href="#_2-创建目录-初始化" aria-hidden="true">#</a> 2. 创建目录，初始化</h1><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>mkdir gitbook-imsdk   // 创建项目目录
cd gitbook-imsdk
gitbook init  // 初始化目录
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>PS: 如果初始化报错的话：</strong></p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>TypeError [ERR_INVALID_ARG_TYPE]: The &quot;data&quot; argument must be of type string or an instance of Buffer, TypedArray, or DataView. Received an instance of Promise
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div>`,12),y={href:"https://www.aiyc.top/1946.html",target:"_blank",rel:"noopener noreferrer"},G=a(`<div class="language-nvm line-numbers-mode" data-ext="nvm"><pre class="language-nvm"><code>nvm list
nvm use vxxxx
然后从新进入 cd gitbook-imsdk
gitbook init
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>PS:</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code># nvm list

  * 14.18.0 (Currently using 64-bit executable)
    10.12.0

# nvm use v10.12.0
Now using node v10.12.0 (64-bit)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>初始化完成，默认生成两个文件：<code>SUMMARY.md</code>，<code>README.md</code></p><p><img src="`+u+'" alt="在这里插入图片描述"></p><h1 id="_3-详细说明" tabindex="-1"><a class="header-anchor" href="#_3-详细说明" aria-hidden="true">#</a> 3. 详细说明</h1><h2 id="_3-1-编写-readme-and-summary" tabindex="-1"><a class="header-anchor" href="#_3-1-编写-readme-and-summary" aria-hidden="true">#</a> 3.1 编写 README and SUMMARY</h2>',7),S={href:"http://Sumary.md",target:"_blank",rel:"noopener noreferrer"},P={id:"_3-1-1-readme-md",tabindex:"-1"},N=e("a",{class:"header-anchor",href:"#_3-1-1-readme-md","aria-hidden":"true"},"#",-1),U={href:"http://README.md",target:"_blank",rel:"noopener noreferrer"},Y=a(`<p>这个文件相对于是一本 Gitbook 的简介，比如我们这本书的 <code>README.md</code> :</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">#</span> Gitbook 使用入门</span>


<span class="token blockquote punctuation">&gt;</span> GitBook 是一个基于 Node.js 的命令行工具，可使用 Github/Git 和 Markdown 来制作精美的电子书。

本书将简单介绍如何安装、编写、生成、发布一本在线图书。
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,2),L={id:"_3-1-2-summary-md",tabindex:"-1"},I=e("a",{class:"header-anchor",href:"#_3-1-2-summary-md","aria-hidden":"true"},"#",-1),C={href:"http://SUMMARY.md",target:"_blank",rel:"noopener noreferrer"},O=a(`<p>这个文件相对于是一本书的目录结构。比如我们这本书的 <code>SUMMARY.md</code> :</p><div class="language-markdown line-numbers-mode" data-ext="md"><pre class="language-markdown"><code><span class="token title important"><span class="token punctuation">#</span> Summary</span>

<span class="token list punctuation">*</span> <span class="token url">[<span class="token content">Introduction</span>](<span class="token url">README.md</span>)</span>
<span class="token list punctuation">*</span> <span class="token url">[<span class="token content">基本安装</span>](<span class="token url">howtouse/README.md</span>)</span>
   <span class="token list punctuation">*</span> <span class="token url">[<span class="token content">Node.js安装</span>](<span class="token url">howtouse/nodejsinstall.md</span>)</span>
   <span class="token list punctuation">*</span> <span class="token url">[<span class="token content">Gitbook安装</span>](<span class="token url">howtouse/gitbookinstall.md</span>)</span>
   <span class="token list punctuation">*</span> <span class="token url">[<span class="token content">Gitbook命令行速览</span>](<span class="token url">howtouse/gitbookcli.md</span>)</span>
<span class="token list punctuation">*</span> <span class="token url">[<span class="token content">图书项目结构</span>](<span class="token url">book/README.md</span>)</span>
   <span class="token list punctuation">*</span> <span class="token url">[<span class="token content">README.md 与 SUMMARY编写</span>](<span class="token url">book/file.md</span>)</span>
   <span class="token list punctuation">*</span> <span class="token url">[<span class="token content">目录初始化</span>](<span class="token url">book/prjinit.md</span>)</span>
<span class="token list punctuation">*</span> <span class="token url">[<span class="token content">图书输出</span>](<span class="token url">output/README.md</span>)</span>
   <span class="token list punctuation">*</span> <span class="token url">[<span class="token content">输出为静态网站</span>](<span class="token url">output/outfile.md</span>)</span>
   <span class="token list punctuation">*</span> <span class="token url">[<span class="token content">输出PDF</span>](<span class="token url">output/pdfandebook.md</span>)</span>
<span class="token list punctuation">*</span> <span class="token url">[<span class="token content">发布</span>](<span class="token url">publish/README.md</span>)</span>
   <span class="token list punctuation">*</span> <span class="token url">[<span class="token content">发布到Github Pages</span>](<span class="token url">publish/gitpages.md</span>)</span>
<span class="token list punctuation">*</span> <span class="token url">[<span class="token content">结束</span>](<span class="token url">end/README.md</span>)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>SUMMARY.md</code> 基本上是列表加链接的语法。链接中可以使用目录，也可以使用。</p><h2 id="_3-2-本地预览" tabindex="-1"><a class="header-anchor" href="#_3-2-本地预览" aria-hidden="true">#</a> 3.2 本地预览</h2><h3 id="_3-2-1-gitbook-init" tabindex="-1"><a class="header-anchor" href="#_3-2-1-gitbook-init" aria-hidden="true">#</a> 3.2.1 gitbook init</h3><p>在预览之前，还需要做一步操作。</p>`,6),T={href:"http://README.md",target:"_blank",rel:"noopener noreferrer"},B={href:"http://SUMMARY.md",target:"_blank",rel:"noopener noreferrer"},V=a(`<div class="language-gitbook line-numbers-mode" data-ext="gitbook"><pre class="language-gitbook"><code>$ gitbook init # 命令得到的输出省略

$ ls
README.md    SUMMARY.md    book    end    howtouse    output    publish

$tree
.
├── README.md
├── SUMMARY.md
├── book
│   ├── README.md
│   ├── file.md
│   └── prjinit.md
├── howtouse
│   ├── Nodejsinstall.md
│   ├── README.md
│   ├── gitbookcli.md
│   └── gitbookinstall.md
├── output
│   ├── README.md
│   ├── outfile.md
│   └── pdfandebook.md
└── publish
    ├── README.md
    └── gitpages.md
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们可以看到，gitbook 给我们生成了与 <code>SUMMARY.md</code> 所对应的目录及文件。</p><p>每个目录中，都有一个 <code>README.md</code> 文件，用于描述这一章的说明。</p><h3 id="_3-2-2-gitbook-serve" tabindex="-1"><a class="header-anchor" href="#_3-2-2-gitbook-serve" aria-hidden="true">#</a> 3.2.2 gitbook serve</h3><p>接下来，我们使用</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>gitbook serve ./{book_name}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我的操作，启动服务，进行预览：</p><div class="language-gitbook line-numbers-mode" data-ext="gitbook"><pre class="language-gitbook"><code>gitbook serve
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>启动完之后，浏览器输入：<code>http://localhost:4000</code></p><p><strong>注意：</strong></p><p>可以事先创建好文章目录，通过执行 gitbook init 自动生成对应的文件，然后在 gitbook serve。</p><h2 id="_3-3-图书输出" tabindex="-1"><a class="header-anchor" href="#_3-3-图书输出" aria-hidden="true">#</a> 3.3 图书输出</h2><p>目前为止，Gitbook 支持如下输出：</p><ul><li>静态 HTML，可以看作一个静态网站</li><li>PDF 格式</li><li>eBook格式</li><li>单个 HTML 文件</li><li>JSON 格式</li></ul><p>我们这里着重说下如何输出静态的 HTML 和 PDF 文件。</p><h3 id="_3-3-1-输出为静态网站" tabindex="-1"><a class="header-anchor" href="#_3-3-1-输出为静态网站" aria-hidden="true">#</a> 3.3.1 输出为静态网站</h3><p>你有两种方式输出一个静态的网站：</p><h4 id="_1-本地预览是自动生成" tabindex="-1"><a class="header-anchor" href="#_1-本地预览是自动生成" aria-hidden="true">#</a> 1. 本地预览是自动生成</h4><p>当你编辑好 gitbook 文档之后，你可以使用 gitbook 的命令来进行本地预览。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>gitbook serve ./{book_name}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>gitbook 会启动一个 4000 端口用于预览。</p><p>比如，通过 <code>gitbook serve</code> 来预览本文档：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>clela@AIYC D:\\gitee_all\\quicksand_suanfa
# gitbook serve
Live reload server started on port: 35729
Press CTRL+C to quit ...

info: 7 plugins are installed
info: loading plugin &quot;livereload&quot;... OK
info: loading plugin &quot;highlight&quot;... OK
info: loading plugin &quot;search&quot;... OK
info: loading plugin &quot;lunr&quot;... OK
info: loading plugin &quot;sharing&quot;... OK
info: loading plugin &quot;fontsettings&quot;... OK
info: loading plugin &quot;theme-default&quot;... OK
info: found 14 pages
info: found 13 asset files
info: &gt;&gt; generation finished with success in 1.0s !

Starting server ...
Serving book on http://localhost:4000
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,23),F={href:"http://localhost:4000",target:"_blank",rel:"noopener noreferrer"},H=a('<p><img src="'+p+`" alt="在这里插入图片描述"></p><p>你会发现，在你编辑的 gitbook项目的目录中会多一个 <code>_book</code> 目录，而这个目录中就是生成的本地预览的静态网站内容。</p><h4 id="_2-使用-gitbook-build-参数" tabindex="-1"><a class="header-anchor" href="#_2-使用-gitbook-build-参数" aria-hidden="true">#</a> 2. 使用 gitbook build 参数</h4><p>与直接预览生成的静态网站不一样的时，使用这个命令，你可以将内容输出到你想要的目录。</p><blockquote><p>Ps：<code>gitbook build ./{book_name} --output=./{outputFolde}</code><code>gitbook build [当前路径] [输出路径]</code><code>gitbook build ./ doc # 默认打包输出到当前路径下面的 doc 文件夹中</code></p></blockquote><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>$ gitbook build --output=/tmp/gitbook
Starting build ...
Successfuly built !
$ ls /tmp/gitbook/
howtouse          search_index.json
book              imgs              output
gitbook           index.html        publish
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>注意：</strong></p><p>打包成功之后，默认输出的文件放在 <code>_book</code> 文件夹里面，编译之后的入口： <code>index.html</code></p><p><strong>无论哪种方式，你都可以将这个静态网站打包，发布到你想要发布的服务器上，或者直接将这个打包文件给阅读者。</strong></p><h3 id="_3-3-2-输出-pdf" tabindex="-1"><a class="header-anchor" href="#_3-3-2-输出-pdf" aria-hidden="true">#</a> 3.3.2 输出 PDF</h3><p>输出为 PDF 文件，需要先安装 <code>gitbook pdf</code></p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>npm install gitbook-pdf -g
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><blockquote><p>一般来说，不推荐安装全局环境，安装局部环境会比较好。</p></blockquote>`,13),K={href:"http://phantomjs.org/",target:"_blank",rel:"noopener noreferrer"},$=e("p",null,[e("strong",null,"当然，上面的方法，我试了，以失败告终。所以我换了一种方法。")],-1),J={href:"https://www.aiyc.top/1969.html",target:"_blank",rel:"noopener noreferrer"},Q=a(`<p>然后，用下面的命令就可以生成 PDF 文件了。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>gitbook pdf {book_name}
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>如果，你已经在编写的 gitbook 当前目录，也可以使用相对路径。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>gitbook pdf .
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后，你就会发现，你的目录中多了一个名为 <code>book.pdf</code> 的文件。</p><h2 id="_3-4-查看帮助" tabindex="-1"><a class="header-anchor" href="#_3-4-查看帮助" aria-hidden="true">#</a> 3.4 查看帮助</h2><div class="language-gitbook line-numbers-mode" data-ext="gitbook"><pre class="language-gitbook"><code>clela@AIYC D:\\gitee_all\\quicksand_suanfa
# gitbook -h

  Usage: gitbook [options] [command]


  Options:

    -v, --gitbook [version]  specify GitBook version to use
    -d, --debug              enable verbose error
    -V, --version            Display running versions of gitbook and gitbook-cli
    -h, --help               output usage information


  Commands:

    ls                        List versions installed locally
    current                   Display currently activated version
    ls-remote                 List remote versions available for install
    fetch [version]           Download and install a &lt;version&gt;
    alias [folder] [version]  Set an alias named &lt;version&gt; pointing to &lt;folder&gt;
    uninstall [version]       Uninstall a version
    update [tag]              Update to the latest version of GitBook
    help                      List commands for GitBook
    *                         run a command with a specific gitbook version
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_3-5-发布" tabindex="-1"><a class="header-anchor" href="#_3-5-发布" aria-hidden="true">#</a> 3.5 发布</h2><p>可以使用 Github Pages 服务将我们写的 gitbook 发布到互联网上，前提是你已经了解了 Git、Github 及 Github Pages 的使用。</p><h3 id="_3-5-1-发布到-github-pages" tabindex="-1"><a class="header-anchor" href="#_3-5-1-发布到-github-pages" aria-hidden="true">#</a> 3.5.1 发布到 Github Pages</h3><h4 id="_1-将静态网站直接发布到-github-pages" tabindex="-1"><a class="header-anchor" href="#_1-将静态网站直接发布到-github-pages" aria-hidden="true">#</a> 1. 将静态网站直接发布到 Github Pages</h4>`,11),W=e("code",null,".md",-1),z={href:"https://pages.github.com/",target:"_blank",rel:"noopener noreferrer"},X={href:"https://www.yuque.com/docs/share/9afacf4e-005e-4c5e-8373-a81af2940a68?#",target:"_blank",rel:"noopener noreferrer"},Z={href:"https://www.yuque.com/docs/share/9afacf4e-005e-4c5e-8373-a81af2940a68?#",target:"_blank",rel:"noopener noreferrer"},ee=a('<h3 id="_3-5-2-使用项目的-pages-服务" tabindex="-1"><a class="header-anchor" href="#_3-5-2-使用项目的-pages-服务" aria-hidden="true">#</a> 3.5.2 使用项目的 Pages 服务</h3><p>除了上面的直接发布静态文件到 Github Pages 的方法以外，还可以使用一个单独的项目的 Github Pages 功能。</p><h4 id="_1-创建仓库与分支" tabindex="-1"><a class="header-anchor" href="#_1-创建仓库与分支" aria-hidden="true">#</a> 1. 创建仓库与分支</h4><ol><li>登陆到 Github，创建一个新的仓库，名称我们就命名为 <code>book</code> ，这样我就得到一个 <code>book</code> 仓库。（创建的时候小白推荐选上 <code>README.md</code> 初始化）</li><li>克隆仓库到本地： <code>git clone git@github.com:/USER_NAME/book.git</code></li><li>创建一个新分支： <code>git checkout -b gh-pages</code>，注意，分支名必须为 <code>gh-pages</code> 。</li><li>将分支 push 到仓库： <code>git push -u origin gh-pages</code>。</li><li>切换到主分支：<code>git checkout main</code>。</li></ol><p>经过这一步处理，我们已经创建了 <code>gh-pages</code> 分支了，有了这个分支，Github会自动为你分配一个网址。</p>',5),ne={href:"http://USERNAME.github.io/book",target:"_blank",rel:"noopener noreferrer"},se=a(`<p><strong>同步静态网站代码到分支：</strong></p><p>下面我们就可以将 build 好的静态网站代码同步到 <code>gh-pages</code> 分支中去了。</p><p>把 build 成功的文件复制到 book 本地的 book 文件夹中。</p><ol><li>切换 git 分支</li></ol><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>git checkout gh-pages # 需要按上面的步骤操作，上面的步骤操作后也会自动切换分支
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>我的实际操作：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>aiyc@aiyc:/mnt/d/Github_pages/book$ git checkout gh-pages
Switched to branch &#39;gh-pages&#39;
Your branch is up to date with &#39;origin/gh-pages&#39;.
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来，输入下面的一系列命令：</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>git add .
git commit -m &quot;first commit&quot;
git push
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后，等十来分钟后，你就可以访问到你的在线图书了。以后，只要你每次修改之后，将生成静态网站 Copy 到 <code>book</code> 目录，然后运行上面三条命令一下就 OK 了。</p><p>后面会更新插件的用法，敬请期待！</p><p>欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！</p><details class="custom-container details"><summary>公众号：AI悦创【二维码】</summary><p><img src="`+d+'" alt=""></p></details>',13),ie={class:"custom-container info"},ae=e("p",{class:"custom-container-title"},"AI悦创·编程一对一",-1),de=e("p",null,"AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh",-1),oe=e("p",null,"C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh",-1),le={href:"http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes",target:"_blank",rel:"noopener noreferrer"},te=e("p",null,"方法二：微信：Jiabcdefh",-1),re=e("p",null,[e("img",{src:o,alt:""})],-1);function ce(ue,pe){const s=c("ExternalLinkIcon");return t(),r("div",null,[v,b,h,g,k,e("p",null,[n("这个安装很简单，只需要下载，然后一路 next 即可。下载链接："),e("a",_,[n("https://nodejs.org/en/"),i(s)])]),f,e("p",null,[n("用于所有主流平台的官方软件包，可访问 "),e("a",x,[n("http://nodejs.cn/download/"),i(s)])]),E,e("p",null,[n("在 macOS 上，"),e("a",M,[n("Homebrew"),i(s)]),n(" 是业界的标准，在安装之后可以非常轻松地安装 Node.js（通过在 CLI 中运行以下命令）：")]),w,e("p",null,[n("其他适用于 Linux 和 Windows 的软件包管理器列出在 "),e("a",A,[n("https://nodejs.org/en/download/package-manager/"),i(s)]),n("。")]),R,q,e("p",null,[n("详见 "),e("a",D,[n("https://github.com/creationix/nvm"),i(s)]),n("。")]),j,e("p",null,[n("经排查，node 版本过高，降低一下 nodejs 版本即可。但是需要重新安装？——可以重新安装，但是不划算也没有技术的体现。使用 nvm，至于什么是 nvm 点击此文章阅读："),e("a",y,[n("NVM 常用命令"),i(s)])]),G,e("p",null,[n("此文件为章节目录设置文件，如果我们想为我们的创作添加章节目录，我们可以利用 "),e("a",S,[n("Sumary.md"),i(s)]),n(" 文件进行章节目录划分，此文件的书写格式也比较简单，例如：")]),e("h3",P,[N,n(" 3.1.1 "),e("a",U,[n("README.md"),i(s)])]),Y,e("h3",L,[I,n(" 3.1.2 "),e("a",C,[n("SUMMARY.md"),i(s)])]),O,e("p",null,[n("当 "),e("a",T,[n("README.md"),i(s)]),n("、"),e("a",B,[n("SUMMARY.md"),i(s)]),n(" 创建完毕之后，我们可以使用 Gitbook 的命令行工具将这个目目录结构生成相应地目录及文件")]),V,e("p",null,[n("你可以你的浏览器中打开这个网址： "),e("a",F,[n("http://localhost:4000"),i(s)])]),H,e("blockquote",null,[e("p",null,[n("如果在安装 gitbook-pdf 时，觉得下载 phantomjs 包太慢的话，你可以到 phantomjs 的官方网站上去下载。 "),e("a",K,[n("http://phantomjs.org/"),i(s)]),n(" 这个包的安装方式，参考其官网的说明文档。")])]),$,e("p",null,[n("Windows下使用 gitbook 生成PDF文件："),e("a",J,[n("https://www.aiyc.top/1969.html"),i(s)])]),Q,e("p",null,[n("可以将编写好的 "),W,n(" 文件通过 Gitbook 处理成静态网站，然后发布到"),e("a",z,[n("Github Pages"),i(s)]),n(" 上。")]),e("p",null,[n("这个参考这个：["),e("a",X,[n("https://www.yuque.com/docs/share/9afacf4e-005e-4c5e-8373-a81af2940a68?#"),i(s)]),n(" 《利用 GitHub 从零开始搭建一个博客》]("),e("a",Z,[n("https://www.yuque.com/docs/share/9afacf4e-005e-4c5e-8373-a81af2940a68?#"),i(s)]),n(" 《利用 GitHub 从零开始搭建一个博客》)")]),ee,e("blockquote",null,[e("p",null,[e("a",ne,[n("http://USERNAME.github.io/book"),i(s)])])]),se,e("div",ie,[ae,de,oe,e("p",null,[n("方法一："),e("a",le,[n("QQ"),i(s)])]),te]),re])}const ge=l(m,[["render",ce],["__file","491.html.vue"]]);export{ge as default};
