import{_ as e}from"./gzh.b03adfd2.js";import{_ as t}from"./zsxq.77f6dc86.js";import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as l,a,d as n,b as p,e as c,r}from"./app.b0eae2c5.js";const d="/assets/1654831009172-a022c446-2e5b-498f-9ce9-b33bca1aa586.e867e992.png",u={},k=c(`<h2 id="_1-目录" tabindex="-1"><a class="header-anchor" href="#_1-目录" aria-hidden="true">#</a> 1. 目录</h2><ul><li>Java 代码三级跳——表达式，语句和代码块</li><li>Java 是区分大小写的</li><li>字面值不简单</li><li>int x = 5; int y = x + 1; 包含多少语法点？</li></ul><h2 id="_2-解析上节课的代码" tabindex="-1"><a class="header-anchor" href="#_2-解析上节课的代码" aria-hidden="true">#</a> 2. 解析上节课的代码</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Variable</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> variable<span class="token punctuation">;</span>
        variable <span class="token operator">=</span> <span class="token number">999</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> c <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> y <span class="token operator">=</span> a <span class="token operator">*</span> x <span class="token operator">+</span> b <span class="token operator">*</span> x <span class="token operator">*</span> x <span class="token operator">+</span> c <span class="token operator">*</span> x <span class="token operator">*</span> x <span class="token operator">*</span> x<span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ul><li><code>int variable</code>：在不加分号的情况下，是表达式；</li><li>如果 <code>int variable;</code> ：紧跟一个分号，那就叫一个语句。也就是说，这个表达式已经结束了，这是一个语句；</li><li><code>variable = 999;</code>：赋值表达式；</li><li><code>int a</code>：其实就是个表达式，创建一个 a 变量。紧接着 <code>a=3</code> 它又是一个赋值表达式，最后用分号组成语句；</li><li><strong>多说一句，其实一个语句可以没有表达式，直接一个分号 ；就是一个语句。</strong></li><li><strong>一个代码块也可以没有任何语句。【0到多个】</strong></li></ul><h2 id="_3-java-代码三级跳——表达式-语句和代码块" tabindex="-1"><a class="header-anchor" href="#_3-java-代码三级跳——表达式-语句和代码块" aria-hidden="true">#</a> 3. Java 代码三级跳——表达式，语句和代码块</h2><ul><li><strong>表达式（expression）</strong>：Java 中最基本的一个运算。比如一个加法运算表达式。<strong>1+2</strong> 是一个表达式，<strong>a+b</strong> 也是。</li><li><strong>语句（statement）</strong>：类似于平时说话时的一句话，由表达式组成，以 <strong>;</strong> 结束。 <strong>1+2; 1+2+3; a+b; int a = 3; y = a + 9; System.out.println(y)</strong> 都是语句。</li><li><strong>代码块</strong>：一对大括号括起来的就是一个代码块。</li></ul><h2 id="_4-java-是区分大小写的" tabindex="-1"><a class="header-anchor" href="#_4-java-是区分大小写的" aria-hidden="true">#</a> 4. Java 是区分大小写的</h2><ul><li>关键字和标示符都是区分大小写的</li><li>类名必须与文件名一致，包括大小写要求</li><li>使用变量时，名字必须和声明变量时的标示符大小写一致</li><li>方法名也区分大小写。main 和 Main 是两个名字</li><li>类型也区分大小写。int 是数据类型，Int 则不是</li><li><code>System.out.println</code>可以被 Java 认识，<code>SYSTEM.Out.Println</code>就不可以</li></ul><h2 id="_5-字面值不简单" tabindex="-1"><a class="header-anchor" href="#_5-字面值不简单" aria-hidden="true">#</a> 5. 字面值不简单</h2><ul><li>整数的字面值类型默认是 int ；</li><li>十六进制字面值和八进制的字面值 ；（暂时不讲）</li><li>超过 int 的范围会怎么样？<strong>需要使用取值范围更大的类型；</strong></li></ul><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Variable</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> variable<span class="token punctuation">;</span>
        variable <span class="token operator">=</span> <span class="token number">9999999999</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+d+'" alt="image.png" loading="lazy"></p><h2 id="_6-int-x-5-int-y-x-1-包含多少语法点" tabindex="-1"><a class="header-anchor" href="#_6-int-x-5-int-y-x-1-包含多少语法点" aria-hidden="true">#</a> 6. int x = 5; int y = x + 1; 包含多少语法点？</h2><h3 id="_6-1-intx-5" tabindex="-1"><a class="header-anchor" href="#_6-1-intx-5" aria-hidden="true">#</a> 6.1 intx=5;</h3><ul><li>关键字（int）；</li><li>标示符（int、x）；</li><li>运算符（=）；</li><li>字面值（5）；</li><li>数据类型，Java 中的数据都有类型，数据类型有其取值范围；</li><li>变量的创建和赋值；</li></ul><h3 id="_6-2-int-y-x-1" tabindex="-1"><a class="header-anchor" href="#_6-2-int-y-x-1" aria-hidden="true">#</a> 6.2 int y=x+1;</h3><ul><li>变量的使用，标示符区分大小写</li><li>加法运算符</li><li>表达式，语句和代码块</li></ul><p>欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！</p><details class="custom-container details"><summary>公众号：AI悦创【二维码】</summary><p><img src="'+e+'" alt="" loading="lazy"></p></details>',20),v={class:"custom-container info"},m=a("p",{class:"custom-container-title"},"AI悦创·编程一对一",-1),h=a("p",null,"AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh",-1),b=a("p",null,"C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh",-1),_={href:"http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes",target:"_blank",rel:"noopener noreferrer"},g=a("p",null,"方法二：微信：Jiabcdefh",-1),x=a("p",null,[a("img",{src:t,alt:"",loading:"lazy"})],-1);function y(f,w){const s=r("ExternalLinkIcon");return o(),l("div",null,[k,a("div",v,[m,h,b,a("p",null,[n("方法一："),a("a",_,[n("QQ"),p(s)])]),g]),x])}const V=i(u,[["render",y],["__file","05.html.vue"]]);export{V as default};
