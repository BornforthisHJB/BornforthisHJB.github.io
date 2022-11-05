import{_ as t}from"./gzh.b03adfd2.js";import{_ as e}from"./zsxq.77f6dc86.js";import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as l,a as n,d as s,b as c,e as i,r as u}from"./app.d10d96c9.js";const r={},k=i(`<h2 id="题目" tabindex="-1"><a class="header-anchor" href="#题目" aria-hidden="true">#</a> 题目</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Grade</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> letter<span class="token punctuation">,</span> mark<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>letter <span class="token operator">=</span> letter
        self<span class="token punctuation">.</span>mark <span class="token operator">=</span> mark

studentMarks <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&#39;Ann&#39;</span><span class="token punctuation">:</span> Grade<span class="token punctuation">(</span><span class="token string">&#39;B&#39;</span><span class="token punctuation">,</span> <span class="token number">65</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;Bo&#39;</span><span class="token punctuation">:</span> Grade<span class="token punctuation">(</span><span class="token string">&#39;A&#39;</span><span class="token punctuation">,</span> <span class="token number">70</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;Cam&#39;</span><span class="token punctuation">:</span>Grade<span class="token punctuation">(</span><span class="token string">&#39;C&#39;</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&#39;Dee&#39;</span><span class="token punctuation">:</span> Grade<span class="token punctuation">(</span><span class="token string">&#39;B&#39;</span><span class="token punctuation">,</span> <span class="token number">62</span><span class="token punctuation">)</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题：</h2><ol><li>找出学生中的最高分是谁？</li><li>找出学生们的平均分？</li><li>超出 ABCDF 出现的频率？</li></ol><h2 id="答案" tabindex="-1"><a class="header-anchor" href="#答案" aria-hidden="true">#</a> 答案</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Grade</span><span class="token punctuation">(</span><span class="token builtin">object</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> letter<span class="token punctuation">,</span> mark<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;
        first:存自己本身的数据
        rest:存下一个节点，也就下一个节点是谁
        &quot;&quot;&quot;</span>
        self<span class="token punctuation">.</span>letter <span class="token operator">=</span> letter
        self<span class="token punctuation">.</span>mark <span class="token operator">=</span> mark
        self<span class="token punctuation">.</span>rest <span class="token operator">=</span> <span class="token boolean">None</span>
    
    <span class="token keyword">def</span> <span class="token function">size</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;获取链表长度&quot;&quot;&quot;</span>
        <span class="token keyword">if</span> self<span class="token punctuation">.</span>rest <span class="token keyword">is</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token number">1</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            <span class="token keyword">return</span> <span class="token number">1</span> <span class="token operator">+</span> self<span class="token punctuation">.</span>rest<span class="token punctuation">.</span>size<span class="token punctuation">(</span><span class="token punctuation">)</span>
    
    <span class="token keyword">def</span> <span class="token function">max_value</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;寻找最大值&quot;&quot;&quot;</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;成功successful&quot;&quot;&quot;</span>
        p <span class="token operator">=</span> self
        max_value <span class="token operator">=</span> <span class="token builtin">int</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
        <span class="token keyword">while</span> p <span class="token keyword">is</span> <span class="token keyword">not</span> <span class="token boolean">None</span><span class="token punctuation">:</span>
            <span class="token keyword">if</span> max_value <span class="token operator">&lt;</span> p<span class="token punctuation">.</span>mark<span class="token punctuation">:</span>
                max_value <span class="token operator">=</span> p<span class="token punctuation">.</span>mark
            p <span class="token operator">=</span> p<span class="token punctuation">.</span>rest
        <span class="token keyword">return</span> max_value
        <span class="token triple-quoted-string string">&quot;&quot;&quot;successful&quot;&quot;&quot;</span>
        
        <span class="token comment"># max_value = self.mark</span>
        <span class="token comment"># max_value = self.mark</span>
        <span class="token comment"># if self.rest is None:</span>
        <span class="token comment">#     if self.mark &gt; max_value:</span>
        <span class="token comment">#         max_value = self.mark</span>
        <span class="token comment">#         return max_value</span>
        <span class="token comment"># elif max_value &lt; self.rest.mark:</span>
        <span class="token comment">#     max_value = self.rest.mark</span>
        <span class="token comment">#     return self.rest.max_value(max_value)</span>
        <span class="token comment"># else:</span>
        <span class="token comment">#     return self.rest.max_value(max_value)</span>
    
    <span class="token keyword">def</span> <span class="token function">average</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> total_num<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;平均数&quot;&quot;&quot;</span>
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
    <span class="token string">&#39;Ann&#39;</span><span class="token punctuation">:</span> Grade<span class="token punctuation">(</span><span class="token string">&#39;B&#39;</span><span class="token punctuation">,</span> <span class="token number">65</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string">&#39;Bo&#39;</span><span class="token punctuation">:</span> Grade<span class="token punctuation">(</span><span class="token string">&#39;A&#39;</span><span class="token punctuation">,</span> <span class="token number">70</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string">&#39;Cam&#39;</span><span class="token punctuation">:</span> Grade<span class="token punctuation">(</span><span class="token string">&#39;C&#39;</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string">&#39;Dee&#39;</span><span class="token punctuation">:</span> Grade<span class="token punctuation">(</span><span class="token string">&#39;B&#39;</span><span class="token punctuation">,</span> <span class="token number">62</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment"># studentMarks[&quot;Ann&quot;].rest = studentMarks[&quot;Bo&quot;]</span>
<span class="token comment"># studentMarks[&quot;Bo&quot;].rest = studentMarks[&quot;Cam&quot;]</span>
<span class="token comment"># studentMarks[&quot;Cam&quot;].rest = studentMarks[&quot;Dee&quot;]</span>
<span class="token comment"># print(studentMarks[&quot;Cam&quot;].size())</span>
l1 <span class="token operator">=</span> studentMarks<span class="token punctuation">[</span><span class="token string">&quot;Ann&quot;</span><span class="token punctuation">]</span>
l2 <span class="token operator">=</span> studentMarks<span class="token punctuation">[</span><span class="token string">&quot;Bo&quot;</span><span class="token punctuation">]</span>
l3 <span class="token operator">=</span> studentMarks<span class="token punctuation">[</span><span class="token string">&quot;Cam&quot;</span><span class="token punctuation">]</span>
l4 <span class="token operator">=</span> studentMarks<span class="token punctuation">[</span><span class="token string">&quot;Dee&quot;</span><span class="token punctuation">]</span>
l1<span class="token punctuation">.</span>rest <span class="token operator">=</span> l2
l2<span class="token punctuation">.</span>rest <span class="token operator">=</span> l3
l3<span class="token punctuation">.</span>rest <span class="token operator">=</span> l4
<span class="token keyword">print</span><span class="token punctuation">(</span>l1<span class="token punctuation">.</span>size<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>l1<span class="token punctuation">.</span>max_value<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>l1<span class="token punctuation">.</span>average<span class="token punctuation">(</span>l1<span class="token punctuation">.</span>size<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>l1<span class="token punctuation">.</span>frequency<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;l1:&gt;&gt;&gt;&quot;</span><span class="token punctuation">,</span> l1<span class="token punctuation">.</span>mark<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;l2:&gt;&gt;&gt;&quot;</span><span class="token punctuation">,</span> l1<span class="token punctuation">.</span>rest<span class="token punctuation">.</span>mark<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;l3:&gt;&gt;&gt;&quot;</span><span class="token punctuation">,</span> l1<span class="token punctuation">.</span>rest<span class="token punctuation">.</span>rest<span class="token punctuation">.</span>mark<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;l4:&gt;&gt;&gt;&quot;</span><span class="token punctuation">,</span> l1<span class="token punctuation">.</span>rest<span class="token punctuation">.</span>rest<span class="token punctuation">.</span>rest<span class="token punctuation">.</span>mark<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="上课代码" tabindex="-1"><a class="header-anchor" href="#上课代码" aria-hidden="true">#</a> 上课代码</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Grade</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
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
            <span class="token keyword">if</span> max_value <span class="token operator">&lt;</span> p<span class="token punctuation">.</span>mark<span class="token punctuation">:</span>  <span class="token comment"># p.rest.mark &gt;&gt;&gt; self.rest.mark</span>
                max_value <span class="token operator">=</span> p<span class="token punctuation">.</span>mark
            <span class="token comment"># p.rest.mark</span>
            p <span class="token operator">=</span> p<span class="token punctuation">.</span>rest
        <span class="token keyword">return</span> max_value
    
    <span class="token keyword">def</span> <span class="token function">average</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> total_num<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token triple-quoted-string string">&quot;&quot;&quot;平均数&quot;&quot;&quot;</span>
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
    <span class="token string">&#39;Ann&#39;</span><span class="token punctuation">:</span> Grade<span class="token punctuation">(</span><span class="token string">&#39;B&#39;</span><span class="token punctuation">,</span> <span class="token number">65</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string">&#39;Bo&#39;</span><span class="token punctuation">:</span> Grade<span class="token punctuation">(</span><span class="token string">&#39;A&#39;</span><span class="token punctuation">,</span> <span class="token number">70</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string">&#39;Cam&#39;</span><span class="token punctuation">:</span> Grade<span class="token punctuation">(</span><span class="token string">&#39;C&#39;</span><span class="token punctuation">,</span> <span class="token number">500</span><span class="token punctuation">)</span><span class="token punctuation">,</span>
    <span class="token string">&#39;Dee&#39;</span><span class="token punctuation">:</span> Grade<span class="token punctuation">(</span><span class="token string">&#39;B&#39;</span><span class="token punctuation">,</span> <span class="token number">62</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
<span class="token comment"># 链表</span>
l1 <span class="token operator">=</span> studentMarks<span class="token punctuation">[</span><span class="token string">&quot;Ann&quot;</span><span class="token punctuation">]</span>
l2 <span class="token operator">=</span> studentMarks<span class="token punctuation">[</span><span class="token string">&quot;Bo&quot;</span><span class="token punctuation">]</span>
l3 <span class="token operator">=</span> studentMarks<span class="token punctuation">[</span><span class="token string">&quot;Cam&quot;</span><span class="token punctuation">]</span>
l4 <span class="token operator">=</span> studentMarks<span class="token punctuation">[</span><span class="token string">&quot;Dee&quot;</span><span class="token punctuation">]</span>
l1<span class="token punctuation">.</span>rest <span class="token operator">=</span> l2
l2<span class="token punctuation">.</span>rest <span class="token operator">=</span> l3
l3<span class="token punctuation">.</span>rest <span class="token operator">=</span> l4
<span class="token keyword">print</span><span class="token punctuation">(</span>l1<span class="token punctuation">.</span>size<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>l1<span class="token punctuation">.</span>max_value<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！</p><details class="custom-container details"><summary>公众号：AI悦创【二维码】</summary><p><img src="`+t+'" alt=""></p></details>',10),d={class:"custom-container info"},v=n("p",{class:"custom-container-title"},"AI悦创·编程一对一",-1),m=n("p",null,"AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh",-1),b=n("p",null,"C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh",-1),f={href:"http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes",target:"_blank",rel:"noopener noreferrer"},q=n("p",null,"方法二：微信：Jiabcdefh",-1),_=n("p",null,[n("img",{src:e,alt:""})],-1);function y(g,w){const a=u("ExternalLinkIcon");return o(),l("div",null,[k,n("div",d,[v,m,b,n("p",null,[s("方法一："),n("a",f,[s("QQ"),c(a)])]),q]),_])}const C=p(r,[["render",y],["__file","37.html.vue"]]);export{C as default};
