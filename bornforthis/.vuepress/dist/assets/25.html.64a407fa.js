import{_ as l}from"./gzh.aa7caba6.js";import{_ as o}from"./zsxq.96f46dfd.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{o as p,c,a as t,b as e,e as a,d as n,r as d}from"./app.7a9351cd.js";const r={},u=a(`<p>\u4F60\u597D\uFF0C\u6211\u662F\u60A6\u521B\u3002\u5728\u8DD1\u6A21\u578B\u7684\u65F6\u5019\uFF0C\u6211\u4EEC\u6709\u65F6\u9700\u8981\u8BA1\u7B97\u6A21\u578B\u8FD0\u884C\u65F6\u95F4\uFF0C\u6B64\u65F6\u6211\u4EEC\u9700\u8981\u83B7\u53D6\u5230\u6A21\u578B\u5F00\u59CB\u8FD0\u884C\u7684\u65F6\u95F4\u4EE5\u53CA\u6A21\u578B\u7ED3\u675F\u8FD0\u884C\u7684\u65F6\u95F4\uFF0C\u4EE5\u4E8C\u8005\u7684\u5DEE\u503C\u4F5C\u4E3A\u6A21\u578B\u7684\u603B\u8FD0\u884C\u65F6\u95F4\u3002\u5728 Python \u8BED\u8A00\u4E2D\uFF0C\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528\u4EE5\u4E0B\u4E24\u79CD\u5E38\u7528\u7684\u65B9\u5F0F\u83B7\u53D6\u5F53\u524D\u65F6\u95F4\u3002</p><p>\u6211\u4EEC\u6765\u5F00\u59CB\u5B66\u4E60\u5427\uFF01</p><p>Python \u7A0B\u5E8F\u80FD\u7528\u5F88\u591A\u65B9\u5F0F\u5904\u7406\u65E5\u671F\u548C\u65F6\u95F4\uFF0C\u8F6C\u6362\u65E5\u671F\u683C\u5F0F\u662F\u4E00\u4E2A\u5E38\u89C1\u7684\u529F\u80FD\u3002</p><p>Python \u63D0\u4F9B\u4E86\u4E00\u4E2A time \u548C calendar \u6A21\u5757\u53EF\u4EE5\u7528\u4E8E\u683C\u5F0F\u5316\u65E5\u671F\u548C\u65F6\u95F4\u3002\u5F53\u7136\u8FD8\u6709 datetime \u6A21\u5757\u3002</p><p>\u65F6\u95F4\u95F4\u9694\u662F\u4EE5\u79D2\u4E3A\u5355\u4F4D\u7684\u6D6E\u70B9\u5C0F\u6570\u3002</p><p>\u6BCF\u4E2A\u65F6\u95F4\u6233\u90FD\u4EE5\u81EA\u4ECE1970\u5E741\u67081\u65E5\u5348\u591C\uFF08\u5386\u5143\uFF09\u7ECF\u8FC7\u4E86\u591A\u957F\u65F6\u95F4\u6765\u8868\u793A\u3002</p><h2 id="_1\u3001\u4F7F\u7528-time-\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#_1\u3001\u4F7F\u7528-time-\u6A21\u5757" aria-hidden="true">#</a> 1\u3001\u4F7F\u7528 time \u6A21\u5757</h2><p>Python \u7684 time \u6A21\u5757\u4E0B\u6709\u5F88\u591A\u51FD\u6570\u53EF\u4EE5\u8F6C\u6362\u5E38\u89C1\u65E5\u671F\u683C\u5F0F\u3002\u5982\u51FD\u6570 <code>time.time()</code> \u7528\u4E8E\u83B7\u53D6\u5F53\u524D\u65F6\u95F4\u6233\uFF0C \u5982\u4E0B\u5B9E\u4F8B\uFF1A</p><p>\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> time  <span class="token comment"># \u5F15\u5165time\u6A21\u5757</span>
<span class="token comment"># \u6253\u5370\u65F6\u95F4\u6233</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;\u5F53\u524D\u65F6\u95F4\u6233\u4E3A:&quot;</span><span class="token punctuation">,</span> time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>      <span class="token comment"># \u6253\u5370\u81EA\u4ECE 1970 \u5E74 1 \u6708 1 \u65E5\u5348\u591C\uFF08\u5386\u5143\uFF09\u7ECF\u8FC7\u4E86\u591A\u957F\u65F6\u95F4\uFF0C\u4EE5\u79D2\u4E3A\u5355\u4F4D</span>
<span class="token comment"># \u6253\u5370\u672C\u5730\u65F6\u95F4</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>localtime<span class="token punctuation">(</span>time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>      <span class="token comment"># \u6253\u5370\u672C\u5730\u65F6\u95F4</span>
<span class="token comment"># \u6253\u5370\u683C\u5F0F\u5316\u65F6\u95F4</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>strftime<span class="token punctuation">(</span><span class="token string">&#39;%Y-%m-%d %H:%M:%S&#39;</span><span class="token punctuation">,</span> time<span class="token punctuation">.</span>localtime<span class="token punctuation">(</span>time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>       <span class="token comment"># \u6253\u5370\u6309\u6307\u5B9A\u683C\u5F0F\u6392\u7248\u7684\u65F6\u95F4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7ED3\u679C\u5982\u4E0B\uFF1A</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token number">1597915314.907726</span>
time<span class="token punctuation">.</span>struct_time<span class="token punctuation">(</span>tm_year<span class="token operator">=</span><span class="token number">2020</span><span class="token punctuation">,</span> tm_mon<span class="token operator">=</span><span class="token number">8</span><span class="token punctuation">,</span> tm_mday<span class="token operator">=</span><span class="token number">20</span><span class="token punctuation">,</span> tm_hour<span class="token operator">=</span><span class="token number">17</span><span class="token punctuation">,</span> tm_min<span class="token operator">=</span><span class="token number">21</span><span class="token punctuation">,</span> tm_sec<span class="token operator">=</span><span class="token number">54</span><span class="token punctuation">,</span> tm_wday<span class="token operator">=</span><span class="token number">3</span><span class="token punctuation">,</span> tm_yday<span class="token operator">=</span><span class="token number">233</span><span class="token punctuation">,</span> tm_isdst<span class="token operator">=</span><span class="token number">0</span><span class="token punctuation">)</span>
<span class="token number">2020</span><span class="token operator">-</span><span class="token number">08</span><span class="token operator">-</span><span class="token number">20</span> <span class="token number">17</span><span class="token punctuation">:</span><span class="token number">21</span><span class="token punctuation">:</span><span class="token number">54</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u65F6\u95F4\u6233\u5355\u4F4D\u6700\u9002\u4E8E\u505A\u65E5\u671F\u8FD0\u7B97\u3002\u4F46\u662F1970\u5E74\u4E4B\u524D\u7684\u65E5\u671F\u5C31\u65E0\u6CD5\u4EE5\u6B64\u8868\u793A\u4E86\u3002\u592A\u9065\u8FDC\u7684\u65E5\u671F\u4E5F\u4E0D\u884C\uFF0CUNIX \u548C Windows \u53EA\u652F\u6301\u5230 2038 \u5E74\u3002</p><h2 id="_2\u3001\u4F7F\u7528-datetime-\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#_2\u3001\u4F7F\u7528-datetime-\u6A21\u5757" aria-hidden="true">#</a> 2\u3001\u4F7F\u7528 datetime \u6A21\u5757</h2><p>\u4EE3\u7801\u5982\u4E0B\uFF1A</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> datetime
 
<span class="token comment"># \u6253\u5370\u5F53\u524D\u65F6\u95F4</span>
time1 <span class="token operator">=</span> datetime<span class="token punctuation">.</span>datetime<span class="token punctuation">.</span>now<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>time1<span class="token punctuation">)</span>
<span class="token comment"># \u6253\u5370\u6309\u6307\u5B9A\u683C\u5F0F\u6392\u7248\u7684\u65F6\u95F4</span>
time2 <span class="token operator">=</span> datetime<span class="token punctuation">.</span>datetime<span class="token punctuation">.</span>now<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>strftime<span class="token punctuation">(</span><span class="token string">&#39;%Y-%m-%d %H:%M:%S&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>time2<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7ED3\u679C\u5982\u4E0B\uFF1A</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token number">2020</span><span class="token operator">-</span><span class="token number">08</span><span class="token operator">-</span><span class="token number">20</span> <span class="token number">17</span><span class="token punctuation">:</span><span class="token number">27</span><span class="token punctuation">:</span><span class="token number">59.363265</span>
<span class="token number">2020</span><span class="token operator">-</span><span class="token number">08</span><span class="token operator">-</span><span class="token number">20</span> <span class="token number">17</span><span class="token punctuation">:</span><span class="token number">27</span><span class="token punctuation">:</span><span class="token number">59</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="\u4EC0\u4E48\u662F\u65F6\u95F4\u5143\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u4EC0\u4E48\u662F\u65F6\u95F4\u5143\u7EC4" aria-hidden="true">#</a> \u4EC0\u4E48\u662F\u65F6\u95F4\u5143\u7EC4\uFF1F</h2><p>\u5F88\u591A Python \u51FD\u6570\u7528\u4E00\u4E2A\u5143\u7EC4\u88C5\u8D77\u6765\u76849\u7EC4\u6570\u5B57\u5904\u7406\u65F6\u95F4\uFF1A</p><table><thead><tr><th style="text-align:left;">\u5E8F\u53F7</th><th style="text-align:left;">\u5B57\u6BB5</th><th style="text-align:left;">\u503C</th></tr></thead><tbody><tr><td style="text-align:left;">0</td><td style="text-align:left;">4\u4F4D\u6570\u5E74</td><td style="text-align:left;">2008</td></tr><tr><td style="text-align:left;">1</td><td style="text-align:left;">\u6708</td><td style="text-align:left;">1 \u5230 12</td></tr><tr><td style="text-align:left;">2</td><td style="text-align:left;">\u65E5</td><td style="text-align:left;">1\u523031</td></tr><tr><td style="text-align:left;">3</td><td style="text-align:left;">\u5C0F\u65F6</td><td style="text-align:left;">0\u523023</td></tr><tr><td style="text-align:left;">4</td><td style="text-align:left;">\u5206\u949F</td><td style="text-align:left;">0\u523059</td></tr><tr><td style="text-align:left;">5</td><td style="text-align:left;">\u79D2</td><td style="text-align:left;">0\u523061 (60\u621661 \u662F\u95F0\u79D2)</td></tr><tr><td style="text-align:left;">6</td><td style="text-align:left;">\u4E00\u5468\u7684\u7B2C\u51E0\u65E5</td><td style="text-align:left;">0\u52306 (0\u662F\u5468\u4E00)</td></tr><tr><td style="text-align:left;">7</td><td style="text-align:left;">\u4E00\u5E74\u7684\u7B2C\u51E0\u65E5</td><td style="text-align:left;">1\u5230366 (\u5112\u7565\u5386)</td></tr><tr><td style="text-align:left;">8</td><td style="text-align:left;">\u590F\u4EE4\u65F6</td><td style="text-align:left;">-1, 0, 1, -1\u662F\u51B3\u5B9A\u662F\u5426\u4E3A\u590F\u4EE4\u65F6\u7684\u65D7\u5E1C</td></tr></tbody></table><p>\u4E0A\u8FF0\u4E5F\u5C31\u662Fstruct_time\u5143\u7EC4\u3002\u8FD9\u79CD\u7ED3\u6784\u5177\u6709\u5982\u4E0B\u5C5E\u6027\uFF1A</p><table><thead><tr><th style="text-align:left;">\u5E8F\u53F7</th><th style="text-align:left;">\u5C5E\u6027</th><th style="text-align:left;">\u503C</th></tr></thead><tbody><tr><td style="text-align:left;">0</td><td style="text-align:left;">tm_year</td><td style="text-align:left;">2008</td></tr><tr><td style="text-align:left;">1</td><td style="text-align:left;">tm_mon</td><td style="text-align:left;">1 \u5230 12</td></tr><tr><td style="text-align:left;">2</td><td style="text-align:left;">tm_mday</td><td style="text-align:left;">1 \u5230 31</td></tr><tr><td style="text-align:left;">3</td><td style="text-align:left;">tm_hour</td><td style="text-align:left;">0 \u5230 23</td></tr><tr><td style="text-align:left;">4</td><td style="text-align:left;">tm_min</td><td style="text-align:left;">0 \u5230 59</td></tr><tr><td style="text-align:left;">5</td><td style="text-align:left;">tm_sec</td><td style="text-align:left;">0 \u5230 61 (60\u621661 \u662F\u95F0\u79D2)</td></tr><tr><td style="text-align:left;">6</td><td style="text-align:left;">tm_wday</td><td style="text-align:left;">0\u52306 (0\u662F\u5468\u4E00)</td></tr><tr><td style="text-align:left;">7</td><td style="text-align:left;">tm_yday</td><td style="text-align:left;">1 \u5230 366(\u5112\u7565\u5386)</td></tr><tr><td style="text-align:left;">8</td><td style="text-align:left;">tm_isdst</td><td style="text-align:left;">-1, 0, 1, -1\u662F\u51B3\u5B9A\u662F\u5426\u4E3A\u590F\u4EE4\u65F6\u7684\u65D7\u5E1C</td></tr></tbody></table><h2 id="_3-\u83B7\u53D6\u683C\u5F0F\u5316\u7684\u65F6\u95F4" tabindex="-1"><a class="header-anchor" href="#_3-\u83B7\u53D6\u683C\u5F0F\u5316\u7684\u65F6\u95F4" aria-hidden="true">#</a> 3. \u83B7\u53D6\u683C\u5F0F\u5316\u7684\u65F6\u95F4</h2><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> time
 
localtime <span class="token operator">=</span> time<span class="token punctuation">.</span>asctime<span class="token punctuation">(</span> time<span class="token punctuation">.</span>localtime<span class="token punctuation">(</span>time<span class="token punctuation">.</span>time<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;\u672C\u5730\u65F6\u95F4\u4E3A :&quot;</span><span class="token punctuation">,</span> localtime<span class="token punctuation">)</span>
<span class="token comment"># \u672C\u5730\u65F6\u95F4\u4E3A : Sat Jul  2 22:16:15 2022</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_4-\u683C\u5F0F\u5316\u65E5\u671F" tabindex="-1"><a class="header-anchor" href="#_4-\u683C\u5F0F\u5316\u65E5\u671F" aria-hidden="true">#</a> 4. \u683C\u5F0F\u5316\u65E5\u671F</h2><p>\u6211\u4EEC\u53EF\u4EE5\u4F7F\u7528 time \u6A21\u5757\u7684 strftime \u65B9\u6CD5\u6765\u683C\u5F0F\u5316\u65E5\u671F\uFF0C\uFF1A</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>time<span class="token punctuation">.</span>strftime<span class="token punctuation">(</span><span class="token builtin">format</span><span class="token punctuation">[</span><span class="token punctuation">,</span> t<span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5B9E\u4F8B\u6F14\u793A\uFF1A</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> time
 
<span class="token comment"># \u683C\u5F0F\u5316\u62102016-03-20 11:45:39\u5F62\u5F0F</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>strftime<span class="token punctuation">(</span><span class="token string">&quot;%Y-%m-%d %H:%M:%S&quot;</span><span class="token punctuation">,</span> time<span class="token punctuation">.</span>localtime<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
 
<span class="token comment"># \u683C\u5F0F\u5316\u6210Sat Mar 28 22:24:24 2016\u5F62\u5F0F</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>strftime<span class="token punctuation">(</span><span class="token string">&quot;%a %b %d %H:%M:%S %Y&quot;</span><span class="token punctuation">,</span> time<span class="token punctuation">.</span>localtime<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
  
<span class="token comment"># \u5C06\u683C\u5F0F\u5B57\u7B26\u4E32\u8F6C\u6362\u4E3A\u65F6\u95F4\u6233</span>
a <span class="token operator">=</span> <span class="token string">&quot;Sat Mar 28 22:24:24 2016&quot;</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>mktime<span class="token punctuation">(</span>time<span class="token punctuation">.</span>strptime<span class="token punctuation">(</span>a<span class="token punctuation">,</span><span class="token string">&quot;%a %b %d %H:%M:%S %Y&quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token comment"># \u8F93\u51FA</span>
<span class="token number">2022</span><span class="token operator">-</span><span class="token number">07</span><span class="token operator">-</span><span class="token number">02</span> <span class="token number">22</span><span class="token punctuation">:</span><span class="token number">35</span><span class="token punctuation">:</span><span class="token number">17</span>
Sat Jul <span class="token number">02</span> <span class="token number">22</span><span class="token punctuation">:</span><span class="token number">35</span><span class="token punctuation">:</span><span class="token number">17</span> <span class="token number">2022</span>
<span class="token number">1459175064.0</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>Python \u4E2D\u65F6\u95F4\u65E5\u671F\u683C\u5F0F\u5316\u7B26\u53F7\uFF1A</p><ul><li><code>%y</code>\uFF1A \u4E24\u4F4D\u6570\u7684\u5E74\u4EFD\u8868\u793A\uFF08<code>00-99</code>\uFF09</li><li><code>%Y</code>\uFF1A \u56DB\u4F4D\u6570\u7684\u5E74\u4EFD\u8868\u793A\uFF08<code>000-9999</code>\uFF09</li><li><code>%m</code>\uFF1A \u6708\u4EFD\uFF08<code>01-12</code>\uFF09</li><li><code>%d</code>\uFF1A \u6708\u5185\u4E2D\u7684\u4E00\u5929\uFF08<code>0-31</code>\uFF09</li><li><code>%H</code>\uFF1A 24\u5C0F\u65F6\u5236\u5C0F\u65F6\u6570\uFF08<code>0-23</code>\uFF09</li><li><code>%I</code>\uFF1A 12\u5C0F\u65F6\u5236\u5C0F\u65F6\u6570\uFF08<code>01-12</code>\uFF09</li><li><code>%M</code>\uFF1A \u5206\u949F\u6570\uFF08<code>00-59</code>\uFF09</li><li><code>%S</code>\uFF1A \u79D2\uFF08<code>00-59</code>\uFF09</li><li><code>%a</code>\uFF1A \u672C\u5730\u7B80\u5316\u661F\u671F\u540D\u79F0</li><li><code>%A</code>\uFF1A \u672C\u5730\u5B8C\u6574\u661F\u671F\u540D\u79F0</li><li><code>%b</code>\uFF1A \u672C\u5730\u7B80\u5316\u7684\u6708\u4EFD\u540D\u79F0</li><li><code>%B</code>\uFF1A \u672C\u5730\u5B8C\u6574\u7684\u6708\u4EFD\u540D\u79F0</li><li><code>%c</code>\uFF1A \u672C\u5730\u76F8\u5E94\u7684\u65E5\u671F\u8868\u793A\u548C\u65F6\u95F4\u8868\u793A</li><li><code>%j</code>\uFF1A \u5E74\u5185\u7684\u4E00\u5929\uFF08<code>001-366</code>\uFF09</li><li><code>%p</code>\uFF1A \u672C\u5730 <code>A.M.</code> \u6216 <code>P.M.</code> \u7684\u7B49\u4EF7\u7B26</li><li><code>%U</code>\uFF1A \u4E00\u5E74\u4E2D\u7684\u661F\u671F\u6570\uFF08<code>00-53</code>\uFF09\u661F\u671F\u5929\u4E3A\u661F\u671F\u7684\u5F00\u59CB</li><li><code>%w</code>\uFF1A \u661F\u671F\uFF08<code>0-6</code>\uFF09\uFF0C\u661F\u671F\u5929\u4E3A\u661F\u671F\u7684\u5F00\u59CB</li><li><code>%W</code>\uFF1A \u4E00\u5E74\u4E2D\u7684\u661F\u671F\u6570\uFF08<code>00-53</code>\uFF09\u661F\u671F\u4E00\u4E3A\u661F\u671F\u7684\u5F00\u59CB</li><li><code>%x</code>\uFF1A \u672C\u5730\u76F8\u5E94\u7684\u65E5\u671F\u8868\u793A</li><li><code>%X</code>\uFF1A \u672C\u5730\u76F8\u5E94\u7684\u65F6\u95F4\u8868\u793A</li><li><code>%Z</code>\uFF1A \u5F53\u524D\u65F6\u533A\u7684\u540D\u79F0</li><li><code>%%</code>\uFF1A % \u53F7\u672C\u8EAB</li></ul><h2 id="_5-\u83B7\u53D6\u67D0\u6708\u65E5\u5386" tabindex="-1"><a class="header-anchor" href="#_5-\u83B7\u53D6\u67D0\u6708\u65E5\u5386" aria-hidden="true">#</a> 5. \u83B7\u53D6\u67D0\u6708\u65E5\u5386</h2><p>Calendar \u6A21\u5757\u6709\u5F88\u5E7F\u6CDB\u7684\u65B9\u6CD5\u7528\u6765\u5904\u7406\u5E74\u5386\u548C\u6708\u5386\uFF0C\u4F8B\u5982\u6253\u5370\u67D0\u6708\u7684\u6708\u5386\uFF1A</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> calendar
 
cal <span class="token operator">=</span> calendar<span class="token punctuation">.</span>month<span class="token punctuation">(</span><span class="token number">2022</span><span class="token punctuation">,</span> <span class="token number">7</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;\u4EE5\u4E0B\u8F93\u51FA2022\u5E747\u6708\u4EFD\u7684\u65E5\u5386:&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>cal<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4EE5\u4E0A\u5B9E\u4F8B\u8F93\u51FA\u7ED3\u679C\uFF1A</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>\u4EE5\u4E0B\u8F93\u51FA<span class="token number">2022</span>\u5E74<span class="token number">7</span>\u6708\u4EFD\u7684\u65E5\u5386<span class="token punctuation">:</span>
     July <span class="token number">2022</span>
Mo Tu We Th Fr Sa Su
             <span class="token number">1</span>  <span class="token number">2</span>  <span class="token number">3</span>
 <span class="token number">4</span>  <span class="token number">5</span>  <span class="token number">6</span>  <span class="token number">7</span>  <span class="token number">8</span>  <span class="token number">9</span> <span class="token number">10</span>
<span class="token number">11</span> <span class="token number">12</span> <span class="token number">13</span> <span class="token number">14</span> <span class="token number">15</span> <span class="token number">16</span> <span class="token number">17</span>
<span class="token number">18</span> <span class="token number">19</span> <span class="token number">20</span> <span class="token number">21</span> <span class="token number">22</span> <span class="token number">23</span> <span class="token number">24</span>
<span class="token number">25</span> <span class="token number">26</span> <span class="token number">27</span> <span class="token number">28</span> <span class="token number">29</span> <span class="token number">30</span> <span class="token number">31</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="_6-time-\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#_6-time-\u6A21\u5757" aria-hidden="true">#</a> 6. Time \u6A21\u5757</h2><p>Time \u6A21\u5757\u5305\u542B\u4E86\u4EE5\u4E0B\u5185\u7F6E\u51FD\u6570\uFF0C\u65E2\u6709\u65F6\u95F4\u5904\u7406\u7684\uFF0C\u4E5F\u6709\u8F6C\u6362\u65F6\u95F4\u683C\u5F0F\u7684\uFF1A</p>`,39),m=t("thead",null,[t("tr",null,[t("th",{style:{"text-align":"left"}},"\u5E8F\u53F7"),t("th",{style:{"text-align":"left"}},"\u51FD\u6570\u53CA\u63CF\u8FF0")])],-1),k=t("td",{style:{"text-align":"left"}},"1",-1),h={style:{"text-align":"left"}},_={href:"https://www.runoob.com/python/att-time-altzone.html",target:"_blank",rel:"noopener noreferrer"},g=n("time.altzone"),y=n(" \u8FD4\u56DE\u683C\u6797\u5A01\u6CBB\u897F\u90E8\u7684\u590F\u4EE4\u65F6\u5730\u533A\u7684\u504F\u79FB\u79D2\u6570\u3002\u5982\u679C\u8BE5\u5730\u533A\u5728\u683C\u6797\u5A01\u6CBB\u4E1C\u90E8\u4F1A\u8FD4\u56DE\u8D1F\u503C\uFF08\u5982\u897F\u6B27\uFF0C\u5305\u62EC\u82F1\u56FD\uFF09\u3002\u5BF9\u590F\u4EE4\u65F6\u542F\u7528\u5730\u533A\u624D\u80FD\u4F7F\u7528\u3002"),b=t("td",{style:{"text-align":"left"}},"2",-1),f={style:{"text-align":"left"}},v=n("[time.asctime("),x={href:"https://www.runoob.com/python/att-time-asctime.html",target:"_blank",rel:"noopener noreferrer"},w=n("tupletime])"),q=n(' \u63A5\u53D7\u65F6\u95F4\u5143\u7EC4\u5E76\u8FD4\u56DE\u4E00\u4E2A\u53EF\u8BFB\u7684\u5F62\u5F0F\u4E3A"Tue Dec 11 18:07:14 2008"\uFF082008\u5E7412\u670811\u65E5 \u5468\u4E8C18\u65F607\u520614\u79D2\uFF09\u768424\u4E2A\u5B57\u7B26\u7684\u5B57\u7B26\u4E32\u3002'),S=t("td",{style:{"text-align":"left"}},"3",-1),M={style:{"text-align":"left"}},P={href:"https://www.runoob.com/python/att-time-clock.html",target:"_blank",rel:"noopener noreferrer"},z=n("time.clock( )"),T=n(" \u7528\u4EE5\u6D6E\u70B9\u6570\u8BA1\u7B97\u7684\u79D2\u6570\u8FD4\u56DE\u5F53\u524D\u7684CPU\u65F6\u95F4\u3002\u7528\u6765\u8861\u91CF\u4E0D\u540C\u7A0B\u5E8F\u7684\u8017\u65F6\uFF0C\u6BD4time.time()\u66F4\u6709\u7528\u3002"),Y=t("td",{style:{"text-align":"left"}},"4",-1),I={style:{"text-align":"left"}},C=n("[time.ctime("),H={href:"https://www.runoob.com/python/att-time-ctime.html",target:"_blank",rel:"noopener noreferrer"},A=n("secs])"),J=n(" \u4F5C\u7528\u76F8\u5F53\u4E8E asctime(localtime(secs))\uFF0C\u672A\u7ED9\u53C2\u6570\u76F8\u5F53\u4E8Easctime()"),N=t("td",{style:{"text-align":"left"}},"5",-1),B={style:{"text-align":"left"}},Q=n("[time.gmtime("),V={href:"https://www.runoob.com/python/att-time-gmtime.html",target:"_blank",rel:"noopener noreferrer"},W=n("secs])"),E=n(" \u63A5\u6536\u65F6\u95F4\u6233\uFF081970\u7EAA\u5143\u540E\u7ECF\u8FC7\u7684\u6D6E\u70B9\u79D2\u6570\uFF09\u5E76\u8FD4\u56DE\u683C\u6797\u5A01\u6CBB\u5929\u6587\u65F6\u95F4\u4E0B\u7684\u65F6\u95F4\u5143\u7EC4t\u3002\u6CE8\uFF1At.tm_isdst\u59CB\u7EC8\u4E3A0"),F=t("td",{style:{"text-align":"left"}},"6",-1),U={style:{"text-align":"left"}},j=n("[time.localtime("),L={href:"https://www.runoob.com/python/att-time-localtime.html",target:"_blank",rel:"noopener noreferrer"},X=n("secs])"),Z=n(" \u63A5\u6536\u65F6\u95F4\u6233\uFF081970\u7EAA\u5143\u540E\u7ECF\u8FC7\u7684\u6D6E\u70B9\u79D2\u6570\uFF09\u5E76\u8FD4\u56DE\u5F53\u5730\u65F6\u95F4\u4E0B\u7684\u65F6\u95F4\u5143\u7EC4t\uFF08t.tm_isdst\u53EF\u53D60\u62161\uFF0C\u53D6\u51B3\u4E8E\u5F53\u5730\u5F53\u65F6\u662F\u4E0D\u662F\u590F\u4EE4\u65F6\uFF09\u3002"),D=t("td",{style:{"text-align":"left"}},"7",-1),G={style:{"text-align":"left"}},K={href:"https://www.runoob.com/python/att-time-mktime.html",target:"_blank",rel:"noopener noreferrer"},O=n("time.mktime(tupletime)"),R=n(" \u63A5\u53D7\u65F6\u95F4\u5143\u7EC4\u5E76\u8FD4\u56DE\u65F6\u95F4\u6233\uFF081970\u7EAA\u5143\u540E\u7ECF\u8FC7\u7684\u6D6E\u70B9\u79D2\u6570\uFF09\u3002"),$=t("td",{style:{"text-align":"left"}},"8",-1),tt={style:{"text-align":"left"}},nt={href:"https://www.runoob.com/python/att-time-sleep.html",target:"_blank",rel:"noopener noreferrer"},st=n("time.sleep(secs)"),et=n(" \u63A8\u8FDF\u8C03\u7528\u7EBF\u7A0B\u7684\u8FD0\u884C\uFF0Csecs\u6307\u79D2\u6570\u3002"),at=t("td",{style:{"text-align":"left"}},"9",-1),lt={style:{"text-align":"left"}},ot=n("[time.strftime(fmt"),it={href:"https://www.runoob.com/python/att-time-strftime.html",target:"_blank",rel:"noopener noreferrer"},pt=n(",tupletime])"),ct=n(" \u63A5\u6536\u4EE5\u65F6\u95F4\u5143\u7EC4\uFF0C\u5E76\u8FD4\u56DE\u4EE5\u53EF\u8BFB\u5B57\u7B26\u4E32\u8868\u793A\u7684\u5F53\u5730\u65F6\u95F4\uFF0C\u683C\u5F0F\u7531fmt\u51B3\u5B9A\u3002"),dt=t("td",{style:{"text-align":"left"}},"10",-1),rt={style:{"text-align":"left"}},ut={href:"https://www.runoob.com/python/att-time-strptime.html",target:"_blank",rel:"noopener noreferrer"},mt=n("time.strptime(str,fmt='%a %b %d %H:%M:%S %Y')"),kt=n(" \u6839\u636Efmt\u7684\u683C\u5F0F\u628A\u4E00\u4E2A\u65F6\u95F4\u5B57\u7B26\u4E32\u89E3\u6790\u4E3A\u65F6\u95F4\u5143\u7EC4\u3002"),ht=t("td",{style:{"text-align":"left"}},"11",-1),_t={style:{"text-align":"left"}},gt={href:"https://www.runoob.com/python/att-time-time.html",target:"_blank",rel:"noopener noreferrer"},yt=n("time.time( )"),bt=n(" \u8FD4\u56DE\u5F53\u524D\u65F6\u95F4\u7684\u65F6\u95F4\u6233\uFF081970\u7EAA\u5143\u540E\u7ECF\u8FC7\u7684\u6D6E\u70B9\u79D2\u6570\uFF09\u3002"),ft=t("td",{style:{"text-align":"left"}},"12",-1),vt={style:{"text-align":"left"}},xt={href:"https://www.runoob.com/python/att-time-tzset.html",target:"_blank",rel:"noopener noreferrer"},wt=n("time.tzset()"),qt=n(" \u6839\u636E\u73AF\u5883\u53D8\u91CFTZ\u91CD\u65B0\u521D\u59CB\u5316\u65F6\u95F4\u76F8\u5173\u8BBE\u7F6E\u3002"),St=a('<p>Time \u6A21\u5757\u5305\u542B\u4E86\u4EE5\u4E0B 2 \u4E2A\u975E\u5E38\u91CD\u8981\u7684\u5C5E\u6027\uFF1A</p><table><thead><tr><th style="text-align:left;">\u5E8F\u53F7</th><th style="text-align:left;">\u5C5E\u6027\u53CA\u63CF\u8FF0</th></tr></thead><tbody><tr><td style="text-align:left;">1</td><td style="text-align:left;"><strong>time.timezone</strong> \u5C5E\u6027 time.timezone \u662F\u5F53\u5730\u65F6\u533A\uFF08\u672A\u542F\u52A8\u590F\u4EE4\u65F6\uFF09\u8DDD\u79BB\u683C\u6797\u5A01\u6CBB\u7684\u504F\u79FB\u79D2\u6570\uFF08&gt;0\uFF0C\u7F8E\u6D32&lt;=0\u5927\u90E8\u5206\u6B27\u6D32\uFF0C\u4E9A\u6D32\uFF0C\u975E\u6D32\uFF09\u3002</td></tr><tr><td style="text-align:left;">2</td><td style="text-align:left;"><strong>time.tzname</strong> \u5C5E\u6027time.tzname\u5305\u542B\u4E00\u5BF9\u6839\u636E\u60C5\u51B5\u7684\u4E0D\u540C\u800C\u4E0D\u540C\u7684\u5B57\u7B26\u4E32\uFF0C\u5206\u522B\u662F\u5E26\u590F\u4EE4\u65F6\u7684\u672C\u5730\u65F6\u533A\u540D\u79F0\uFF0C\u548C\u4E0D\u5E26\u7684\u3002</td></tr></tbody></table><h2 id="_7-\u65E5\u5386-calendar-\u6A21\u5757" tabindex="-1"><a class="header-anchor" href="#_7-\u65E5\u5386-calendar-\u6A21\u5757" aria-hidden="true">#</a> 7. \u65E5\u5386\uFF08Calendar\uFF09\u6A21\u5757</h2><p>\u6B64\u6A21\u5757\u7684\u51FD\u6570\u90FD\u662F\u65E5\u5386\u76F8\u5173\u7684\uFF0C\u4F8B\u5982\u6253\u5370\u67D0\u6708\u7684\u5B57\u7B26\u6708\u5386\u3002</p><p>\u661F\u671F\u4E00\u662F\u9ED8\u8BA4\u7684\u6BCF\u5468\u7B2C\u4E00\u5929\uFF0C\u661F\u671F\u5929\u662F\u9ED8\u8BA4\u7684\u6700\u540E\u4E00\u5929\u3002\u66F4\u6539\u8BBE\u7F6E\u9700\u8C03\u7528 <code>calendar.setfirstweekday()</code> \u51FD\u6570\u3002\u6A21\u5757\u5305\u542B\u4E86\u4EE5\u4E0B\u5185\u7F6E\u51FD\u6570\uFF1A</p><table><thead><tr><th style="text-align:left;">\u5E8F\u53F7</th><th style="text-align:left;">\u51FD\u6570\u53CA\u63CF\u8FF0</th></tr></thead><tbody><tr><td style="text-align:left;">1</td><td style="text-align:left;"><strong>calendar.calendar(year, w=2, l=1, c=6)</strong> <br>\u8FD4\u56DE\u4E00\u4E2A\u591A\u884C\u5B57\u7B26\u4E32\u683C\u5F0F\u7684 year \u5E74\u5E74\u5386\uFF0C3 \u4E2A\u6708\u4E00\u884C\uFF0C\u95F4\u9694\u8DDD\u79BB\u4E3A c\u3002 \u6BCF\u65E5\u5BBD\u5EA6\u95F4\u9694\u4E3A w \u5B57\u7B26\u3002\u6BCF\u884C\u957F\u5EA6\u4E3A <code>21* W+18+2* C</code> \u3002l \u662F\u6BCF\u661F\u671F\u884C\u6570\u3002</td></tr><tr><td style="text-align:left;">2</td><td style="text-align:left;"><strong>calendar.firstweekday( )</strong> <br>\u8FD4\u56DE\u5F53\u524D\u6BCF\u5468\u8D77\u59CB\u65E5\u671F\u7684\u8BBE\u7F6E\u3002\u9ED8\u8BA4\u60C5\u51B5\u4E0B\uFF0C\u9996\u6B21\u8F7D\u5165 calendar \u6A21\u5757\u65F6\u8FD4\u56DE 0\uFF0C\u5373\u661F\u671F\u4E00\u3002</td></tr><tr><td style="text-align:left;">3</td><td style="text-align:left;"><strong>calendar.isleap(year)</strong> \u662F\u95F0\u5E74\u8FD4\u56DE True\uFF0C\u5426\u5219\u4E3A False\u3002<br><code>&gt;&gt;&gt; import calendar</code><br><code> &gt;&gt;&gt; print(calendar.isleap(2000)) True</code><br><code> &gt;&gt;&gt; print(calendar.isleap(1900)) False</code><br></td></tr><tr><td style="text-align:left;">04</td><td style="text-align:left;"><strong>calendar.leapdays(y1,y2)</strong><br>\u8FD4\u56DE\u5728Y1\uFF0CY2\u4E24\u5E74\u4E4B\u95F4\u7684\u95F0\u5E74\u603B\u6570\u3002</td></tr><tr><td style="text-align:left;">05</td><td style="text-align:left;"><strong>calendar.month(year,month,w=2,l=1)</strong><br>\u8FD4\u56DE\u4E00\u4E2A\u591A\u884C\u5B57\u7B26\u4E32\u683C\u5F0F\u7684 year \u5E74 month \u6708\u65E5\u5386\uFF0C\u4E24\u884C\u6807\u9898\uFF0C\u4E00\u5468\u4E00\u884C\u3002\u6BCF\u65E5\u5BBD\u5EA6\u95F4\u9694\u4E3Aw\u5B57\u7B26\u3002\u6BCF\u884C\u7684\u957F\u5EA6\u4E3A <code>7* w+6</code>\u3002l\u662F\u6BCF\u661F\u671F\u7684\u884C\u6570\u3002</td></tr><tr><td style="text-align:left;">06</td><td style="text-align:left;"><strong>calendar.monthcalendar(year,month)</strong><br>\u8FD4\u56DE\u4E00\u4E2A\u6574\u6570\u7684\u5355\u5C42\u5D4C\u5957\u5217\u8868\u3002\u6BCF\u4E2A\u5B50\u5217\u8868\u88C5\u8F7D\u4EE3\u8868\u4E00\u4E2A\u661F\u671F\u7684\u6574\u6570\u3002Year\u5E74month\u6708\u5916\u7684\u65E5\u671F\u90FD\u8BBE\u4E3A0;\u8303\u56F4\u5185\u7684\u65E5\u5B50\u90FD\u7531\u8BE5\u6708\u7B2C\u51E0\u65E5\u8868\u793A\uFF0C\u4ECE1\u5F00\u59CB\u3002</td></tr><tr><td style="text-align:left;">07</td><td style="text-align:left;"><strong>calendar.monthrange(year,month)</strong><br>\u8FD4\u56DE\u4E24\u4E2A\u6574\u6570\u3002\u7B2C\u4E00\u4E2A\u662F\u8BE5\u6708\u7684\u661F\u671F\u51E0\u7684\u65E5\u671F\u7801\uFF0C\u7B2C\u4E8C\u4E2A\u662F\u8BE5\u6708\u7684\u65E5\u671F\u7801\u3002\u65E5\u4ECE0\uFF08\u661F\u671F\u4E00\uFF09\u52306\uFF08\u661F\u671F\u65E5\uFF09;\u6708\u4ECE1\u523012\u3002</td></tr><tr><td style="text-align:left;">08</td><td style="text-align:left;"><strong>calendar.prcal(year,w=2,l=1,c=6)</strong><br>\u76F8\u5F53\u4E8E <strong>print calendar.calendar(year,w=2,l=1,c=6)</strong>\u3002</td></tr><tr><td style="text-align:left;">09</td><td style="text-align:left;"><strong>calendar.prmonth(year,month,w=2,l=1)</strong><br>\u76F8\u5F53\u4E8E <strong>print calendar.month(year,month,w=2,l=1)</strong> \u3002</td></tr><tr><td style="text-align:left;">10</td><td style="text-align:left;">**calendar.setfirstweekday(weekday) ** <br>\u8BBE\u7F6E\u6BCF\u5468\u7684\u8D77\u59CB\u65E5\u671F\u7801\u30020\uFF08\u661F\u671F\u4E00\uFF09\u52306\uFF08\u661F\u671F\u65E5\uFF09\u3002</td></tr><tr><td style="text-align:left;">11</td><td style="text-align:left;"><strong>calendar.timegm(tupletime)</strong><br>\u548C <code> time.gmtime</code> \u76F8\u53CD\uFF1A\u63A5\u53D7\u4E00\u4E2A\u65F6\u95F4\u5143\u7EC4\u5F62\u5F0F\uFF0C\u8FD4\u56DE\u8BE5\u65F6\u523B\u7684\u65F6\u95F4\u6233\uFF081970\u7EAA\u5143\u540E\u7ECF\u8FC7\u7684\u6D6E\u70B9\u79D2\u6570\uFF09\u3002</td></tr><tr><td style="text-align:left;">12</td><td style="text-align:left;"><strong>calendar.weekday(year,month,day)</strong><br>\u8FD4\u56DE\u7ED9\u5B9A\u65E5\u671F\u7684\u65E5\u671F\u7801\u30020\uFF08\u661F\u671F\u4E00\uFF09\u52306\uFF08\u661F\u671F\u65E5\uFF09\u3002\u6708\u4EFD\u4E3A 1\uFF08\u4E00\u6708\uFF09 \u5230 12\uFF0812\u6708\uFF09\u3002</td></tr></tbody></table><h2 id="_8-\u5176\u4ED6\u76F8\u5173\u6A21\u5757\u548C\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#_8-\u5176\u4ED6\u76F8\u5173\u6A21\u5757\u548C\u51FD\u6570" aria-hidden="true">#</a> 8. \u5176\u4ED6\u76F8\u5173\u6A21\u5757\u548C\u51FD\u6570</h2><p>\u5728 Python \u4E2D\uFF0C\u5176\u4ED6\u5904\u7406\u65E5\u671F\u548C\u65F6\u95F4\u7684\u6A21\u5757\u8FD8\u6709\uFF1A</p>',8),Mt={href:"http://docs.python.org/library/datetime.html#module-datetime",target:"_blank",rel:"noopener noreferrer"},Pt=n("datetime\u6A21\u5757"),zt={href:"http://www.twinsun.com/tz/tz-link.htm",target:"_blank",rel:"noopener noreferrer"},Tt=n("pytz\u6A21\u5757"),Yt={href:"http://labix.org/python-dateutil",target:"_blank",rel:"noopener noreferrer"},It=n("dateutil\u6A21\u5757"),Ct=t("p",null,"\u6B22\u8FCE\u5173\u6CE8\u6211\u516C\u4F17\u53F7\uFF1AAI\u60A6\u521B\uFF0C\u6709\u66F4\u591A\u66F4\u597D\u73A9\u7684\u7B49\u4F60\u53D1\u73B0\uFF01",-1),Ht=t("details",{class:"custom-container details"},[t("summary",null,"\u516C\u4F17\u53F7\uFF1AAI\u60A6\u521B\u3010\u4E8C\u7EF4\u7801\u3011"),t("p",null,[t("img",{src:l,alt:""})])],-1),At={class:"custom-container info"},Jt=t("p",{class:"custom-container-title"},"AI\u60A6\u521B\xB7\u7F16\u7A0B\u4E00\u5BF9\u4E00",-1),Nt=t("p",null,"AI\u60A6\u521B\xB7\u63A8\u51FA\u8F85\u5BFC\u73ED\u5566\uFF0C\u5305\u62EC\u300CPython \u8BED\u8A00\u8F85\u5BFC\u73ED\u3001C++ \u8F85\u5BFC\u73ED\u3001java \u8F85\u5BFC\u73ED\u3001\u7B97\u6CD5/\u6570\u636E\u7ED3\u6784\u8F85\u5BFC\u73ED\u3001\u5C11\u513F\u7F16\u7A0B\u3001pygame \u6E38\u620F\u5F00\u53D1\u300D\uFF0C\u5168\u90E8\u90FD\u662F\u4E00\u5BF9\u4E00\u6559\u5B66\uFF1A\u4E00\u5BF9\u4E00\u8F85\u5BFC + \u4E00\u5BF9\u4E00\u7B54\u7591 + \u5E03\u7F6E\u4F5C\u4E1A + \u9879\u76EE\u5B9E\u8DF5\u7B49\u3002\u5F53\u7136\uFF0C\u8FD8\u6709\u7EBF\u4E0B\u7EBF\u4E0A\u6444\u5F71\u8BFE\u7A0B\u3001Photoshop\u3001Premiere \u4E00\u5BF9\u4E00\u6559\u5B66\u3001QQ\u3001\u5FAE\u4FE1\u5728\u7EBF\uFF0C\u968F\u65F6\u54CD\u5E94\uFF01\u5FAE\u4FE1\uFF1AJiabcdefh",-1),Bt=t("p",null,"C++ \u4FE1\u606F\u5965\u8D5B\u9898\u89E3\uFF0C\u957F\u671F\u66F4\u65B0\uFF01\u957F\u671F\u62DB\u6536\u4E00\u5BF9\u4E00\u4E2D\u5C0F\u5B66\u4FE1\u606F\u5965\u8D5B\u96C6\u8BAD\uFF0C\u8386\u7530\u3001\u53A6\u95E8\u5730\u533A\u6709\u673A\u4F1A\u7EBF\u4E0B\u4E0A\u95E8\uFF0C\u5176\u4ED6\u5730\u533A\u7EBF\u4E0A\u3002\u5FAE\u4FE1\uFF1AJiabcdefh",-1),Qt=n("\u65B9\u6CD5\u4E00\uFF1A"),Vt={href:"http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes",target:"_blank",rel:"noopener noreferrer"},Wt=n("QQ"),Et=t("p",null,"\u65B9\u6CD5\u4E8C\uFF1A\u5FAE\u4FE1\uFF1AJiabcdefh",-1),Ft=t("p",null,[t("img",{src:o,alt:""})],-1);function Ut(jt,Lt){const s=d("ExternalLinkIcon");return p(),c("div",null,[u,t("table",null,[m,t("tbody",null,[t("tr",null,[k,t("td",h,[t("a",_,[g,e(s)]),y])]),t("tr",null,[b,t("td",f,[v,t("a",x,[w,e(s)]),q])]),t("tr",null,[S,t("td",M,[t("a",P,[z,e(s)]),T])]),t("tr",null,[Y,t("td",I,[C,t("a",H,[A,e(s)]),J])]),t("tr",null,[N,t("td",B,[Q,t("a",V,[W,e(s)]),E])]),t("tr",null,[F,t("td",U,[j,t("a",L,[X,e(s)]),Z])]),t("tr",null,[D,t("td",G,[t("a",K,[O,e(s)]),R])]),t("tr",null,[$,t("td",tt,[t("a",nt,[st,e(s)]),et])]),t("tr",null,[at,t("td",lt,[ot,t("a",it,[pt,e(s)]),ct])]),t("tr",null,[dt,t("td",rt,[t("a",ut,[mt,e(s)]),kt])]),t("tr",null,[ht,t("td",_t,[t("a",gt,[yt,e(s)]),bt])]),t("tr",null,[ft,t("td",vt,[t("a",xt,[wt,e(s)]),qt])])])]),St,t("ul",null,[t("li",null,[t("a",Mt,[Pt,e(s)])]),t("li",null,[t("a",zt,[Tt,e(s)])]),t("li",null,[t("a",Yt,[It,e(s)])])]),Ct,Ht,t("div",At,[Jt,Nt,Bt,t("p",null,[Qt,t("a",Vt,[Wt,e(s)])]),Et]),Ft])}var Kt=i(r,[["render",Ut],["__file","25.html.vue"]]);export{Kt as default};
