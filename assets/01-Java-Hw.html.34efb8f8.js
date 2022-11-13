import{_ as p}from"./gzh.b03adfd2.js";import{_ as t}from"./zsxq.77f6dc86.js";import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as i,a as n,d as s,b as l,e as c,r}from"./app.9feaae20.js";const u={},d=c(`<ul><li><a href="/1v1/10-MaLin/01-Java-Hw/ppa%E7%BF%BB%E8%AF%91.txt">ppa翻译.txt</a></li></ul><h2 id="开始" tabindex="-1"><a class="header-anchor" href="#开始" aria-hidden="true">#</a> 开始:</h2><ol><li>下载 property</li><li>四个中已经有三个完成了，完成 PropertyViewer</li></ol><h2 id="overview" tabindex="-1"><a class="header-anchor" href="#overview" aria-hidden="true">#</a> Overview：</h2><p>(现有 class 的概括）</p><ul><li><p>Property: 表示单个属性，点开内部看我需要的方法，如 getID, getLatitude, and toggleFavourite.</p></li><li><p>Portfolio: 属性的集合通过在磁盘上指定一个包含某些物业数据的电子表格建立的(<code>airbnb-london.csv</code> —默认情况下的文件，这些是实际数据）它会自动加载它在电子表格中找到的所有属性。我可以随意向电子表格添加更多属性</p></li><li><p>PropertyViewer：展示了应用程序的 GUI。它会绘制主窗口，按钮，和我在屏幕上看到的所有东西如果用户点击按钮，该 call 将被传递到相关的PropertyViewer method Property 可以 call 它来在接口中显示 Property 或 String</p></li><li><p>PropertyViewer: 运行 property viewer 的逻辑我需要完成的东西启动此应用程序而实例化的 class</p></li></ul><h2 id="基本任务" tabindex="-1"><a class="header-anchor" href="#基本任务" aria-hidden="true">#</a> 基本任务：</h2><ol><li>应用启动时，应该自动显示第一个 protfolio（index 0）里的 property</li><li>对于显示的任何 property，property 的 ID 都应该显示在窗口顶部，CUI class 有一个 method 去做这个</li><li>当 Toggle Favourite 按钮被按下的时候，property 里的 IsFavourite filed 应该被更新。Property class 可以做这个</li><li>窗口底部的栏应该显示是否property已经被用户标记为他们的favourites（收藏夹）之一</li><li>当 Next 按钮按下，下一个 property 应该被显示伴随它正确的数据。顶部的 ID 也应该被正确更新，以及 property 是否为用户的 favourite 之一。如果在上一个 property 按下 Next 按钮，应用程序应该返回第一个 property</li><li>当按下 Previous 按钮时，上一个 property 应该被显示和它正确的数据。顶部的 ID 应该正确更新，以及 property 是否为用户的 favourite 之一。如果在第一个property按下Previous按钮，应用程序应该转到最后一个property</li><li>在 Propertyviewer class 中，一些 method 没有文档。提供适当的 method level 注释</li></ol><h2 id="无语挑战" tabindex="-1"><a class="header-anchor" href="#无语挑战" aria-hidden="true">#</a> 无语挑战：</h2><ol><li>实现一个名为 getNumberOfPropertiesViewed 的 method，该 method 返回从应用程序启动以来已经查看的属性数量。返回类型是 int。两次查看同一个属性算作看了两次</li><li>实现一个名为 averagePropertyPrice 的 method，该 method 返回到目前为止查看的属性的平均价格。返回类型 int</li><li>e.g.先看 A（50）再看 B(20）然后再看 A,平均价格在（50+20+50)/3</li><li>View Property on Map 这个按钮是坏的，因为它只在地图上显示 Bush House。修复此功能，让它在地图上显示属性的位置</li><li>添加一个新的 Statistic 按钮在程序上，点开后将打开一个新窗口，显示来自无语挑战的两个新 method 的统计信息</li></ol><h2 id="propertyviewer-java" tabindex="-1"><a class="header-anchor" href="#propertyviewer-java" aria-hidden="true">#</a> PropertyViewer.java</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> java<span class="token punctuation">.</span>awt<span class="token punctuation">.</span>Desktop<span class="token punctuation">;</span>
<span class="token keyword">import</span> java<span class="token punctuation">.</span>net<span class="token punctuation">.</span>URI<span class="token punctuation">;</span>
<span class="token keyword">import</span> java<span class="token punctuation">.</span>net<span class="token punctuation">.</span>URISyntaxException<span class="token punctuation">;</span>

<span class="token operator">/</span><span class="token operator">**</span>
 <span class="token operator">*</span> This project implements a simple application<span class="token punctuation">.</span> Properties <span class="token keyword">from</span> a fixed
 <span class="token operator">*</span> <span class="token builtin">file</span> can be displayed<span class="token punctuation">.</span>
 <span class="token operator">*</span>
 <span class="token operator">*</span> @author Michael Kölling <span class="token keyword">and</span> Josh Murphy
 <span class="token operator">*</span> @version <span class="token number">1.0</span>
 <span class="token operator">*</span><span class="token operator">/</span>
public <span class="token keyword">class</span> <span class="token class-name">PropertyViewer</span> <span class="token punctuation">{</span>
    private PropertyViewerGUI gui<span class="token punctuation">;</span>     <span class="token operator">//</span> the Graphical User Interface
    private Portfolio portfolio<span class="token punctuation">;</span>
    private Property <span class="token builtin">property</span><span class="token punctuation">;</span> <span class="token operator">//</span> 引用
    static <span class="token builtin">int</span> row <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
    static <span class="token builtin">int</span> view_count <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>

    <span class="token operator">/</span><span class="token operator">**</span>
     <span class="token operator">*</span> Create a PropertyViewer <span class="token keyword">and</span> display its GUI on screen<span class="token punctuation">.</span>
     <span class="token operator">*</span><span class="token operator">/</span>
    public PropertyViewer<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        gui <span class="token operator">=</span> new PropertyViewerGUI<span class="token punctuation">(</span>this<span class="token punctuation">)</span><span class="token punctuation">;</span>
        portfolio <span class="token operator">=</span> new Portfolio<span class="token punctuation">(</span><span class="token string">&quot;airbnb-london.csv&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token builtin">property</span> <span class="token operator">=</span> portfolio<span class="token punctuation">.</span>getProperty<span class="token punctuation">(</span>row<span class="token punctuation">)</span><span class="token punctuation">;</span>
        gui<span class="token punctuation">.</span>showID<span class="token punctuation">(</span><span class="token builtin">property</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        gui<span class="token punctuation">.</span>showProperty<span class="token punctuation">(</span><span class="token builtin">property</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        gui<span class="token punctuation">.</span>showFavourite<span class="token punctuation">(</span><span class="token builtin">property</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token operator">/</span><span class="token operator">**</span>
     <span class="token operator">*</span>
     <span class="token operator">*</span><span class="token operator">/</span>
    public void nextProperty<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        view_count <span class="token operator">=</span> view_count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
        row <span class="token operator">=</span> row <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>row <span class="token operator">&gt;=</span> portfolio<span class="token punctuation">.</span>numberOfProperties<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            row <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token builtin">property</span> <span class="token operator">=</span> portfolio<span class="token punctuation">.</span>getProperty<span class="token punctuation">(</span>row<span class="token punctuation">)</span><span class="token punctuation">;</span>
        gui<span class="token punctuation">.</span>showID<span class="token punctuation">(</span><span class="token builtin">property</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        gui<span class="token punctuation">.</span>showProperty<span class="token punctuation">(</span><span class="token builtin">property</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        gui<span class="token punctuation">.</span>showFavourite<span class="token punctuation">(</span><span class="token builtin">property</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token operator">/</span><span class="token operator">**</span>
     <span class="token operator">*</span>
     <span class="token operator">*</span><span class="token operator">/</span>
    public void previousProperty<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        view_count <span class="token operator">=</span> view_count <span class="token operator">+</span> <span class="token number">1</span><span class="token punctuation">;</span>
        row <span class="token operator">=</span> row <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">if</span> <span class="token punctuation">(</span>row <span class="token operator">&lt;</span> <span class="token number">0</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
            row <span class="token operator">=</span> portfolio<span class="token punctuation">.</span>numberOfProperties<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">-</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token builtin">property</span> <span class="token operator">=</span> portfolio<span class="token punctuation">.</span>getProperty<span class="token punctuation">(</span>row<span class="token punctuation">)</span><span class="token punctuation">;</span>
        gui<span class="token punctuation">.</span>showID<span class="token punctuation">(</span><span class="token builtin">property</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        gui<span class="token punctuation">.</span>showProperty<span class="token punctuation">(</span><span class="token builtin">property</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        gui<span class="token punctuation">.</span>showFavourite<span class="token punctuation">(</span><span class="token builtin">property</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

    <span class="token punctuation">}</span>

    <span class="token operator">/</span><span class="token operator">**</span>
     <span class="token operator">*</span>
     <span class="token operator">*</span><span class="token operator">/</span>
    public void toggleFavourite<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token builtin">property</span> <span class="token operator">=</span> portfolio<span class="token punctuation">.</span>getProperty<span class="token punctuation">(</span>row<span class="token punctuation">)</span><span class="token punctuation">;</span>  <span class="token operator">//</span> index 获取当前数据，index
        <span class="token builtin">property</span><span class="token punctuation">.</span>toggleFavourite<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token operator">//</span> 标记喜欢的，更新喜欢的
        gui<span class="token punctuation">.</span>showFavourite<span class="token punctuation">(</span><span class="token builtin">property</span><span class="token punctuation">)</span><span class="token punctuation">;</span> <span class="token operator">//</span> gui 显示出来
    <span class="token punctuation">}</span>


    <span class="token operator">//</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span> methods <span class="token keyword">for</span> challenge tasks <span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>

    <span class="token operator">/</span><span class="token operator">**</span>
     <span class="token operator">*</span> This method opens the system&#39;s default internet browser
     <span class="token operator">*</span> The Google maps page should show the current properties location on the <span class="token builtin">map</span><span class="token punctuation">.</span>
     <span class="token operator">*</span><span class="token operator">/</span>
    public void viewMap<span class="token punctuation">(</span><span class="token punctuation">)</span> throws Exception <span class="token punctuation">{</span>
        double latitude<span class="token punctuation">;</span>
        double longitude<span class="token punctuation">;</span>
        latitude <span class="token operator">=</span> <span class="token builtin">property</span><span class="token punctuation">.</span>getLatitude<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        longitude <span class="token operator">=</span> <span class="token builtin">property</span><span class="token punctuation">.</span>getLongitude<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>

        URI uri <span class="token operator">=</span> new URI<span class="token punctuation">(</span><span class="token string">&quot;https://www.google.com/maps/place/&quot;</span> <span class="token operator">+</span> latitude <span class="token operator">+</span> <span class="token string">&quot;,&quot;</span> <span class="token operator">+</span> longitude<span class="token punctuation">)</span><span class="token punctuation">;</span>
        java<span class="token punctuation">.</span>awt<span class="token punctuation">.</span>Desktop<span class="token punctuation">.</span>getDesktop<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>browse<span class="token punctuation">(</span>uri<span class="token punctuation">)</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token operator">/</span><span class="token operator">**</span>
     <span class="token operator">*</span>
     <span class="token operator">*</span><span class="token operator">/</span>
    public <span class="token builtin">int</span> getNumberOfPropertiesViewed<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>

    <span class="token operator">/</span><span class="token operator">**</span>
     <span class="token operator">*</span>
     <span class="token operator">*</span><span class="token operator">/</span>
    public <span class="token builtin">int</span> averagePropertyPrice<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">return</span> <span class="token number">0</span><span class="token punctuation">;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="custom-container details"><summary>公众号：AI悦创【二维码】</summary><p><img src="`+p+'" alt="" loading="lazy"></p></details>',13),k={class:"custom-container info"},v=n("p",{class:"custom-container-title"},"AI悦创·编程一对一",-1),m=n("p",null,"AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Web、Linux」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh",-1),b=n("p",null,"C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh",-1),h={href:"http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes",target:"_blank",rel:"noopener noreferrer"},y=n("p",null,"方法二：微信：Jiabcdefh",-1),w=n("p",null,[n("img",{src:t,alt:"",loading:"lazy"})],-1);function g(f,P){const a=r("ExternalLinkIcon");return o(),i("div",null,[d,n("div",k,[v,m,b,n("p",null,[s("方法一："),n("a",h,[s("QQ"),l(a)])]),y]),w])}const F=e(u,[["render",g],["__file","01-Java-Hw.html.vue"]]);export{F as default};
