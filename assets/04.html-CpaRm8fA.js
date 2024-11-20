import{_ as i}from"./gzh-DnOBNg6W.js";import{_ as c}from"./zsxq-BcdwOI-_.js";import{_ as r}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as F,a as p,b as y,d as n,r as d,o as u,e as l,f as s}from"./app-BFJczFUY.js";const v="/assets/1654698727529-507da71e-7ae6-4f5d-baa7-6eae27b31ab7-uHRDAE2e.png",m="/assets/1654698738738-71982a64-4ab4-4fe2-a0b3-3038506cf445-CpD-iD8P.png",b="/assets/1654699545975-f16d4e1e-f773-44ac-abf8-731a1909aa6e-vJmnIL4T.png",g="/assets/1654699886809-1405a000-ed6e-496f-829c-9ec197074f9e-DypSwBsS.png",E="/assets/1654699999737-2317991d-7715-4f7a-9a86-04797cc5ba14-B8G1qX3f.png",h={};function f(A,a){const t=d("CodeTabs");return u(),F("div",null,[a[4]||(a[4]=p('<h2 id="_1-本节知识点" tabindex="-1"><a class="header-anchor" href="#_1-本节知识点"><span>1. 本节知识点</span></a></h2><ul><li>计算加减乘除</li><li>基本数据类型——int</li><li>关键字（key word）和标示符（Identifier）</li><li>用变量解决问题</li></ul><h2 id="_2-创建新项目" tabindex="-1"><a class="header-anchor" href="#_2-创建新项目"><span>2. 创建新项目</span></a></h2><figure><img src="'+v+'" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><figure><img src="'+m+'" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><blockquote><p>我选择的是 This Window</p></blockquote><h2 id="_3-新建-class" tabindex="-1"><a class="header-anchor" href="#_3-新建-class"><span>3. 新建 class</span></a></h2><figure><img src="'+b+'" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><figure><img src="'+g+'" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><figure><img src="'+E+`" alt="image.png" tabindex="0" loading="lazy"><figcaption>image.png</figcaption></figure><h2 id="_4-编写代码" tabindex="-1"><a class="header-anchor" href="#_4-编写代码"><span>4. 编写代码</span></a></h2><p>计算加减乘除的程序（例程 MathCalc）</p><ul><li>字面值（literalvalue）写几就是几</li><li>加减乘除运算符</li></ul><p><strong>如何方便的计算类似</strong> <code>y=a*x+b*x*x+c*x*x*x</code> <strong>这样的公式?</strong></p><h3 id="_4-1-mathcalc-java" tabindex="-1"><a class="header-anchor" href="#_4-1-mathcalc-java"><span>4.1 MathCalc.java</span></a></h3><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F92672;">public</span><span style="color:#F92672;"> class</span><span> </span><span style="color:#A6E22E;text-decoration:underline;">MathCalc</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F92672;">    public</span><span style="color:#F92672;"> static</span><span style="color:#66D9EF;font-style:italic;"> void</span><span style="color:#A6E22E;"> main</span><span style="color:#F8F8F2;">(</span><span style="color:#66D9EF;font-style:italic;">String</span><span style="color:#F8F8F2;">[] </span><span style="color:#FD971F;font-style:italic;">args</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#F8F8F2;">        System.out.</span><span style="color:#A6E22E;">println</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&quot;5+6&quot;</span><span style="color:#F8F8F2;">); </span><span style="color:#88846F;">// 双引号是个字符串 5+6</span></span>
<span class="line"><span style="color:#F8F8F2;">        System.out.</span><span style="color:#A6E22E;">println</span><span style="color:#F8F8F2;">(</span><span style="color:#AE81FF;">5</span><span style="color:#F92672;"> +</span><span style="color:#AE81FF;"> 6</span><span style="color:#F8F8F2;">);  </span><span style="color:#88846F;">// 11</span></span>
<span class="line"><span style="color:#F8F8F2;">        System.out.</span><span style="color:#A6E22E;">println</span><span style="color:#F8F8F2;">(</span><span style="color:#AE81FF;">5</span><span style="color:#F92672;"> -</span><span style="color:#AE81FF;"> 6</span><span style="color:#F8F8F2;">); </span><span style="color:#88846F;">// -1</span></span>
<span class="line"><span style="color:#F8F8F2;">        System.out.</span><span style="color:#A6E22E;">println</span><span style="color:#F8F8F2;">(</span><span style="color:#AE81FF;">5</span><span style="color:#F92672;"> *</span><span style="color:#AE81FF;"> 6</span><span style="color:#F8F8F2;">);  </span><span style="color:#88846F;">// 30</span></span>
<span class="line"><span style="color:#F8F8F2;">        System.out.</span><span style="color:#A6E22E;">println</span><span style="color:#F8F8F2;">(</span><span style="color:#AE81FF;">5</span><span style="color:#F92672;"> /</span><span style="color:#AE81FF;"> 6.0</span><span style="color:#F8F8F2;">);  </span><span style="color:#88846F;">// 后面带你解析，为什么加 .0 // 0.8333333333333334</span></span>
<span class="line"><span style="color:#F8F8F2;">        System.out.</span><span style="color:#A6E22E;">println</span><span style="color:#F8F8F2;">((</span><span style="color:#AE81FF;">1</span><span style="color:#F92672;"> +</span><span style="color:#AE81FF;"> 2</span><span style="color:#F92672;"> -</span><span style="color:#AE81FF;"> 3</span><span style="color:#F8F8F2;">) </span><span style="color:#F92672;">*</span><span style="color:#AE81FF;"> 4</span><span style="color:#F92672;"> /</span><span style="color:#AE81FF;"> 5.0</span><span style="color:#F8F8F2;">);  </span><span style="color:#88846F;">// 0.0</span></span>
<span class="line"><span style="color:#F8F8F2;">        System.out.</span><span style="color:#A6E22E;">println</span><span style="color:#F8F8F2;">((</span><span style="color:#AE81FF;">1</span><span style="color:#F92672;"> +</span><span style="color:#AE81FF;"> 2</span><span style="color:#F92672;"> +</span><span style="color:#AE81FF;"> 3</span><span style="color:#F8F8F2;">) </span><span style="color:#F92672;">*</span><span style="color:#AE81FF;"> 4</span><span style="color:#F92672;"> /</span><span style="color:#AE81FF;"> 5.0</span><span style="color:#F8F8F2;">);  </span><span style="color:#88846F;">// 4.8</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那实现一些比较复杂（长）的代码呢？</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F92672;">public</span><span style="color:#F92672;"> class</span><span> </span><span style="color:#A6E22E;text-decoration:underline;">MathCalc</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F92672;">    public</span><span style="color:#F92672;"> static</span><span style="color:#66D9EF;font-style:italic;"> void</span><span style="color:#A6E22E;"> main</span><span style="color:#F8F8F2;">(</span><span style="color:#66D9EF;font-style:italic;">String</span><span style="color:#F8F8F2;">[] </span><span style="color:#FD971F;font-style:italic;">args</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#F8F8F2;">        System.out.</span><span style="color:#A6E22E;">println</span><span style="color:#F8F8F2;">(</span><span style="color:#AE81FF;">2</span><span style="color:#F92672;"> *</span><span style="color:#AE81FF;"> 5</span><span style="color:#F92672;"> +</span><span style="color:#AE81FF;"> 2</span><span style="color:#F92672;"> *</span><span style="color:#AE81FF;"> 5</span><span style="color:#F92672;"> *</span><span style="color:#AE81FF;"> 5</span><span style="color:#F92672;"> +</span><span style="color:#AE81FF;"> 3</span><span style="color:#F92672;"> *</span><span style="color:#AE81FF;"> 5</span><span style="color:#F92672;"> *</span><span style="color:#AE81FF;"> 5</span><span style="color:#F92672;"> *</span><span style="color:#AE81FF;"> 5</span><span style="color:#F8F8F2;">);  </span><span style="color:#88846F;">// 435</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Q：上面的代码确实可以实现，但是不方便我们修改呀。比如：我们要把其中的 5 换成其他数字呢？——显然不是非常方便。</strong></p><p><strong>显然，我要修改至少 6 个 5，这显然劝退我了。</strong></p><p><strong>为了解决这个问题，我们该怎么办呢？</strong></p><h3 id="_4-2-基本数据类型——int【variable-java】" tabindex="-1"><a class="header-anchor" href="#_4-2-基本数据类型——int【variable-java】"><span>4.2 基本数据类型——int【Variable.java】</span></a></h3><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F92672;">public</span><span style="color:#F92672;"> class</span><span> </span><span style="color:#A6E22E;text-decoration:underline;">Variable</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F92672;">    public</span><span style="color:#F92672;"> static</span><span style="color:#66D9EF;font-style:italic;"> void</span><span style="color:#A6E22E;"> main</span><span style="color:#F8F8F2;">(</span><span style="color:#66D9EF;font-style:italic;">String</span><span style="color:#F8F8F2;">[] </span><span style="color:#FD971F;font-style:italic;">args</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">        int</span><span style="color:#F8F8F2;"> a </span><span style="color:#F92672;">=</span><span style="color:#AE81FF;"> 3</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">        int</span><span style="color:#F8F8F2;"> b </span><span style="color:#F92672;">=</span><span style="color:#AE81FF;"> 5</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">        int</span><span style="color:#F8F8F2;"> c </span><span style="color:#F92672;">=</span><span style="color:#AE81FF;"> 7</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">        int</span><span style="color:#F8F8F2;"> x </span><span style="color:#F92672;">=</span><span style="color:#AE81FF;"> 9</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">        int</span><span style="color:#F8F8F2;"> y </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> a </span><span style="color:#F92672;">*</span><span style="color:#F8F8F2;"> x </span><span style="color:#F92672;">+</span><span style="color:#F8F8F2;"> b </span><span style="color:#F92672;">*</span><span style="color:#F8F8F2;"> x </span><span style="color:#F92672;">*</span><span style="color:#F8F8F2;"> x </span><span style="color:#F92672;">+</span><span style="color:#F8F8F2;"> c </span><span style="color:#F92672;">*</span><span style="color:#F8F8F2;"> x </span><span style="color:#F92672;">*</span><span style="color:#F8F8F2;"> x </span><span style="color:#F92672;">*</span><span style="color:#F8F8F2;"> x;</span></span>
<span class="line"><span style="color:#F8F8F2;">        System.out.</span><span style="color:#A6E22E;">println</span><span style="color:#F8F8F2;">(y);  </span><span style="color:#88846F;">// 5535</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>现在我们修改 9 就很方便了，直接修改 x 即可。</strong></p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F92672;">public</span><span style="color:#F92672;"> class</span><span> </span><span style="color:#A6E22E;text-decoration:underline;">Variable</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F92672;">    public</span><span style="color:#F92672;"> static</span><span style="color:#66D9EF;font-style:italic;"> void</span><span style="color:#A6E22E;"> main</span><span style="color:#F8F8F2;">(</span><span style="color:#66D9EF;font-style:italic;">String</span><span style="color:#F8F8F2;">[] </span><span style="color:#FD971F;font-style:italic;">args</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">        int</span><span style="color:#F8F8F2;"> a </span><span style="color:#F92672;">=</span><span style="color:#AE81FF;"> 3</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">        int</span><span style="color:#F8F8F2;"> b </span><span style="color:#F92672;">=</span><span style="color:#AE81FF;"> 5</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">        int</span><span style="color:#F8F8F2;"> c </span><span style="color:#F92672;">=</span><span style="color:#AE81FF;"> 7</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">        int</span><span style="color:#F8F8F2;"> x </span><span style="color:#F92672;">=</span><span style="color:#AE81FF;"> 1</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">        int</span><span style="color:#F8F8F2;"> y </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> a </span><span style="color:#F92672;">*</span><span style="color:#F8F8F2;"> x </span><span style="color:#F92672;">+</span><span style="color:#F8F8F2;"> b </span><span style="color:#F92672;">*</span><span style="color:#F8F8F2;"> x </span><span style="color:#F92672;">*</span><span style="color:#F8F8F2;"> x </span><span style="color:#F92672;">+</span><span style="color:#F8F8F2;"> c </span><span style="color:#F92672;">*</span><span style="color:#F8F8F2;"> x </span><span style="color:#F92672;">*</span><span style="color:#F8F8F2;"> x </span><span style="color:#F92672;">*</span><span style="color:#F8F8F2;"> x;</span></span>
<span class="line"><span style="color:#F8F8F2;">        System.out.</span><span style="color:#A6E22E;">println</span><span style="color:#F8F8F2;">(y);  </span><span style="color:#88846F;">// 15</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>知识点解析一波：</strong><br> Java 中所有的数据都有类型，类型决定了存储的形式和占用的存储空间。举个例子：</p><ul><li>微博</li><li>博客</li><li>连载小说</li></ul><p>int 用来表示一个整数，取值范围在 <code>-2^31~2^31-1</code>。计算出来是 <code>-2147483648~2147483647</code>。</p><h2 id="_5-关键字-key-word-和标示符-identifier" tabindex="-1"><a class="header-anchor" href="#_5-关键字-key-word-和标示符-identifier"><span>5. 关键字（key word）和标示符（Identifier）</span></a></h2><h3 id="_5-1-标示符" tabindex="-1"><a class="header-anchor" href="#_5-1-标示符"><span>5.1 标示符</span></a></h3><ul><li>由大小写英文字符，数字和下划线(<code>_</code>)组成的，区分大小写的，不以数字开头的文字。</li><li>可以用作 Java 中的各种东西的名字，比如类名，方法名等。</li><li>标示符是区分大小写的。</li></ul><p><strong>关键字是 Java 语法的保留字，不能用来做名字。</strong></p><p><strong>我们接触到的关键字：</strong></p><ul><li><strong>public</strong></li><li><strong>class</strong></li><li><strong>static</strong></li><li><strong>void</strong></li><li><strong>int</strong></li></ul><h2 id="_6-用变量解决问题" tabindex="-1"><a class="header-anchor" href="#_6-用变量解决问题"><span>6. 用变量解决问题</span></a></h2><p><strong>例程 Variable1</strong></p><ul><li>变量（variable）</li><li>如何创建变量</li><li>如何给变量一个值</li><li>如何使用变量</li></ul><h3 id="_6-1-例程-variable1" tabindex="-1"><a class="header-anchor" href="#_6-1-例程-variable1"><span>6.1 例程 Variable1</span></a></h3>`,38)),y(t,{id:"207",data:[{id:"创建变量的多种方法"},{id:"创建变量的实际例子"}]},{title0:n(({value:e,isActive:o})=>a[0]||(a[0]=[l("创建变量的多种方法")])),title1:n(({value:e,isActive:o})=>a[1]||(a[1]=[l("创建变量的实际例子")])),tab0:n(({value:e,isActive:o})=>a[2]||(a[2]=[s("div",{class:"language-java line-numbers-mode","data-highlighter":"shiki","data-ext":"java","data-title":"java",style:{"background-color":"#272822",color:"#F8F8F2"}},[s("pre",{class:"shiki monokai vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#F92672"}},"public"),s("span",{style:{color:"#F92672"}}," class"),s("span",null," "),s("span",{style:{color:"#A6E22E","text-decoration":"underline"}},"Variable1"),s("span",{style:{color:"#F8F8F2"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F92672"}},"    public"),s("span",{style:{color:"#F92672"}}," static"),s("span",{style:{color:"#66D9EF","font-style":"italic"}}," void"),s("span",{style:{color:"#A6E22E"}}," main"),s("span",{style:{color:"#F8F8F2"}},"("),s("span",{style:{color:"#66D9EF","font-style":"italic"}},"String"),s("span",{style:{color:"#F8F8F2"}},"[] "),s("span",{style:{color:"#FD971F","font-style":"italic"}},"args"),s("span",{style:{color:"#F8F8F2"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#88846F"}},"        // 方法一")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#66D9EF","font-style":"italic"}},"        int"),s("span",{style:{color:"#F8F8F2"}}," a "),s("span",{style:{color:"#F92672"}},"="),s("span",{style:{color:"#AE81FF"}}," 1"),s("span",{style:{color:"#F8F8F2"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"        System.out."),s("span",{style:{color:"#A6E22E"}},"println"),s("span",{style:{color:"#F8F8F2"}},"(a);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#88846F"}},"        // 方法二")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#66D9EF","font-style":"italic"}},"        int"),s("span",{style:{color:"#F8F8F2"}}," b;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"        b "),s("span",{style:{color:"#F92672"}},"="),s("span",{style:{color:"#AE81FF"}}," 10"),s("span",{style:{color:"#F8F8F2"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"        System.out."),s("span",{style:{color:"#A6E22E"}},"println"),s("span",{style:{color:"#F8F8F2"}},"(b);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#88846F"}},"//        System.out.println(b=101);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"}")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})])],-1)])),tab1:n(({value:e,isActive:o})=>a[3]||(a[3]=[s("div",{class:"language-java line-numbers-mode has-collapsed-lines collapsed","data-highlighter":"shiki","data-ext":"java","data-title":"java",style:{"--vp-collapsed-lines":"15","background-color":"#272822",color:"#F8F8F2"}},[s("pre",{class:"shiki monokai vp-code"},[s("code",null,[s("span",{class:"line"},[s("span",{style:{color:"#F92672"}},"public"),s("span",{style:{color:"#F92672"}}," class"),s("span",null," "),s("span",{style:{color:"#A6E22E","text-decoration":"underline"}},"Variable"),s("span",{style:{color:"#F8F8F2"}}," {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F92672"}},"    public"),s("span",{style:{color:"#F92672"}}," static"),s("span",{style:{color:"#66D9EF","font-style":"italic"}}," void"),s("span",{style:{color:"#A6E22E"}}," main"),s("span",{style:{color:"#F8F8F2"}},"("),s("span",{style:{color:"#66D9EF","font-style":"italic"}},"String"),s("span",{style:{color:"#F8F8F2"}},"[] "),s("span",{style:{color:"#FD971F","font-style":"italic"}},"args"),s("span",{style:{color:"#F8F8F2"}},") {")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#66D9EF","font-style":"italic"}},"        int"),s("span",{style:{color:"#F8F8F2"}}," a;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"        a "),s("span",{style:{color:"#F92672"}},"="),s("span",{style:{color:"#AE81FF"}}," 100"),s("span",{style:{color:"#F8F8F2"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#66D9EF","font-style":"italic"}},"        int"),s("span",{style:{color:"#F8F8F2"}}," p, y;")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"        p "),s("span",{style:{color:"#F92672"}},"="),s("span",{style:{color:"#AE81FF"}}," 1"),s("span",{style:{color:"#F8F8F2"}},";")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"        y "),s("span",{style:{color:"#F92672"}},"="),s("span",{style:{color:"#AE81FF"}}," 9"),s("span",{style:{color:"#F8F8F2"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#66D9EF","font-style":"italic"}},"        int"),s("span",{style:{color:"#F8F8F2"}}," l "),s("span",{style:{color:"#F92672"}},"="),s("span",{style:{color:"#AE81FF"}}," 1"),s("span",{style:{color:"#F8F8F2"}},", c "),s("span",{style:{color:"#F92672"}},"="),s("span",{style:{color:"#AE81FF"}}," 11"),s("span",{style:{color:"#F8F8F2"}},";")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#88846F"}},"        // 添加的输出语句")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"        System.out."),s("span",{style:{color:"#A6E22E"}},"println"),s("span",{style:{color:"#F8F8F2"}},"("),s("span",{style:{color:"#E6DB74"}},'"a 的值是："'),s("span",{style:{color:"#F92672"}}," +"),s("span",{style:{color:"#F8F8F2"}}," a);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"        System.out."),s("span",{style:{color:"#A6E22E"}},"println"),s("span",{style:{color:"#F8F8F2"}},"("),s("span",{style:{color:"#E6DB74"}},'"p 的值是："'),s("span",{style:{color:"#F92672"}}," +"),s("span",{style:{color:"#F8F8F2"}}," p);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"        System.out."),s("span",{style:{color:"#A6E22E"}},"println"),s("span",{style:{color:"#F8F8F2"}},"("),s("span",{style:{color:"#E6DB74"}},'"y 的值是："'),s("span",{style:{color:"#F92672"}}," +"),s("span",{style:{color:"#F8F8F2"}}," y);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"        System.out."),s("span",{style:{color:"#A6E22E"}},"println"),s("span",{style:{color:"#F8F8F2"}},"("),s("span",{style:{color:"#E6DB74"}},'"l 的值是："'),s("span",{style:{color:"#F92672"}}," +"),s("span",{style:{color:"#F8F8F2"}}," l);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"        System.out."),s("span",{style:{color:"#A6E22E"}},"println"),s("span",{style:{color:"#F8F8F2"}},"("),s("span",{style:{color:"#E6DB74"}},'"c 的值是："'),s("span",{style:{color:"#F92672"}}," +"),s("span",{style:{color:"#F8F8F2"}}," c);")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"    }")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"}")]),l(`
`),s("span",{class:"line"}),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#88846F"}},"// 运行此程序将会产生以下输出：")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"a 的值是："),s("span",{style:{color:"#AE81FF"}},"100")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"p 的值是："),s("span",{style:{color:"#AE81FF"}},"1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"y 的值是："),s("span",{style:{color:"#AE81FF"}},"9")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"l 的值是："),s("span",{style:{color:"#AE81FF"}},"1")]),l(`
`),s("span",{class:"line"},[s("span",{style:{color:"#F8F8F2"}},"c 的值是："),s("span",{style:{color:"#AE81FF"}},"11")])])]),s("div",{class:"line-numbers","aria-hidden":"true",style:{"counter-reset":"line-number 0"}},[s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"}),s("div",{class:"line-number"})]),s("div",{class:"collapsed-lines"})],-1)])),_:1}),a[5]||(a[5]=p('<blockquote><p>注意，<code>+</code> 运算符在这里被用于连接（或串联）字符串和整数，生成一个新的字符串。</p></blockquote><h2 id="小技巧" tabindex="-1"><a class="header-anchor" href="#小技巧"><span>小技巧</span></a></h2><ol><li>快捷输入 <code>public static void main(String[] args)</code>，在 IDE 中使用：psvm 既可以快速输入；</li></ol><p>欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！</p><details class="hint-container details"><summary>公众号：AI悦创【二维码】</summary><figure><img src="'+i+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></details><div class="hint-container info"><p class="hint-container-title">AI悦创·编程一对一</p><p>AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh</p><p>C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh</p><p>方法一：<a href="http://wpa.qq.com/msgrd?v=3&amp;uin=1432803776&amp;site=qq&amp;menu=yes" target="_blank" rel="noopener noreferrer">QQ</a></p><p>方法二：微信：Jiabcdefh</p></div><figure><img src="'+c+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',7))])}const j=r(h,[["render",f],["__file","04.html.vue"]]),S=JSON.parse('{"path":"/Java/chapter01/04.html","title":"04-从加减乘除到变量","lang":"zh-CN","frontmatter":{"title":"04-从加减乘除到变量","date":"2022-10-22T20:02:52.000Z","icon":"java","author":"AI悦创","isOriginal":true,"category":["Java体系课"],"tag":["Java体系课"],"sticky":false,"star":false,"article":true,"timeline":true,"image":false,"navbar":true,"sidebarIcon":true,"headerDepth":5,"comment":true,"lastUpdated":true,"editLink":false,"backToTop":true,"toc":true,"footer":"长期招收编程一对一学员！微信：Jiabcdefh, <a href=\\"https://beian.miit.gov.cn/\\" target=\\"_blank\\">闽ICP备19021486号-6</a>","feed":false,"seo":false,"head":[]},"headers":[{"level":2,"title":"1. 本节知识点","slug":"_1-本节知识点","link":"#_1-本节知识点","children":[]},{"level":2,"title":"2. 创建新项目","slug":"_2-创建新项目","link":"#_2-创建新项目","children":[]},{"level":2,"title":"3. 新建 class","slug":"_3-新建-class","link":"#_3-新建-class","children":[]},{"level":2,"title":"4. 编写代码","slug":"_4-编写代码","link":"#_4-编写代码","children":[{"level":3,"title":"4.1 MathCalc.java","slug":"_4-1-mathcalc-java","link":"#_4-1-mathcalc-java","children":[]},{"level":3,"title":"4.2 基本数据类型——int【Variable.java】","slug":"_4-2-基本数据类型——int【variable-java】","link":"#_4-2-基本数据类型——int【variable-java】","children":[]}]},{"level":2,"title":"5. 关键字（key word）和标示符（Identifier）","slug":"_5-关键字-key-word-和标示符-identifier","link":"#_5-关键字-key-word-和标示符-identifier","children":[{"level":3,"title":"5.1 标示符","slug":"_5-1-标示符","link":"#_5-1-标示符","children":[]}]},{"level":2,"title":"6. 用变量解决问题","slug":"_6-用变量解决问题","link":"#_6-用变量解决问题","children":[{"level":3,"title":"6.1 例程 Variable1","slug":"_6-1-例程-variable1","link":"#_6-1-例程-variable1","children":[]}]},{"level":2,"title":"小技巧","slug":"小技巧","link":"#小技巧","children":[]}],"git":{"createdTime":1732028288000,"updatedTime":1732028288000,"contributors":[{"name":"AndersonHJB","email":"bornforthis@bornforthis.cn","commits":1}]},"readingTime":{"minutes":3.95,"words":1184},"filePathRelative":"Java/chapter01/04.md","localizedDate":"2022年10月22日","copyright":{"author":"AI悦创"}}');export{j as comp,S as data};
