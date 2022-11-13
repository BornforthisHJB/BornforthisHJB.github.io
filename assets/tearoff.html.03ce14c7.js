import{_ as t}from"./gzh.b03adfd2.js";import{_ as e}from"./zsxq.77f6dc86.js";import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c,a as n,d as s,b as i,e as l,r as u}from"./app.d230385b.js";const r="/assets/image-20220524173907212.5bc1ee96.png",d="/assets/image-20220524183243382.7a9c4854.png",m="/assets/image-20220524184421188.1be38aa0.png",k="/assets/image-20220524184613533.d4d05505.png",v={},b=l('<p>你好，我是悦创。</p><p>我想你在学习 tkinter 的时候，会出现这个疑问：程序运行的时候菜单之下出现了一个虚线项。如下图：</p><p><img src="'+r+'" alt="image-20220524173907212" loading="lazy"></p><p>点击这个虚线选项后，菜单单独浮于应用之上：</p><p><img src="'+d+`" alt="image-20220524183243382" loading="lazy"></p><p>进查询发现了 tearoff 选项，当 <code>tearoff=1</code> 的时候该菜单被设置为可以独立出来的菜单，点击虚线就可以将菜单独立出来，当 <code>tearoff=0</code> 时就是正常的菜单了，但是默认情况下 <code>tearoff=1</code> ，所以在程序中需要设置一下：</p><h2 id="当设置为-0-的时候" tabindex="-1"><a class="header-anchor" href="#当设置为-0-的时候" aria-hidden="true">#</a> 当设置为 0 的时候</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># -*- coding: utf-8 -*-</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
@Time    : 2022/1/3 11:32
@Author  : AI悦创
@FileName: main.py
@Software: PyCharm
@Blog    ：https://www.aiyc.top
@公众号   ：AI悦创
@description：
&quot;&quot;&quot;</span>
<span class="token comment">#!/usr/bin/python</span>
<span class="token comment">#coding: utf-8</span>
 
<span class="token keyword">import</span> tkinter <span class="token keyword">as</span> tk
root <span class="token operator">=</span> tk<span class="token punctuation">.</span>Tk<span class="token punctuation">(</span><span class="token punctuation">)</span>
root<span class="token punctuation">.</span>title<span class="token punctuation">(</span><span class="token string">&#39;菜单练习&#39;</span><span class="token punctuation">)</span>
menu <span class="token operator">=</span> tk<span class="token punctuation">.</span>Menu<span class="token punctuation">(</span>root<span class="token punctuation">)</span>
submenu <span class="token operator">=</span> tk<span class="token punctuation">.</span>Menu<span class="token punctuation">(</span>menu<span class="token punctuation">,</span> tearoff <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">)</span>
submenu<span class="token punctuation">.</span>add_command<span class="token punctuation">(</span>label <span class="token operator">=</span> <span class="token string">&#39;打开&#39;</span><span class="token punctuation">)</span>
submenu<span class="token punctuation">.</span>add_command<span class="token punctuation">(</span>label <span class="token operator">=</span> <span class="token string">&#39;保存&#39;</span><span class="token punctuation">)</span>
submenu<span class="token punctuation">.</span>add_command<span class="token punctuation">(</span>label <span class="token operator">=</span> <span class="token string">&#39;关闭&#39;</span><span class="token punctuation">)</span>
menu<span class="token punctuation">.</span>add_cascade<span class="token punctuation">(</span>label <span class="token operator">=</span> <span class="token string">&#39;文件&#39;</span><span class="token punctuation">,</span> menu <span class="token operator">=</span> submenu<span class="token punctuation">)</span>
root<span class="token punctuation">.</span>config<span class="token punctuation">(</span>menu <span class="token operator">=</span> menu<span class="token punctuation">)</span>
root<span class="token punctuation">.</span>mainloop<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>如图：</p><p><img src="`+m+'" alt="image-20220524184421188" loading="lazy"></p><h2 id="设置为-1-的时候" tabindex="-1"><a class="header-anchor" href="#设置为-1-的时候" aria-hidden="true">#</a> 设置为 1 的时候</h2><p><img src="'+k+`" alt="image-20220524184613533" loading="lazy"></p><p>多了一个虚线，如果点击的话就会发现，这个菜单框可以独立出来显示。</p><p>补充示例：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># -*- coding: utf-8 -*-</span>
<span class="token triple-quoted-string string">&quot;&quot;&quot;
@Time    : 2022/1/3 11:32
@Author  : AI悦创
@FileName: main.py
@Software: PyCharm
@Blog    ：https://www.aiyc.top
@公众号   ：AI悦创
@description：
&quot;&quot;&quot;</span>
<span class="token keyword">from</span> tkinter <span class="token keyword">import</span> Menu<span class="token punctuation">,</span> Tk

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
    root <span class="token operator">=</span> Tk<span class="token punctuation">(</span><span class="token punctuation">)</span>
    root<span class="token punctuation">.</span>title<span class="token punctuation">(</span><span class="token string">&#39;主窗体&#39;</span><span class="token punctuation">)</span>
    <span class="token comment"># 在屏幕左上角绘制240&amp;480的主窗体</span>
    root<span class="token punctuation">.</span>geometry<span class="token punctuation">(</span><span class="token string">&#39;240x480+0+0&#39;</span><span class="token punctuation">)</span>
    <span class="token comment"># 自定义菜单</span>
    menu_bar <span class="token operator">=</span> Menu<span class="token punctuation">(</span>root<span class="token punctuation">)</span>
    <span class="token comment"># 创建菜单项目</span>
    <span class="token comment"># tearoff 如果等于1，该菜单下面会有一个虚线选项（表明该菜单可以独立出来），如果设置成1则没有</span>
    stu_menu <span class="token operator">=</span> Menu<span class="token punctuation">(</span>menu_bar<span class="token punctuation">,</span>tearoff<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span>
    stu_menu<span class="token punctuation">.</span>add_command<span class="token punctuation">(</span>label<span class="token operator">=</span><span class="token string">&#39;add&#39;</span><span class="token punctuation">,</span> command<span class="token operator">=</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
    stu_menu<span class="token punctuation">.</span>add_command<span class="token punctuation">(</span>label<span class="token operator">=</span><span class="token string">&#39;query&#39;</span><span class="token punctuation">,</span> command<span class="token operator">=</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
    menu_bar<span class="token punctuation">.</span>add_cascade<span class="token punctuation">(</span>label<span class="token operator">=</span><span class="token string">&#39;学生&#39;</span><span class="token punctuation">,</span> menu<span class="token operator">=</span>stu_menu<span class="token punctuation">)</span>

    <span class="token comment"># create score menu</span>
    score_menu <span class="token operator">=</span> Menu<span class="token punctuation">(</span>menu_bar<span class="token punctuation">)</span>
    score_menu<span class="token punctuation">.</span>add_command<span class="token punctuation">(</span>label<span class="token operator">=</span><span class="token string">&#39;添加&#39;</span><span class="token punctuation">,</span> command<span class="token operator">=</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
    score_menu<span class="token punctuation">.</span>add_command<span class="token punctuation">(</span>label<span class="token operator">=</span><span class="token string">&#39;查询&#39;</span><span class="token punctuation">,</span> command<span class="token operator">=</span><span class="token string">&#39;&#39;</span><span class="token punctuation">)</span>
    menu_bar<span class="token punctuation">.</span>add_cascade<span class="token punctuation">(</span>label<span class="token operator">=</span><span class="token string">&#39;成绩&#39;</span><span class="token punctuation">,</span> menu<span class="token operator">=</span>score_menu<span class="token punctuation">)</span>

    root<span class="token punctuation">.</span>config<span class="token punctuation">(</span>menu<span class="token operator">=</span>menu_bar<span class="token punctuation">)</span>
    root<span class="token punctuation">.</span>mainloop<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！</p><details class="custom-container details"><summary>公众号：AI悦创【二维码】</summary><p><img src="`+t+'" alt="" loading="lazy"></p></details>',17),_={class:"custom-container info"},g=n("p",{class:"custom-container-title"},"AI悦创·编程一对一",-1),f=n("p",null,"AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh",-1),h=n("p",null,"C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh",-1),y={href:"http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes",target:"_blank",rel:"noopener noreferrer"},q=n("p",null,"方法二：微信：Jiabcdefh",-1),w=n("p",null,[n("img",{src:e,alt:"",loading:"lazy"})],-1);function x(A,I){const a=u("ExternalLinkIcon");return o(),c("div",null,[b,n("div",_,[g,f,h,n("p",null,[s("方法一："),n("a",y,[s("QQ"),i(a)])]),q]),w])}const B=p(v,[["render",x],["__file","tearoff.html.vue"]]);export{B as default};
