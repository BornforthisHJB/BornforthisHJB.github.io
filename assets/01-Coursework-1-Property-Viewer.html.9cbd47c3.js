import{_ as t}from"./gzh.b03adfd2.js";import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as o,a as n,d as s,b as c,e as i,r as l}from"./app.7486d119.js";const u={},k=i(`<h2 id="资料" tabindex="-1"><a class="header-anchor" href="#资料" aria-hidden="true">#</a> 资料</h2><ul><li><a href="/1v1/09-liujiahui/01-Coursework-1-Property-Viewer/Asignment_1.pdf">Asignment_1.pdf</a></li><li><a href="/1v1/09-liujiahui/01-Coursework-1-Property-Viewer/cw1-base.zip">cw1-base.zip</a></li><li><a href="/1v1/09-liujiahui/kejian/PPA-Term1-01.pdf">PPA-Term1-01.pdf</a></li><li><a href="/1v1/09-liujiahui/kejian/PPA-Term1-02.pdf">PPA-Term1-02.pdf</a></li><li><a href="/1v1/09-liujiahui/kejian/PPA-Term1-03.pdf">PPA-Term1-03.pdf</a></li><li><a href="/1v1/09-liujiahui/kejian/PPA-Term1-04.pdf">PPA-Term1-04.pdf</a></li><li><a href="/1v1/09-liujiahui/kejian/PPA-Term1-05.pdf">PPA-Term1-05.pdf</a></li><li><a href="/1v1/09-liujiahui/kejian/PPA-Term1-05.pdf">PPA-Term1-05.pdf</a></li></ul><h2 id="运行代码" tabindex="-1"><a class="header-anchor" href="#运行代码" aria-hidden="true">#</a> 运行代码</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token doc-comment comment">/**
 * <span class="token keyword">@author</span> aiyc
 * <span class="token keyword">@version</span> 1.0
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> test01 <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token class-name">PropertyViewer</span> propertyViewer <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PropertyViewer</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="propertyviewer-java" tabindex="-1"><a class="header-anchor" href="#propertyviewer-java" aria-hidden="true">#</a> PropertyViewer.java</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>swing<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>awt<span class="token punctuation">.</span></span><span class="token class-name">Desktop</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>net<span class="token punctuation">.</span></span><span class="token class-name">URI</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>net<span class="token punctuation">.</span></span><span class="token class-name">URISyntaxException</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * This project implements a simple application. Properties from a fixed
 * file can be displayed.
 *
 * <span class="token keyword">@author</span> Michael Kölling and Josh Murphy
 * <span class="token keyword">@version</span> 1.0
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PropertyViewer</span> <span class="token punctuation">{</span>
    <span class="token comment">/*private : 在同一类内可见。使用对象：变量、方法。 注意：不能修饰类（外部类）*/</span>
    <span class="token keyword">private</span> <span class="token class-name">Property</span> property<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">PropertyViewerGUI</span> gui<span class="token punctuation">;</span>     <span class="token comment">// the Graphical User Interface</span>
    <span class="token keyword">private</span> <span class="token class-name">Portfolio</span> portfolio<span class="token punctuation">;</span>
    <span class="token comment">/*为了实现一些其他的功能，Java 也提供了许多非访问修饰符。
    static 修饰符，用来修饰类方法和类变量。
    final 修饰符，用来修饰类、方法和变量，final 修饰的类不能够被继承，修饰的方法不能被继承类重新定义，修饰的变量为常量，是不可修改的。
    abstract 修饰符，用来创建抽象类和抽象方法。
    synchronized 和 volatile 修饰符，主要用于线程的编程。
    static 修饰符
    静态变量：
        static 关键字用来声明独立于对象的静态变量，无论一个类实例化多少对象，它的静态变量只有一份拷贝。 静态变量也被称为类变量。局部变量不能被声明为 static 变量。
    静态方法：
        static 关键字用来声明独立于对象的静态方法。静态方法不能使用类的非静态变量。静态方法从参数列表得到数据，然后计算这些数据。
*/</span>
    <span class="token keyword">static</span> <span class="token keyword">int</span> index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token class-name">View_Number</span> <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
    <span class="token keyword">static</span> <span class="token keyword">int</span> <span class="token class-name">Total_Money</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token keyword">static</span> <span class="token keyword">int</span> average<span class="token punctuation">;</span>


    <span class="token doc-comment comment">/**
     * Create a PropertyViewer and display its GUI on screen.
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">PropertyViewer</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        gui <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">PropertyViewerGUI</span><span class="token punctuation">(</span><span class="token keyword">this</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        portfolio <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Portfolio</span><span class="token punctuation">(</span><span class="token string">&quot;airbnb-london.csv&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        property <span class="token operator">=</span> portfolio<span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
        gui<span class="token punctuation">.</span><span class="token function">showID</span><span class="token punctuation">(</span>property<span class="token punctuation">)</span><span class="token punctuation">;</span>
        gui<span class="token punctuation">.</span><span class="token function">showProperty</span><span class="token punctuation">(</span>property<span class="token punctuation">)</span><span class="token punctuation">;</span>
        gui<span class="token punctuation">.</span><span class="token function">showFavourite</span><span class="token punctuation">(</span>property<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Total_Money</span> <span class="token operator">+=</span> property<span class="token punctuation">.</span><span class="token function">getPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * 按下 **&quot;Next&quot;** 按钮时，下一个地产项目应该被显示出来，并有正确的数据。此外，顶部的ID应该被正确更新，以及该地产是否是用户的最爱之一。
     * 如果在最后一个地产上按下 **&quot;Next&quot;** 按钮，应用程序应该返回到第一个地产。
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">nextProperty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 查看次数</span>
        <span class="token class-name">View_Number</span> <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        index <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&gt;=</span> portfolio<span class="token punctuation">.</span><span class="token function">numberOfProperties</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            index <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        property <span class="token operator">=</span> portfolio<span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;啊哈，我被翻牌啦，来侍寝～&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        gui<span class="token punctuation">.</span><span class="token function">showID</span><span class="token punctuation">(</span>property<span class="token punctuation">)</span><span class="token punctuation">;</span>
        gui<span class="token punctuation">.</span><span class="token function">showProperty</span><span class="token punctuation">(</span>property<span class="token punctuation">)</span><span class="token punctuation">;</span>
        gui<span class="token punctuation">.</span><span class="token function">showFavourite</span><span class="token punctuation">(</span>property<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Total_Money</span> <span class="token operator">+=</span> property<span class="token punctuation">.</span><span class="token function">getPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * **“Previous”** 按钮被按下时，上一个地产应该被显示出来，并有正确的数据。此外，顶部的ID应该被正确更新，以及该地产是否是用户的最爱之一。
     * 如果在第一个地产上按下 **“Previous”** 按钮，应用程序应该转到最后一个地产。
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">previousProperty</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 查看次数</span>
        <span class="token class-name">View_Number</span> <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        index <span class="token operator">-=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>index <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            index <span class="token operator">=</span> portfolio<span class="token punctuation">.</span><span class="token function">numberOfProperties</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        property <span class="token operator">=</span> portfolio<span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
        gui<span class="token punctuation">.</span><span class="token function">showID</span><span class="token punctuation">(</span>property<span class="token punctuation">)</span><span class="token punctuation">;</span>
        gui<span class="token punctuation">.</span><span class="token function">showProperty</span><span class="token punctuation">(</span>property<span class="token punctuation">)</span><span class="token punctuation">;</span>
        gui<span class="token punctuation">.</span><span class="token function">showFavourite</span><span class="token punctuation">(</span>property<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Total_Money</span> <span class="token operator">+=</span> property<span class="token punctuation">.</span><span class="token function">getPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * &quot;Toggle Favourite&quot; 按钮被按下时，该属性的 **isFavourite 字段** 应该被更新
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">toggleFavourite</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        property <span class="token operator">=</span> portfolio<span class="token punctuation">.</span><span class="token function">getProperty</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">;</span>
        property<span class="token punctuation">.</span><span class="token function">toggleFavourite</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        gui<span class="token punctuation">.</span><span class="token function">showFavourite</span><span class="token punctuation">(</span>property<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token comment">//----- methods for challenge tasks -----</span>

    <span class="token doc-comment comment">/**
     * This method opens the system&#39;s default internet browser
     * The Google maps page should show the current properties location on the map.
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">viewMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">throws</span> <span class="token class-name">Exception</span> <span class="token punctuation">{</span>
<span class="token comment">//        double latitude = 51.512793;</span>
<span class="token comment">//        double longitude = -0.117149;</span>
        <span class="token keyword">double</span> latitude<span class="token punctuation">;</span>
        <span class="token keyword">double</span> longitude<span class="token punctuation">;</span>
        latitude <span class="token operator">=</span> property<span class="token punctuation">.</span><span class="token function">getLatitude</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        longitude <span class="token operator">=</span> property<span class="token punctuation">.</span><span class="token function">getLongitude</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">URI</span> uri <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">URI</span><span class="token punctuation">(</span><span class="token string">&quot;https://www.google.com/maps/place/&quot;</span> <span class="token operator">+</span> latitude <span class="token operator">+</span> <span class="token string">&quot;,&quot;</span> <span class="token operator">+</span> longitude<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">Desktop</span><span class="token punctuation">.</span><span class="token function">getDesktop</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">browse</span><span class="token punctuation">(</span>uri<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     *
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">getNumberOfPropertiesViewed</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token comment">// 查看次数</span>
        <span class="token class-name">View_Number</span> <span class="token operator">+=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> <span class="token class-name">View_Number</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     *
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">int</span> <span class="token function">averagePropertyPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
<span class="token comment">//        int average;</span>
        average <span class="token operator">=</span> <span class="token class-name">Total_Money</span> <span class="token operator">/</span> <span class="token class-name">View_Number</span><span class="token punctuation">;</span>
        <span class="token keyword">return</span> average<span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token class-name">Statistics</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token function">averagePropertyPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">JFrame</span> frame <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JFrame</span><span class="token punctuation">(</span><span class="token string">&quot;Statistics&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        frame<span class="token punctuation">.</span><span class="token function">setDefaultCloseOperation</span><span class="token punctuation">(</span><span class="token class-name">JFrame</span><span class="token punctuation">.</span><span class="token constant">EXIT_ON_CLOSE</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        frame<span class="token punctuation">.</span><span class="token function">setSize</span><span class="token punctuation">(</span><span class="token number">300</span><span class="token punctuation">,</span> <span class="token number">300</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//        JButton button1 = new JButton(&quot;&quot; + average + &quot;\\n&quot; + View_Number);</span>
<span class="token comment">//        JFrame Frame = new JFrame(&quot;HelloWorldSwing&quot;);</span>
        <span class="token class-name">JTextArea</span> text1 <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JTextArea</span><span class="token punctuation">(</span><span class="token string">&quot;查看次数：&quot;</span> <span class="token operator">+</span> <span class="token class-name">View_Number</span> <span class="token operator">+</span> <span class="token string">&quot;\\n平均数：&quot;</span> <span class="token operator">+</span> average<span class="token punctuation">)</span><span class="token punctuation">;</span>
        frame<span class="token punctuation">.</span><span class="token function">getContentPane</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>text1<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//        frame.getContentPane().add(text2);</span>
        frame<span class="token punctuation">.</span><span class="token function">setVisible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//            }</span>
<span class="token comment">//    }</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="propertyviewergui-java" tabindex="-1"><a class="header-anchor" href="#propertyviewergui-java" aria-hidden="true">#</a> PropertyViewerGUI.java</h2><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>awt<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>awt<span class="token punctuation">.</span>event<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>swing<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">javax<span class="token punctuation">.</span>swing<span class="token punctuation">.</span>border<span class="token punctuation">.</span></span><span class="token operator">*</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span><span class="token class-name">File</span></span><span class="token punctuation">;</span>

<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">List</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">ArrayList</span></span><span class="token punctuation">;</span>
<span class="token keyword">import</span> <span class="token import"><span class="token namespace">java<span class="token punctuation">.</span>util<span class="token punctuation">.</span></span><span class="token class-name">Iterator</span></span><span class="token punctuation">;</span>

<span class="token doc-comment comment">/**
 * PropertyViewerGUI provides the GUI for the project. It displays the property
 * and strings, and it listens to button clicks.

 * <span class="token keyword">@author</span> Michael Kölling, David J Barnes, and Josh Murphy 
 * <span class="token keyword">@version</span> 3.0
 */</span>
<span class="token keyword">public</span> <span class="token keyword">class</span> <span class="token class-name">PropertyViewerGUI</span>
<span class="token punctuation">{</span>
    <span class="token comment">// fields:</span>
    <span class="token keyword">private</span> <span class="token class-name">JFrame</span> frame<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">JPanel</span> propertyPanel<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">JLabel</span> idLabel<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">JLabel</span> favouriteLabel<span class="token punctuation">;</span>
    
    <span class="token keyword">private</span> <span class="token class-name">JTextField</span> hostIDLabel<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">JTextField</span> hostNameLabel<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">JTextField</span> neighbourhoodLabel<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">JTextField</span> roomTypeLabel<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">JTextField</span> priceLabel<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">JTextField</span> minNightsLabel<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">JTextArea</span> descriptionLabel<span class="token punctuation">;</span>
    
    <span class="token keyword">private</span> <span class="token class-name">Property</span> currentProperty<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token class-name">PropertyViewer</span> viewer<span class="token punctuation">;</span>
    <span class="token keyword">private</span> <span class="token keyword">boolean</span> fixedSize<span class="token punctuation">;</span>
        
    <span class="token doc-comment comment">/**
     * Create a PropertyViewer and display its GUI on screen.
     */</span>
    <span class="token keyword">public</span> <span class="token class-name">PropertyViewerGUI</span><span class="token punctuation">(</span><span class="token class-name">PropertyViewer</span> viewer<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        currentProperty <span class="token operator">=</span> <span class="token keyword">null</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span>viewer <span class="token operator">=</span> viewer<span class="token punctuation">;</span>
        fixedSize <span class="token operator">=</span> <span class="token boolean">false</span><span class="token punctuation">;</span>
        <span class="token function">makeFrame</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token keyword">this</span><span class="token punctuation">.</span><span class="token function">setPropertyViewSize</span><span class="token punctuation">(</span><span class="token number">400</span><span class="token punctuation">,</span> <span class="token number">250</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>


    <span class="token comment">// ---- public view functions ----</span>
    
    <span class="token doc-comment comment">/**
     * Display a given property
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">showProperty</span><span class="token punctuation">(</span><span class="token class-name">Property</span> property<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        hostIDLabel<span class="token punctuation">.</span><span class="token function">setText</span><span class="token punctuation">(</span>property<span class="token punctuation">.</span><span class="token function">getHostID</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        hostNameLabel<span class="token punctuation">.</span><span class="token function">setText</span><span class="token punctuation">(</span>property<span class="token punctuation">.</span><span class="token function">getHostName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        neighbourhoodLabel<span class="token punctuation">.</span><span class="token function">setText</span><span class="token punctuation">(</span>property<span class="token punctuation">.</span><span class="token function">getNeighbourhood</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        roomTypeLabel<span class="token punctuation">.</span><span class="token function">setText</span><span class="token punctuation">(</span>property<span class="token punctuation">.</span><span class="token function">getRoomType</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        priceLabel<span class="token punctuation">.</span><span class="token function">setText</span><span class="token punctuation">(</span><span class="token string">&quot;£&quot;</span> <span class="token operator">+</span> property<span class="token punctuation">.</span><span class="token function">getPrice</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        minNightsLabel<span class="token punctuation">.</span><span class="token function">setText</span><span class="token punctuation">(</span>property<span class="token punctuation">.</span><span class="token function">getMinNights</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token comment">//        descriptionLabel.setText(property.getDescription());</span>
    <span class="token punctuation">}</span>
    
    <span class="token doc-comment comment">/**
     * Set a fixed size for the property display. If set, this size will be used for all properties.
     * If not set, the GUI will resize for each property.
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">setPropertyViewSize</span><span class="token punctuation">(</span><span class="token keyword">int</span> width<span class="token punctuation">,</span> <span class="token keyword">int</span> height<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        propertyPanel<span class="token punctuation">.</span><span class="token function">setPreferredSize</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">Dimension</span><span class="token punctuation">(</span>width<span class="token punctuation">,</span> height<span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        frame<span class="token punctuation">.</span><span class="token function">pack</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        fixedSize <span class="token operator">=</span> <span class="token boolean">true</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token doc-comment comment">/**
     * Show a message in the status bar at the bottom of the screen.
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">showFavourite</span><span class="token punctuation">(</span><span class="token class-name">Property</span> property<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token class-name">String</span> favouriteText <span class="token operator">=</span> <span class="token string">&quot; &quot;</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>property<span class="token punctuation">.</span><span class="token function">isFavourite</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
            favouriteText <span class="token operator">+=</span> <span class="token string">&quot;This is one of your favourite properties!&quot;</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        favouriteLabel<span class="token punctuation">.</span><span class="token function">setText</span><span class="token punctuation">(</span>favouriteText<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token doc-comment comment">/**
     * Show the ID in the top of the screen.
     */</span>
    <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">showID</span><span class="token punctuation">(</span><span class="token class-name">Property</span> property<span class="token punctuation">)</span><span class="token punctuation">{</span>
        idLabel<span class="token punctuation">.</span><span class="token function">setText</span><span class="token punctuation">(</span><span class="token string">&quot;Current Property ID:&quot;</span> <span class="token operator">+</span> property<span class="token punctuation">.</span><span class="token function">getID</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token comment">// ---- implementation of button functions ----</span>
    
    <span class="token doc-comment comment">/**
     * Called when the &#39;Next&#39; button was clicked.
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">nextButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        viewer<span class="token punctuation">.</span><span class="token function">nextProperty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token doc-comment comment">/**
     * Called when the &#39;Previous&#39; button was clicked.
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">previousButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        viewer<span class="token punctuation">.</span><span class="token function">previousProperty</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
    
    <span class="token doc-comment comment">/**
     * Called when the &#39;View on Map&#39; button was clicked.
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">viewOnMapsButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">try</span><span class="token punctuation">{</span>
         viewer<span class="token punctuation">.</span><span class="token function">viewMap</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">catch</span><span class="token punctuation">(</span><span class="token class-name">Exception</span> e<span class="token punctuation">)</span><span class="token punctuation">{</span>
            <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;URL INVALID&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        
    <span class="token punctuation">}</span>
    
    <span class="token doc-comment comment">/**
     * Called when the &#39;Toggle Favourite&#39; button was clicked.
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">toggleFavouriteButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        viewer<span class="token punctuation">.</span><span class="token function">toggleFavourite</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>     
    <span class="token punctuation">}</span>

    <span class="token comment">// 修改 -----------------</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token class-name">Statistics</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">{</span>
        <span class="token class-name"><span class="token namespace">viewer<span class="token punctuation">.</span></span>Statistics</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token comment">// ---- swing stuff to build the frame and all its components ----</span>
    
    <span class="token doc-comment comment">/**
     * Create the Swing frame and its content.
     */</span>
    <span class="token keyword">private</span> <span class="token keyword">void</span> <span class="token function">makeFrame</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        frame <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JFrame</span><span class="token punctuation">(</span><span class="token string">&quot;Portfolio Viewer Application&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">JPanel</span> contentPane <span class="token operator">=</span> <span class="token punctuation">(</span><span class="token class-name">JPanel</span><span class="token punctuation">)</span>frame<span class="token punctuation">.</span><span class="token function">getContentPane</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        contentPane<span class="token punctuation">.</span><span class="token function">setBorder</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">EmptyBorder</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Specify the layout manager with nice spacing</span>
        contentPane<span class="token punctuation">.</span><span class="token function">setLayout</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">BorderLayout</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span> <span class="token number">6</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token comment">// Create the property pane in the center</span>
        propertyPanel <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JPanel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        propertyPanel<span class="token punctuation">.</span><span class="token function">setLayout</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">GridLayout</span><span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">,</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        propertyPanel<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">JLabel</span><span class="token punctuation">(</span><span class="token string">&quot;HostID: &quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        hostIDLabel <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JTextField</span><span class="token punctuation">(</span><span class="token string">&quot;default&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        hostIDLabel<span class="token punctuation">.</span><span class="token function">setEditable</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        propertyPanel<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>hostIDLabel<span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        propertyPanel<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">JLabel</span><span class="token punctuation">(</span><span class="token string">&quot;Host Name: &quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        hostNameLabel <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JTextField</span><span class="token punctuation">(</span><span class="token string">&quot;default&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        hostNameLabel<span class="token punctuation">.</span><span class="token function">setEditable</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        propertyPanel<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>hostNameLabel<span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        propertyPanel<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">JLabel</span><span class="token punctuation">(</span><span class="token string">&quot;Neighbourhood: &quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        neighbourhoodLabel <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JTextField</span><span class="token punctuation">(</span><span class="token string">&quot;default&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        neighbourhoodLabel<span class="token punctuation">.</span><span class="token function">setEditable</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        propertyPanel<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>neighbourhoodLabel<span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        propertyPanel<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">JLabel</span><span class="token punctuation">(</span><span class="token string">&quot;Room type: &quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        roomTypeLabel <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JTextField</span><span class="token punctuation">(</span><span class="token string">&quot;default&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        roomTypeLabel<span class="token punctuation">.</span><span class="token function">setEditable</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        propertyPanel<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>roomTypeLabel<span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        propertyPanel<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">JLabel</span><span class="token punctuation">(</span><span class="token string">&quot;Price: &quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        priceLabel <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JTextField</span><span class="token punctuation">(</span><span class="token string">&quot;default&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        priceLabel<span class="token punctuation">.</span><span class="token function">setEditable</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        propertyPanel<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>priceLabel<span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        propertyPanel<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">JLabel</span><span class="token punctuation">(</span><span class="token string">&quot;Minimum nights: &quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        minNightsLabel <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JTextField</span><span class="token punctuation">(</span><span class="token string">&quot;default&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        minNightsLabel<span class="token punctuation">.</span><span class="token function">setEditable</span><span class="token punctuation">(</span><span class="token boolean">false</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        propertyPanel<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>minNightsLabel<span class="token punctuation">)</span><span class="token punctuation">;</span>


        propertyPanel<span class="token punctuation">.</span><span class="token function">setBorder</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">EtchedBorder</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        contentPane<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>propertyPanel<span class="token punctuation">,</span> <span class="token class-name">BorderLayout</span><span class="token punctuation">.</span><span class="token constant">CENTER</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">// Create two labels at top and bottom for the file name and status message</span>
        idLabel <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JLabel</span><span class="token punctuation">(</span><span class="token string">&quot;default&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        contentPane<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>idLabel<span class="token punctuation">,</span> <span class="token class-name">BorderLayout</span><span class="token punctuation">.</span><span class="token constant">NORTH</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        favouriteLabel <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JLabel</span><span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        contentPane<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>favouriteLabel<span class="token punctuation">,</span> <span class="token class-name">BorderLayout</span><span class="token punctuation">.</span><span class="token constant">SOUTH</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">// Create the toolbar with the buttons</span>
        <span class="token class-name">JPanel</span> toolbar <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JPanel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        toolbar<span class="token punctuation">.</span><span class="token function">setLayout</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">GridLayout</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token class-name">JButton</span> nextButton <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JButton</span><span class="token punctuation">(</span><span class="token string">&quot;Next&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        nextButton<span class="token punctuation">.</span><span class="token function">addActionListener</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ActionListener</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                               <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">actionPerformed</span><span class="token punctuation">(</span><span class="token class-name">ActionEvent</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token function">nextButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
                           <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        toolbar<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>nextButton<span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token class-name">JButton</span> previousButton <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JButton</span><span class="token punctuation">(</span><span class="token string">&quot;Previous&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        previousButton<span class="token punctuation">.</span><span class="token function">addActionListener</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ActionListener</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                               <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">actionPerformed</span><span class="token punctuation">(</span><span class="token class-name">ActionEvent</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token function">previousButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
                           <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        toolbar<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>previousButton<span class="token punctuation">)</span><span class="token punctuation">;</span>

        <span class="token class-name">JButton</span> mapButton <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JButton</span><span class="token punctuation">(</span><span class="token string">&quot;View Property on Map&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        mapButton<span class="token punctuation">.</span><span class="token function">addActionListener</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ActionListener</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                               <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">actionPerformed</span><span class="token punctuation">(</span><span class="token class-name">ActionEvent</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token function">viewOnMapsButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
                           <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        toolbar<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>mapButton<span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token class-name">JButton</span> favouriteButton <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JButton</span><span class="token punctuation">(</span><span class="token string">&quot;Toggle Favourite&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        favouriteButton<span class="token punctuation">.</span><span class="token function">addActionListener</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ActionListener</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
                               <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">actionPerformed</span><span class="token punctuation">(</span><span class="token class-name">ActionEvent</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token function">toggleFavouriteButton</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
                           <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        toolbar<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>favouriteButton<span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token comment">// 添加新代码----------</span>
        <span class="token class-name">JButton</span> <span class="token class-name">View_Number</span> <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JButton</span><span class="token punctuation">(</span><span class="token string">&quot;查看次数&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token class-name">View_Number</span><span class="token punctuation">.</span><span class="token function">addActionListener</span><span class="token punctuation">(</span><span class="token keyword">new</span> <span class="token class-name">ActionListener</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">public</span> <span class="token keyword">void</span> <span class="token function">actionPerformed</span><span class="token punctuation">(</span><span class="token class-name">ActionEvent</span> e<span class="token punctuation">)</span> <span class="token punctuation">{</span> <span class="token class-name">Statistics</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token punctuation">}</span>
        <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        toolbar<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span><span class="token class-name">View_Number</span><span class="token punctuation">)</span><span class="token punctuation">;</span>


        <span class="token comment">// Add toolbar into panel with flow layout for spacing</span>
        <span class="token class-name">JPanel</span> flow <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">JPanel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        flow<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>toolbar<span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        contentPane<span class="token punctuation">.</span><span class="token function">add</span><span class="token punctuation">(</span>flow<span class="token punctuation">,</span> <span class="token class-name">BorderLayout</span><span class="token punctuation">.</span><span class="token constant">WEST</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">// building is done - arrange the components     </span>
        frame<span class="token punctuation">.</span><span class="token function">pack</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        
        <span class="token comment">// place the frame at the center of the screen and show</span>
        <span class="token class-name">Dimension</span> d <span class="token operator">=</span> <span class="token class-name">Toolkit</span><span class="token punctuation">.</span><span class="token function">getDefaultToolkit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">getScreenSize</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        frame<span class="token punctuation">.</span><span class="token function">setLocation</span><span class="token punctuation">(</span>d<span class="token punctuation">.</span>width<span class="token operator">/</span><span class="token number">2</span> <span class="token operator">-</span> frame<span class="token punctuation">.</span><span class="token function">getWidth</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">,</span> d<span class="token punctuation">.</span>height<span class="token operator">/</span><span class="token number">2</span> <span class="token operator">-</span> frame<span class="token punctuation">.</span><span class="token function">getHeight</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">/</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        frame<span class="token punctuation">.</span><span class="token function">setVisible</span><span class="token punctuation">(</span><span class="token boolean">true</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>    
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！</p><details class="custom-container details"><summary>公众号：AI悦创【二维码】</summary><p><img src="`+t+'" alt="" loading="lazy"></p></details>',10),r={class:"custom-container info"},d=n("p",{class:"custom-container-title"},"AI悦创·编程一对一",-1),v=n("p",null,"AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh",-1),m=n("p",null,"C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh",-1),b={href:"http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes",target:"_blank",rel:"noopener noreferrer"},w=n("p",null,"方法二：微信：Jiabcdefh",-1);function y(f,h){const a=l("ExternalLinkIcon");return e(),o("div",null,[k,n("div",r,[d,v,m,n("p",null,[s("方法一："),n("a",b,[s("QQ"),c(a)])]),w])])}const L=p(u,[["render",y],["__file","01-Coursework-1-Property-Viewer.html.vue"]]);export{L as default};
