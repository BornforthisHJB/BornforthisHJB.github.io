import{_ as p}from"./gzh.b03adfd2.js";import{_ as t}from"./zsxq.77f6dc86.js";import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c,a as n,d as s,b as l,e as i,r}from"./app.b0eae2c5.js";const u="/assets/1654698727529-507da71e-7ae6-4f5d-baa7-6eae27b31ab7.10a28101.png",k="/assets/1654698738738-71982a64-4ab4-4fe2-a0b3-3038506cf445.48234bfc.png",d="/assets/1654699545975-f16d4e1e-f773-44ac-abf8-731a1909aa6e.acdb377c.png",m="/assets/1654699886809-1405a000-ed6e-496f-829c-9ec197074f9e.058dab9f.png",v="/assets/1654699999737-2317991d-7715-4f7a-9a86-04797cc5ba14.e8616767.png",b={},h=i('<h2 id="_1-本节知识点" tabindex="-1"><a class="header-anchor" href="#_1-本节知识点" aria-hidden="true">#</a> 1. 本节知识点</h2><ul><li>计算加减乘除</li><li>基本数据类型——int</li><li>关键字（key word）和标示符（Identifier）</li><li>用变量解决问题</li></ul><h2 id="_2-创建新项目" tabindex="-1"><a class="header-anchor" href="#_2-创建新项目" aria-hidden="true">#</a> 2. 创建新项目</h2><p><img src="'+u+'" alt="image.png" loading="lazy"></p><p><img src="'+k+'" alt="image.png" loading="lazy"></p><blockquote><p>我选择的是 This Window</p></blockquote><h2 id="_3-新建-class" tabindex="-1"><a class="header-anchor" href="#_3-新建-class" aria-hidden="true">#</a> 3. 新建 class</h2><p><img src="'+d+'" alt="image.png" loading="lazy"></p><p><img src="'+m+'" alt="image.png" loading="lazy"></p><p><img src="'+v+`" alt="image.png" loading="lazy"></p><h2 id="_4-编写代码" tabindex="-1"><a class="header-anchor" href="#_4-编写代码" aria-hidden="true">#</a> 4. 编写代码</h2><p>计算加减乘除的程序（例程 MathCalc）</p><ul><li>字面值（literalvalue）写几就是几</li><li>加减乘除运算符</li></ul><p><strong>如何方便的计算类似</strong> <code>y=a*x+b*x*x+c*x*x*x</code> <strong>这样的公式?</strong></p><h3 id="_4-1-mathcalc-java" tabindex="-1"><a class="header-anchor" href="#_4-1-mathcalc-java" aria-hidden="true">#</a> 4.1 MathCalc.java</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MathCalc</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;5+6&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// 双引号是个字符串 5+6</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">+</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 11</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">-</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token comment">// -1</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">*</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 30</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">5</span> <span class="token operator">/</span> <span class="token number">6.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 后面带你解析，为什么加 .0 // 0.8333333333333334</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> <span class="token number">2</span> <span class="token operator">-</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">4</span> <span class="token operator">/</span> <span class="token number">5.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 0.0</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token punctuation">(</span><span class="token number">1</span> <span class="token operator">+</span> <span class="token number">2</span> <span class="token operator">+</span> <span class="token number">3</span><span class="token punctuation">)</span> <span class="token operator">*</span> <span class="token number">4</span> <span class="token operator">/</span> <span class="token number">5.0</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 4.8</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那实现一些比较复杂（长）的代码呢？</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">MathCalc</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">2</span> <span class="token operator">*</span> <span class="token number">5</span> <span class="token operator">+</span> <span class="token number">2</span> <span class="token operator">*</span> <span class="token number">5</span> <span class="token operator">*</span> <span class="token number">5</span> <span class="token operator">+</span> <span class="token number">3</span> <span class="token operator">*</span> <span class="token number">5</span> <span class="token operator">*</span> <span class="token number">5</span> <span class="token operator">*</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 435</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>Q：上面的代码确实可以实现，但是不方便我们修改呀。比如：我们要把其中的 5 换成其他数字呢？——显然不是非常方便。</strong></p><p><strong>显然，我要修改至少 6 个 5，这显然劝退我了。</strong></p><p><strong>为了解决这个问题，我们该怎么办呢？</strong></p><h3 id="_4-2-基本数据类型——int【variable-java】" tabindex="-1"><a class="header-anchor" href="#_4-2-基本数据类型——int【variable-java】" aria-hidden="true">#</a> 4.2 基本数据类型——int【Variable.java】</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Variable</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> c <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">9</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> y <span class="token operator">=</span> a <span class="token operator">*</span> x <span class="token operator">+</span> b <span class="token operator">*</span> x <span class="token operator">*</span> x <span class="token operator">+</span> c <span class="token operator">*</span> x <span class="token operator">*</span> x <span class="token operator">*</span> x<span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 5535</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>现在我们修改 9 就很方便了，直接修改 x 即可。</strong></p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Variable</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">3</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> b <span class="token operator">=</span> <span class="token number">5</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> c <span class="token operator">=</span> <span class="token number">7</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> x <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">int</span> y <span class="token operator">=</span> a <span class="token operator">*</span> x <span class="token operator">+</span> b <span class="token operator">*</span> x <span class="token operator">*</span> x <span class="token operator">+</span> c <span class="token operator">*</span> x <span class="token operator">*</span> x <span class="token operator">*</span> x<span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>y<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token comment">// 15</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>知识点解析一波：</strong> Java 中所有的数据都有类型，类型决定了存储的形式和占用的存储空间。举个例子：</p><ul><li>微博</li><li>博客</li><li>连载小说</li></ul><p>int 用来表示一个整数，取值范围在 <code>-2^31~2^31-1</code>。计算出来是 <code>-2147483648~2147483647</code>。</p><h2 id="_5-关键字-key-word-和标示符-identifier" tabindex="-1"><a class="header-anchor" href="#_5-关键字-key-word-和标示符-identifier" aria-hidden="true">#</a> 5. 关键字（key word）和标示符（Identifier）</h2><h3 id="_5-1-标示符" tabindex="-1"><a class="header-anchor" href="#_5-1-标示符" aria-hidden="true">#</a> 5.1 标示符</h3><ul><li>由大小写英文字符，数字和下划线(<code>_</code>)组成的，区分大小写的，不以数字开头的文字。</li><li>可以用作 Java 中的各种东西的名字，比如类名，方法名等。</li><li>标示符是区分大小写的。</li></ul><p><strong>关键字是 Java 语法的保留字，不能用来做名字。</strong></p><p><strong>我们接触到的关键字：</strong></p><ul><li><strong>public</strong></li><li><strong>class</strong></li><li><strong>static</strong></li><li><strong>void</strong></li><li><strong>int</strong></li></ul><h2 id="_6-用变量解决问题" tabindex="-1"><a class="header-anchor" href="#_6-用变量解决问题" aria-hidden="true">#</a> 6. 用变量解决问题</h2><p><strong>例程 Variable1</strong></p><ul><li>变量（variable）</li><li>如何创建变量</li><li>如何给变量一个值</li><li>如何使用变量</li></ul><h3 id="_6-1-例程-variable1" tabindex="-1"><a class="header-anchor" href="#_6-1-例程-variable1" aria-hidden="true">#</a> 6.1 例程 Variable1</h3><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">Variable1</span> <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 方法一</span>
        <span class="token keyword">int</span> a <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 方法二</span>
        <span class="token keyword">int</span> b<span class="token punctuation">;</span>
        b <span class="token operator">=</span> <span class="token number">10</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span>b<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//        System.out.println(b=101);</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="小技巧" tabindex="-1"><a class="header-anchor" href="#小技巧" aria-hidden="true">#</a> 小技巧</h2><ol><li>快捷输入 <code>public static void main(String[] args)</code>，在 IDE 中使用：psvm 既可以快速输入；</li></ol><p>欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！</p><details class="custom-container details"><summary>公众号：AI悦创【二维码】</summary><p><img src="`+p+'" alt="" loading="lazy"></p></details>',43),g={class:"custom-container info"},y=n("p",{class:"custom-container-title"},"AI悦创·编程一对一",-1),_=n("p",null,"AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh",-1),f=n("p",null,"C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh",-1),w={href:"http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes",target:"_blank",rel:"noopener noreferrer"},x=n("p",null,"方法二：微信：Jiabcdefh",-1),j=n("p",null,[n("img",{src:t,alt:"",loading:"lazy"})],-1);function S(V,I){const a=r("ExternalLinkIcon");return o(),c("div",null,[h,n("div",g,[y,_,f,n("p",null,[s("方法一："),n("a",w,[s("QQ"),l(a)])]),x]),j])}const Q=e(b,[["render",S],["__file","04.html.vue"]]);export{Q as default};
