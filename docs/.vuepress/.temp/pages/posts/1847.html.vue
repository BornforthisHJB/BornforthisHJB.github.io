<template><div><h2 id="简易atm" tabindex="-1"><a class="header-anchor" href="#简易atm" aria-hidden="true">#</a> 简易ATM</h2>
<ol>
<li>如果存钱，就用输入钱数加上先存的钱数之后弹出显示余额的提示框</li>
<li>如果取钱，就减去取的钱数之后弹出显示余额的提示框</li>
<li>如果显示余额，就输出余额</li>
<li>如果退出，弹出退出信息提示框</li>
</ol>
<p>运行效果图👇</p>
<p><img src="@source/posts/47.assets/aeddff074bbe4f5285f056cd034046bc.png" alt="在这里插入图片描述" loading="lazy"></p>
<p><img src="@source/posts/47.assets/33fe9bb8b1444e8188fa7bdab0f5ae7e.png" alt="在这里插入图片描述" loading="lazy"></p>
<p><img src="@source/posts/47.assets/d22f55df10394f34a65746b651d1be4b.png" alt="在这里插入图片描述" loading="lazy"></p>
<p><img src="@source/posts/47.assets/b3bf36369b094dd2b2105a8337a9d598.png" alt="在这里插入图片描述" loading="lazy"></p>
<p><img src="@source/posts/47.assets/b3ab67c85c2548f9adebb241e36933d0.png" alt="在这里插入图片描述" loading="lazy"></p>
<p><img src="@source/posts/47.assets/9f6fa8fed91643469d1f04740ab7a579.png" alt="在这里插入图片描述" loading="lazy"></p>
<p><img src="@source/posts/47.assets/9dc7e273c3ef4c599dd9db7afa0d3f55.png" alt="在这里插入图片描述" loading="lazy"></p>
<p><img src="@source/posts/47.assets/fe49e835cb7c4c7a9377a53b87fe009b.png" alt="在这里插入图片描述" loading="lazy"></p>
<p>有些地方本人做了一些改动，JavaScript 代码如下👇</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script<span class="token operator">></span>
    <span class="token keyword">var</span> op <span class="token operator">=</span> <span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">"请输入您要的操作\n 1.存钱 \n 2.取钱 \n 3.显示余额 \n 4.退出"</span><span class="token punctuation">)</span>
    <span class="token keyword">var</span> money <span class="token operator">=</span> <span class="token number">0</span>
    <span class="token keyword">while</span><span class="token punctuation">(</span>op<span class="token punctuation">)</span>
    <span class="token punctuation">{</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>op <span class="token operator">==</span> <span class="token number">4</span><span class="token punctuation">)</span> 
        <span class="token punctuation">{</span>
            <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"欢迎您使用 ATM 提款机，退出系统"</span><span class="token punctuation">)</span>
            <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>op <span class="token operator">==</span> <span class="token number">1</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">var</span> savemoney <span class="token operator">=</span> <span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">"请输入您要存的金额:"</span><span class="token punctuation">)</span>
            money <span class="token operator">+=</span> <span class="token function">parseFloat</span><span class="token punctuation">(</span>savemoney<span class="token punctuation">)</span>
            <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"您的余额:"</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token function">parseFloat</span><span class="token punctuation">(</span>money<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">" 元"</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>op <span class="token operator">==</span> <span class="token number">2</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
            <span class="token keyword">var</span> getmoney <span class="token operator">=</span> <span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">"请输入您要取出的金额:"</span><span class="token punctuation">)</span>
            <span class="token keyword">if</span><span class="token punctuation">(</span>money <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">)</span>
                <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"您目前的余额:"</span> <span class="token operator">+</span> <span class="token function">parseFloat</span><span class="token punctuation">(</span>money<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">" 元\n"</span> <span class="token operator">+</span>
	        <span class="token string">"您的账户没有余额，无法提款，返回上一步操作"</span><span class="token punctuation">)</span>
            <span class="token keyword">else</span>
            <span class="token punctuation">{</span>
                <span class="token keyword">while</span><span class="token punctuation">(</span>money <span class="token operator">&lt;</span> <span class="token function">parseFloat</span><span class="token punctuation">(</span>getmoney<span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token punctuation">{</span>
	    <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"您的余额不足，请重新输入取款金额:"</span><span class="token punctuation">)</span>
	    getmoney <span class="token operator">=</span> <span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">"请输入您要取出的金额:"</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
	money <span class="token operator">-=</span> <span class="token function">parseFloat</span><span class="token punctuation">(</span>getmoney<span class="token punctuation">)</span><span class="token punctuation">;</span>
	<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"您目前的余额:"</span> <span class="token operator">+</span> <span class="token function">parseFloat</span><span class="token punctuation">(</span>money<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">" 元"</span><span class="token punctuation">)</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">else</span> <span class="token keyword">if</span><span class="token punctuation">(</span>op <span class="token operator">==</span> <span class="token number">3</span><span class="token punctuation">)</span>
        <span class="token punctuation">{</span>
	<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"您的余额："</span> <span class="token operator">+</span> <span class="token punctuation">(</span><span class="token function">parseFloat</span><span class="token punctuation">(</span>money<span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">" 元"</span><span class="token punctuation">)</span>
	console<span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span><span class="token string">"您的余额:"</span> <span class="token operator">+</span> <span class="token function">parseFloat</span><span class="token punctuation">(</span>money<span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">" 元"</span><span class="token punctuation">)</span>
        <span class="token punctuation">}</span>
        <span class="token keyword">if</span><span class="token punctuation">(</span>op <span class="token operator">!=</span> <span class="token number">1</span> <span class="token operator">||</span> op <span class="token operator">!=</span> <span class="token number">2</span> <span class="token operator">||</span> op <span class="token operator">!=</span> <span class="token number">3</span> <span class="token operator">||</span> op <span class="token operator">!=</span> <span class="token number">4</span><span class="token punctuation">)</span>
            <span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"操作不合法，请重新输入您的操作:"</span><span class="token punctuation">)</span>
        op <span class="token operator">=</span> <span class="token function">prompt</span><span class="token punctuation">(</span><span class="token string">"请输入您要的操作\n 1.存钱 \n 2.取钱 \n 3.显示余额 \n 4.退出"</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！</p>
<details class="custom-container details"><summary>公众号：AI悦创【二维码】</summary>
<p><img src="/gzh.jpg" alt="" loading="lazy"></p>
</details>
<div class="custom-container info">
<p class="custom-container-title">AI悦创·编程一对一</p>
<p>AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh</p>
<p>C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh</p>
<p>方法一：<a href="http://wpa.qq.com/msgrd?v=3&amp;uin=1432803776&amp;site=qq&amp;menu=yes" target="_blank" rel="noopener noreferrer">QQ<ExternalLinkIcon/></a></p>
<p>方法二：微信：Jiabcdefh</p>
</div>
<p><img src="/zsxq.jpg" alt="" loading="lazy"></p>
</div></template>


