import{_ as e}from"./gzh.b03adfd2.js";import{_ as o}from"./zsxq.77f6dc86.js";import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as l,a as n,d as s,b as c,e as i,r}from"./app.9b23c9fb.js";const d="/assets/2020-02-05-014719.ab12dfaf.png",u="/assets/2020-02-05-080211.df261dc2.png",k="/assets/d20cbcc0-51fc-11ea-b315-dd4a0f63c225.dec3ea26.png",m="/assets/77e2e910-877e-11ea-a9ff-29e53f17413b.14b26730.gif",v={},b=i('<p>Python 语言使用率越来越高，使用 Python 不仅可以做 GUI 开发、Web 开发，还能进行数据预处理、数据探索性分析（EDA），更是进行数据挖掘、机器学习、深度学习等的首选语言。</p><p>基于 Python 的包更是枝繁叶茂，遍地开花，“Tiobe 编程语言排行榜”最新统计显示 Python 是增长最快的语言。</p><p><img src="'+d+`" alt="img"></p><p>这得益于 Python 语言语法简单、开发效率高，集成系统非常方便。</p><p>Python 相关的就业机会也是非常多，待遇也很优厚。</p><p>因此，不管从易用性，还是工作机会和待遇来说，Python 都是 IT 从业者需要掌握的语言。</p><p>接下来，与大家，还有远在美国做 AI 博士后研究的 Alicia，一起开始我们的 60 天 Python 探索之旅吧。</p><p>开始前，先了解下这个专栏的基本使用说明，主要包括如下几点：</p><ul><li>使用的是 Python 3。</li><li>被讨论到的每个知识点都配备有小案例，辅助大家快速理解知识点，同时加深印象。</li><li>为了学习方便，对于小的代码块，尽量使用 IPython 或 Jupyter Notebook 交互工具做演示。</li><li>对于专栏涉及到的实战项目，相应的代码会按照软件工程和设计模式的思想，去拆分和组织。</li><li>书写的语言尽量做到通俗易懂，不搞华丽辞藻。</li></ul><p>所有的这些考虑，都是为了让大家在短时间内掌握 Python 技术栈，多一个生存的本领。拿到理想的 Offer 后，早日过上自己想要的生活。</p><p>让我们开始吧。</p><p><strong>首先问大家一个问题，你知道 Python 是一门什么样的语言吗？</strong></p><h2 id="python-语言两大特性" tabindex="-1"><a class="header-anchor" href="#python-语言两大特性" aria-hidden="true">#</a> Python 语言两大特性</h2><p>Python 是一门动态的、强类型语言。</p><h3 id="什么是动态语言" tabindex="-1"><a class="header-anchor" href="#什么是动态语言" aria-hidden="true">#</a> 什么是动态语言？</h3><p>要了解什么是动态语言，要首先了解“类型检查”。</p><p>类型检查是验证类型约束的过程，编译器或解释器通常在编译阶段或运行阶段做类型检查。</p><p>类型检查就是查看“变量”和它们的”类型”，然后判断表达式是否合理。例如，不能拿一个 string 类型变量除以浮点数变量。</p><p>如果类型检查发生在程序运行阶段（run time），那么它便是“动态类型语言”（dynamically typed languages）。常见的动态语言包括：</p><ul><li>Python</li><li>JavaScrpit</li><li>PHP</li></ul><p>类型检查发生在“编译阶段”（compile time）的是“静态类型语言”（statically typed languages）。常见的静态类型语言包括：</p><ul><li>C</li><li>C++</li><li>Java</li><li>C#</li><li>Scala</li></ul><h3 id="什么是强类型语言" tabindex="-1"><a class="header-anchor" href="#什么是强类型语言" aria-hidden="true">#</a> 什么是强类型语言？</h3><p>强类型语言是指：不管是在编译阶段还是运行阶段，一旦某种类型绑定到变量后，此变量便会持有此类型，并且不能同其他类型在计算表达式时，混合使用。</p><p>例如，在交互式工具 IPython 中输入如下两行代码：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>In <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">:</span> a <span class="token operator">=</span> <span class="token number">5</span>
In <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">:</span> a <span class="token operator">=</span> a <span class="token operator">+</span> <span class="token string">&#39;s&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>程序会抛出 TypeError 异常：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>unsupported operand <span class="token builtin">type</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span> <span class="token keyword">for</span> <span class="token operator">+</span><span class="token punctuation">:</span> <span class="token string">&#39;int&#39;</span> <span class="token keyword">and</span> <span class="token string">&#39;str&#39;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>意思是不支持 int 变量和 str 变量相加。</p><p>常见的强类型语言有：</p><ul><li>Python</li><li>Java</li><li>C#</li><li>Scala</li></ul><p>与之对应的是弱类型语言，弱类型语言容易与其他类型混合计算。弱类型语言代表 JavaScript。</p><p>支持如下操作：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>var data <span class="token operator">=</span> <span class="token number">5</span>
data <span class="token operator">=</span> data <span class="token operator">+</span> <span class="token string">&#39;xiaoming&#39;</span> <span class="token operator">//</span>string 和 <span class="token builtin">int</span> 结合自动转化为 string
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>常见的弱类型语言有：</p><ul><li>C</li><li>C++</li><li>PHP</li><li>Javascript</li></ul><p>如下，按照是否为静态/动态语言，弱类型/强类型两个维度，总结常用的语言分类。</p><p><img src="`+u+`" alt=""></p><h2 id="四大基本语法" tabindex="-1"><a class="header-anchor" href="#四大基本语法" aria-hidden="true">#</a> 四大基本语法</h2><p>分别从变量命名规则、缩进原则、特殊关键字和特殊运算符四个方面，总结 Python 的基本语法。</p><h3 id="命名规则" tabindex="-1"><a class="header-anchor" href="#命名规则" aria-hidden="true">#</a> 命名规则</h3><p>Python 的变量命名规则主要包括两条：</p><ul><li>允许包括英文、数字以及下划线（<code>_</code>），不能以数字开头</li><li>名称区分大小写</li></ul><p>特别说明以“下划线”开头的变量是有特殊意义的：</p><ul><li>类变量若以单下划线（<code>_</code>）开头，代表不能直接被访问，类似于 C# 的受保护型变量（protected），表示不能通过 <code>import module_name</code> 而导入。</li><li>类变量若以双下划（<code>__</code>）开头，表示为类的私有成员，不能被导入和其他类变量访问。</li><li>以双下划开头和双下划线结尾的变量是 Python 里的专用标识，有特殊的身份。</li></ul><p>如 Python 自定义类中都包括 <code>__init__</code> 和 <code>__add__</code> 方法，如果不重写 <code>__add__ </code> 去执行两个类加法操作，程序会抛 TypeError 异常。只有重写后，程序才能正常执行加法操作。</p><p>Python 变量命名习惯一般遵守蛇形命名法（snake case）：</p><ul><li>一般变量命名，<code>book_id</code>、<code>book_store_count</code>；</li><li>类名首字符为大写，如 Python 内置模块 <code>collections.abc</code> 中的 Iterable 类、我们自定义的 Book 类等；</li><li>类方法名：<code>get_store_count()</code>；</li><li>其他特殊变量，会全部大写，<code>M_PI</code>、<code>MAX_VEHICLE_SPEED</code>。</li></ul><p>这与 Java 命名方法不同，Java 最典型的命名方法——驼峰命名法（camel case）。</p><h3 id="缩进原则" tabindex="-1"><a class="header-anchor" href="#缩进原则" aria-hidden="true">#</a> 缩进原则</h3><p>Python 最具特色的地方就是用缩进代替 Java、C++ 中的 <code>{}</code>，缩进的层级结构表示代码的逻辑层次。</p><p>比如，自定义一个 Book 类，重写 <strong>add</strong> 方法计算两类书的库存量和。</p><p>Python 的缩进方法，一般为 4 个字符。</p><ul><li>代码行 <code>class Book(object)</code> 与代码行 <code># 定义类的参数</code> 的缩进，此处为 4 个字符；</li><li>代码行 <code>def __add__(self, book):</code> 与 <code>return</code> 所在行缩进也是 4 个字符。</li></ul><p>通过这种层级结构，展现代码的逻辑层次。</p><p>下面代码，创建一个 Book 类：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Book</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 定义类的参数</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>book_id<span class="token punctuation">,</span> book_name<span class="token punctuation">,</span> book_store_count<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>book_id <span class="token operator">=</span> book_id
        self<span class="token punctuation">.</span>book_name <span class="token operator">=</span> book_name
        self<span class="token punctuation">.</span>book_store_count <span class="token operator">=</span> book_store_count
    <span class="token comment"># 重写加法操作    </span>
    <span class="token keyword">def</span> <span class="token function">__add__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span>book<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> self<span class="token punctuation">.</span>book_store_count <span class="token operator">+</span> book<span class="token punctuation">.</span>book_store_count

<span class="token comment"># 创建两个 Book 类的实例：</span>
python_intro_book <span class="token operator">=</span> Book<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&#39;python入门书&#39;</span><span class="token punctuation">,</span> <span class="token number">100</span><span class="token punctuation">)</span> 
ml_intro_book <span class="token operator">=</span> Book<span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token string">&#39;机器学习入门书&#39;</span><span class="token punctuation">,</span> <span class="token number">200</span><span class="token punctuation">)</span>
<span class="token comment"># 求两本书的总销量</span>
sales_cnt <span class="token operator">=</span> python_intro_book <span class="token operator">+</span> ml_intro_book
<span class="token keyword">print</span><span class="token punctuation">(</span>sales_cnt<span class="token punctuation">)</span> <span class="token comment"># 300</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如下是代码执行结果的演示图，打印总销量 300。结合图形，辅助大家快速理解代码。</p><p><img src="`+k+'" alt="image-20200218101020064"></p><p>为了帮助新手更容易理解代码整个执行过程，专栏会配备相应的演示动画：</p><p><img src="'+m+`" alt="img"></p><p>缩进格式、行间空行数、变量和等号空格等 Python 编码规范参考PEP8。</p><p>autopep8 包遵循 PEP8 的所有规范，安装此包，做好相关配置，便可自动实现 PEP8 制定的编码规范。</p><h3 id="特殊关键字" tabindex="-1"><a class="header-anchor" href="#特殊关键字" aria-hidden="true">#</a> 特殊关键字</h3><p>Python 有 35 个关键字：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token boolean">False</span>      <span class="token keyword">await</span>      <span class="token keyword">else</span>       <span class="token keyword">import</span>     <span class="token keyword">pass</span>
<span class="token boolean">None</span>       <span class="token keyword">break</span>      <span class="token keyword">except</span>     <span class="token keyword">in</span>         <span class="token keyword">raise</span>
<span class="token boolean">True</span>       <span class="token keyword">class</span>      <span class="token class-name">finally</span>    <span class="token keyword">is</span>         <span class="token keyword">return</span>
<span class="token keyword">and</span>        <span class="token keyword">continue</span>   <span class="token keyword">for</span>        <span class="token keyword">lambda</span>     <span class="token keyword">try</span>
<span class="token keyword">as</span>         <span class="token keyword">def</span>        <span class="token keyword">from</span>       <span class="token keyword">nonlocal</span>   <span class="token keyword">while</span>
<span class="token keyword">assert</span>     <span class="token keyword">del</span>        <span class="token keyword">global</span>     <span class="token keyword">not</span>        <span class="token keyword">with</span>
<span class="token keyword">async</span>      <span class="token keyword">elif</span>       <span class="token keyword">if</span>         <span class="token keyword">or</span>         <span class="token keyword">yield</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>自定义变量名不能与它们重复。</p><p>常用且不同于其他常用语言 C++ 和 Java 的关键字，如：</p><ul><li><code>True</code> 和 <code>False</code> 用于表示值的真假，在 Java 中是 <code>true</code> 和 <code>false</code>；</li><li>逻辑反操作 Python 使用 <code>not</code>，Java 是 <code>!</code>；</li><li><code>None</code> 表示空值，Java 使用 <code>null</code>；</li><li>Python 两个条件同时满足使用 <code>and</code>，Java 是 <code>&amp;&amp;</code>；</li><li>两者满足其一，Python 使用 <code>or</code>，Java 使用 <code>||</code>；</li><li>Python 使用 <code>elif</code>， Java 是 <code>else if</code>。</li></ul><p>其他比较特殊的关键字，如：</p><ul><li><code>del</code> 用于删除可迭代对象中某个元素；</li><li><code>def</code> 用于定义函数；</li><li>带 <code>yield</code> 用于定义生成器（generator）函数；</li><li><code>global</code> 和 <code>nonlocal</code> 一种应用是 Python 函数式编程的闭包场景；</li><li><code>pass</code> 一种应用是定义接口，也是 Python 语言特有的一个关键字。</li></ul><p>这些关键字的用法，会在后续文章，更为详细的介绍。在此，先构建一个整体上的认识即可。</p><h3 id="特殊运算符" tabindex="-1"><a class="header-anchor" href="#特殊运算符" aria-hidden="true">#</a> 特殊运算符</h3><p>Python 的运算符包括：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">+</span>       <span class="token operator">-</span>       <span class="token operator">*</span>       <span class="token operator">**</span>      <span class="token operator">/</span>       <span class="token operator">//</span>      <span class="token operator">%</span>      @
<span class="token operator">&lt;&lt;</span>      <span class="token operator">&gt;&gt;</span>      <span class="token operator">&amp;</span>       <span class="token operator">|</span>       <span class="token operator">^</span>       <span class="token operator">~</span>       <span class="token operator">:=</span>
<span class="token operator">&lt;</span>       <span class="token operator">&gt;</span>       <span class="token operator">&lt;=</span>      <span class="token operator">&gt;=</span>      <span class="token operator">==</span>      <span class="token operator">!=</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>大部分运算符应该被熟知，重点介绍 3 个比较特殊的：<code>//</code>、<code>**</code>、<code>:=</code>。</p><p><code>//</code> 用于两个数值相除且向下取整，与 Python 的 math 模块中 floor 功能相似：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>In <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token number">5</span><span class="token operator">//</span><span class="token number">2</span>
Out<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token number">2</span>
In <span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token number">5</span><span class="token operator">//</span><span class="token number">4.5</span>
Out<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token number">1.0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><code>**</code> 用于幂运算：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>In <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token number">2</span> <span class="token operator">**</span> <span class="token number">3</span>
Out<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">:</span> <span class="token number">8</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>:=</code> 是在 2019 年，Python 3.8 版本里，刚刚才被支持的运算符，被形象地称为“海象运算符”。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>n <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>
<span class="token keyword">if</span> n <span class="token operator">&gt;</span> <span class="token number">10</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>n<span class="token punctuation">}</span></span><span class="token string">大于10&quot;</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如果使用“海象运算符”，写法上更为精简：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">if</span> <span class="token punctuation">(</span>n <span class="token operator">:=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">&gt;</span> <span class="token number">10</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>n<span class="token punctuation">}</span></span><span class="token string">大于10&quot;</span></span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>Python 比较运算符还支持链式比较，应用起来更加方便，比如：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>i <span class="token operator">=</span> <span class="token number">3</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">&lt;</span> i <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token comment"># False</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">&lt;</span> i <span class="token operator">&lt;=</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token comment"># True</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>另外，运算符 <code>@</code> 用于装饰器功能，本专栏会深入解释它的本质，同时配备的几个相关案例，一定会帮助你学会使用装饰器。</p><h2 id="小结" tabindex="-1"><a class="header-anchor" href="#小结" aria-hidden="true">#</a> 小结</h2><p>Python 学习第一天，首先认识 Python 两大特征：</p><ul><li>动态语言：动态指代码运行时才被编译器一行一行翻译执行；</li><li>强类型：强类型指被绑定一个类型后便不能修改，不能与其他类型混用。</li></ul><p>四大基本语法，总结了 Python 的命名规则、缩进原则、特殊关键字、特殊运算符，为后面的学习打下基础。</p><p>欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！</p><details class="custom-container details"><summary>公众号：AI悦创【二维码】</summary><p><img src="`+e+'" alt=""></p></details>',93),h={class:"custom-container info"},y=n("p",{class:"custom-container-title"},"AI悦创·编程一对一",-1),_=n("p",null,"AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh",-1),g=n("p",null,"C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh",-1),f={href:"http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes",target:"_blank",rel:"noopener noreferrer"},P=n("p",null,"方法二：微信：Jiabcdefh",-1),w=n("p",null,[n("img",{src:o,alt:""})],-1);function x(I,J){const a=r("ExternalLinkIcon");return t(),l("div",null,[b,n("div",h,[y,_,g,n("p",null,[s("方法一："),n("a",f,[s("QQ"),c(a)])]),P]),w])}const A=p(v,[["render",x],["__file","01.html.vue"]]);export{A as default};
