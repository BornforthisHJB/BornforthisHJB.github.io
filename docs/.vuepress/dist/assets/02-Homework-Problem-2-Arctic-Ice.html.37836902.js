import{_ as o}from"./gzh.e3bdf003.js";import{_ as p}from"./zsxq.5b71a58b.js";import{_ as l}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as i,c,a as n,d as a,b as t,e,r}from"./app.1ec90f96.js";const u={},d=e('<ul><li><p><a href="/1v1/08-LionGuo/02-Homework-Problem-2-Arctic-Ice/problem_2.ipynb">/1v1/08-LionGuo/02-Homework-Problem-2-Arctic-Iceproblem_2.ipynb</a></p></li><li><p><a href="/1v1/08-LionGuo/02-Homework-Problem-2-Arctic-Ice/day_2.ipynb">/1v1/08-LionGuo/02-Homework-Problem-2-Arctic-Ice/day_2.ipynb</a></p></li></ul><p><strong>Hand-in format:</strong> IPython Notebook or python program. Submit via email.</p><p>As a reminder: please make sure your code is clean, documentated, and understandable. Make sure it runs without errors.</p><blockquote><p><strong>\u63D0\u4EA4\u683C\u5F0F:</strong> IPython Notebook\u6216python\u7A0B\u5E8F\u3002\u901A\u8FC7\u7535\u5B50\u90AE\u4EF6\u63D0\u4EA4\u3002</p><p>\u4F5C\u4E3A\u4E00\u4E2A\u63D0\u9192:\u8BF7\u786E\u4FDD\u60A8\u7684\u4EE3\u7801\u662F\u5E72\u51C0\u7684\u3001\u6709\u6587\u6863\u8BB0\u5F55\u7684\u548C\u53EF\u7406\u89E3\u7684\u3002\u786E\u4FDD\u5B83\u6CA1\u6709\u9519\u8BEF\u5730\u8FD0\u884C\u3002</p></blockquote><h2 id="background" tabindex="-1"><a class="header-anchor" href="#background" aria-hidden="true">#</a> Background</h2>',5),m={href:"http://en.wikipedia.org/wiki/Aqua_%28satellite%29",target:"_blank",rel:"noopener noreferrer"},k={href:"http://en.wikipedia.org/wiki/Aqua_%28satellite%29",target:"_blank",rel:"noopener noreferrer"},h={href:"http://www.iup.uni-bremen.de/seaice/amsr/",target:"_blank",rel:"noopener noreferrer"},v={href:"http://www.iup.uni-bremen.de/seaice/amsr/",target:"_blank",rel:"noopener noreferrer"},b=e(`<h2 id="part-1-examining-a-single-map" tabindex="-1"><a class="header-anchor" href="#part-1-examining-a-single-map" aria-hidden="true">#</a> Part 1 - Examining a single map</h2><blockquote><p>\u7B2C1\u90E8\u5206-\u68C0\u67E5\u5355\u4E2A\u5730\u56FE</p></blockquote><p>Begin by examining the HDF5 file - you can use <code>h5ls</code> at the command line, or <code>h5py</code> inside the notebook.</p><blockquote><p>\u4ECE\u68C0\u67E5HDF5\u6587\u4EF6\u5F00\u59CB-\u4F60\u53EF\u4EE5\u5728\u547D\u4EE4\u884C\u4E2D\u4F7F\u7528&#39; h5ls &#39;\uFF0C\u6216\u8005\u5728\u7B14\u8BB0\u672C\u4E2D\u4F7F\u7528&#39; h5py &#39;\u3002</p></blockquote><blockquote><p>If you don&#39;t remember how to open HDF5 files, and read datasets from HDF5 files, look at our Day 2 lecture.</p></blockquote><blockquote><p>\u5982\u679C\u4F60\u4E0D\u8BB0\u5F97\u5982\u4F55\u6253\u5F00 HDF5 \u6587\u4EF6\uFF0C\u5E76\u4ECE HDF5 \u6587\u4EF6\u4E2D\u8BFB\u53D6\u6570\u636E\u96C6\uFF0C\u8BF7\u53C2\u8003\u6211\u4EEC\u7B2C2\u5929\u7684\u8BFE\u7A0B\u3002</p></blockquote><blockquote><p>There are many datasets, each with a name of the format <code>YYYYMMDD</code>, giving the data. Each dataset is a single map (i.e. 2D array), where the values give the ice concentration (fraction, from 0.0 to 100.0) in that pixel of the map. Careful of NaN values!</p></blockquote><blockquote><p>\u6709\u8BB8\u591A\u6570\u636E\u96C6\uFF0C\u6BCF\u4E2A\u6570\u636E\u96C6\u7684\u540D\u79F0\u683C\u5F0F\u4E3A\u201CYYYYMMDD\u201D\uFF0C\u7528\u4E8E\u63D0\u4F9B\u6570\u636E\u3002\u6BCF\u4E2A\u6570\u636E\u96C6\u90FD\u662F\u4E00\u4E2A\u5355\u4E00\u7684\u5730\u56FE(\u53732D\u6570\u7EC4)\uFF0C\u5176\u4E2D\u7684\u503C\u7ED9\u51FA\u4E86\u5730\u56FE\u50CF\u7D20\u4E2D\u7684\u51B0\u6D53\u5EA6(\u4ECE0.0\u5230100.0\u7684\u5206\u6570)\u3002\u5C0F\u5FC3NaN\u503C!</p></blockquote><p>Read one of the maps, and plot it with Matplotlib.</p><blockquote><p>\u9605\u8BFB\u5176\u4E2D\u4E00\u5F20\u5730\u56FE\uFF0C\u5E76\u4F7F\u7528Matplotlib\u7ED8\u5236\u5B83\u3002</p></blockquote><p>Note: to get the correct orientation, you need the <code>origin=&#39;lower&#39;</code> argument for <code>imshow()</code>. Include a colorbar. Remove the tick labels (<code>0</code>, <code>100</code>, and so on, indicating pixel number) since they are not useful.</p><blockquote><p>\u6CE8\u610F:\u4E3A\u4E86\u83B7\u5F97\u6B63\u786E\u7684\u65B9\u5411\uFF0C\u4F60\u9700\u8981&#39; origin=&#39;lower&#39; &#39;\u53C2\u6570\u4E3A&#39; imshow() &#39;\u3002\u5305\u62EC\u4E00\u4E2Acolorbar\u3002\u5220\u9664\u6807\u8BB0(\u201C0\u201D\u3001\u201C100\u201D\u7B49\uFF0C\u8868\u793A\u50CF\u7D20\u6570)\uFF0C\u56E0\u4E3A\u5B83\u4EEC\u6CA1\u6709\u7528\u3002</p></blockquote><h2 id="\u7B54\u6848" tabindex="-1"><a class="header-anchor" href="#\u7B54\u6848" aria-hidden="true">#</a> \u7B54\u6848</h2><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># -*- coding: utf-8 -*-</span>
<span class="token comment"># @Time    : 2022/10/6 18:26</span>
<span class="token comment"># @Author  : AI\u60A6\u521B</span>
<span class="token comment"># @FileName: hw2.py</span>
<span class="token comment"># @Software: PyCharm</span>
<span class="token comment"># @Blog    \uFF1Ahttps://bornforthis.cn/</span>
<span class="token keyword">import</span> h5py


<span class="token comment"># f = h5py.File(&#39;p2_icedata_area.hdf5&#39;, &#39;r&#39;)</span>
<span class="token comment"># # f = h5py.File(&#39;p2_icedata.hdf5&#39;, &#39;r&#39;)</span>
<span class="token comment"># print(f)</span>
<span class="token comment"># print(f.keys())</span>
<span class="token comment"># dataset = f[&quot;pixel_areas&quot;]</span>
<span class="token comment"># print(dataset)</span>
<span class="token comment"># print(dataset.shape)</span>
<span class="token comment"># print(dataset.dtype)</span>

<span class="token keyword">def</span> <span class="token function">read_hdf5</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">:</span>
    f <span class="token operator">=</span> h5py<span class="token punctuation">.</span>File<span class="token punctuation">(</span>path<span class="token punctuation">,</span> <span class="token string">&#39;r&#39;</span><span class="token punctuation">)</span>
    keys <span class="token operator">=</span> f<span class="token punctuation">.</span>keys<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> key <span class="token keyword">in</span> keys<span class="token punctuation">:</span>
        <span class="token comment"># print(key)</span>
        dataset <span class="token operator">=</span> f<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> dataset<span class="token punctuation">.</span>shape<span class="token punctuation">,</span> dataset<span class="token punctuation">.</span>dtype<span class="token punctuation">,</span> sep<span class="token operator">=</span><span class="token string">&quot;\\t&quot;</span><span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    read_hdf5<span class="token punctuation">(</span><span class="token string">&quot;p2_icedata.hdf5&quot;</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> matplotlib<span class="token punctuation">.</span>pyplot <span class="token keyword">as</span> plt
<span class="token keyword">import</span> h5py
<span class="token keyword">def</span> <span class="token function">read_hdf5</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">:</span>
    year_lst <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    dataset_lst <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    f <span class="token operator">=</span> h5py<span class="token punctuation">.</span>File<span class="token punctuation">(</span>path<span class="token punctuation">,</span> <span class="token string">&#39;r&#39;</span><span class="token punctuation">)</span>
    keys <span class="token operator">=</span> f<span class="token punctuation">.</span>keys<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> key <span class="token keyword">in</span> keys<span class="token punctuation">:</span>
        <span class="token comment"># print(key)</span>
        dataset <span class="token operator">=</span> f<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
<span class="token comment">#         print(key, dataset.shape, dataset.dtype, sep=&quot;\\t&quot;)</span>
        year_lst<span class="token punctuation">.</span>append<span class="token punctuation">(</span>key<span class="token punctuation">)</span>
        dataset_lst<span class="token punctuation">.</span>append<span class="token punctuation">(</span>dataset<span class="token punctuation">.</span>shape<span class="token punctuation">)</span>
    <span class="token comment"># &quot;g&quot; \u8868\u793A\u7EA2\u8272\uFF0Cmarksize\u7528\u6765\u8BBE\u7F6E&#39;D&#39;\u83F1\u5F62\u7684\u5927\u5C0F</span>
    plt<span class="token punctuation">.</span>plot<span class="token punctuation">(</span>year_lst<span class="token punctuation">,</span> dataset_lst<span class="token punctuation">,</span> <span class="token string">&quot;g&quot;</span><span class="token punctuation">,</span> marker<span class="token operator">=</span><span class="token string">&#39;D&#39;</span><span class="token punctuation">,</span> markersize<span class="token operator">=</span><span class="token number">5</span><span class="token punctuation">,</span> label<span class="token operator">=</span><span class="token string">&quot;year&quot;</span><span class="token punctuation">)</span>
    <span class="token comment"># \u7ED8\u5236\u5750\u6807\u8F74\u6807\u7B7E</span>
    plt<span class="token punctuation">.</span>xlabel<span class="token punctuation">(</span><span class="token string">&quot;\u5E74&quot;</span><span class="token punctuation">)</span>
    plt<span class="token punctuation">.</span>ylabel<span class="token punctuation">(</span><span class="token string">&quot;\u6570\u636E&quot;</span><span class="token punctuation">)</span>
    plt<span class="token punctuation">.</span>title<span class="token punctuation">(</span><span class="token string">&quot;HDF5&quot;</span><span class="token punctuation">)</span>
    <span class="token comment"># \u663E\u793A\u56FE\u4F8B</span>
    plt<span class="token punctuation">.</span>legend<span class="token punctuation">(</span>loc<span class="token operator">=</span><span class="token string">&quot;lower right&quot;</span><span class="token punctuation">)</span>
    <span class="token comment"># \u8C03\u7528 text()\u5728\u56FE\u50CF\u4E0A\u7ED8\u5236\u6CE8\u91CA\u6587\u672C</span>
    <span class="token comment"># x1\u3001y1\u8868\u793A\u6587\u672C\u6240\u5904\u5750\u6807\u4F4D\u7F6E\uFF0Cha\u53C2\u6570\u63A7\u5236\u6C34\u5E73\u5BF9\u9F50\u65B9\u5F0F, va\u63A7\u5236\u5782\u76F4\u5BF9\u9F50\u65B9\u5F0F\uFF0Cstr(y1)\u8868\u793A\u8981\u7ED8\u5236\u7684\u6587\u672C</span>
<span class="token comment">#     for x1, y1 in zip(year_lst, dataset_lst):</span>
<span class="token comment">#         plt.text(x1, y1, str(y1), ha=&#39;center&#39;, va=&#39;bottom&#39;, fontsize=10)</span>
    <span class="token comment"># \u4FDD\u5B58\u56FE\u7247</span>
    plt<span class="token punctuation">.</span>savefig<span class="token punctuation">(</span><span class="token string">&quot;1.jpg&quot;</span><span class="token punctuation">)</span>
    plt<span class="token punctuation">.</span>show<span class="token punctuation">(</span><span class="token punctuation">)</span>


read_hdf5<span class="token punctuation">(</span><span class="token string">&quot;p2_icedata.hdf5&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="part-2-ice-concentration-versus-time" tabindex="-1"><a class="header-anchor" href="#part-2-ice-concentration-versus-time" aria-hidden="true">#</a> Part 2 - Ice concentration versus time</h2><blockquote><p>\u7B2C\u4E8C\u90E8\u5206-\u51B0\u6D53\u5EA6\u4E0E\u65F6\u95F4\u7684\u5173\u7CFB</p></blockquote><p>We want to make a plot of the ice concentration over time.</p><blockquote><p>\u6211\u4EEC\u8981\u753B\u51FA\u51B0\u6D53\u5EA6\u968F\u65F6\u95F4\u53D8\u5316\u7684\u66F2\u7EBF\u3002</p></blockquote><p>First, write a loop to read all the datasets of the HDF5 file (e.g. into a dict).</p><blockquote><p>\u9996\u5148\uFF0C\u7F16\u5199\u4E00\u4E2A\u5FAA\u73AF\u6765\u8BFB\u53D6HDF5\u6587\u4EF6\u7684\u6240\u6709\u6570\u636E\u96C6(\u4F8B\u5982\u5230\u5B57\u5178\u4E2D)\u3002</p></blockquote><p>Then, write an analysis function <code>frac_pixels_above(dict,value)</code> which, for each array in the input dict, computes the fraction of pixels above the input <code>value</code>. Use this to make a plot of the number of pixels with concentration above 50%, versus time.</p><blockquote><p>\u7136\u540E\uFF0C\u7F16\u5199\u4E00\u4E2A\u5206\u6790\u51FD\u6570&#39; frac_pixels_above(dict,value) &#39;\uFF0C\u8BE5\u51FD\u6570\u5BF9\u4E8E\u8F93\u5165dict\u4E2D\u7684\u6BCF\u4E2A\u6570\u7EC4\uFF0C\u8BA1\u7B97\u8F93\u5165&#39; value &#39;\u4EE5\u4E0A\u50CF\u7D20\u7684\u767E\u5206\u6BD4\u3002\u4F7F\u7528\u6B64\u65B9\u6CD5\u7ED8\u5236\u6D53\u5EA6\u8D85\u8FC750%\u7684\u50CF\u7D20\u6570\u91CF\u4E0E\u65F6\u95F4\u7684\u5173\u7CFB\u56FE\u3002</p></blockquote><blockquote><p>Note: to include &quot;time&quot; on the x-axis of a plot, you may want to write a helper function to convert the dict keys from their <code>YYYYMMDD</code> string format into a 3-tuple of (year, month, day) integer values.</p></blockquote><blockquote><p>\u6CE8\u610F:\u8981\u5728\u56FE\u5F62\u7684x\u8F74\u4E0A\u5305\u542B\u201C\u65F6\u95F4\u201D\uFF0C\u60A8\u53EF\u80FD\u9700\u8981\u7F16\u5199\u4E00\u4E2Ahelper\u51FD\u6570\u6765\u5C06\u5B57\u5178\u952E\u4ECE\u5B83\u4EEC\u7684\u201CYYYYMMDD\u201D\u5B57\u7B26\u4E32\u683C\u5F0F\u8F6C\u6362\u4E3A3\u5143\u7EC4(\u5E74\u3001\u6708\u3001\u65E5)\u6574\u6570\u503C\u3002</p></blockquote><blockquote><p>This can then be converted into fractional years (e.g. 1 July 2012 is <code>2012.5</code>). For simplicity you can assume each month has 30 days.</p></blockquote><blockquote><p>\u8FD9\u53EF\u4EE5\u8F6C\u6362\u4E3A\u5C0F\u6570\u5E74(\u4F8B\u5982\uFF0C2012\u5E747\u67081\u65E5\u4E3A\u201C2012.5\u201D)\u3002\u4E3A\u4E86\u7B80\u5355\u8D77\u89C1\uFF0C\u4F60\u53EF\u4EE5\u5047\u8BBE\u6BCF\u4E2A\u6708\u670930\u5929\u3002</p></blockquote>`,27),_=n("code",null,"set_major_formatter",-1),y={href:"https://matplotlib.org/3.5.1/gallery/text_labels_and_annotations/date.html",target:"_blank",rel:"noopener noreferrer"},f={href:"https://matplotlib.org/3.5.1/gallery/text_labels_and_annotations/date.html",target:"_blank",rel:"noopener noreferrer"},g=e(`<p>Describe what you see in the plot.</p><blockquote><p>\u63CF\u8FF0\u4F60\u5728\u60C5\u8282\u4E2D\u770B\u5230\u4E86\u4EC0\u4E48\u3002</p></blockquote><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">read_hdf5</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># year_lst = []</span>
    dataset_lst <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    f <span class="token operator">=</span> h5py<span class="token punctuation">.</span>File<span class="token punctuation">(</span>path<span class="token punctuation">,</span> <span class="token string">&#39;r&#39;</span><span class="token punctuation">)</span>
    keys <span class="token operator">=</span> f<span class="token punctuation">.</span>keys<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> key <span class="token keyword">in</span> keys<span class="token punctuation">:</span>
        <span class="token comment"># print(key)</span>
        dataset <span class="token operator">=</span> f<span class="token punctuation">[</span>key<span class="token punctuation">]</span>
        <span class="token comment"># print(key, dataset.shape, dataset.dtype, sep=&quot;\\t&quot;)</span>
        <span class="token comment"># year_lst.append(key)</span>
        dataset_lst<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token punctuation">(</span>key<span class="token punctuation">,</span> dataset<span class="token punctuation">.</span>shape<span class="token punctuation">)</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token builtin">dict</span><span class="token punctuation">(</span>dataset_lst<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="part-3-physical-units" tabindex="-1"><a class="header-anchor" href="#part-3-physical-units" aria-hidden="true">#</a> Part 3 - Physical units</h2><blockquote><p>\u7B2C3\u90E8\u5206-\u7269\u7406\u5355\u5143</p></blockquote>`,5),w=n("p",null,[a("To be more quantitative we will compute the actual surface area of Earth in "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("msup",null,[n("mrow",null,[n("mi",{mathvariant:"normal"},"k"),n("mi",{mathvariant:"normal"},"m")]),n("mn",null,"2")])]),n("annotation",{encoding:"application/x-tex"},"\\rm{km}^2")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.8984em"}}),n("span",{class:"mord"},[n("span",{class:"mord"},[n("span",{class:"mord"},[n("span",{class:"mord mathrm"},"km")]),n("span",{class:"msupsub"},[n("span",{class:"vlist-t"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.8984em"}},[n("span",{style:{top:"-3.1473em","margin-right":"0.05em"}},[n("span",{class:"pstrut",style:{height:"2.7em"}}),n("span",{class:"sizing reset-size6 size3 mtight"},[n("span",{class:"mord mathrm mtight"},"2")])])])])])])])])])])]),a(" over which the ice concentration is above a given threshold.")],-1),q=n("blockquote",null,[n("p",null,[a("\u4E3A\u4E86\u66F4\u5B9A\u91CF\uFF0C\u6211\u4EEC\u5C06\u4EE5"),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("msup",null,[n("mrow",null,[n("mi",{mathvariant:"normal"},"k"),n("mi",{mathvariant:"normal"},"m")]),n("mn",null,"2")])]),n("annotation",{encoding:"application/x-tex"},"\\rm{km}^2")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.8984em"}}),n("span",{class:"mord"},[n("span",{class:"mord"},[n("span",{class:"mord"},[n("span",{class:"mord mathrm"},"km")]),n("span",{class:"msupsub"},[n("span",{class:"vlist-t"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.8984em"}},[n("span",{style:{top:"-3.1473em","margin-right":"0.05em"}},[n("span",{class:"pstrut",style:{height:"2.7em"}}),n("span",{class:"sizing reset-size6 size3 mtight"},[n("span",{class:"mord mathrm mtight"},"2")])])])])])])])])])])]),a("\u4E3A\u5355\u4F4D\u8BA1\u7B97\u5730\u7403\u7684\u5B9E\u9645\u8868\u9762\u79EF\uFF0C\u5728\u6B64\u8303\u56F4\u5185\u51B0\u6D53\u5EA6\u8D85\u8FC7\u7ED9\u5B9A\u7684\u9608\u503C\u3002")])],-1),x={href:"https://en.wikipedia.org/wiki/Tissot%27s_indicatrix",target:"_blank",rel:"noopener noreferrer"},D={href:"https://en.wikipedia.org/wiki/Tissot%27s_indicatrix",target:"_blank",rel:"noopener noreferrer"},M=n("blockquote",null,[n("p",null,"Every map uses the same projection, so the pixel areas in each are the same.")],-1),A=n("blockquote",null,[n("p",null,"\u6BCF\u4E2A\u5730\u56FE\u4F7F\u7528\u76F8\u540C\u7684\u6295\u5F71\uFF0C\u6240\u4EE5\u6BCF\u4E2A\u5730\u56FE\u4E2D\u7684\u50CF\u7D20\u533A\u57DF\u662F\u76F8\u540C\u7684\u3002")],-1),H=n("p",null,[a("The areas (in "),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("msup",null,[n("mrow",null,[n("mi",{mathvariant:"normal"},"k"),n("mi",{mathvariant:"normal"},"m")]),n("mn",null,"2")])]),n("annotation",{encoding:"application/x-tex"},"\\rm{km}^2")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.8984em"}}),n("span",{class:"mord"},[n("span",{class:"mord"},[n("span",{class:"mord"},[n("span",{class:"mord mathrm"},"km")]),n("span",{class:"msupsub"},[n("span",{class:"vlist-t"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.8984em"}},[n("span",{style:{top:"-3.1473em","margin-right":"0.05em"}},[n("span",{class:"pstrut",style:{height:"2.7em"}}),n("span",{class:"sizing reset-size6 size3 mtight"},[n("span",{class:"mord mathrm mtight"},"2")])])])])])])])])])])]),a(") are available in the file named "),n("code",null,"data/p2_icedata_area.hdf5"),a(". Inspect, then load, this datafile. Plot it (with colorbar and units).")],-1),I=n("blockquote",null,[n("p",null,[a("\u533A\u57DF(\u5728"),n("span",{class:"katex"},[n("span",{class:"katex-mathml"},[n("math",{xmlns:"http://www.w3.org/1998/Math/MathML"},[n("semantics",null,[n("mrow",null,[n("msup",null,[n("mrow",null,[n("mi",{mathvariant:"normal"},"k"),n("mi",{mathvariant:"normal"},"m")]),n("mn",null,"2")])]),n("annotation",{encoding:"application/x-tex"},"\\rm{km}^2")])])]),n("span",{class:"katex-html","aria-hidden":"true"},[n("span",{class:"base"},[n("span",{class:"strut",style:{height:"0.8984em"}}),n("span",{class:"mord"},[n("span",{class:"mord"},[n("span",{class:"mord"},[n("span",{class:"mord mathrm"},"km")]),n("span",{class:"msupsub"},[n("span",{class:"vlist-t"},[n("span",{class:"vlist-r"},[n("span",{class:"vlist",style:{height:"0.8984em"}},[n("span",{style:{top:"-3.1473em","margin-right":"0.05em"}},[n("span",{class:"pstrut",style:{height:"2.7em"}}),n("span",{class:"sizing reset-size6 size3 mtight"},[n("span",{class:"mord mathrm mtight"},"2")])])])])])])])])])])]),a("\u4E2D)\u5728\u540D\u4E3A\u201Cdata/p2_icedata_area.hdf5\u201D\u7684\u6587\u4EF6\u4E2D\u53EF\u7528\u3002\u68C0\u67E5\u5E76\u52A0\u8F7D\u8FD9\u4E2A\u6570\u636E\u6587\u4EF6\u3002\u7ED8\u5236\u5B83(\u7528\u989C\u8272\u6761\u548C\u5355\u4F4D)\u3002")])],-1),z=e('<ul><li><a href="/1v1/08-LionGuo/02-Homework-Problem-2-Arctic-Ice/p2_icedata_area.hdf5">p2_icedata_area.hdf5</a></li><li><a href="/1v1/08-LionGuo/02-Homework-Problem-2-Arctic-Ice/p2_icedata.hdf5">p2_icedata.hdf5</a></li></ul><h2 id="\u6587\u4EF6\u8BFB\u53D6" tabindex="-1"><a class="header-anchor" href="#\u6587\u4EF6\u8BFB\u53D6" aria-hidden="true">#</a> \u6587\u4EF6\u8BFB\u53D6</h2><p>\u6B22\u8FCE\u5173\u6CE8\u6211\u516C\u4F17\u53F7\uFF1AAI\u60A6\u521B\uFF0C\u6709\u66F4\u591A\u66F4\u597D\u73A9\u7684\u7B49\u4F60\u53D1\u73B0\uFF01</p><details class="custom-container details"><summary>\u516C\u4F17\u53F7\uFF1AAI\u60A6\u521B\u3010\u4E8C\u7EF4\u7801\u3011</summary><p><img src="'+o+'" alt="" loading="lazy"></p></details>',4),F={class:"custom-container info"},P=n("p",{class:"custom-container-title"},"AI\u60A6\u521B\xB7\u7F16\u7A0B\u4E00\u5BF9\u4E00",-1),Y=n("p",null,"AI\u60A6\u521B\xB7\u63A8\u51FA\u8F85\u5BFC\u73ED\u5566\uFF0C\u5305\u62EC\u300CPython \u8BED\u8A00\u8F85\u5BFC\u73ED\u3001C++ \u8F85\u5BFC\u73ED\u3001java \u8F85\u5BFC\u73ED\u3001\u7B97\u6CD5/\u6570\u636E\u7ED3\u6784\u8F85\u5BFC\u73ED\u3001\u5C11\u513F\u7F16\u7A0B\u3001pygame \u6E38\u620F\u5F00\u53D1\u300D\uFF0C\u5168\u90E8\u90FD\u662F\u4E00\u5BF9\u4E00\u6559\u5B66\uFF1A\u4E00\u5BF9\u4E00\u8F85\u5BFC + \u4E00\u5BF9\u4E00\u7B54\u7591 + \u5E03\u7F6E\u4F5C\u4E1A + \u9879\u76EE\u5B9E\u8DF5\u7B49\u3002\u5F53\u7136\uFF0C\u8FD8\u6709\u7EBF\u4E0B\u7EBF\u4E0A\u6444\u5F71\u8BFE\u7A0B\u3001Photoshop\u3001Premiere \u4E00\u5BF9\u4E00\u6559\u5B66\u3001QQ\u3001\u5FAE\u4FE1\u5728\u7EBF\uFF0C\u968F\u65F6\u54CD\u5E94\uFF01\u5FAE\u4FE1\uFF1AJiabcdefh",-1),N=n("p",null,"C++ \u4FE1\u606F\u5965\u8D5B\u9898\u89E3\uFF0C\u957F\u671F\u66F4\u65B0\uFF01\u957F\u671F\u62DB\u6536\u4E00\u5BF9\u4E00\u4E2D\u5C0F\u5B66\u4FE1\u606F\u5965\u8D5B\u96C6\u8BAD\uFF0C\u8386\u7530\u3001\u53A6\u95E8\u5730\u533A\u6709\u673A\u4F1A\u7EBF\u4E0B\u4E0A\u95E8\uFF0C\u5176\u4ED6\u5730\u533A\u7EBF\u4E0A\u3002\u5FAE\u4FE1\uFF1AJiabcdefh",-1),T={href:"http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes",target:"_blank",rel:"noopener noreferrer"},L=n("p",null,"\u65B9\u6CD5\u4E8C\uFF1A\u5FAE\u4FE1\uFF1AJiabcdefh",-1),E=n("p",null,[n("img",{src:p,alt:"",loading:"lazy"})],-1);function j(B,G){const s=r("ExternalLinkIcon");return i(),c("div",null,[d,n("p",null,[a("The purpose of this problem is to become familiar with loading, manipulating, and analyzing image-like data, plotting it. We will use a dataset collected by the AMSR-E instrument "),n("a",m,[a("Aqua"),t(s)]),a(" satellite.")]),n("blockquote",null,[n("p",null,[a("\u8FD9\u4E2A\u95EE\u9898\u7684\u76EE\u7684\u662F\u719F\u6089\u52A0\u8F7D\u3001\u64CD\u4F5C\u548C\u5206\u6790\u7C7B\u4F3C\u56FE\u50CF\u7684\u6570\u636E\uFF0C\u5E76\u7ED8\u5236\u5B83\u3002\u6211\u4EEC\u5C06\u4F7F\u7528AMSR-E\u4EEA\u5668"),n("a",k,[a("Aqua"),t(s)]),a("\u536B\u661F\u6536\u96C6\u7684\u6570\u636E\u96C6\u3002")])]),n("p",null,[a("The data consists of maps of the concentration of ice in the Arctic collected between 2006 and 2011. The data obtained from the "),n("a",h,[a("amsr database"),t(s)]),a(" and converted into a single HDF5 file format.")]),n("blockquote",null,[n("p",null,[a("\u8FD9\u4E9B\u6570\u636E\u75312006\u5E74\u81F32011\u5E74\u6536\u96C6\u7684\u5317\u6781\u51B0\u6D53\u5EA6\u5730\u56FE\u7EC4\u6210\u3002\u4ECE"),n("a",v,[a("amsr\u6570\u636E\u5E93"),t(s)]),a("\u83B7\u5F97\u7684\u6570\u636E\uFF0C\u5E76\u8F6C\u6362\u4E3A\u5355\u4E00\u7684HDF5\u6587\u4EF6\u683C\u5F0F\u3002")])]),b,n("blockquote",null,[n("p",null,[a("Try experimenting with matplotlib "),_,a(" to get a good "),n("a",y,[a("representation of dates in the tick labels"),t(s)]),a(".")])]),n("blockquote",null,[n("p",null,[a("\u5C1D\u8BD5\u4F7F\u7528matplotlib ' set_major_formatter '\u6765\u83B7\u5F97\u4E00\u4E2A\u5F88\u597D\u7684"),n("a",f,[a("\u5728\u6807\u8BB0\u6807\u7B7E\u4E2D\u65E5\u671F\u7684\u8868\u793A"),t(s)]),a("\u3002")])]),g,w,q,n("p",null,[a("However, these maps are projections of a spherical surface, so "),n("a",x,[a("pixels have different area"),t(s)]),a(".")]),n("blockquote",null,[n("p",null,[a("\u7136\u800C\uFF0C\u8FD9\u4E9B\u5730\u56FE\u662F\u7403\u9762\u7684\u6295\u5F71\uFF0C\u6240\u4EE5"),n("a",D,[a("\u50CF\u7D20\u6709\u4E0D\u540C\u7684\u9762\u79EF"),t(s)]),a("\u3002")])]),M,A,H,I,z,n("div",F,[P,Y,N,n("p",null,[a("\u65B9\u6CD5\u4E00\uFF1A"),n("a",T,[a("QQ"),t(s)])]),L]),E])}const R=l(u,[["render",j],["__file","02-Homework-Problem-2-Arctic-Ice.html.vue"]]);export{R as default};
