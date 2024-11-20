import{_ as a}from"./gzh-DnOBNg6W.js";import{_ as n}from"./zsxq-BcdwOI-_.js";import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,a as l,o as t}from"./app-BFJczFUY.js";const p="/assets/8282b828127dcf109d25ae72219317b0-CMHh7Wa3.png",o="/assets/1b4dc9309318478954e33f324d38d03d-C_i6mHaQ.png",r={};function c(d,s){return t(),i("div",null,s[0]||(s[0]=[l(`<ol><li>此题无需在线作答，请在纸上作答后查看答案解析 while 循环，只要 while 后面的条件为_____时才能不断循环，条件不满足时退出循环。</li></ol><div class="hint-container tip"><p class="hint-container-title">答案解析</p><p>正确答案：真/True 记忆性知识点</p></div><ol start="2"><li>此题无需在线作答，请在纸上作答后查看答案解析 （拓展）在循环语句中，_______语句的作用是提前进入下一次循环。</li></ol><div class="hint-container tip"><p class="hint-container-title">答案解析</p><p>正确答案：continue 记忆性知识点</p></div><ol start="3"><li><p>若 k 为整型，下述 while 循环一共执行______次后，输出数值为_____。</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F8F8F2;">k </span><span style="color:#F92672;">=</span><span style="color:#AE81FF;"> 1000</span></span>
<span class="line"><span style="color:#F92672;">while</span><span style="color:#F8F8F2;"> k </span><span style="color:#F92672;">&gt;</span><span style="color:#AE81FF;">1</span><span style="color:#F8F8F2;">:</span></span>
<span class="line"><span style="color:#F8F8F2;">    k </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> k</span><span style="color:#F92672;">/</span><span style="color:#AE81FF;">2</span></span>
<span class="line"></span>
<span class="line"><span style="color:#66D9EF;">print</span><span style="color:#F8F8F2;">(k)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>A. 10 1.953</p><p>B. 10 0.9765625</p><p>C. 11 0.9765625</p><p>D. 11 1.953</p></li></ol><div class="hint-container tip"><p class="hint-container-title">答案解析</p><p>正确答案：B</p><p>易错项：C</p><p>一共执行了 10 次循环，k 依次变化为 1000，500.0，250.0，125.0，62.5，31.25，15.625，7.8125，3.90625，1.953125，0.9765625。</p><p>最后一次执行完循环，k 已小于 1，,即不满足循环条件，跳出循环。输出数值为最后一次执行 <code>k=k/2</code> 之后的k值，即 <code>k=0.9765625</code> 。</p></div><ol start="4"><li><p>有代码如下，请判断最后一个输出的数字是_____。</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F8F8F2;">n </span><span style="color:#F92672;">=</span><span style="color:#AE81FF;"> 1</span></span>
<span class="line"><span style="color:#F92672;">while</span><span style="color:#F8F8F2;"> n </span><span style="color:#F92672;">&lt;=</span><span style="color:#AE81FF;"> 100</span><span style="color:#F8F8F2;"> :</span></span>
<span class="line"><span style="color:#F92672;">    if</span><span style="color:#F8F8F2;"> n </span><span style="color:#F92672;">&gt;</span><span style="color:#AE81FF;"> 10</span><span style="color:#F8F8F2;"> :</span></span>
<span class="line"><span style="color:#F92672;">        break</span></span>
<span class="line"><span style="color:#66D9EF;">    print</span><span style="color:#F8F8F2;">(n)</span></span>
<span class="line"><span style="color:#F8F8F2;">    n </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> n</span><span style="color:#F92672;">+</span><span style="color:#AE81FF;">1</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>A. 100</p><p>B. 10</p><p>C. 11</p><p>D. 99</p></li></ol><div class="hint-container tip"><p class="hint-container-title">答案解析</p><p>正确答案：B</p><p>易错项：C while 循环条件是在 <code>1-100</code> 之内进行循环，并在大于 10 时在 break 处跳出整个循环，即当 <code>n=1</code> 1时满足跳出整个循环的条件，即停止循环。</p></div><ol start="5"><li><p>用 Python 编程，假设一年期定期利率为 <code>3.25%</code> ，计算一下需要过多少年，一万元的一年定期存款连本带息能翻番？</p><figure><img src="`+p+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure></li><li><p>（拓展）使用 while 循环将列表内的奇数和偶数分开</p></li></ol><figure><img src="'+o+'" alt="img" tabindex="0" loading="lazy"><figcaption>img</figcaption></figure><p>欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！</p><details class="hint-container details"><summary>公众号：AI悦创【二维码】</summary><figure><img src="'+a+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></details><div class="hint-container info"><p class="hint-container-title">AI悦创·编程一对一</p><p>AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh</p><p>C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh</p><p>方法一：<a href="http://wpa.qq.com/msgrd?v=3&amp;uin=1432803776&amp;site=qq&amp;menu=yes" target="_blank" rel="noopener noreferrer">QQ</a></p><p>方法二：微信：Jiabcdefh</p></div><figure><img src="'+n+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',14)]))}const u=e(r,[["render",c],["__file","answer6.html.vue"]]),g=JSON.parse('{"path":"/Python/basequestion/answer6.html","title":"06-章节测试六答案","lang":"zh-CN","frontmatter":{"title":"06-章节测试六答案","date":"2022-08-22T07:14:45.000Z","author":"AI悦创","isOriginal":true,"category":"Python 私教练习题【基础】","tag":["Python 基础练习题"],"icon":"python","sticky":false,"star":false,"article":true,"timeline":true,"image":false,"navbar":true,"sidebarIcon":true,"headerDepth":5,"comment":true,"lastUpdated":true,"editLink":true,"backToTop":true,"toc":true,"feed":false,"seo":false,"head":[]},"headers":[],"git":{"createdTime":1704501196000,"updatedTime":1704501196000,"contributors":[{"name":"AndersonHJB","email":"cleland1432803776@icloud.com","commits":1}]},"readingTime":{"minutes":2.48,"words":744},"filePathRelative":"Python/basequestion/answer6.md","localizedDate":"2022年8月22日","copyright":{"author":"AI悦创"}}');export{u as comp,g as data};
