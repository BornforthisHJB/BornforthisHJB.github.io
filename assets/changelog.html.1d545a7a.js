import{_ as l}from"./gzh.b03adfd2.js";import{_ as c}from"./zsxq.77f6dc86.js";import{_ as u}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as r,a as s,d as n,b as a,w as d,e as o,r as e}from"./app.b0eae2c5.js";const k={},v=o(`<p>该文件包含 AI悦创网站及其文章、专栏的所有显着更改，前面更新未记录。那今天开始记录。</p><h2 id="升级命令「2022-11-12-11-51-54」" tabindex="-1"><a class="header-anchor" href="#升级命令「2022-11-12-11-51-54」" aria-hidden="true">#</a> 升级命令「2022-11-12 11:51:54」</h2><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code><span class="token function">yarn</span> <span class="token function">add</span> @vuepress/client@next @vuepress/plugin-docsearch@next vue@next vuepress@next vuepress-theme-hope@next <span class="token operator">&amp;&amp;</span> <span class="token function">yarn</span> <span class="token function">install</span> <span class="token operator">&amp;&amp;</span> <span class="token function">yarn</span> upgrade
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="升级前的配置「2022-11-02-10-09-52」" tabindex="-1"><a class="header-anchor" href="#升级前的配置「2022-11-02-10-09-52」" aria-hidden="true">#</a> 升级前的配置「2022-11-02 10:09:52」</h2><div class="language-json line-numbers-mode" data-ext="json"><pre class="language-json"><code><span class="token punctuation">{</span>
  <span class="token property">&quot;name&quot;</span><span class="token operator">:</span> <span class="token string">&quot;bornforthis&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;version&quot;</span><span class="token operator">:</span> <span class="token string">&quot;2.0.0&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;description&quot;</span><span class="token operator">:</span> <span class="token string">&quot;编程1v1,AI悦创,Python,编程一对一,C++,Java,AI,人工智能,黄家宝&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;license&quot;</span><span class="token operator">:</span> <span class="token string">&quot;MIT&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;type&quot;</span><span class="token operator">:</span> <span class="token string">&quot;module&quot;</span><span class="token punctuation">,</span>
  <span class="token property">&quot;scripts&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;docs:build&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress build docs&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;docs:clean-dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress dev docs --clean-cache&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;docs:dev&quot;</span><span class="token operator">:</span> <span class="token string">&quot;vuepress dev docs&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;devDependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;@vuepress/client&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.0.0-beta.51&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;@vuepress/plugin-docsearch&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.0.0-beta.51&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;vue&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^3.2.29&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;vuepress&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.0.0-beta.51&quot;</span><span class="token punctuation">,</span>
    <span class="token property">&quot;vuepress-theme-hope&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^2.0.0-beta.110&quot;</span>
  <span class="token punctuation">}</span><span class="token punctuation">,</span>
  <span class="token property">&quot;dependencies&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
    <span class="token property">&quot;yarn&quot;</span><span class="token operator">:</span> <span class="token string">&quot;^1.22.19&quot;</span>
  <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>yarn.lock.txt</strong></p><p><a href="/website-copy/2022-11-02-10-09-52/yarn.lock.txt">yarn.lock.txt</a></p><ul><li>添加 哔哩哔哩、YouTube 视频播放</li><li>代码块修复</li></ul>`,8),m={id:"添加网站更改日志-2022-06-15-21-01-21",tabindex:"-1"},h=s("a",{class:"header-anchor",href:"#添加网站更改日志-2022-06-15-21-01-21","aria-hidden":"true"},"#",-1),q=s("h3",{id:"features",tabindex:"-1"},[s("a",{class:"header-anchor",href:"#features","aria-hidden":"true"},"#"),n(" Features")],-1),b={href:"http://Changelog.md",target:"_blank",rel:"noopener noreferrer"},g=s("li",null,"MD 播放视频",-1),_=s("li",null,"视频播放代码，不适合放进博客首页摘要，容易出现报错！",-1),f=o(`<details class="custom-container details"><summary>代码</summary><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>iframe</span> 
<span class="token attr-name">src</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>https://v.xiaohongshu.com/01e284d1cd6bdf230183700380d6d6fda0_259.mp4?sign=2a88f9e24468c75ffb69817190a64f29&amp;t=62ab5380<span class="token punctuation">&quot;</span></span> 
<span class="token attr-name">scrolling</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>no<span class="token punctuation">&quot;</span></span> 
<span class="token attr-name">border</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0<span class="token punctuation">&quot;</span></span> 
<span class="token attr-name">frameborder</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>no<span class="token punctuation">&quot;</span></span> 
<span class="token attr-name">framespacing</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>0<span class="token punctuation">&quot;</span></span> 
<span class="token attr-name">allowfullscreen</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>true<span class="token punctuation">&quot;</span></span> 
<span class="token attr-name">height</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>600</span> 
<span class="token attr-name">width</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span>800</span><span class="token punctuation">&gt;</span></span> 
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>iframe</span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h3 id="bug-fixes" tabindex="-1"><a class="header-anchor" href="#bug-fixes" aria-hidden="true">#</a> Bug Fixes</h3><ul><li>无</li></ul><p>欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！</p><details class="custom-container details"><summary>公众号：AI悦创【二维码】</summary><p><img src="`+l+'" alt="" loading="lazy"></p></details>',5),y={class:"custom-container info"},x=s("p",{class:"custom-container-title"},"AI悦创·编程一对一",-1),I=s("p",null,"AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh",-1),A=s("p",null,"C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh",-1),C={href:"http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes",target:"_blank",rel:"noopener noreferrer"},w=s("p",null,"方法二：微信：Jiabcdefh",-1),j=s("p",null,[s("img",{src:c,alt:"",loading:"lazy"})],-1);function B(J,L){const p=e("RouterLink"),t=e("ExternalLinkIcon");return i(),r("div",null,[v,s("h2",m,[h,n(),a(p,{to:"/changelog.html"},{default:d(()=>[n("添加网站更改日志")]),_:1}),n(" (2022-06-15 21:01:21)")]),q,s("ul",null,[s("li",null,[n("Add "),s("a",b,[n("Changelog.md"),a(t)])]),g,_]),f,s("div",y,[x,I,A,s("p",null,[n("方法一："),s("a",C,[n("QQ"),a(t)])]),w]),j])}const E=u(k,[["render",B],["__file","changelog.html.vue"]]);export{E as default};
