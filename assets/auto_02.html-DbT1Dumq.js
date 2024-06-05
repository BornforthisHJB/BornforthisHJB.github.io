import{_ as s}from"./gzh-DnOBNg6W.js";import{_ as n}from"./zsxq-BcdwOI-_.js";import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as l,o as e,a as p}from"./app-DguKnX9N.js";const o="/assets/6203aa4db38f3ab13358df0c6004yy92-Dxy1N92_.png",t={},r=p(`<p>你好，我是悦创。</p><p>咱们这个课程是用 Python 解决办公低效问题，但是即使你从来没有用过 Python，甚至没有任何的编程语言基础，也完全可以学会这门课。</p><p>为了解决你的语言问题，我特意准备了这节课。我会给你讲解 Python 的五个最基础的语法知识，包括运行环境配置、变量、数据类型、控制语句和使用函数库的方法。</p><p>这节课的内容也不需要你马上掌握，其中提到的一些关键知识，我会在后面的课程中详细讲解，包括它们的使用场景和具体用处。 <strong>学完这节课，你只要能对 Python 有一个初步的了解，可以看懂基本的 Python 代码就行了。</strong></p><p>当然，如果你有一定的 Python 语言基础，那么这节课就相当于给你巩固复习了，帮你查漏补缺。</p><h2 id="运行环境配置" tabindex="-1"><a class="header-anchor" href="#运行环境配置"><span>运行环境配置</span></a></h2><p>我们先从 Python 的运行环境配置开始说起。初学者面对的最大难题，就是如何让自己的 Python 程序运行起来。</p><p>一般情况下，运行的 Python 代码会被保存到一个以.py 作为扩展名的文件中，也就是 Python 脚本文件。要想让 Python 程序运行，我们需要打开终端应用程序（在 Windows 中开始 - 运行 -cmd.exe）：</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#D8DEE9FF;">python3 </span><span style="color:#81A1C1;">/</span><span style="color:#D8DEE9FF;">py文件所在的路径</span><span style="color:#81A1C1;">/</span><span style="color:#D8DEE9FF;">xxx</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9FF;">py</span></span>
<span class="line"><span style="color:#D8DEE9FF;">或</span></span>
<span class="line"><span style="color:#D8DEE9FF;">cd </span><span style="color:#81A1C1;">/</span><span style="color:#D8DEE9FF;">py文件所在的路径</span></span>
<span class="line"><span style="color:#D8DEE9FF;">python3 xxx</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9FF;">py</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这段代码中，<code>xxx.py</code> 就是我们编写好的 Python 脚本文件，Python3 是 Python 脚本文件的解释器，它会把我们编写好的代码翻译给计算机，让计算机去执行。</p><p>在运行程序的过程中，有两点需要注意。</p><p>第一，Windows 和 macOS 默认是没有安装 Python 解释器的，所以你需要通过 <a href="https://www.python.org/downloads/" target="_blank" rel="noopener noreferrer">Python 官方网站</a> 下载不同操作系统下的 Python 解释器。关于 Python 的版本，我建议你使用官方建议的最新稳定版本，下载后直接安装就可以使用了。</p><p>第二，Python3 解释器需要在字符终端下运行。</p><p>以 macOS 系统为例，你需要打开终端来运行python3 -V 命令来验证 Python 解释器是否安装成功，如果显示了 Python 解释器的版本，那说明安装是成功的。如果提示没有找到这个命令，你需要重新安装，并注意安装过程中是否有错误提示信息。</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#D8DEE9FF;">python3 </span><span style="color:#81A1C1;">-</span><span style="color:#D8DEE9FF;">V </span><span style="color:#616E88;"># 执行的命令 </span></span>
<span class="line"><span style="color:#D8DEE9FF;">Python </span><span style="color:#B48EAD;">3.9</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9FF;">1 </span><span style="color:#616E88;"># 返回的结果</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>搭建 Python 的开发环境，是运行一切程序的基础。无论你现在手边电脑操作系统是哪一种，我都建议你马上行动，先按照刚刚讲解的步骤，正确地安装和设置 Python 开发环境。这样在之后的课程中，你就能马上跟着我的讲解进行操作了。</p><h2 id="变量" tabindex="-1"><a class="header-anchor" href="#变量"><span>变量</span></a></h2><p>在正确配置好 Python 的开发环境之后，咱们继续学习一个重要概念：变量。</p><p>变量这个词来源于数学，在编程语言中，变量主要是用来存储计算结果或表示值的抽象概念。</p><p>计算机中的变量都有一个名字，我们把它称为变量名。这个名字一般是根据变量的英文名进行人为命名的，一般多用简短且易于记忆的名字。比如，我在课程中会使用 <code>src_path</code>、<code>dst_path</code> 两个变量表示操作源文件路径和目标文件路径。</p><p>我们还可以为变量指定一段数据，这段数据称作变量的值。计算机处理的数据很大一部分来源于用户输入的数据和运算的结果数据，如果这部分数据需要跟踪，我们就可以将数据存储在变量中。</p><p>对于初学者来说，变量的概念比较抽象，你可能现在有点蒙。别急，我现在给你举一个简单的例子，你一看就明白了。假如我要在 Python 当中计算两个数的和，代码如下：</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#D8DEE9FF;">x </span><span style="color:#81A1C1;">=</span><span style="color:#B48EAD;"> 100</span></span>
<span class="line"><span style="color:#D8DEE9FF;">y </span><span style="color:#81A1C1;">=</span><span style="color:#B48EAD;"> 200</span></span>
<span class="line"><span style="color:#D8DEE9FF;">z </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> x </span><span style="color:#81A1C1;">+</span><span style="color:#D8DEE9FF;"> y</span></span>
<span class="line"><span style="color:#88C0D0;">print</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9FF;">z</span><span style="color:#ECEFF4;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的代码当中， 我们分别定义了 x、y、z 三个变量。 x、y、z 称作变量名，定义变量名必须要遵从以下四个规则：</p><ol><li>变量名只能是字母、数字或下划线；</li><li>变量名的第 1 个字母不能是数字；</li><li>变量名也不能是 Python 的关键字；</li><li>变量名是区分大小写的。</li></ol><p>上述代码中的 = 和 +，称作运算符。</p><ul><li>“=” 叫做赋值运算符。它的功能是将右边的表达式赋值给左边的变量。</li><li>“+” 叫做算术运算符。进行算术运算时还可以使用 -、*、/、% 等常用算术运算符号。</li></ul><p>代码的最后一行，为了能让你的计算结果在终端上显示，我们需要使用一个叫做 print 的内置函数。</p><p>内置函数是 Python 内置的一种功能。比如代码中的 print 就是用来进行输出的。它的最基本用法就是在 print 函数的括号中写入变量，除了输出最终的结果外，也可以将 print 函数放在程序运行的过程中，方便你输出更丰富的调试信息。</p><p>通过上面的讲解，我为你介绍了变量如何进行赋值和如何输出。其实，在 Python 中变量用来存储的数据还会区分类，这些类型也有专门的名称，叫做数据类型。</p><h2 id="数据类型" tabindex="-1"><a class="header-anchor" href="#数据类型"><span>数据类型</span></a></h2><p>Python 支持的数据类型有数字、字符串、元组、列表、集合、字典 6 种，不同的数据类型用于描述不同的类别，比如姓名可以用字符串类型，性别可以用布尔型，身高可以用数字类型。下面的代码，我为你演示一下三种最简单的数据类型：</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#D8DEE9FF;">name </span><span style="color:#81A1C1;">=</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">huang jiabao</span><span style="color:#ECEFF4;">&quot;</span></span>
<span class="line"><span style="color:#D8DEE9FF;">male </span><span style="color:#81A1C1;">=</span><span style="color:#81A1C1;"> True</span></span>
<span class="line"><span style="color:#D8DEE9FF;">hight </span><span style="color:#81A1C1;">=</span><span style="color:#B48EAD;"> 180</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面的三个变量，我分别为它赋予了字符串、布尔类型和浮点型这三种数据类型。 Python 的变量不需要事先定义变量类型，跟其他语言相比更加简洁。Python 可以直接对变量进行赋值，这样就可以根据变量值自动识别变量的类型了。</p><p>不过在上面的例子当中，你还需要注意两点。</p><p>一方面，如果你使用字符串类型，就必须给字符串增加引号。这是字符串的语法规定，如果不加引号会被识别为其他类型，在进行操作时就会得到不同的结果。</p><p>比如说，我定义 Python 的变量为“123”，加了引号会被识别为字符串，如果一个变量“123”没有加引号，则会被自动识别为数字。如果在 Python 程序中使用“123+123”会得到两个整数的和“246”，如果是“123”+“123”就会得到两个字符串的连接“123123”。</p><p>另一方面，使用布尔类型的时候，True 和 False 首字母必须要大写，它们是 Python 的关键字，如果首字母没有大写会被当作变量处理，解释器也会报错。True 在布尔类型表示真（对），False 表示假（错）。比如算式 10&gt;5 是正确的，在 Python 中就会用 True 来表示结果是真，反之为假。</p><p>上面提到的整数、浮点数和布尔型都是属于数字类型。除了这些，Python 还支持很多种数据类型，包括数字、字符串、元组、列表、集合、字典等。它们之间的关系，我用下面的思维导图为你进行展示。</p><figure><img src="`+o+`" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>我在课程中会逐一为你剖析它们的用处, 让你能够全部掌握。当你学会这些类型的时候, 可以更精确地描述数据，比如，我想用 Python 的数据类型存储“5 个苹果和 10 个橘子”，我们就需要使用字典和字符串来表示这些数据。你可以看一下下面这个记录水果数量的例子：</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#D8DEE9FF;">fruits1 </span><span style="color:#81A1C1;">=</span><span style="color:#ECEFF4;"> {</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">apple</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#B48EAD;">5</span><span style="color:#ECEFF4;">,</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">orange</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">:</span><span style="color:#B48EAD;">10</span><span style="color:#ECEFF4;">}</span></span>
<span class="line"><span style="color:#D8DEE9FF;">fruits2 </span><span style="color:#81A1C1;">=</span><span style="color:#ECEFF4;"> &quot;</span><span style="color:#A3BE8C;">apple,5,orange,10</span><span style="color:#ECEFF4;">&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>我分别用字典和字符串记录了水果的名称和数量，可以看到，字典表达的水果和数量之间的映射关系更明确，而且不同的数据类型还能支持它特有的内置方法。例如上面定义了水果的字典数据类型，我们可以通过 <code>fruits[&quot;apple&quot;]</code> 直接得到苹果的数量 5 , 有时候，这些便捷的内置方法也是我们选择数据类型的依据。</p><p>数据类型是一门编程语言的必要组成部分，学习编程语言主要就是为了掌握它的数据类型。这节课我只要求你能够了解 Python 有哪些基本数据类型就可以了，在之后的课程当中，我会为你重点介绍每一种数据类型的优缺点，以及该怎么使用它们。</p><h2 id="流程控制" tabindex="-1"><a class="header-anchor" href="#流程控制"><span>流程控制</span></a></h2><p>流程控制，就是我们经常说的程序执行的顺序控制。 从上面的几个例子当中，你会发现程序都是从上向下依次执行的。这也是 Python 语言最简单的结构——顺序结构。在 Python 中，除了顺序结构之外，还有分支和循环两种结构。</p><h3 id="分支结构" tabindex="-1"><a class="header-anchor" href="#分支结构"><span>分支结构</span></a></h3><p>分支结构用来判定某个条件是否成立，它会根据一条或多条语句的判定结果（是 True 还是 False）来执行对应操作的语句，从而实现分支的效果。实现分支结构的语句叫做 if 语句。除了 if 这个关键词外，我们经常还会用 <code>if…else</code> 和 <code>if…else…if</code> 语句来实现更多的分支和更复杂的逻辑。</p><p>我们一起看一个比较数值大小的例子吧。</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#D8DEE9FF;">x </span><span style="color:#81A1C1;">=</span><span style="color:#B48EAD;"> 20</span></span>
<span class="line"><span style="color:#81A1C1;">if</span><span style="color:#D8DEE9FF;"> x </span><span style="color:#81A1C1;">&gt;</span><span style="color:#B48EAD;"> 10</span><span style="color:#ECEFF4;">:</span><span style="color:#616E88;">  # 注意结尾的冒号:</span></span>
<span class="line"><span style="color:#88C0D0;">    print</span><span style="color:#ECEFF4;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">if的判断结果为True</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">)</span></span>
<span class="line"><span style="color:#88C0D0;">    print</span><span style="color:#ECEFF4;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">x的值大于10</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">)</span></span>
<span class="line"><span style="color:#81A1C1;">else</span><span style="color:#ECEFF4;">:</span></span>
<span class="line"><span style="color:#88C0D0;">    print</span><span style="color:#ECEFF4;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">if的判断结果为False</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">)</span><span style="color:#D8DEE9FF;">         </span></span>
<span class="line"><span style="color:#88C0D0;">    print</span><span style="color:#ECEFF4;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">x的值小于10</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">)</span></span>
<span class="line"><span style="color:#88C0D0;">print</span><span style="color:#ECEFF4;">(</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#A3BE8C;">程序执行结束</span><span style="color:#ECEFF4;">&quot;</span><span style="color:#ECEFF4;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;"># 执行结果如下</span></span>
<span class="line"><span style="color:#D8DEE9FF;">if的判断结果为True</span></span>
<span class="line"><span style="color:#D8DEE9FF;">x的值大于10  </span></span>
<span class="line"><span style="color:#D8DEE9FF;">程序执行结束</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面这段代码当中，我们实现了判断变量 x 是否大于 10 的功能。在书写分支结构时，要注意书写格式问题，分支结构的书写格式比顺序结构要复杂，例如：</p><ol><li>if 判断的书写格式，冒号标志着 if 判断的结束。</li><li>if 下方有缩进的代码，是在 True 的条件下才能运行的。在演示代码中，缩进代码由 2 行组成，其实，它也可以由很多行代码组成，多行代码的形式被称作代码块。代码块一直到缩进再次改变的时候，True 条件下的代码才结束。</li></ol><p>需要你注意的是，在整个程序当中，缩进方式必须一致，要么使用 Tab、要么使用 4 个空格进行缩进。Python 对于缩进和复合语句结尾的冒号要求非常严格，如果弄错了就会报错。而且，缩进不同会大大影响一个程序的运行结果。例如上面的代码中“<code>print(“程序执行结束”)</code>” 如果有缩进，你就看不到“程序执行结束”这行执行结果了。</p><h2 id="循环结构" tabindex="-1"><a class="header-anchor" href="#循环结构"><span>循环结构</span></a></h2><p>在程序运行逻辑中，另一个重要的结构叫做循环结构。 <strong>循环结构是可以多次执行同一段代码的语句结构。</strong> 在 Python 当中有两种循环语句，分别是 while 语句和 for 语句。</p><p>while 语句在循环开始前先对条件语句进行判断。如果条件语句的结果为 True，则循环一次再次进行判断。如果条件允许的结果为 False，则循环结束。这里所指的条件语句和 if 语句当中的条件是一样的。下面的例子是我使用 while 语句实现的从 1~10 的累加。</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#D8DEE9FF;">start </span><span style="color:#81A1C1;">=</span><span style="color:#B48EAD;"> 1</span></span>
<span class="line"><span style="color:#D8DEE9FF;">total </span><span style="color:#81A1C1;">=</span><span style="color:#B48EAD;"> 10</span></span>
<span class="line"><span style="color:#88C0D0;">sum</span><span style="color:#81A1C1;"> =</span><span style="color:#B48EAD;"> 0</span></span>
<span class="line"><span style="color:#81A1C1;">while</span><span style="color:#D8DEE9FF;"> start </span><span style="color:#81A1C1;">&lt;=</span><span style="color:#D8DEE9FF;"> total</span><span style="color:#ECEFF4;">:</span><span style="color:#616E88;"> # 条件为True 继续执行循环</span></span>
<span class="line"><span style="color:#88C0D0;">    sum</span><span style="color:#81A1C1;"> +=</span><span style="color:#D8DEE9FF;"> start</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    start </span><span style="color:#81A1C1;">+=</span><span style="color:#B48EAD;"> 1</span></span>
<span class="line"><span style="color:#88C0D0;">print</span><span style="color:#ECEFF4;">(</span><span style="color:#88C0D0;">sum</span><span style="color:#ECEFF4;">)</span><span style="color:#616E88;">  #条件为False循环结束,输出结果</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另一个循环语句叫做 for 语句，它和 while 的功能有所不同。我们一般把 for 的功能称作遍历功能。一般我们会提供一个列表，通过 for 将列表中的每一个元素读取出来，进行处理。</p><p>举个例子，如果我们要依次输出列表中的每一个元素，就可以用下面的代码：</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#D8DEE9FF;">total </span><span style="color:#81A1C1;">=</span><span style="color:#88C0D0;"> list</span><span style="color:#ECEFF4;">(</span><span style="color:#88C0D0;">range</span><span style="color:#ECEFF4;">(</span><span style="color:#B48EAD;">1</span><span style="color:#ECEFF4;">,</span><span style="color:#B48EAD;">11</span><span style="color:#ECEFF4;">))</span><span style="color:#616E88;">  # 定义一个1-10 的列表</span></span>
<span class="line"><span style="color:#81A1C1;">for</span><span style="color:#D8DEE9FF;"> i </span><span style="color:#81A1C1;">in</span><span style="color:#D8DEE9FF;"> total</span><span style="color:#ECEFF4;">:</span></span>
<span class="line"><span style="color:#88C0D0;">    print</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9FF;">i</span><span style="color:#ECEFF4;">)</span></span>
<span class="line"><span style="color:#D8DEE9FF;"> </span></span>
<span class="line"><span style="color:#616E88;"># 输出结果</span></span>
<span class="line"><span style="color:#B48EAD;">1</span></span>
<span class="line"><span style="color:#B48EAD;">2</span></span>
<span class="line"><span style="color:#B48EAD;">3</span></span>
<span class="line"><span style="color:#B48EAD;">4</span></span>
<span class="line"><span style="color:#B48EAD;">5</span></span>
<span class="line"><span style="color:#B48EAD;">6</span></span>
<span class="line"><span style="color:#B48EAD;">7</span></span>
<span class="line"><span style="color:#B48EAD;">8</span></span>
<span class="line"><span style="color:#B48EAD;">9</span></span>
<span class="line"><span style="color:#B48EAD;">10</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>流程控制语句可以改变 Python 程序的执行顺序，而我们通常会根据实际的业务场景来控制某些语句块进行重复执行的。</p><h2 id="使用函数库" tabindex="-1"><a class="header-anchor" href="#使用函数库"><span>使用函数库</span></a></h2><p>Python 语言的强大之处，除了语法简单外，就在于它庞大的函数库了。</p><p>Python 的函数库有标准库和第三方库（也叫扩展库）。标准库是 Python 自带的，而扩展库是需要再进行安装的库。你可以从 <a href="https://docs.python.org/zh-cn/3.9/library/index.html" target="_blank" rel="noopener noreferrer">Python 的官方文档</a> 和 <a href="https://pypi.org/search/" target="_blank" rel="noopener noreferrer">PyPI 网站</a> 中找到它们，其中，PyPI 网站的库就是扩展库。</p><p><a href="https://pypi.org/" target="_blank" rel="noopener noreferrer">PyPI网站</a> 上面的项目超过 28 万个，几乎包含了各个行业和各个功能的应用，实现了很多你日常需要手动操作的功能。</p><p>这些库如何是用呢？首先看一下官方自带的库。</p><p><strong>如果要使用官方自带的库，可以使用 import 关键字导入。</strong> 例如我计算算数平方根功能，就可以使用如下方法：</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">import</span><span style="color:#D8DEE9FF;"> math</span></span>
<span class="line"><span style="color:#D8DEE9FF;">math</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">sqrt</span><span style="color:#ECEFF4;">(</span><span style="color:#B48EAD;">16</span><span style="color:#ECEFF4;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>import 后面指定要使用的库的名称，使用库的具体功能，通过官方文档来找到相应的函数。例如，算数平方根使用 sqrt 函数就可以实现你想要的功能了。</p><p>欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！</p><details class="hint-container details"><summary>公众号：AI悦创【二维码】</summary><figure><img src="`+s+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></details><div class="hint-container info"><p class="hint-container-title">AI悦创·编程一对一</p><p>AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh</p><p>C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh</p><p>方法一：<a href="http://wpa.qq.com/msgrd?v=3&amp;uin=1432803776&amp;site=qq&amp;menu=yes" target="_blank" rel="noopener noreferrer">QQ</a></p><p>方法二：微信：Jiabcdefh</p></div><figure><img src="'+n+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',73),i=[r];function c(d,y){return e(),l("div",null,i)}const v=a(t,[["render",c],["__file","auto_02.html.vue"]]),m=JSON.parse('{"path":"/Python/pyauto/auto_02.html","title":"02-导读｜入门Python的必备知识","lang":"zh-CN","frontmatter":{"title":"02-导读｜入门Python的必备知识","date":"2022-10-13T23:24:44.000Z","author":"AI悦创","isOriginal":true,"category":"Python 办公自动化","tag":["Python 办公自动化"],"icon":"python","sticky":false,"star":false,"article":true,"timeline":true,"image":false,"navbar":true,"sidebarIcon":true,"headerDepth":5,"comment":true,"lastUpdated":true,"editLink":true,"backToTop":true,"toc":true,"feed":false,"seo":false,"head":[]},"headers":[{"level":2,"title":"运行环境配置","slug":"运行环境配置","link":"#运行环境配置","children":[]},{"level":2,"title":"变量","slug":"变量","link":"#变量","children":[]},{"level":2,"title":"数据类型","slug":"数据类型","link":"#数据类型","children":[]},{"level":2,"title":"流程控制","slug":"流程控制","link":"#流程控制","children":[{"level":3,"title":"分支结构","slug":"分支结构","link":"#分支结构","children":[]}]},{"level":2,"title":"循环结构","slug":"循环结构","link":"#循环结构","children":[]},{"level":2,"title":"使用函数库","slug":"使用函数库","link":"#使用函数库","children":[]}],"git":{"createdTime":1706497934000,"updatedTime":1706497934000,"contributors":[{"name":"AndersonHJB","email":"cleland1432803776@icloud.com","commits":1}]},"readingTime":{"minutes":12.82,"words":3845},"filePathRelative":"Python/pyauto/auto_02.md","localizedDate":"2022年10月13日","copyright":{"author":"AI悦创"}}');export{v as comp,m as data};
