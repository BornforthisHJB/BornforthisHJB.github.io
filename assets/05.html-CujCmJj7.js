import{_ as s}from"./gzh-DnOBNg6W.js";import{_ as a}from"./zsxq-BcdwOI-_.js";import{_ as n}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as t,a as l,o as e}from"./app-BOPxYLyE.js";const h="/assets/1654831009172-a022c446-2e5b-498f-9ce9-b33bca1aa586-6MNJXDfu.png",r={};function p(k,i){return e(),t("div",null,i[0]||(i[0]=[l(`<h2 id="_1-目录" tabindex="-1"><a class="header-anchor" href="#_1-目录"><span>1. 目录</span></a></h2><ul><li>Java 代码三级跳——表达式，语句和代码块</li><li>Java 是区分大小写的</li><li>字面值不简单</li><li>int x = 5; int y = x + 1; 包含多少语法点？</li></ul><h2 id="_2-解析上节课的代码" tabindex="-1"><a class="header-anchor" href="#_2-解析上节课的代码"><span>2. 解析上节课的代码</span></a></h2><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Variable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">args</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> variable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        variable </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 999</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> a</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> b</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> c</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 7</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> x</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 1</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> y</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> a </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">*</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> x </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> b </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">*</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> x </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">*</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> x </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">+</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> c </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">*</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> x </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">*</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> x </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">*</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> x;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">        System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(y);</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>int variable</code>：在不加分号的情况下，是表达式；</li><li>如果 <code>int variable;</code> ：紧跟一个分号，那就叫一个语句。也就是说，这个表达式已经结束了，这是一个语句；</li><li><code>variable = 999;</code>：赋值表达式；</li><li><code>int a</code>：其实就是个表达式，创建一个 a 变量。紧接着 <code>a=3</code> 它又是一个赋值表达式，最后用分号组成语句；</li><li><strong>多说一句，其实一个语句可以没有表达式，直接一个分号 ；就是一个语句。</strong></li><li><strong>一个代码块也可以没有任何语句。【0到多个】</strong></li></ul><h2 id="_3-java-代码三级跳——表达式-语句和代码块" tabindex="-1"><a class="header-anchor" href="#_3-java-代码三级跳——表达式-语句和代码块"><span>3. Java 代码三级跳——表达式，语句和代码块</span></a></h2><ul><li><strong>表达式（expression）</strong>：Java 中最基本的一个运算。比如一个加法运算表达式。<strong>1+2</strong> 是一个表达式，<strong>a+b</strong> 也是。</li><li><strong>语句（statement）</strong>：类似于平时说话时的一句话，由表达式组成，以 <strong>;</strong> 结束。 <strong>1+2; 1+2+3; a+b; int a = 3; y = a + 9; System.out.println(y)</strong> 都是语句。</li><li><strong>代码块</strong>：一对大括号括起来的就是一个代码块。</li></ul><h2 id="_4-java-是区分大小写的" tabindex="-1"><a class="header-anchor" href="#_4-java-是区分大小写的"><span>4. Java 是区分大小写的</span></a></h2><ul><li>关键字和标示符都是区分大小写的</li><li>类名必须与文件名一致，包括大小写要求</li><li>使用变量时，名字必须和声明变量时的标示符大小写一致</li><li>方法名也区分大小写。main 和 Main 是两个名字</li><li>类型也区分大小写。int 是数据类型，Int 则不是</li><li><code>System.out.println</code>可以被 Java 认识，<code>SYSTEM.Out.Println</code>就不可以</li></ul><h2 id="_5-字面值不简单" tabindex="-1"><a class="header-anchor" href="#_5-字面值不简单"><span>5. 字面值不简单</span></a></h2><ul><li>整数的字面值类型默认是 int ；</li><li>十六进制字面值和八进制的字面值 ；（暂时不讲）</li><li>超过 int 的范围会怎么样？<strong>需要使用取值范围更大的类型；</strong></li></ul><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> Variable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#383A42;--shiki-light-font-style:inherit;--shiki-dark:#E06C75;--shiki-dark-font-style:italic;">args</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>
<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> variable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">        variable </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 9999999999</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><figure><img src="`+h+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="_6-int-x-5-int-y-x-1-包含多少语法点" tabindex="-1"><a class="header-anchor" href="#_6-int-x-5-int-y-x-1-包含多少语法点"><span>6. int x = 5; int y = x + 1; 包含多少语法点？</span></a></h2><h3 id="_6-1-intx-5" tabindex="-1"><a class="header-anchor" href="#_6-1-intx-5"><span>6.1 intx=5;</span></a></h3><ul><li>关键字（int）；</li><li>标示符（int、x）；</li><li>运算符（=）；</li><li>字面值（5）；</li><li>数据类型，Java 中的数据都有类型，数据类型有其取值范围；</li><li>变量的创建和赋值；</li></ul><h3 id="_6-2-int-y-x-1" tabindex="-1"><a class="header-anchor" href="#_6-2-int-y-x-1"><span>6.2 int y=x+1;</span></a></h3><ul><li>变量的使用，标示符区分大小写</li><li>加法运算符</li><li>表达式，语句和代码块</li></ul><p>欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！</p><details class="hint-container details"><summary>公众号：AI悦创【二维码】</summary><figure><img src="'+s+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></details><div class="hint-container info"><p class="hint-container-title">AI悦创·编程一对一</p><p>AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh</p><p>C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh</p><p>方法一：<a href="http://wpa.qq.com/msgrd?v=3&amp;uin=1432803776&amp;site=qq&amp;menu=yes" target="_blank" rel="noopener noreferrer">QQ</a></p><p>方法二：微信：Jiabcdefh</p></div><figure><img src="'+a+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',22)]))}const A=n(r,[["render",p],["__file","05.html.vue"]]),y=JSON.parse('{"path":"/Java/chapter01/05.html","title":"05-再探计算加减乘除的程序","lang":"zh-CN","frontmatter":{"title":"05-再探计算加减乘除的程序","date":"2022-10-22T20:14:14.000Z","icon":"java","author":"AI悦创","isOriginal":true,"category":["Java体系课"],"tag":["Java体系课"],"sticky":false,"star":false,"article":true,"timeline":true,"image":false,"navbar":true,"sidebarIcon":true,"headerDepth":5,"comment":true,"lastUpdated":true,"editLink":false,"backToTop":true,"toc":true,"footer":"长期招收编程一对一学员！微信：Jiabcdefh, <a href=\\"https://beian.miit.gov.cn/\\" target=\\"_blank\\">闽ICP备19021486号-6</a>","description":"1. 目录 Java 代码三级跳——表达式，语句和代码块 Java 是区分大小写的 字面值不简单 int x = 5; int y = x + 1; 包含多少语法点？ 2. 解析上节课的代码 int variable：在不加分号的情况下，是表达式； 如果 int variable; ：紧跟一个分号，那就叫一个语句。也就是说，这个表达式已经结束了，这是一...","head":[["meta",{"property":"og:url","content":"https://bornforthis.cn/Java/chapter01/05.html"}],["meta",{"property":"og:site_name","content":"AI悦创-Python一对一辅导"}],["meta",{"property":"og:title","content":"05-再探计算加减乘除的程序"}],["meta",{"property":"og:description","content":"1. 目录 Java 代码三级跳——表达式，语句和代码块 Java 是区分大小写的 字面值不简单 int x = 5; int y = x + 1; 包含多少语法点？ 2. 解析上节课的代码 int variable：在不加分号的情况下，是表达式； 如果 int variable; ：紧跟一个分号，那就叫一个语句。也就是说，这个表达式已经结束了，这是一..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://bornforthis.cn/gzh.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-19T14:58:08.000Z"}],["meta",{"property":"article:author","content":"AI悦创"}],["meta",{"property":"article:tag","content":"Java体系课"}],["meta",{"property":"article:published_time","content":"2022-10-22T20:14:14.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-19T14:58:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"05-再探计算加减乘除的程序\\",\\"image\\":[\\"https://bornforthis.cn/gzh.jpg\\",\\"https://bornforthis.cn/zsxq.jpg\\"],\\"datePublished\\":\\"2022-10-22T20:14:14.000Z\\",\\"dateModified\\":\\"2024-11-19T14:58:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"AI悦创\\"}]}"]]},"headers":[{"level":2,"title":"1. 目录","slug":"_1-目录","link":"#_1-目录","children":[]},{"level":2,"title":"2. 解析上节课的代码","slug":"_2-解析上节课的代码","link":"#_2-解析上节课的代码","children":[]},{"level":2,"title":"3. Java 代码三级跳——表达式，语句和代码块","slug":"_3-java-代码三级跳——表达式-语句和代码块","link":"#_3-java-代码三级跳——表达式-语句和代码块","children":[]},{"level":2,"title":"4. Java 是区分大小写的","slug":"_4-java-是区分大小写的","link":"#_4-java-是区分大小写的","children":[]},{"level":2,"title":"5. 字面值不简单","slug":"_5-字面值不简单","link":"#_5-字面值不简单","children":[]},{"level":2,"title":"6. int x = 5; int y = x + 1; 包含多少语法点？","slug":"_6-int-x-5-int-y-x-1-包含多少语法点","link":"#_6-int-x-5-int-y-x-1-包含多少语法点","children":[{"level":3,"title":"6.1 intx=5;","slug":"_6-1-intx-5","link":"#_6-1-intx-5","children":[]},{"level":3,"title":"6.2 int y=x+1;","slug":"_6-2-int-y-x-1","link":"#_6-2-int-y-x-1","children":[]}]}],"git":{"createdTime":1732028288000,"updatedTime":1732028288000,"contributors":[{"name":"AndersonHJB","email":"bornforthis@bornforthis.cn","commits":1}]},"readingTime":{"minutes":3.18,"words":953},"filePathRelative":"Java/chapter01/05.md","localizedDate":"2022年10月22日","copyright":{"author":"AI悦创"},"autoDesc":true}');export{A as comp,y as data};
