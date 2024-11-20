import{_ as n}from"./gzh-DnOBNg6W.js";import{_ as a}from"./zsxq-BcdwOI-_.js";import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,a as p,o}from"./app-BFJczFUY.js";const t={};function i(c,s){return o(),e("div",null,s[0]||(s[0]=[p(`<p>你好，我是悦创。本次课，先学：<a href="https://bornforthis.cn/posts/21.html" target="_blank" rel="noopener noreferrer">https://bornforthis.cn/posts/21.html</a>。</p><h2 id="_0-目录" tabindex="-1"><a class="header-anchor" href="#_0-目录"><span>0. 目录</span></a></h2><ul><li>字面值的八进制和十六进制</li><li>按位运算符</li><li>位移运算符</li><li>位运算符不会改变原变量的值</li><li>位运算符用处</li></ul><h2 id="_1-字面值的八进制和十六进制" tabindex="-1"><a class="header-anchor" href="#_1-字面值的八进制和十六进制"><span>1. 字面值的八进制和十六进制</span></a></h2><h3 id="_1-1-以-0-开头的整数为八进制" tabindex="-1"><a class="header-anchor" href="#_1-1-以-0-开头的整数为八进制"><span>1.1 以 0 开头的整数为八进制</span></a></h3><ul><li>05 就是十进制的 5</li><li>011就是十进制的 9</li></ul><h3 id="_1-2-以-0x-开头的整数位十六进制" tabindex="-1"><a class="header-anchor" href="#_1-2-以-0x-开头的整数位十六进制"><span>1.2 以 0x 开头的整数位十六进制</span></a></h3><ul><li>0、1、2、3、4、5、6、7、8、9、A、B、C、D、E、F；</li><li><code>0xF</code> 就是十进制的 15</li><li><code>0x11</code> 就是十进制的 17</li></ul><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F92672;">public</span><span style="color:#F92672;"> class</span><span> </span><span style="color:#A6E22E;text-decoration:underline;">LiteralNumber</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F92672;">    public</span><span style="color:#F92672;"> static</span><span style="color:#66D9EF;font-style:italic;"> void</span><span style="color:#A6E22E;"> main</span><span style="color:#F8F8F2;">(</span><span style="color:#66D9EF;font-style:italic;">String</span><span style="color:#F8F8F2;">[] </span><span style="color:#FD971F;font-style:italic;">args</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">        int</span><span style="color:#F8F8F2;"> a </span><span style="color:#F92672;">=</span><span style="color:#AE81FF;"> 05</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">        int</span><span style="color:#F8F8F2;"> b </span><span style="color:#F92672;">=</span><span style="color:#AE81FF;"> 011</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">        int</span><span style="color:#F8F8F2;"> c </span><span style="color:#F92672;">=</span><span style="color:#AE81FF;"> 0xF</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">        int</span><span style="color:#F8F8F2;"> d </span><span style="color:#F92672;">=</span><span style="color:#AE81FF;"> 0x11</span><span style="color:#F8F8F2;">;  </span><span style="color:#88846F;">// x、X 都可以</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">        System.out.</span><span style="color:#A6E22E;">println</span><span style="color:#F8F8F2;">(a);  </span><span style="color:#88846F;">// 5</span></span>
<span class="line"><span style="color:#F8F8F2;">        System.out.</span><span style="color:#A6E22E;">println</span><span style="color:#F8F8F2;">(b);  </span><span style="color:#88846F;">// 9</span></span>
<span class="line"><span style="color:#F8F8F2;">        System.out.</span><span style="color:#A6E22E;">println</span><span style="color:#F8F8F2;">(c);  </span><span style="color:#88846F;">// 15</span></span>
<span class="line"><span style="color:#F8F8F2;">        System.out.</span><span style="color:#A6E22E;">println</span><span style="color:#F8F8F2;">(d);  </span><span style="color:#88846F;">// 17</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-按位运算符【每个二进制的位】" tabindex="-1"><a class="header-anchor" href="#_2-按位运算符【每个二进制的位】"><span>2. 按位运算符【每个二进制的位】</span></a></h2><ul><li>按位并（AND）：<code>&amp;</code></li><li>按位或（OR）：<code>|</code></li><li>按位异或（XOR）：<code>^</code>【一句话，相异为真 ，运算规则是：两个数转为二进制，然后从高位开始比较，如果相同则为 0，不相同则为 1。】</li><li>按位取反：<code>~</code></li></ul><p><strong>储备知识：</strong></p><ul><li>int 有 4 个字节，每个字节有 8 位，一共 32 位。也就是这样的形式： 00000000 00000000 00000000 00000000；</li><li>32 的二进制是：100000 ，把 32 的二进制放入上面储备知识中得出这样的效果：00000000 00000000 00000000 00100000。当然你也可以缩写成这样的效果：00100000。</li><li>接下来我们可以进行取反，取反之后为的结果为： 11011111；</li><li>操作的维度是 bit</li></ul><div class="language-java line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="java" data-title="java" style="--vp-collapsed-lines:15;background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F92672;">public</span><span style="color:#F92672;"> class</span><span> </span><span style="color:#A6E22E;text-decoration:underline;">BitCalc</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F92672;">    public</span><span style="color:#F92672;"> static</span><span style="color:#66D9EF;font-style:italic;"> void</span><span style="color:#A6E22E;"> main</span><span style="color:#F8F8F2;">(</span><span style="color:#66D9EF;font-style:italic;">String</span><span style="color:#F8F8F2;">[] </span><span style="color:#FD971F;font-style:italic;">args</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#88846F;">        // F-&gt;15-&gt; 1111</span></span>
<span class="line"><span style="color:#88846F;">        // 二进制的 1111 1000</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">        int</span><span style="color:#F8F8F2;"> a </span><span style="color:#F92672;">=</span><span style="color:#AE81FF;"> 0xF8</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#88846F;">        // 二进制的 1111 0100</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">        int</span><span style="color:#F8F8F2;"> b </span><span style="color:#F92672;">=</span><span style="color:#AE81FF;"> 0xF4</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#88846F;">        // 二进制的 1111 1111</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">        int</span><span style="color:#F8F8F2;"> c </span><span style="color:#F92672;">=</span><span style="color:#AE81FF;"> 0xFF</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">        System.out.</span><span style="color:#A6E22E;">println</span><span style="color:#F8F8F2;">(a </span><span style="color:#F92672;">&amp;</span><span style="color:#F8F8F2;"> b); </span><span style="color:#88846F;">// 240</span></span>
<span class="line"><span style="color:#F8F8F2;">        System.out.</span><span style="color:#A6E22E;">println</span><span style="color:#F8F8F2;">(a </span><span style="color:#F92672;">|</span><span style="color:#F8F8F2;"> b); </span><span style="color:#88846F;">// 252</span></span>
<span class="line"><span style="color:#F8F8F2;">        System.out.</span><span style="color:#A6E22E;">println</span><span style="color:#F8F8F2;">(a </span><span style="color:#F92672;">^</span><span style="color:#F8F8F2;"> b); </span><span style="color:#88846F;">// 12</span></span>
<span class="line"><span style="color:#F8F8F2;">        System.out.</span><span style="color:#A6E22E;">println</span><span style="color:#F8F8F2;">(</span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">c); </span><span style="color:#88846F;">// -256</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88846F;">/* 补充：</span></span>
<span class="line"><span style="color:#88846F;">a	1111 1000</span></span>
<span class="line"><span style="color:#88846F;">b	1111 0100</span></span>
<span class="line"><span style="color:#88846F;">&amp;	1111 0000</span></span>
<span class="line"><span style="color:#88846F;">|	1111 1100</span></span>
<span class="line"><span style="color:#88846F;">^	0000 1100</span></span>
<span class="line"><span style="color:#88846F;">C	255 &gt; 11111111</span></span>
<span class="line"><span style="color:#88846F;">～	-255</span></span>
<span class="line"><span style="color:#88846F;">*/</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>以我的工作经验来看，Java 中按位运算是比较少的。但是，我们要知道有这样一种操作。这样之后遇到，你就不会一脸懵！在这里，我不推荐你在日后的工作中有使用 **位 **运算符的倾向，当你想到，这个问题可以使用位运算符解决的时候，你再想想有没有更好的，更让人容易理解的方法。当然，如果真没有的话就算了。</p><h2 id="_3-位移运算符" tabindex="-1"><a class="header-anchor" href="#_3-位移运算符"><span>3. 位移运算符</span></a></h2><p>推荐先看里面部分内容：<a href="https://blog.csdn.net/qq_33254766/article/details/108702875" target="_blank" rel="noopener noreferrer">https://blog.csdn.net/qq_33254766/article/details/108702875</a></p><p>现代计算机是基于二进制的，我们就来看看，计算机语言中针对二进制的位操作。这里的<strong>位操作</strong>，也叫作<strong>位运算</strong>，就是直接对内存中的二进制位进行操作。常见的二进制位操作包括向左移位和向右移位的移位操作，以及“或”“与”“异或”的逻辑操作。「上面已经讲过与或非」下面我们来看位移运算符。</p><h3 id="_3-1-位移运算符" tabindex="-1"><a class="header-anchor" href="#_3-1-位移运算符"><span>3.1 位移运算符</span></a></h3><h4 id="_3-1-1-右移" tabindex="-1"><a class="header-anchor" href="#_3-1-1-右移"><span>3.1.1 右移</span></a></h4><p><strong>移位的数字（x） &gt;&gt; 移位量（y）</strong></p><p>右移运算是将移动的数字的 <strong><span style="color:orange;">二进制位数</span></strong> 按指定 <strong><span style="color:orange;">移位量</span></strong> 向右移动，右边低位溢出 y 位则舍弃。<strong><span style="color:orange;">左边的空位一律补 0 或者补符号位</span></strong>，这由不同的机器而定。</p><p>若移位的数字不带符号位，则左边空位补入的数全部为 0；<strong>若是带符号数，则补入的数全部为原数最左边的符号位（正数 0，负数 1）</strong>。</p><p><strong><span style="color:orange;">PS:</span></strong></p><ul><li><code>&gt;&gt;</code>：符号位不动，其余位右移，符号位后边补 0，又称带符号右移「原本正数，那移动之后依然是正数。反之亦然。」</li><li>当负数右移操作时，先<strong>对负数的原码求其补码</strong>再进行右移操作。</li></ul><h4 id="_3-1-2-无符号右移" tabindex="-1"><a class="header-anchor" href="#_3-1-2-无符号右移"><span>3.1.2 无符号右移</span></a></h4><ul><li><code>&gt;&gt;&gt;</code>：符号位一起右移，左边补 0，又称无符号右移 <strong><span style="color:orange;">「无符号右移，那带着符号位意味着如果原本是正数，那符号位就是 0。右移之后，左边补 0。那还是正数。如果原本是负数，那无符号右移就会变成正数。」</span></strong></li></ul><h4 id="_3-1-3-左移" tabindex="-1"><a class="header-anchor" href="#_3-1-3-左移"><span>3.1.3 左移</span></a></h4><p>将移位的数字的 <strong><span style="color:orange;">二进制位</span></strong> 全部左移指定的 <strong><span style="color:orange;">移位量</span></strong> 移位量由右操作数指定，右操作数必须是非负值，其右边空出的位用 0 填补，高位左移溢出则舍弃该高位。</p><ul><li><code>&lt;&lt;</code>：左移，右边补 0。左移没有带符号位一说，因为符号位在最左侧。 <ul><li>换一种方法理解：<code>num &lt;&lt; 1</code>,左移1位相当于 num 乘以 2 的 1 次方</li></ul></li></ul><div class="language-java line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="java" data-title="java" style="--vp-collapsed-lines:15;background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F92672;">public</span><span style="color:#F92672;"> class</span><span> </span><span style="color:#A6E22E;text-decoration:underline;">BitShift</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F92672;">    public</span><span style="color:#F92672;"> static</span><span style="color:#66D9EF;font-style:italic;"> void</span><span style="color:#A6E22E;"> main</span><span style="color:#F8F8F2;">(</span><span style="color:#66D9EF;font-style:italic;">String</span><span style="color:#F8F8F2;">[] </span><span style="color:#FD971F;font-style:italic;">args</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#88846F;">        // 0x400 to binary 0100 0000 0000</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">        int</span><span style="color:#F8F8F2;"> a </span><span style="color:#F92672;">=</span><span style="color:#AE81FF;"> 0x400</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">        System.out.</span><span style="color:#A6E22E;">println</span><span style="color:#F8F8F2;">(a);  </span><span style="color:#88846F;">// 1024</span></span>
<span class="line"><span style="color:#F8F8F2;">        System.out.</span><span style="color:#A6E22E;">println</span><span style="color:#F8F8F2;">(a </span><span style="color:#F92672;">&gt;&gt;</span><span style="color:#AE81FF;"> 1</span><span style="color:#F8F8F2;">); </span><span style="color:#88846F;">// 0100 0000 0000 &gt;&gt; 1 -&gt; 0010 0000 0000 to decimalism 512【1024/2】</span></span>
<span class="line"><span style="color:#F8F8F2;">        System.out.</span><span style="color:#A6E22E;">println</span><span style="color:#F8F8F2;">(a </span><span style="color:#F92672;">&gt;&gt;</span><span style="color:#AE81FF;"> 2</span><span style="color:#F8F8F2;">); </span><span style="color:#88846F;">// 0100 0000 0000 &gt;&gt; 2 -&gt; 0001 0000 0000 to decimalism 256【1024/4】</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">        System.out.</span><span style="color:#A6E22E;">println</span><span style="color:#F8F8F2;">(a </span><span style="color:#F92672;">&lt;&lt;</span><span style="color:#AE81FF;"> 1</span><span style="color:#F8F8F2;">); </span><span style="color:#88846F;">// 0100 0000 0000 &lt;&lt; 1 -&gt; 1000 0000 0000 to decimalism 2048【1024*2】</span></span>
<span class="line"><span style="color:#F8F8F2;">        System.out.</span><span style="color:#A6E22E;">println</span><span style="color:#F8F8F2;">(a </span><span style="color:#F92672;">&lt;&lt;</span><span style="color:#AE81FF;"> 2</span><span style="color:#F8F8F2;">); </span><span style="color:#88846F;">// 0100 0000 0000 &lt;&lt; 2 -&gt; 0001 0000 0000 0000 to decimalism 4096【1024*4】</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">        System.out.</span><span style="color:#A6E22E;">println</span><span style="color:#F8F8F2;">(a </span><span style="color:#F92672;">&gt;&gt;&gt;</span><span style="color:#AE81FF;"> 1</span><span style="color:#F8F8F2;">); </span><span style="color:#88846F;">// 0100 0000 0000 &gt;&gt; 1 -&gt; 0010 0000 0000 to decimalism 512【1024/2】</span></span>
<span class="line"><span style="color:#F8F8F2;">        System.out.</span><span style="color:#A6E22E;">println</span><span style="color:#F8F8F2;">(a </span><span style="color:#F92672;">&gt;&gt;&gt;</span><span style="color:#AE81FF;"> 2</span><span style="color:#F8F8F2;">); </span><span style="color:#88846F;">// 0100 0000 0000 &gt;&gt; 2 -&gt; 0001 0000 0000 to decimalism 256【1024/4】</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">        int</span><span style="color:#F8F8F2;"> b </span><span style="color:#F92672;">=</span><span style="color:#F92672;"> -</span><span style="color:#AE81FF;">0x400</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">        System.out.</span><span style="color:#A6E22E;">println</span><span style="color:#F8F8F2;">(b);  </span><span style="color:#88846F;">// -1024</span></span>
<span class="line"><span style="color:#F8F8F2;">        System.out.</span><span style="color:#A6E22E;">println</span><span style="color:#F8F8F2;">(b </span><span style="color:#F92672;">&gt;&gt;</span><span style="color:#AE81FF;"> 1</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"><span style="color:#88846F;">        /* -1024</span></span>
<span class="line"><span style="color:#88846F;">         * 原码：1100 0000 0000</span></span>
<span class="line"><span style="color:#88846F;">         * 反码：1011 1111 1111</span></span>
<span class="line"><span style="color:#88846F;">         * 补码：1100 0000 0000</span></span>
<span class="line"><span style="color:#88846F;">         * 右移：1010 0000 0000</span></span>
<span class="line"><span style="color:#88846F;">         * 10 0000 0000 to decimalism 512 result &gt;&gt; -512</span></span>
<span class="line"><span style="color:#88846F;">         */</span></span>
<span class="line"><span style="color:#F8F8F2;">        System.out.</span><span style="color:#A6E22E;">println</span><span style="color:#F8F8F2;">(b </span><span style="color:#F92672;">&gt;&gt;</span><span style="color:#AE81FF;"> 2</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"><span style="color:#88846F;">        /* 补码：1100 0000 0000</span></span>
<span class="line"><span style="color:#88846F;">         * 右移2：1001 0000 0000 to decimalism -256*/</span></span>
<span class="line"><span style="color:#F8F8F2;">        System.out.</span><span style="color:#A6E22E;">println</span><span style="color:#F8F8F2;">(b </span><span style="color:#F92672;">&lt;&lt;</span><span style="color:#AE81FF;"> 1</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"><span style="color:#88846F;">        /* 补码：0000 1100 0000 0000</span></span>
<span class="line"><span style="color:#88846F;">         * 左移1：0001 1000 0000 0000 to decimalism -2048*/</span></span>
<span class="line"><span style="color:#F8F8F2;">        System.out.</span><span style="color:#A6E22E;">println</span><span style="color:#F8F8F2;">(b </span><span style="color:#F92672;">&lt;&lt;</span><span style="color:#AE81FF;"> 2</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"><span style="color:#88846F;">        /* 补码：0000 1100 0000 0000</span></span>
<span class="line"><span style="color:#88846F;">         *  左移2：0011 0000 0000 0000 to decimalism -4096*/</span></span>
<span class="line"><span style="color:#F8F8F2;">        System.out.</span><span style="color:#A6E22E;">println</span><span style="color:#F8F8F2;">(b </span><span style="color:#F92672;">&gt;&gt;&gt;</span><span style="color:#AE81FF;"> 1</span><span style="color:#F8F8F2;">);  </span><span style="color:#88846F;">// 了解即可</span></span>
<span class="line"><span style="color:#F8F8F2;">        System.out.</span><span style="color:#A6E22E;">println</span><span style="color:#F8F8F2;">(b </span><span style="color:#F92672;">&gt;&gt;&gt;</span><span style="color:#AE81FF;"> 2</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h3 id="_3-2-位运算符不会改变原变量的值" tabindex="-1"><a class="header-anchor" href="#_3-2-位运算符不会改变原变量的值"><span>3.2 位运算符不会改变原变量的值</span></a></h3><h4 id="_3-2-1-按位运算符不会改变原本的变量的值" tabindex="-1"><a class="header-anchor" href="#_3-2-1-按位运算符不会改变原本的变量的值"><span>3.2.1 按位运算符不会改变原本的变量的值</span></a></h4><h4 id="_3-2-2-位移运算符不会改变原本的变量的值" tabindex="-1"><a class="header-anchor" href="#_3-2-2-位移运算符不会改变原本的变量的值"><span>3.2.2 位移运算符不会改变原本的变量的值</span></a></h4><div class="language-java line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="java" data-title="java" style="--vp-collapsed-lines:15;background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F92672;">public</span><span style="color:#F92672;"> class</span><span> </span><span style="color:#A6E22E;text-decoration:underline;">BitOprtNotChangeVariableValue</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F92672;">    public</span><span style="color:#F92672;"> static</span><span style="color:#66D9EF;font-style:italic;"> void</span><span style="color:#A6E22E;"> main</span><span style="color:#F8F8F2;">(</span><span style="color:#66D9EF;font-style:italic;">String</span><span style="color:#F8F8F2;">[] </span><span style="color:#FD971F;font-style:italic;">args</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">        int</span><span style="color:#F8F8F2;"> a </span><span style="color:#F92672;">=</span><span style="color:#AE81FF;"> 0x400</span><span style="color:#F8F8F2;">;  </span><span style="color:#88846F;">// 0100 0000 0000 // 1024</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">        int</span><span style="color:#F8F8F2;"> b </span><span style="color:#F92672;">=</span><span style="color:#AE81FF;"> 0xF4</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">        int</span><span style="color:#F8F8F2;"> c </span><span style="color:#F92672;">=</span><span style="color:#AE81FF;"> 0xFF</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">        System.out.</span><span style="color:#A6E22E;">println</span><span style="color:#F8F8F2;">(a </span><span style="color:#F92672;">&gt;&gt;</span><span style="color:#AE81FF;"> 2</span><span style="color:#F8F8F2;">);  </span><span style="color:#88846F;">// 256</span></span>
<span class="line"><span style="color:#F8F8F2;">        System.out.</span><span style="color:#A6E22E;">println</span><span style="color:#F8F8F2;">(</span><span style="color:#F92672;">~</span><span style="color:#F8F8F2;">a);  </span><span style="color:#88846F;">// -1025</span></span>
<span class="line"><span style="color:#88846F;">        /* 原码：0100 0000 0000</span></span>
<span class="line"><span style="color:#88846F;">        *  反码：0011 1111 1111</span></span>
<span class="line"><span style="color:#88846F;">        *  补码：0100 0000 0000</span></span>
<span class="line"><span style="color:#88846F;">        *  取反：1011 1111 1111 逐位取反，包括符位</span></span>
<span class="line"><span style="color:#88846F;">        *  补码减1：1011 1111 1110</span></span>
<span class="line"><span style="color:#88846F;">        *  再取反：1100 0000 0001 -&gt; 取反后的二进制是负数 -&gt; -1025</span></span>
<span class="line"><span style="color:#88846F;">        */</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">        System.out.</span><span style="color:#A6E22E;">println</span><span style="color:#F8F8F2;">(a </span><span style="color:#F92672;">|</span><span style="color:#AE81FF;"> 0x8</span><span style="color:#F8F8F2;">);</span></span>
<span class="line"><span style="color:#88846F;">        /* a 原码：  0100 0000 0000</span></span>
<span class="line"><span style="color:#88846F;">        *  0x8 原码：0000 0000 1000</span></span>
<span class="line"><span style="color:#88846F;">        *           0100 0000 1000 -&gt; 1032*/</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F8F8F2;">        System.out.</span><span style="color:#A6E22E;">println</span><span style="color:#F8F8F2;">(a);  </span><span style="color:#88846F;">// 1024</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><h3 id="_3-3-位运算符用处" tabindex="-1"><a class="header-anchor" href="#_3-3-位运算符用处"><span>3.3 位运算符用处</span></a></h3><h4 id="_3-3-1-按位运算符" tabindex="-1"><a class="header-anchor" href="#_3-3-1-按位运算符"><span>3.3.1 按位运算符</span></a></h4><ul><li>掩码（MASK）</li></ul><h4 id="_3-3-2-位移运算符" tabindex="-1"><a class="header-anchor" href="#_3-3-2-位移运算符"><span>3.3.2 位移运算符</span></a></h4><ul><li>高效除以 2</li></ul><div class="language-java line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="java" data-title="java" style="--vp-collapsed-lines:15;background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F92672;">public</span><span style="color:#F92672;"> class</span><span> </span><span style="color:#A6E22E;text-decoration:underline;">BitOprtUsage</span><span style="color:#F8F8F2;"> {</span></span>
<span class="line"><span style="color:#F92672;">    public</span><span style="color:#F92672;"> static</span><span style="color:#66D9EF;font-style:italic;"> void</span><span style="color:#A6E22E;"> main</span><span style="color:#F8F8F2;">(</span><span style="color:#66D9EF;font-style:italic;">String</span><span style="color:#F8F8F2;">[] </span><span style="color:#FD971F;font-style:italic;">args</span><span style="color:#F8F8F2;">) {</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">        int</span><span style="color:#F8F8F2;"> base </span><span style="color:#F92672;">=</span><span style="color:#AE81FF;"> 1</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">        int</span><span style="color:#F8F8F2;"> is_student_mask </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> base;</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">        int</span><span style="color:#F8F8F2;"> is_programmer_mask </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> base </span><span style="color:#F92672;">&lt;&lt;</span><span style="color:#AE81FF;"> 1</span><span style="color:#F8F8F2;">; </span><span style="color:#88846F;">// 0001 -&gt; 0010</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">        int</span><span style="color:#F8F8F2;"> is_driver_mask </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> base </span><span style="color:#F92672;">&lt;&lt;</span><span style="color:#AE81FF;"> 2</span><span style="color:#F8F8F2;">; </span><span style="color:#88846F;">// 0001 -&gt; 0100</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">        int</span><span style="color:#F8F8F2;"> is_painter_mask </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> base </span><span style="color:#F92672;">&lt;&lt;</span><span style="color:#AE81FF;"> 3</span><span style="color:#F8F8F2;">; </span><span style="color:#88846F;">// 0001 -&gt; 1000</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">        int</span><span style="color:#F8F8F2;"> data </span><span style="color:#F92672;">=</span><span style="color:#AE81FF;"> 5</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">        boolean</span><span style="color:#F8F8F2;"> isStudent </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> (data </span><span style="color:#F92672;">&amp;</span><span style="color:#F8F8F2;"> is_student_mask) </span><span style="color:#F92672;">!=</span><span style="color:#AE81FF;"> 0</span><span style="color:#F8F8F2;">; </span><span style="color:#88846F;">// true</span></span>
<span class="line"><span style="color:#88846F;">        //System.out.println(data &amp; is_student_mask); // 1</span></span>
<span class="line"><span style="color:#88846F;">        /*data:             0101</span></span>
<span class="line"><span style="color:#88846F;">        * is_student_mask:  0001</span></span>
<span class="line"><span style="color:#88846F;">        *                   0001 -&gt; 1*/</span></span>
<span class="line"><span style="color:#F8F8F2;">        System.out.</span><span style="color:#A6E22E;">println</span><span style="color:#F8F8F2;">(isStudent);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">        boolean</span><span style="color:#F8F8F2;"> isProgrammer </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> (data </span><span style="color:#F92672;">&amp;</span><span style="color:#F8F8F2;"> is_programmer_mask) </span><span style="color:#F92672;">!=</span><span style="color:#AE81FF;"> 0</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">        System.out.</span><span style="color:#A6E22E;">println</span><span style="color:#F8F8F2;">(isProgrammer);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">        boolean</span><span style="color:#F8F8F2;"> isDriver </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> (data </span><span style="color:#F92672;">&amp;</span><span style="color:#F8F8F2;"> is_driver_mask) </span><span style="color:#F92672;">!=</span><span style="color:#AE81FF;"> 0</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">        System.out.</span><span style="color:#A6E22E;">println</span><span style="color:#F8F8F2;">(isDriver);</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">        boolean</span><span style="color:#F8F8F2;"> isPainter </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> (data </span><span style="color:#F92672;">&amp;</span><span style="color:#F8F8F2;"> is_painter_mask) </span><span style="color:#F92672;">!=</span><span style="color:#AE81FF;"> 0</span><span style="color:#F8F8F2;">;</span></span>
<span class="line"><span style="color:#F8F8F2;">        System.out.</span><span style="color:#A6E22E;">println</span><span style="color:#F8F8F2;">(isPainter);</span></span>
<span class="line"><span style="color:#F8F8F2;">    }</span></span>
<span class="line"><span style="color:#F8F8F2;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div><p>欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！</p><details class="hint-container details"><summary>公众号：AI悦创【二维码】</summary><figure><img src="`+n+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></details><div class="hint-container info"><p class="hint-container-title">AI悦创·编程一对一</p><p>AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh</p><p>C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh</p><p>方法一：<a href="http://wpa.qq.com/msgrd?v=3&amp;uin=1432803776&amp;site=qq&amp;menu=yes" target="_blank" rel="noopener noreferrer">QQ</a></p><p>方法二：微信：Jiabcdefh</p></div><figure><img src="'+a+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',45)]))}const v=l(t,[["render",i],["__file","09.html.vue"]]),m=JSON.parse('{"path":"/Java/chapter01/09.html","title":"09-Java 中位运算符","lang":"zh-CN","frontmatter":{"title":"09-Java 中位运算符","date":"2023-01-09T08:40:26.000Z","icon":"java","author":"AI悦创","isOriginal":true,"category":["Java体系课"],"tag":["Java体系课"],"sticky":false,"star":false,"article":true,"timeline":true,"image":false,"navbar":true,"sidebarIcon":true,"headerDepth":5,"comment":true,"lastUpdated":true,"editLink":false,"backToTop":true,"toc":true,"footer":"长期招收编程一对一学员！微信：Jiabcdefh, <a href=\\"https://beian.miit.gov.cn/\\" target=\\"_blank\\">闽ICP备19021486号-6</a>","feed":false,"seo":false,"head":[]},"headers":[{"level":2,"title":"0. 目录","slug":"_0-目录","link":"#_0-目录","children":[]},{"level":2,"title":"1. 字面值的八进制和十六进制","slug":"_1-字面值的八进制和十六进制","link":"#_1-字面值的八进制和十六进制","children":[{"level":3,"title":"1.1 以 0 开头的整数为八进制","slug":"_1-1-以-0-开头的整数为八进制","link":"#_1-1-以-0-开头的整数为八进制","children":[]},{"level":3,"title":"1.2 以 0x 开头的整数位十六进制","slug":"_1-2-以-0x-开头的整数位十六进制","link":"#_1-2-以-0x-开头的整数位十六进制","children":[]}]},{"level":2,"title":"2. 按位运算符【每个二进制的位】","slug":"_2-按位运算符【每个二进制的位】","link":"#_2-按位运算符【每个二进制的位】","children":[]},{"level":2,"title":"3. 位移运算符","slug":"_3-位移运算符","link":"#_3-位移运算符","children":[{"level":3,"title":"3.1 位移运算符","slug":"_3-1-位移运算符","link":"#_3-1-位移运算符","children":[{"level":4,"title":"3.1.1 右移","slug":"_3-1-1-右移","link":"#_3-1-1-右移","children":[]},{"level":4,"title":"3.1.2 无符号右移","slug":"_3-1-2-无符号右移","link":"#_3-1-2-无符号右移","children":[]},{"level":4,"title":"3.1.3 左移","slug":"_3-1-3-左移","link":"#_3-1-3-左移","children":[]}]},{"level":3,"title":"3.2 位运算符不会改变原变量的值","slug":"_3-2-位运算符不会改变原变量的值","link":"#_3-2-位运算符不会改变原变量的值","children":[{"level":4,"title":"3.2.1 按位运算符不会改变原本的变量的值","slug":"_3-2-1-按位运算符不会改变原本的变量的值","link":"#_3-2-1-按位运算符不会改变原本的变量的值","children":[]},{"level":4,"title":"3.2.2 位移运算符不会改变原本的变量的值","slug":"_3-2-2-位移运算符不会改变原本的变量的值","link":"#_3-2-2-位移运算符不会改变原本的变量的值","children":[]}]},{"level":3,"title":"3.3 位运算符用处","slug":"_3-3-位运算符用处","link":"#_3-3-位运算符用处","children":[{"level":4,"title":"3.3.1 按位运算符","slug":"_3-3-1-按位运算符","link":"#_3-3-1-按位运算符","children":[]},{"level":4,"title":"3.3.2 位移运算符","slug":"_3-3-2-位移运算符","link":"#_3-3-2-位移运算符","children":[]}]}]}],"git":{"createdTime":1732028288000,"updatedTime":1732028288000,"contributors":[{"name":"AndersonHJB","email":"bornforthis@bornforthis.cn","commits":1}]},"readingTime":{"minutes":6.52,"words":1957},"filePathRelative":"Java/chapter01/09.md","localizedDate":"2023年1月9日","copyright":{"author":"AI悦创"}}');export{v as comp,m as data};
