import{_ as t}from"./gzh.b03adfd2.js";import{_ as s}from"./zsxq.77f6dc86.js";import{_ as a}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as r,c as i,a as e,d as o,b as l,e as d,r as c}from"./app.b0eae2c5.js";const p={},m=d(`<p>For some reason, I can&#39;t use the <code>Tkinter</code> or <code>tkinter</code> module. After running the following command in the python shell</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> Tkinter
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>or</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> tkinter
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>I got this error</p><blockquote><p>ModuleNotFoundError: No module named &#39;Tkinter&#39;</p></blockquote><p>or</p><blockquote><p>ModuleNotFoundError: No module named &#39;tkinter&#39;</p></blockquote><p>What could be the reason for and how can we solve it?</p><p>If you&#39;re using python 3.9 on Mac, you can simply install <code>tkinter</code> using brew:</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>brew install python<span class="token operator">-</span>tk@<span class="token number">3.9</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>This fixed it for me.</p><p>Edit: As mentioned by others, you can also use the general command to install the latest version:</p><div class="language-bash line-numbers-mode" data-ext="sh"><pre class="language-bash"><code>brew <span class="token function">install</span> python-tk
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！</p><details class="custom-container details"><summary>公众号：AI悦创【二维码】</summary><p><img src="`+t+'" alt="" loading="lazy"></p></details>',16),u={class:"custom-container info"},h=e("p",{class:"custom-container-title"},"AI悦创·编程一对一",-1),_=e("p",null,"AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Linux、」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh",-1),v=e("p",null,"C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh",-1),b={href:"http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes",target:"_blank",rel:"noopener noreferrer"},g=e("p",null,"方法二：微信：Jiabcdefh",-1),k=e("p",null,[e("img",{src:s,alt:"",loading:"lazy"})],-1);function y(f,x){const n=c("ExternalLinkIcon");return r(),i("div",null,[m,e("div",u,[h,_,v,e("p",null,[o("方法一："),e("a",b,[o("QQ"),l(n)])]),g]),k])}const E=a(p,[["render",y],["__file","ImportError-No-module-named-Tkinter.html.vue"]]);export{E as default};
