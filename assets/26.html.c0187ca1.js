import{_ as e}from"./gzh.b03adfd2.js";import{_ as i}from"./zsxq.77f6dc86.js";import{_ as l}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c,a as n,d as s,b as p,e as o,r as u}from"./app.2c99fa25.js";const d={},r=o(`<h2 id="java-中的「与运算-」-规则-都为-1-时才为-1-否则为-0" tabindex="-1"><a class="header-anchor" href="#java-中的「与运算-」-规则-都为-1-时才为-1-否则为-0" aria-hidden="true">#</a> Java 中的「与运算 &amp; 」 规则 ：都为 1 时才为 1，否则为 0</h2><ul><li>即：两位同时为 “1”，结果才为 “1”，否则为 0</li></ul><p>例如：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span> args<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span> <span class="token number">7</span> <span class="token operator">&amp;</span> <span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">/*
         * 7的二进制
         * 7/2=3...1
         * 3/2=1...1
         * 1/2=0...1
         * 直到商为0，将余数倒过来就是111
         * 于是得数是111
         */</span>
        
        <span class="token comment">/*
         * 9的二进制
         * 9/2=4...1
         * 4/2=2...0
         * 2/2=1...0
         * 1/2=0...1
         * 于是得数是1001
         */</span>
        
        <span class="token comment">/*
         *  7二进制 0111    
         *  9二进制 1001
         * ------------ 
         *          0001   ==1
         */</span>        
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="java-中的「或运算-」-规则-有一个为-1-则为-1" tabindex="-1"><a class="header-anchor" href="#java-中的「或运算-」-规则-有一个为-1-则为-1" aria-hidden="true">#</a> Java 中的「或运算 | 」 规则 ：有一个为 1，则为 1</h2><ul><li>即 ：参加运算的两个对象只要有一个为 1，其值为 1。</li></ul><p>例如：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span> args<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>        
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">7</span> <span class="token operator">|</span> <span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">;</span>    
        
        <span class="token comment">/*
         * 7二进制 0111
         * 9二进制 1001
         * -----------
         *         1111 == 15
         * */</span>    
    <span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="java-中的「异或运算-」-规则-都不同时-为-1" tabindex="-1"><a class="header-anchor" href="#java-中的「异或运算-」-规则-都不同时-为-1" aria-hidden="true">#</a> Java 中的「异或运算 ^ 」 规则 ：都不同时，为 1</h2><ul><li>即：参加运算的两个对象，如果两个相应位为“异”（值不同），则该位结果为 1，否则为 0。</li></ul><p>例如：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code>    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span> args<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span> <span class="token number">7</span> <span class="token operator">^</span> <span class="token number">9</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">/*
         * 7二进制 0111
         * 9二进制 1001
         * ------------
         *        1110 == 14
         * */</span>
    <span class="token punctuation">}</span>    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="java-中的「取反运算-」-规则-按位取反" tabindex="-1"><a class="header-anchor" href="#java-中的「取反运算-」-规则-按位取反" aria-hidden="true">#</a> Java 中的「取反运算 ~ 」 规则 ：按位取反</h2><ul><li><p>即：对一个二进制数按位取反，即将 1 变 0 ， 0 变 1。</p></li><li><p>按位取反运算符“~”的原理：是将内存中的补码按位取反（包括符号位）。</p><ol><li>二进制数在内存中是以补码的形式存放的。</li><li>补码首位是符号位，0 表示此数为正数，1 表示此数为负数。</li><li>正数的补码、反码，都是其本身。</li><li>负数的反码是：符号位为 1，其余各位求反，但末位不加 1 。</li><li>负数的补码是：符号位不变，其余各位求反，末位加 1 。</li><li>所有的取反操作、加 1、减 1 操作，都在有效位进行。</li></ol></li></ul><p><strong>例如：正数</strong></p><ul><li>正数 9（二进制为：1001）在内存中存储为 01001，必须补上符号位（开头的数字 0 为符号位）。</li><li>转二进制：0 1001</li><li>计算补码：0 1001「正数的补码也就是原码」</li><li>按位取反：1 0110 (变成补码，这明显变成了一个负数补码，因为符号位是 1)</li><li>补码减1 ：1 0101</li><li>再取反 ：1 1010</li><li>符号位为1是负数，即-10</li></ul><p><strong>例如：负数</strong></p><ul><li>负数 -1（二进制为：0001 ）在内存中存储为 10001，必须补上符号位（开头的数字 1 为符号位）。</li><li>-1 的反码为 11110</li><li>-1 的补码为 11111 （也可以理解为：反码末位加上1就是补码）</li><li><code>~-1</code> 的取反 00000</li><li><code>~-1</code> 结果为：0</li></ul><p>例 1：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">test2</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CeshiQuFan</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span> args<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token operator">~</span><span class="token number">7</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//正数    </span>
    
        <span class="token comment">/*
         * 7二进制 0000 0000 0000 0000 0000 0000 0000 0111
         *         0000 0000 0000 0000 0000 0000 0000 0111 反码
         *         0000 0000 0000 0000 0000 0000 0000 0111 补码        
         *         1000 0000 0000 0000 0000 0000 0000 1000 得到正数的补码之后进行取反 (这时得到的是负数)符号位为： 1
         *         所以~7的值为:-8
         */</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>    
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>例2：</p><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">package</span> <span class="token namespace">test2</span><span class="token punctuation">;</span>

<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">CeshiQuFan</span> <span class="token punctuation">{</span>

    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span> args<span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token operator">~</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span><span class="token comment">//负数    </span>
            
  <span class="token comment">/*
   * -1二进制 1000 0000 0000 0000 0000 0000 0000 0001
   *          1000 0000 0000 0000 0000 0000 0000 1110  反码（负数的反码是：符号位为1，其余各位求反，但末位不加1。）
   *            1000 0000 0000 0000 0000 0000 0000 1111  补码（负数的补码是：符号位不变，其余各位求反，末位加1 。）
   *          0000 0000 0000 0000 0000 0000 0000 0000  得到负数的补码之后进行取反 (这时得到的是正数) 符号位为： 0
   *           所以~-1的值为:0
   */</span>
            
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！</p><details class="custom-container details"><summary>公众号：AI悦创【二维码】</summary><p><img src="`+e+'" alt="" loading="lazy"></p></details>',24),v={class:"custom-container info"},m=n("p",{class:"custom-container-title"},"AI悦创·编程一对一",-1),k=n("p",null,"AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh",-1),b=n("p",null,"C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh",-1),h={href:"http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes",target:"_blank",rel:"noopener noreferrer"},g=n("p",null,"方法二：微信：Jiabcdefh",-1),_=n("p",null,[n("img",{src:i,alt:"",loading:"lazy"})],-1);function y(f,j){const a=u("ExternalLinkIcon");return t(),c("div",null,[r,n("div",v,[m,k,b,n("p",null,[s("方法一："),n("a",h,[s("QQ"),p(a)])]),g]),_])}const I=l(d,[["render",y],["__file","26.html.vue"]]);export{I as default};
