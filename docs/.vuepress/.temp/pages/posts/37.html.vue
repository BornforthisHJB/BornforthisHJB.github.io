<template><div><h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Grade</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> letter<span class="token punctuation">,</span> mark<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>letter <span class="token operator">=</span> letter
        self<span class="token punctuation">.</span>mark <span class="token operator">=</span> mark

studentMarks <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">'Ann'</span><span class="token punctuation">:</span> Grade<span class="token punctuation">(</span><span class="token string">'B'</span><span class="token punctuation">,</span> <span class="token number">65</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">'Bo'</span><span class="token punctuation">:</span> Grade<span class="token punctuation">(</span><span class="token string">'A'</span><span class="token punctuation">,</span> <span class="token number">70</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">'Cam'</span><span class="token punctuation">:</span>Grade<span class="token punctuation">(</span><span class="token string">'C'</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">'Dee'</span><span class="token punctuation">:</span> Grade<span class="token punctuation">(</span><span class="token string">'B'</span><span class="token punctuation">,</span> <span class="token number">62</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题：</h2>
<ol>
<li>找出学生中的最高分是谁？</li>
<li>找出学生们的平均分？</li>
<li>超出 ABCDF 出现的频率？</li>
</ol>
<h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案" aria-hidden="true">#</a> 答案</h2>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Grade</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> letter<span class="token punctuation">,</span> mark<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">"""
        first:存自己本身的数据
        rest:存下一个节点，也就下一个节点是谁
        """</span>
        self<span class="token punctuation">.</span>letter <span class="token operator">=</span> letter
        self<span class="token punctuation">.</span>mark <span class="token operator">=</span> mark
        self<span class="token punctuation">.</span>rest <span class="token operator">=</span> <span class="token boolean">None</span>
    
    <span class="token keyword">def</span> <span class="token function">size</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">"""获取链表长度"""</span>
        <span class="token keyword">if</span> self<span class="token punctuation">.</span>rest <span class="token keyword">is</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token number">1</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token number">1</span> <span class="token operator">+</span> self<span class="token punctuation">.</span>rest<span class="token punctuation">.</span>size<span class="token punctuation">(</span><span class="token punctuation">)</span>
    
    <span class="token keyword">def</span> <span class="token function">max_value</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">"""寻找最大值"""</span>
        <span class="token triple-quoted-string string">"""成功successful"""</span>
        p <span class="token operator">=</span> self
        max_value <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">while</span> p <span class="token keyword">is</span> <span class="token keyword">not</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
            <span class="token keyword">if</span> max_value <span class="token operator">&lt;</span> p<span class="token punctuation">.</span>mark<span class="token punctuation">:</span>
                max_value <span class="token operator">=</span> p<span class="token punctuation">.</span>mark
            p <span class="token operator">=</span> p<span class="token punctuation">.</span>rest
        <span class="token keyword">return</span> max_value
        <span class="token triple-quoted-string string">"""successful"""</span>
        
        <span class="token comment"># max_value = self.mark</span>
        <span class="token comment"># max_value = self.mark</span>
        <span class="token comment"># if self.rest is None:</span>
        <span class="token comment">#     if self.mark > max_value:</span>
        <span class="token comment">#         max_value = self.mark</span>
        <span class="token comment">#         return max_value</span>
        <span class="token comment"># elif max_value &lt; self.rest.mark:</span>
        <span class="token comment">#     max_value = self.rest.mark</span>
        <span class="token comment">#     return self.rest.max_value(max_value)</span>
        <span class="token comment"># else:</span>
        <span class="token comment">#     return self.rest.max_value(max_value)</span>
    
    <span class="token keyword">def</span> <span class="token function">average</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> total_num<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">"""平均数"""</span>
        p <span class="token operator">=</span> self
        sum_num <span class="token operator">=</span> <span class="token number">0</span>
        <span class="token keyword">while</span> p <span class="token keyword">is</span> <span class="token keyword">not</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
            sum_num <span class="token operator">+=</span> p<span class="token punctuation">.</span>mark
            p <span class="token operator">=</span> p<span class="token punctuation">.</span>rest
        <span class="token keyword">return</span> sum_num <span class="token operator">/</span> total_num
    
    <span class="token keyword">def</span> <span class="token function">frequency</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        p <span class="token operator">=</span> self
        letter_dict <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
        <span class="token keyword">while</span> p <span class="token keyword">is</span> <span class="token keyword">not</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
            <span class="token keyword">if</span> p<span class="token punctuation">.</span>letter <span class="token keyword">in</span> letter_dict<span class="token punctuation">:</span>
                letter_dict<span class="token punctuation">[</span>p<span class="token punctuation">.</span>letter<span class="token punctuation">]</span> <span class="token operator">+=</span> <span class="token number">1</span>
            <span class="token keyword">else</span><span class="token punctuation">:</span>
                letter_dict<span class="token punctuation">[</span>p<span class="token punctuation">.</span>letter<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>
            p <span class="token operator">=</span> p<span class="token punctuation">.</span>rest
        <span class="token keyword">return</span> letter_dict
        
studentMarks <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">'Ann'</span><span class="token punctuation">:</span> Grade<span class="token punctuation">(</span><span class="token string">'B'</span><span class="token punctuation">,</span> <span class="token number">65</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string">'Bo'</span><span class="token punctuation">:</span> Grade<span class="token punctuation">(</span><span class="token string">'A'</span><span class="token punctuation">,</span> <span class="token number">70</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string">'Cam'</span><span class="token punctuation">:</span> Grade<span class="token punctuation">(</span><span class="token string">'C'</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string">'Dee'</span><span class="token punctuation">:</span> Grade<span class="token punctuation">(</span><span class="token string">'B'</span><span class="token punctuation">,</span> <span class="token number">62</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment"># studentMarks["Ann"].rest = studentMarks["Bo"]</span>
<span class="token comment"># studentMarks["Bo"].rest = studentMarks["Cam"]</span>
<span class="token comment"># studentMarks["Cam"].rest = studentMarks["Dee"]</span>
<span class="token comment"># print(studentMarks["Cam"].size())</span>
l1 <span class="token operator">=</span> studentMarks<span class="token punctuation">[</span><span class="token string">"Ann"</span><span class="token punctuation">]</span>
l2 <span class="token operator">=</span> studentMarks<span class="token punctuation">[</span><span class="token string">"Bo"</span><span class="token punctuation">]</span>
l3 <span class="token operator">=</span> studentMarks<span class="token punctuation">[</span><span class="token string">"Cam"</span><span class="token punctuation">]</span>
l4 <span class="token operator">=</span> studentMarks<span class="token punctuation">[</span><span class="token string">"Dee"</span><span class="token punctuation">]</span>
l1<span class="token punctuation">.</span>rest <span class="token operator">=</span> l2
l2<span class="token punctuation">.</span>rest <span class="token operator">=</span> l3
l3<span class="token punctuation">.</span>rest <span class="token operator">=</span> l4
<span class="token keyword">print</span><span class="token punctuation">(</span>l1<span class="token punctuation">.</span>size<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>l1<span class="token punctuation">.</span>max_value<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>l1<span class="token punctuation">.</span>average<span class="token punctuation">(</span>l1<span class="token punctuation">.</span>size<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>l1<span class="token punctuation">.</span>frequency<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"l1:>>>"</span><span class="token punctuation">,</span> l1<span class="token punctuation">.</span>mark<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"l2:>>>"</span><span class="token punctuation">,</span> l1<span class="token punctuation">.</span>rest<span class="token punctuation">.</span>mark<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"l3:>>>"</span><span class="token punctuation">,</span> l1<span class="token punctuation">.</span>rest<span class="token punctuation">.</span>rest<span class="token punctuation">.</span>mark<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">"l4:>>>"</span><span class="token punctuation">,</span> l1<span class="token punctuation">.</span>rest<span class="token punctuation">.</span>rest<span class="token punctuation">.</span>rest<span class="token punctuation">.</span>mark<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="上课代码" tabindex="-1"><a class="header-anchor" href="#上课代码" aria-hidden="true">#</a> 上课代码</h2>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Grade</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> letter<span class="token punctuation">,</span> mark<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>letter <span class="token operator">=</span> letter
        self<span class="token punctuation">.</span>mark <span class="token operator">=</span> mark
        self<span class="token punctuation">.</span>rest <span class="token operator">=</span> <span class="token boolean">None</span>
    
    <span class="token keyword">def</span> <span class="token function">size</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> self<span class="token punctuation">.</span>rest <span class="token keyword">is</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token number">1</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token number">1</span> <span class="token operator">+</span> self<span class="token punctuation">.</span>rest<span class="token punctuation">.</span>size<span class="token punctuation">(</span><span class="token punctuation">)</span>
    
    <span class="token keyword">def</span> <span class="token function">max_value</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        p <span class="token operator">=</span> self
        <span class="token comment"># p.mark == self.mark</span>
        max_value <span class="token operator">=</span> <span class="token number">0</span>
        <span class="token keyword">while</span> p <span class="token keyword">is</span> <span class="token keyword">not</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
            <span class="token keyword">if</span> max_value <span class="token operator">&lt;</span> p<span class="token punctuation">.</span>mark<span class="token punctuation">:</span>  <span class="token comment"># p.rest.mark >>> self.rest.mark</span>
                max_value <span class="token operator">=</span> p<span class="token punctuation">.</span>mark
            <span class="token comment"># p.rest.mark</span>
            p <span class="token operator">=</span> p<span class="token punctuation">.</span>rest
        <span class="token keyword">return</span> max_value
    
    <span class="token keyword">def</span> <span class="token function">average</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> total_num<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">"""平均数"""</span>
        p <span class="token operator">=</span> self
        sum_num <span class="token operator">=</span> <span class="token number">0</span>
        <span class="token keyword">while</span> p <span class="token keyword">is</span> <span class="token keyword">not</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
            sum_num <span class="token operator">+=</span> p<span class="token punctuation">.</span>mark
            p <span class="token operator">=</span> p<span class="token punctuation">.</span>rest
        <span class="token keyword">return</span> sum_num <span class="token operator">/</span> total_num
    
    <span class="token keyword">def</span> <span class="token function">frequency</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        p <span class="token operator">=</span> self
        letter_frequency <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token punctuation">}</span>
        <span class="token keyword">while</span> p <span class="token keyword">is</span> <span class="token keyword">not</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
            <span class="token keyword">if</span> p<span class="token punctuation">.</span>letter <span class="token keyword">in</span> letter_frequency<span class="token punctuation">:</span>
                letter_frequency<span class="token punctuation">[</span>p<span class="token punctuation">.</span>letter<span class="token punctuation">]</span> <span class="token operator">+=</span> <span class="token number">1</span>
            <span class="token keyword">else</span><span class="token punctuation">:</span>
                letter_frequency<span class="token punctuation">[</span>p<span class="token punctuation">.</span>letter<span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">1</span>
        <span class="token keyword">return</span> letter_frequency


studentMarks <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">'Ann'</span><span class="token punctuation">:</span> Grade<span class="token punctuation">(</span><span class="token string">'B'</span><span class="token punctuation">,</span> <span class="token number">65</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string">'Bo'</span><span class="token punctuation">:</span> Grade<span class="token punctuation">(</span><span class="token string">'A'</span><span class="token punctuation">,</span> <span class="token number">70</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string">'Cam'</span><span class="token punctuation">:</span> Grade<span class="token punctuation">(</span><span class="token string">'C'</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string">'Dee'</span><span class="token punctuation">:</span> Grade<span class="token punctuation">(</span><span class="token string">'B'</span><span class="token punctuation">,</span> <span class="token number">62</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment"># 链表</span>
l1 <span class="token operator">=</span> studentMarks<span class="token punctuation">[</span><span class="token string">"Ann"</span><span class="token punctuation">]</span>
l2 <span class="token operator">=</span> studentMarks<span class="token punctuation">[</span><span class="token string">"Bo"</span><span class="token punctuation">]</span>
l3 <span class="token operator">=</span> studentMarks<span class="token punctuation">[</span><span class="token string">"Cam"</span><span class="token punctuation">]</span>
l4 <span class="token operator">=</span> studentMarks<span class="token punctuation">[</span><span class="token string">"Dee"</span><span class="token punctuation">]</span>
l1<span class="token punctuation">.</span>rest <span class="token operator">=</span> l2
l2<span class="token punctuation">.</span>rest <span class="token operator">=</span> l3
l3<span class="token punctuation">.</span>rest <span class="token operator">=</span> l4
<span class="token keyword">print</span><span class="token punctuation">(</span>l1<span class="token punctuation">.</span>size<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>l1<span class="token punctuation">.</span>max_value<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！</p>
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


