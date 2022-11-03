import{_ as e}from"./gzh.b03adfd2.js";import{_ as t}from"./zsxq.77f6dc86.js";import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as l,a as n,d as s,b as c,e as i,r}from"./app.9d9d7371.js";const u={},d=i(`<p>你好，我是悦创。</p><ol><li>return 语句用于退出函数，向调用方返回一个表达式。执行到 return 语句时，会退出函数，return 之后的语句不再执行。如：</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">my_print</span><span class="token punctuation">(</span>x<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> x <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token boolean">False</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;i am xiaotao&#39;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token boolean">True</span>


a <span class="token operator">=</span> my_print<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>   <span class="token comment"># 满足if，执行return False，不再执行之后的语句，跳出函数。</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>a<span class="token punctuation">)</span>

<span class="token comment"># 输出：False</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>将 return 语句放在 try 语句块中，return 之后的语句还要执行</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">fun</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">98</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token string">&#39;ok&#39;</span>  <span class="token comment"># 执行到该return语句时，函数终止，后边的语句不再执行</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">98</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">try</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">98</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> <span class="token string">&#39;ok&#39;</span>  <span class="token comment"># 函数得到了一个返回值</span>
    <span class="token keyword">finally</span><span class="token punctuation">:</span>  <span class="token comment"># finally语句块中的语句依然会执行</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token number">98</span><span class="token punctuation">)</span>


<span class="token keyword">print</span><span class="token punctuation">(</span>fun<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;----------&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>func<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># 输出：</span>
<span class="token number">98</span>
ok
<span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span><span class="token operator">-</span>
<span class="token number">98</span>
<span class="token number">98</span>
ok
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>return 在不带参数的情况下（或者没有写 return 语句），默认返回 None。</li></ol><p>欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！</p><details class="custom-container details"><summary>公众号：AI悦创【二维码】</summary><p><img src="`+e+'" alt=""></p></details>',8),k={class:"custom-container info"},m=n("p",{class:"custom-container-title"},"AI悦创·编程一对一",-1),v=n("p",null,"AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh",-1),b=n("p",null,"C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh",-1),_={href:"http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes",target:"_blank",rel:"noopener noreferrer"},y=n("p",null,"方法二：微信：Jiabcdefh",-1),f=n("p",null,[n("img",{src:t,alt:""})],-1);function h(w,g){const a=r("ExternalLinkIcon");return o(),l("div",null,[d,n("div",k,[m,v,b,n("p",null,[s("方法一："),n("a",_,[s("QQ"),c(a)])]),y]),f])}const A=p(u,[["render",h],["__file","19.html.vue"]]);export{A as default};
