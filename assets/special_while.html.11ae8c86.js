import{_ as e}from"./gzh.b03adfd2.js";import{_ as p}from"./zsxq.77f6dc86.js";import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c as l,a as n,d as s,b as o,e as c,r as u}from"./app.49ca720a.js";const r={},d=c(`<h2 id="_1-寻找可以被整除的程序" tabindex="-1"><a class="header-anchor" href="#_1-寻找可以被整除的程序" aria-hidden="true">#</a> 1. 寻找可以被整除的程序</h2><h3 id="_1-1-question-输出-100-200-之间可以把-3-整除的数据" tabindex="-1"><a class="header-anchor" href="#_1-1-question-输出-100-200-之间可以把-3-整除的数据" aria-hidden="true">#</a> 1.1 Question：输出 100～200 之间可以把 3 整除的数据</h3><p>方法一：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>divided <span class="token operator">=</span> <span class="token number">100</span>
divisor <span class="token operator">=</span> <span class="token number">3</span>
index <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">while</span> divided <span class="token operator">&lt;=</span> <span class="token number">200</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;index: {}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> divided <span class="token operator">%</span> <span class="token number">3</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>divided<span class="token punctuation">}</span></span><span class="token string"> 可以整除 3 。商为 </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token builtin">int</span><span class="token punctuation">(</span>divided <span class="token operator">/</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
    divided <span class="token operator">+=</span> <span class="token number">1</span>
    index <span class="token operator">+=</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出效果：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token operator">/</span>Users<span class="token operator">/</span>huangjiabao<span class="token operator">/</span>GitHub<span class="token operator">/</span>MacBookPro16<span class="token operator">-</span>Code<span class="token operator">/</span>PythonCoder<span class="token operator">/</span>venv<span class="token operator">/</span><span class="token builtin">bin</span><span class="token operator">/</span>python <span class="token operator">/</span>Users<span class="token operator">/</span>huangjiabao<span class="token operator">/</span>GitHub<span class="token operator">/</span>MacBookPro16<span class="token operator">-</span>Code<span class="token operator">/</span>PythonCoder<span class="token operator">/</span>StudentCoder<span class="token operator">/</span>05Cody<span class="token operator">/</span>lesson01<span class="token operator">/</span>lesson01<span class="token punctuation">.</span>py 
index<span class="token punctuation">:</span> <span class="token number">0</span>
index<span class="token punctuation">:</span> <span class="token number">1</span>
index<span class="token punctuation">:</span> <span class="token number">2</span>
<span class="token number">102</span> 可以整除 <span class="token number">3</span> 。商为 <span class="token number">34</span>
index<span class="token punctuation">:</span> <span class="token number">3</span>
index<span class="token punctuation">:</span> <span class="token number">4</span>
index<span class="token punctuation">:</span> <span class="token number">5</span>
<span class="token number">105</span> 可以整除 <span class="token number">3</span> 。商为 <span class="token number">35</span>
index<span class="token punctuation">:</span> <span class="token number">6</span>
index<span class="token punctuation">:</span> <span class="token number">7</span>
index<span class="token punctuation">:</span> <span class="token number">8</span>
<span class="token number">108</span> 可以整除 <span class="token number">3</span> 。商为 <span class="token number">36</span>
index<span class="token punctuation">:</span> <span class="token number">9</span>
index<span class="token punctuation">:</span> <span class="token number">10</span>
index<span class="token punctuation">:</span> <span class="token number">11</span>
<span class="token number">111</span> 可以整除 <span class="token number">3</span> 。商为 <span class="token number">37</span>
index<span class="token punctuation">:</span> <span class="token number">12</span>
index<span class="token punctuation">:</span> <span class="token number">13</span>
index<span class="token punctuation">:</span> <span class="token number">14</span>
<span class="token number">114</span> 可以整除 <span class="token number">3</span> 。商为 <span class="token number">38</span>
index<span class="token punctuation">:</span> <span class="token number">15</span>
index<span class="token punctuation">:</span> <span class="token number">16</span>
index<span class="token punctuation">:</span> <span class="token number">17</span>
<span class="token number">117</span> 可以整除 <span class="token number">3</span> 。商为 <span class="token number">39</span>
index<span class="token punctuation">:</span> <span class="token number">18</span>
index<span class="token punctuation">:</span> <span class="token number">19</span>
index<span class="token punctuation">:</span> <span class="token number">20</span>
<span class="token number">120</span> 可以整除 <span class="token number">3</span> 。商为 <span class="token number">40</span>
index<span class="token punctuation">:</span> <span class="token number">21</span>
index<span class="token punctuation">:</span> <span class="token number">22</span>
index<span class="token punctuation">:</span> <span class="token number">23</span>
<span class="token number">123</span> 可以整除 <span class="token number">3</span> 。商为 <span class="token number">41</span>
index<span class="token punctuation">:</span> <span class="token number">24</span>
index<span class="token punctuation">:</span> <span class="token number">25</span>
index<span class="token punctuation">:</span> <span class="token number">26</span>
<span class="token number">126</span> 可以整除 <span class="token number">3</span> 。商为 <span class="token number">42</span>
index<span class="token punctuation">:</span> <span class="token number">27</span>
index<span class="token punctuation">:</span> <span class="token number">28</span>
index<span class="token punctuation">:</span> <span class="token number">29</span>
<span class="token number">129</span> 可以整除 <span class="token number">3</span> 。商为 <span class="token number">43</span>
index<span class="token punctuation">:</span> <span class="token number">30</span>
index<span class="token punctuation">:</span> <span class="token number">31</span>
index<span class="token punctuation">:</span> <span class="token number">32</span>
<span class="token number">132</span> 可以整除 <span class="token number">3</span> 。商为 <span class="token number">44</span>
index<span class="token punctuation">:</span> <span class="token number">33</span>
index<span class="token punctuation">:</span> <span class="token number">34</span>
index<span class="token punctuation">:</span> <span class="token number">35</span>
<span class="token number">135</span> 可以整除 <span class="token number">3</span> 。商为 <span class="token number">45</span>
index<span class="token punctuation">:</span> <span class="token number">36</span>
index<span class="token punctuation">:</span> <span class="token number">37</span>
index<span class="token punctuation">:</span> <span class="token number">38</span>
<span class="token number">138</span> 可以整除 <span class="token number">3</span> 。商为 <span class="token number">46</span>
index<span class="token punctuation">:</span> <span class="token number">39</span>
index<span class="token punctuation">:</span> <span class="token number">40</span>
index<span class="token punctuation">:</span> <span class="token number">41</span>
<span class="token number">141</span> 可以整除 <span class="token number">3</span> 。商为 <span class="token number">47</span>
index<span class="token punctuation">:</span> <span class="token number">42</span>
index<span class="token punctuation">:</span> <span class="token number">43</span>
index<span class="token punctuation">:</span> <span class="token number">44</span>
<span class="token number">144</span> 可以整除 <span class="token number">3</span> 。商为 <span class="token number">48</span>
index<span class="token punctuation">:</span> <span class="token number">45</span>
index<span class="token punctuation">:</span> <span class="token number">46</span>
index<span class="token punctuation">:</span> <span class="token number">47</span>
<span class="token number">147</span> 可以整除 <span class="token number">3</span> 。商为 <span class="token number">49</span>
index<span class="token punctuation">:</span> <span class="token number">48</span>
index<span class="token punctuation">:</span> <span class="token number">49</span>
index<span class="token punctuation">:</span> <span class="token number">50</span>
<span class="token number">150</span> 可以整除 <span class="token number">3</span> 。商为 <span class="token number">50</span>
index<span class="token punctuation">:</span> <span class="token number">51</span>
index<span class="token punctuation">:</span> <span class="token number">52</span>
index<span class="token punctuation">:</span> <span class="token number">53</span>
<span class="token number">153</span> 可以整除 <span class="token number">3</span> 。商为 <span class="token number">51</span>
index<span class="token punctuation">:</span> <span class="token number">54</span>
index<span class="token punctuation">:</span> <span class="token number">55</span>
index<span class="token punctuation">:</span> <span class="token number">56</span>
<span class="token number">156</span> 可以整除 <span class="token number">3</span> 。商为 <span class="token number">52</span>
index<span class="token punctuation">:</span> <span class="token number">57</span>
index<span class="token punctuation">:</span> <span class="token number">58</span>
index<span class="token punctuation">:</span> <span class="token number">59</span>
<span class="token number">159</span> 可以整除 <span class="token number">3</span> 。商为 <span class="token number">53</span>
index<span class="token punctuation">:</span> <span class="token number">60</span>
index<span class="token punctuation">:</span> <span class="token number">61</span>
index<span class="token punctuation">:</span> <span class="token number">62</span>
<span class="token number">162</span> 可以整除 <span class="token number">3</span> 。商为 <span class="token number">54</span>
index<span class="token punctuation">:</span> <span class="token number">63</span>
index<span class="token punctuation">:</span> <span class="token number">64</span>
index<span class="token punctuation">:</span> <span class="token number">65</span>
<span class="token number">165</span> 可以整除 <span class="token number">3</span> 。商为 <span class="token number">55</span>
index<span class="token punctuation">:</span> <span class="token number">66</span>
index<span class="token punctuation">:</span> <span class="token number">67</span>
index<span class="token punctuation">:</span> <span class="token number">68</span>
<span class="token number">168</span> 可以整除 <span class="token number">3</span> 。商为 <span class="token number">56</span>
index<span class="token punctuation">:</span> <span class="token number">69</span>
index<span class="token punctuation">:</span> <span class="token number">70</span>
index<span class="token punctuation">:</span> <span class="token number">71</span>
<span class="token number">171</span> 可以整除 <span class="token number">3</span> 。商为 <span class="token number">57</span>
index<span class="token punctuation">:</span> <span class="token number">72</span>
index<span class="token punctuation">:</span> <span class="token number">73</span>
index<span class="token punctuation">:</span> <span class="token number">74</span>
<span class="token number">174</span> 可以整除 <span class="token number">3</span> 。商为 <span class="token number">58</span>
index<span class="token punctuation">:</span> <span class="token number">75</span>
index<span class="token punctuation">:</span> <span class="token number">76</span>
index<span class="token punctuation">:</span> <span class="token number">77</span>
<span class="token number">177</span> 可以整除 <span class="token number">3</span> 。商为 <span class="token number">59</span>
index<span class="token punctuation">:</span> <span class="token number">78</span>
index<span class="token punctuation">:</span> <span class="token number">79</span>
index<span class="token punctuation">:</span> <span class="token number">80</span>
<span class="token number">180</span> 可以整除 <span class="token number">3</span> 。商为 <span class="token number">60</span>
index<span class="token punctuation">:</span> <span class="token number">81</span>
index<span class="token punctuation">:</span> <span class="token number">82</span>
index<span class="token punctuation">:</span> <span class="token number">83</span>
<span class="token number">183</span> 可以整除 <span class="token number">3</span> 。商为 <span class="token number">61</span>
index<span class="token punctuation">:</span> <span class="token number">84</span>
index<span class="token punctuation">:</span> <span class="token number">85</span>
index<span class="token punctuation">:</span> <span class="token number">86</span>
<span class="token number">186</span> 可以整除 <span class="token number">3</span> 。商为 <span class="token number">62</span>
index<span class="token punctuation">:</span> <span class="token number">87</span>
index<span class="token punctuation">:</span> <span class="token number">88</span>
index<span class="token punctuation">:</span> <span class="token number">89</span>
<span class="token number">189</span> 可以整除 <span class="token number">3</span> 。商为 <span class="token number">63</span>
index<span class="token punctuation">:</span> <span class="token number">90</span>
index<span class="token punctuation">:</span> <span class="token number">91</span>
index<span class="token punctuation">:</span> <span class="token number">92</span>
<span class="token number">192</span> 可以整除 <span class="token number">3</span> 。商为 <span class="token number">64</span>
index<span class="token punctuation">:</span> <span class="token number">93</span>
index<span class="token punctuation">:</span> <span class="token number">94</span>
index<span class="token punctuation">:</span> <span class="token number">95</span>
<span class="token number">195</span> 可以整除 <span class="token number">3</span> 。商为 <span class="token number">65</span>
index<span class="token punctuation">:</span> <span class="token number">96</span>
index<span class="token punctuation">:</span> <span class="token number">97</span>
index<span class="token punctuation">:</span> <span class="token number">98</span>
<span class="token number">198</span> 可以整除 <span class="token number">3</span> 。商为 <span class="token number">66</span>
index<span class="token punctuation">:</span> <span class="token number">99</span>
index<span class="token punctuation">:</span> <span class="token number">100</span>

Process finished <span class="token keyword">with</span> exit code <span class="token number">0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>方法二：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>divided <span class="token operator">=</span> <span class="token number">100</span>
divisor <span class="token operator">=</span> <span class="token number">3</span>
index <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">while</span> divided <span class="token operator">&lt;=</span> <span class="token number">200</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;index: {}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> divided <span class="token operator">%</span> <span class="token number">3</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>divided<span class="token punctuation">}</span></span><span class="token string"> 可以整除 3 。商为 </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token builtin">int</span><span class="token punctuation">(</span>divided <span class="token operator">/</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
        divided <span class="token operator">+=</span> <span class="token number">1</span>
        index <span class="token operator">+=</span> <span class="token number">1</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        divided <span class="token operator">+=</span> <span class="token number">1</span>
        index <span class="token operator">+=</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-2-question-输出前十个可以整除-3-的数据" tabindex="-1"><a class="header-anchor" href="#_1-2-question-输出前十个可以整除-3-的数据" aria-hidden="true">#</a> 1.2 Question：输出前十个可以整除 3 的数据</h3><p>代码：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>divided <span class="token operator">=</span> <span class="token number">100</span>
divisor <span class="token operator">=</span> <span class="token number">3</span>
index <span class="token operator">=</span> <span class="token number">0</span>
<span class="token keyword">while</span> divided <span class="token operator">&lt;=</span> <span class="token number">200</span> <span class="token keyword">and</span> index <span class="token operator">&lt;</span> <span class="token number">10</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;index: {}&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> divided <span class="token operator">%</span> <span class="token number">3</span> <span class="token operator">==</span> <span class="token number">0</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;</span><span class="token interpolation"><span class="token punctuation">{</span>divided<span class="token punctuation">}</span></span><span class="token string"> 可以整除 3 。商为 </span><span class="token interpolation"><span class="token punctuation">{</span><span class="token builtin">int</span><span class="token punctuation">(</span>divided <span class="token operator">/</span> <span class="token number">3</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
    index <span class="token operator">+=</span> <span class="token number">1</span>
    divided <span class="token operator">+=</span> <span class="token number">1</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>输出效果：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token number">102</span>可以整除<span class="token number">3</span>。商为<span class="token number">34</span>
<span class="token number">105</span>可以整除<span class="token number">3</span>。商为<span class="token number">35</span>
<span class="token number">108</span>可以整除<span class="token number">3</span>。商为<span class="token number">36</span>
<span class="token number">111</span>可以整除<span class="token number">3</span>。商为<span class="token number">37</span>
<span class="token number">114</span>可以整除<span class="token number">3</span>。商为<span class="token number">38</span>
<span class="token number">117</span>可以整除<span class="token number">3</span>。商为<span class="token number">39</span>
<span class="token number">120</span>可以整除<span class="token number">3</span>。商为<span class="token number">40</span>
<span class="token number">123</span>可以整除<span class="token number">3</span>。商为<span class="token number">41</span>
<span class="token number">126</span>可以整除<span class="token number">3</span>。商为<span class="token number">42</span>
<span class="token number">129</span>可以整除<span class="token number">3</span>。商为<span class="token number">43</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_2-编写用户登陆程序" tabindex="-1"><a class="header-anchor" href="#_2-编写用户登陆程序" aria-hidden="true">#</a> 2.编写用户登陆程序</h2><h3 id="_2-1-用户数据" tabindex="-1"><a class="header-anchor" href="#_2-1-用户数据" aria-hidden="true">#</a> 2.1 用户数据</h3><table><thead><tr><th>序号</th><th>用户名</th><th>密码</th></tr></thead><tbody><tr><td>01</td><td>aiyc</td><td>123</td></tr><tr><td>02</td><td>cava</td><td>456</td></tr><tr><td>03</td><td>Austin</td><td>9879</td></tr><tr><td>04</td><td>Jaden</td><td>7675</td></tr></tbody></table><h3 id="_2-2-答案" tabindex="-1"><a class="header-anchor" href="#_2-2-答案" aria-hidden="true">#</a> 2.2 答案</h3><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>data_dict <span class="token operator">=</span> <span class="token punctuation">{</span><span class="token string">&quot;aiyc&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;123&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;cava&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;456&quot;</span><span class="token punctuation">}</span>
<span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
    username <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;请输入你的账户名称：&quot;</span><span class="token punctuation">)</span>
    password <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;请输入你的密码：&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">if</span> username <span class="token keyword">in</span> data_dict <span class="token keyword">and</span> password <span class="token operator">==</span> data_dict<span class="token punctuation">.</span>get<span class="token punctuation">(</span>username<span class="token punctuation">,</span> <span class="token boolean">False</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;login Successful!&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">break</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;请重新输入。&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="custom-container info"><p class="custom-container-title">悦创金句</p><p>程序员就是连接人与机器之间的桥梁——AI悦创</p></div><p>欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！</p><details class="custom-container details"><summary>公众号：AI悦创【二维码】</summary><p><img src="`+e+'" alt="" loading="lazy"></p></details>',21),k={class:"custom-container info"},m=n("p",{class:"custom-container-title"},"AI悦创·编程一对一",-1),b=n("p",null,"AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh",-1),v=n("p",null,"C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh",-1),x={href:"http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes",target:"_blank",rel:"noopener noreferrer"},h=n("p",null,"方法二：微信：Jiabcdefh",-1),g=n("p",null,[n("img",{src:p,alt:"",loading:"lazy"})],-1);function y(_,q){const a=u("ExternalLinkIcon");return i(),l("div",null,[d,n("div",k,[m,b,v,n("p",null,[s("方法一："),n("a",x,[s("QQ"),o(a)])]),h]),g])}const I=t(r,[["render",y],["__file","special_while.html.vue"]]);export{I as default};
