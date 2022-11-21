import{_ as e}from"./gzh.b03adfd2.js";import{_ as o}from"./zsxq.77f6dc86.js";import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as c,c as l,a as n,d as s,b as t,e as r,r as i}from"./app.b0eae2c5.js";const u={},d=r(`<h2 id="一、字符串转数字" tabindex="-1"><a class="header-anchor" href="#一、字符串转数字" aria-hidden="true">#</a> 一、字符串转数字</h2><ol><li>通过基本类型对应的包装类则可以实现把字符串转换成基本类型。Java 几个包装类都提供了一个 <code>parseXxx(String str)</code> 静态方法用于将字符串转换成基本类型。（<strong>注意：如果字符串不是数值型字符串，转换将导致一个运行时错误。</strong>）</li></ol><div class="language-java line-numbers-mode" data-ext="java"><pre class="language-java"><code><span class="token class-name">String</span> s <span class="token operator">=</span> <span class="token string">&quot;123&quot;</span><span class="token punctuation">;</span>

<span class="token keyword">byte</span> b <span class="token operator">=</span> <span class="token class-name">Byte</span><span class="token punctuation">.</span><span class="token function">parseByte</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">short</span> t <span class="token operator">=</span> <span class="token class-name">Short</span><span class="token punctuation">.</span><span class="token function">parseShort</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">int</span> i <span class="token operator">=</span> <span class="token class-name">Integer</span><span class="token punctuation">.</span><span class="token function">parseInt</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">long</span> l <span class="token operator">=</span> <span class="token class-name">Long</span><span class="token punctuation">.</span><span class="token function">parseLong</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">float</span> f <span class="token operator">=</span> <span class="token class-name">Float</span><span class="token punctuation">.</span><span class="token function">parseFloat</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">double</span> d <span class="token operator">=</span> <span class="token class-name">Double</span><span class="token punctuation">.</span><span class="token function">parseDouble</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
<span class="token keyword">boolean</span> bo <span class="token operator">=</span> <span class="token class-name">Boolean</span><span class="token punctuation">.</span><span class="token function">parseBoolean</span><span class="token punctuation">(</span>s<span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>2、<code>i = Integer.valueOf(s).intValue();</code></p><p><strong>总结：</strong> 方法 1 直接使用静态方法，不会产生多余的对象，但会抛出异常。方法 2，<code>Integer.valueOf(s)</code> 相当于 <code>new Integer(Integer.parseInt(s))</code>，也会抛异常，但会多产生一个对象。</p><h2 id="待整理" tabindex="-1"><a class="header-anchor" href="#待整理" aria-hidden="true">#</a> 待整理！</h2><p>欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！</p><details class="custom-container details"><summary>公众号：AI悦创【二维码】</summary><p><img src="`+e+'" alt="" loading="lazy"></p></details>',8),k={class:"custom-container info"},m=n("p",{class:"custom-container-title"},"AI悦创·编程一对一",-1),h=n("p",null,"AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh",-1),_=n("p",null,"C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh",-1),v={href:"http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes",target:"_blank",rel:"noopener noreferrer"},g=n("p",null,"方法二：微信：Jiabcdefh",-1),f=n("p",null,[n("img",{src:o,alt:"",loading:"lazy"})],-1),b={href:"https://www.runoob.com/w3cnote/java-string-and-int-convert.html",target:"_blank",rel:"noopener noreferrer"},w={href:"https://blog.csdn.net/allenchan3721/article/details/71437394",target:"_blank",rel:"noopener noreferrer"};function y(I,x){const a=i("ExternalLinkIcon");return c(),l("div",null,[d,n("div",k,[m,h,_,n("p",null,[s("方法一："),n("a",v,[s("QQ"),t(a)])]),g]),f,n("p",null,[n("a",b,[s("https://www.runoob.com/w3cnote/java-string-and-int-convert.html"),t(a)])]),n("p",null,[n("a",w,[s("https://blog.csdn.net/allenchan3721/article/details/71437394"),t(a)])])])}const J=p(u,[["render",y],["__file","02-Java-String-to-int-Translate.html.vue"]]);export{J as default};
