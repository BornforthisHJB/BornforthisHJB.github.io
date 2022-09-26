<template><div><p><strong>统计书本的平均评分</strong></p>
<ol>
<li>读取文件 rating.txt 中的的数据并分析</li>
</ol>
<ul>
<li>共有 10000 本书，以数字 id 表示</li>
<li>每个用户的打分为1~5</li>
<li>每一行数据有 3 个数字：分别表示用户 ID，书本 ID，该用户对该书的打分</li>
</ul>
<p><strong>要求输出： 所有书本各自的平均得分</strong> 数据集链接：<a href="https://www.bornforthis.cn/data-analysis-data-set" target="_blank" rel="noopener noreferrer">https://www.bornforthis.cn/data-analysis-data-set<ExternalLinkIcon/></a> 请将你的代码，在下方留言。 题目解析已经答案，请自行购买： <a href="https://www.yuque.com/aiyuechuang/fisb2l/fus7c5" target="_blank" rel="noopener noreferrer">https://www.yuque.com/aiyuechuang/fisb2l/fus7c5<ExternalLinkIcon/></a> <strong>作业解析</strong> 文件较大，没必要在测试的时候每次读取全部数据，我们可以创建个数据副本，数据少一些。</p>
<ol>
<li>读取数据并转换为整数</li>
</ol>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np

data <span class="token operator">=</span> np<span class="token punctuation">.</span>genfromtxt<span class="token punctuation">(</span><span class="token string">'rating.txt'</span><span class="token punctuation">,</span> delimiter<span class="token operator">=</span><span class="token string">','</span><span class="token punctuation">)</span>
data <span class="token operator">=</span> data<span class="token punctuation">.</span>astype<span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>data<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2">
<li>创建两个数组分别存放各个书籍的总评分和总评分人数</li>
</ol>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>rating_sum <span class="token operator">=</span> np<span class="token punctuation">.</span>zeros<span class="token punctuation">(</span><span class="token number">10000</span><span class="token punctuation">)</span>
rating_people_count <span class="token operator">=</span> np<span class="token punctuation">.</span>zeros<span class="token punctuation">(</span><span class="token number">10000</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3">
<li>For 循环读取每行的数据</li>
</ol>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">for</span> rating <span class="token keyword">in</span> data<span class="token punctuation">:</span>
    book_id <span class="token operator">=</span> rating<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">-</span> <span class="token number">1</span>
    rating_sum<span class="token punctuation">[</span>book_id<span class="token punctuation">]</span> <span class="token operator">+=</span> rating<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>
    rating_people_count<span class="token punctuation">[</span>book_id<span class="token punctuation">]</span> <span class="token operator">+=</span> <span class="token number">1</span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>第一列是用户的 ID 其实对于我们这道题目来说没什么用，所以我们不需要去管它。 这里我 <code v-pre>rating[1] - 1</code> 是为什么减去 1 呢？ 同学们应该是知道的，编程中和数组的索引都是从 0 开始的，所以 减 1 就是为了可以直接使用书本的 ID 进行索引。</p>
<ol start="4">
<li>完整代码</li>
</ol>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">import</span> numpy <span class="token keyword">as</span> np

data <span class="token operator">=</span> np<span class="token punctuation">.</span>genfromtxt<span class="token punctuation">(</span><span class="token string">'rating.txt'</span><span class="token punctuation">,</span> delimiter<span class="token operator">=</span><span class="token string">','</span><span class="token punctuation">)</span>
data <span class="token operator">=</span> data<span class="token punctuation">.</span>astype<span class="token punctuation">(</span><span class="token builtin">int</span><span class="token punctuation">)</span>
<span class="token comment"># print(data)</span>

rating_sum <span class="token operator">=</span> np<span class="token punctuation">.</span>zeros<span class="token punctuation">(</span><span class="token number">10000</span><span class="token punctuation">)</span>
rating_people_count <span class="token operator">=</span> np<span class="token punctuation">.</span>zeros<span class="token punctuation">(</span><span class="token number">10000</span><span class="token punctuation">)</span>

<span class="token keyword">for</span> rating <span class="token keyword">in</span> data<span class="token punctuation">:</span>
    book_id <span class="token operator">=</span> rating<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">-</span> <span class="token number">1</span>
    rating_sum<span class="token punctuation">[</span>book_id<span class="token punctuation">]</span> <span class="token operator">+=</span> rating<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span>
    rating_people_count<span class="token punctuation">[</span>book_id<span class="token punctuation">]</span> <span class="token operator">+=</span> <span class="token number">1</span>

<span class="token comment"># 计算方法一：</span>
result <span class="token operator">=</span> rating_sum <span class="token operator">/</span> rating_people_count
<span class="token keyword">print</span><span class="token punctuation">(</span>result<span class="token punctuation">)</span>
<span class="token comment"># 计算方法二：</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>np<span class="token punctuation">.</span>true_divide<span class="token punctuation">(</span>rating_sum<span class="token punctuation">,</span> rating_people_count<span class="token punctuation">)</span><span class="token punctuation">)</span>

<span class="token comment"># 输出</span>
<span class="token punctuation">[</span><span class="token number">4.27970709</span> <span class="token number">4.35135011</span> <span class="token number">3.21434056</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token number">4.32352941</span> <span class="token number">3.70769231</span> <span class="token number">4.00900901</span><span class="token punctuation">]</span>
<span class="token punctuation">[</span><span class="token number">4.27970709</span> <span class="token number">4.35135011</span> <span class="token number">3.21434056</span> <span class="token punctuation">.</span><span class="token punctuation">.</span><span class="token punctuation">.</span> <span class="token number">4.32352941</span> <span class="token number">3.70769231</span> <span class="token number">4.00900901</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！</p>
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


