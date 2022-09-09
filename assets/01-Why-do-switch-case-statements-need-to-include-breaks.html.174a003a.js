import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e as p}from"./app.346bbfec.js";const t={},e=p(`<p>\u5047\u8BBE\u6211\u4EEC\u6709\u5982\u4E0B\u8FD9\u6837\u4E00\u4E2A switch \u8BED\u53E5\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> demo <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> n <span class="token operator">=</span> <span class="token number">1</span><span class="token punctuation">;</span>
        <span class="token keyword">switch</span> <span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">case</span> <span class="token number">1</span><span class="token operator">:</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token number">2</span><span class="token operator">:</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token number">3</span><span class="token operator">:</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
            <span class="token keyword">default</span><span class="token operator">:</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Default&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8F93\u51FA\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token number">1</span>
<span class="token number">2</span>
<span class="token number">3</span>
<span class="token class-name">Default</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5F53\u6211\u4EEC\u5728\u6267\u884C\u4E0A\u9762\u7684\u65B9\u6CD5\u65F6\uFF0C\u5982\u679C\u6211\u4EEC\u4F20\u5165\u7684\u53C2\u6570\u662F 1\uFF0C\u90A3\u4E48\u4F1A\u8F93\u51FA 1\u30012\u30013 \u548C default\uFF0C\u5982\u679C\u4F20\u5165\u7684\u53C2\u6570\u662F 2\uFF0C\u90A3\u4E48\u4F1A\u8F93\u51FA 2\u30013 \u548Cdefault\uFF0C\u8FD9\u662F\u4E3A\u4EC0\u4E48\u5462\uFF1F</p><p>\u8FD9\u662F\u56E0\u4E3A switch \u7684 case \u8BED\u53E5\u662F\u7528\u6765\u6839\u636E\u6EE1\u8DB3\u6761\u4EF6\u4ECE\u786E\u5B9A\u7684\u884C\u5F00\u59CB\u6267\u884C\u7684\uFF0C\u5982\u679C\u4E0D\u52A0\u5165 break \u8BED\u53E5\u8DF3\u51FA switch \u903B\u8F91\uFF0C\u5219\u4F1A\u4E00\u76F4\u5F80\u4E0B\u6267\u884C\uFF0C\u8FD9\u4E5F\u662F\u4E3A\u4EC0\u4E48\u4E0A\u9762\u7684\u6D4B\u8BD5\u4EE3\u7801\u4F1A\u51FA\u73B0\u4F20\u5165\u53C2\u6570\u4E3A 2 \u65F6\u4F1A\u8F93\u51FA 2\u30013 \u548C default\u3002</p><p>\u4E3A\u6B64\uFF0C\u6211\u4EEC\u4E5F\u53EF\u4EE5\u770B\u4E00\u4E0B\u4E0A\u9762\u7684\u4EE3\u7801\u7F16\u8BD1\u540E\u7684 class \u6587\u4EF6\uFF0C\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\u5982\u4E0B\u5185\u5BB9\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
   <span class="token number">0</span>  iload_0 <span class="token punctuation">[</span>n<span class="token punctuation">]</span>  
   <span class="token number">1</span>  tableswitch <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">49</span>  
        <span class="token keyword">case</span> <span class="token number">1</span><span class="token operator">:</span> <span class="token number">28</span>  
        <span class="token keyword">case</span> <span class="token number">2</span><span class="token operator">:</span> <span class="token number">35</span>  
        <span class="token keyword">case</span> <span class="token number">3</span><span class="token operator">:</span> <span class="token number">42</span>  
  <span class="token number">28</span>  getstatic <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span>System</span><span class="token punctuation">.</span>out <span class="token operator">:</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span>PrintStream</span> <span class="token punctuation">[</span><span class="token number">22</span><span class="token punctuation">]</span>  
  <span class="token number">31</span>  iconst_1  
  <span class="token number">32</span>  invokevirtual <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span>PrintStream</span><span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">[</span><span class="token number">28</span><span class="token punctuation">]</span>  
  <span class="token number">35</span>  getstatic <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span>System</span><span class="token punctuation">.</span>out <span class="token operator">:</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span>PrintStream</span> <span class="token punctuation">[</span><span class="token number">22</span><span class="token punctuation">]</span>  
  <span class="token number">38</span>  iconst_2  
  <span class="token number">39</span>  invokevirtual <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span>PrintStream</span><span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">[</span><span class="token number">28</span><span class="token punctuation">]</span>  
  <span class="token number">42</span>  getstatic <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span>System</span><span class="token punctuation">.</span>out <span class="token operator">:</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span>PrintStream</span> <span class="token punctuation">[</span><span class="token number">22</span><span class="token punctuation">]</span>  
  <span class="token number">45</span>  iconst_3  
  <span class="token number">46</span>  invokevirtual <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span>PrintStream</span><span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">[</span><span class="token number">28</span><span class="token punctuation">]</span>  
  <span class="token number">49</span>  getstatic <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span>System</span><span class="token punctuation">.</span>out <span class="token operator">:</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span>PrintStream</span> <span class="token punctuation">[</span><span class="token number">22</span><span class="token punctuation">]</span>  
  <span class="token number">52</span>  ldc <span class="token operator">&lt;</span><span class="token class-name">String</span> <span class="token string">&quot;Default&quot;</span><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">33</span><span class="token punctuation">]</span>  
  <span class="token number">54</span>  invokevirtual <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span>PrintStream</span><span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span>String</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">[</span><span class="token number">35</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u7F16\u8BD1\u540E\u7684\u8BED\u53E5\u6BCF\u884C\u524D\u9762\u7684\u6570\u5B57\u662F\u7A0B\u5E8F\u7684\u6307\u5B9A\u5E8F\u53F7\uFF0C\u6211\u4EEC\u53EF\u4EE5\u628A\u5B83\u7B80\u5355\u7684\u7406\u89E3\u4E3A\u884C\u53F7\uFF0C\u6211\u4EEC\u53EF\u4EE5\u770B\u5230\u6570\u5B57\u4E3A 1 \u7684\u90A3\u884C\u5B9A\u4E49\u4E86\u4E00\u4E2A switch \u6307\u5B9A\uFF0C\u5176\u9ED8\u8BA4\u4F1A\u8DF3\u5230 49 \u884C\uFF0C\u5982\u679C\u4F20\u5165\u7684\u53C2\u6570\u662F 1 \u5219\u8DF3\u5230 28 \u884C\u6267\u884C\uFF0C\u5982\u679C\u662F 2 \u5219\u8DF3\u5230 35 \u884C\u6267\u884C\uFF0C\u5982\u679C\u662F 3 \u5219\u8DF3\u5230 42 \u884C\u6267\u884C\u3002</p><p>\u90A3\u4E48\u6211\u4EEC\u5148\u6765\u770B\u7A0B\u5E8F\u7684\u7B2C 28 \u884C\u5230 32 \u884C\uFF0C\u5176\u5BF9\u5E94\u7684\u5C31\u662F\u8C03\u7528 <code>System.out.println</code> \u8F93\u51FA 1\uFF0C\u5B8C\u4E86\u540E\u6CA1\u6709\u7279\u6B8A\u7684\u6307\u4EE4\uFF0C\u7A0B\u5E8F\u662F\u4F1A\u7EE7\u7EED\u987A\u5E8F\u6267\u884C\u7684\uFF0C\u4E5F\u5C31\u662F\u4F1A\u4F9D\u6B21\u6267\u884C 35\u300138\u3001\u76F4\u5230 57 \u884C\u7ED3\u675F\u3002</p><p>\u5982\u679C\u6211\u4EEC\u628A\u6E90\u7A0B\u5E8F\u7684 case \u8BED\u53E5\u672B\u7AEF\u90FD\u52A0\u4E0A break \u8BED\u53E5\uFF0C\u5982\u4E0B\u8FD9\u6837\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">class</span> demo <span class="token punctuation">{</span>
    <span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token class-name">String</span><span class="token punctuation">[</span><span class="token punctuation">]</span> args<span class="token punctuation">)</span> <span class="token punctuation">{</span>
        <span class="token keyword">int</span> n <span class="token operator">=</span> <span class="token number">2</span><span class="token punctuation">;</span>
        <span class="token keyword">switch</span> <span class="token punctuation">(</span>n<span class="token punctuation">)</span> <span class="token punctuation">{</span>
            <span class="token keyword">case</span> <span class="token number">1</span><span class="token operator">:</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token number">2</span><span class="token operator">:</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">case</span> <span class="token number">3</span><span class="token operator">:</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
            <span class="token keyword">default</span><span class="token operator">:</span>
                <span class="token class-name">System</span><span class="token punctuation">.</span>out<span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;Default&quot;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
                <span class="token keyword">break</span><span class="token punctuation">;</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u90A3\u4E48\u5BF9\u5E94\u7684\u7F16\u8BD1\u7684 class \u6587\u4EF6\u901A\u8FC7\uFF0C\u7F16\u8F91\u5668\u6253\u5F00\u540E\u53EF\u4EE5\u770B\u5230\u5982\u4E0B\u5185\u5BB9\uFF1A</p><div class="language-java ext-java line-numbers-mode"><pre class="language-java"><code><span class="token keyword">public</span> <span class="token keyword">static</span> <span class="token keyword">void</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>  
   <span class="token number">0</span>  iload_0 <span class="token punctuation">[</span>n<span class="token punctuation">]</span>  
   <span class="token number">1</span>  tableswitch <span class="token keyword">default</span><span class="token operator">:</span> <span class="token number">58</span>  
        <span class="token keyword">case</span> <span class="token number">1</span><span class="token operator">:</span> <span class="token number">28</span>  
        <span class="token keyword">case</span> <span class="token number">2</span><span class="token operator">:</span> <span class="token number">38</span>  
        <span class="token keyword">case</span> <span class="token number">3</span><span class="token operator">:</span> <span class="token number">48</span>  
  <span class="token number">28</span>  getstatic <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span>System</span><span class="token punctuation">.</span>out <span class="token operator">:</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span>PrintStream</span> <span class="token punctuation">[</span><span class="token number">22</span><span class="token punctuation">]</span>  
  <span class="token number">31</span>  iconst_1  
  <span class="token number">32</span>  invokevirtual <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span>PrintStream</span><span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">[</span><span class="token number">28</span><span class="token punctuation">]</span>  
  <span class="token number">35</span>  <span class="token keyword">goto</span> <span class="token number">66</span>  
  <span class="token number">38</span>  getstatic <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span>System</span><span class="token punctuation">.</span>out <span class="token operator">:</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span>PrintStream</span> <span class="token punctuation">[</span><span class="token number">22</span><span class="token punctuation">]</span>  
  <span class="token number">41</span>  iconst_2  
  <span class="token number">42</span>  invokevirtual <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span>PrintStream</span><span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">[</span><span class="token number">28</span><span class="token punctuation">]</span>  
  <span class="token number">45</span>  <span class="token keyword">goto</span> <span class="token number">66</span>  
  <span class="token number">48</span>  getstatic <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span>System</span><span class="token punctuation">.</span>out <span class="token operator">:</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span>PrintStream</span> <span class="token punctuation">[</span><span class="token number">22</span><span class="token punctuation">]</span>  
  <span class="token number">51</span>  iconst_3  
  <span class="token number">52</span>  invokevirtual <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span>PrintStream</span><span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token keyword">int</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">[</span><span class="token number">28</span><span class="token punctuation">]</span>  
  <span class="token number">55</span>  <span class="token keyword">goto</span> <span class="token number">66</span>  
  <span class="token number">58</span>  getstatic <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span>System</span><span class="token punctuation">.</span>out <span class="token operator">:</span> <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span>PrintStream</span> <span class="token punctuation">[</span><span class="token number">22</span><span class="token punctuation">]</span>  
  <span class="token number">61</span>  ldc <span class="token operator">&lt;</span><span class="token class-name">String</span> <span class="token string">&quot;Default&quot;</span><span class="token operator">&gt;</span> <span class="token punctuation">[</span><span class="token number">33</span><span class="token punctuation">]</span>  
  <span class="token number">63</span>  invokevirtual <span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>io<span class="token punctuation">.</span></span>PrintStream</span><span class="token punctuation">.</span><span class="token function">println</span><span class="token punctuation">(</span><span class="token class-name"><span class="token namespace">java<span class="token punctuation">.</span>lang<span class="token punctuation">.</span></span>String</span><span class="token punctuation">)</span> <span class="token operator">:</span> <span class="token keyword">void</span> <span class="token punctuation">[</span><span class="token number">35</span><span class="token punctuation">]</span>  
  <span class="token number">66</span>  <span class="token keyword">return</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6211\u4EEC\u53EF\u4EE5\u770B\u5230 switch \u8BED\u53E5\u9ED8\u8BA4\u4F1A\u6267\u884C 58 \u884C\uFF0C\u5982\u679C\u4F20\u5165\u7684\u53C2\u6570\u662F 1 \u5219\u4F1A\u6267\u884C 28 \u884C\uFF0C\u5982\u679C\u662F 2 \u5219\u4F1A\u4ECE 38 \u884C\u5F00\u59CB\u6267\u884C\uFF0C\u63A5\u7740\u6211\u4EEC\u53EF\u4EE5\u770B\u5230 28 \u884C\u5F00\u59CB\u662F\u6267\u884C\u7684 <code>System.out.println(1)</code> \u7684\u903B\u8F91\uFF0C\u5B8C\u4E86\u540E\u4F1A\u987A\u5E8F\u6267\u884C\u5230 35 \u884C\uFF0C35 \u884C\u7684\u6307\u4EE4\u662F\u4F1A\u5F15\u5BFC\u7A0B\u5E8F\u6267\u884C\u5230\u7B2C 66 \u884C\uFF0C\u4E5F\u5C31\u662F\u8DF3\u51FA\u4E86 switch \u903B\u8F91\uFF0C\u5BF9\u5E94\u6211\u4EEC\u7684\u6D4B\u8BD5\u4EE3\u7801\u5C31\u662F\u7A0B\u5E8F\u7ED3\u675F\u4E86\u3002\u8FD9\u4E5F\u662F\u4E3A\u4EC0\u4E48\u6211\u4EEC\u5728\u4F7F\u7528 switch \u8BED\u53E5\u65F6\u901A\u5E38\u9700\u8981\u5728\u6BCF\u4E2A case \u8BED\u53E5\u7ED3\u675F\u65F6\u52A0\u5165 break \u6307\u4EE4\u7684\u539F\u56E0\u3002</p>`,15),o=[e];function c(l,u){return s(),a("div",null,o)}var r=n(t,[["render",c],["__file","01-Why-do-switch-case-statements-need-to-include-breaks.html.vue"]]);export{r as default};
