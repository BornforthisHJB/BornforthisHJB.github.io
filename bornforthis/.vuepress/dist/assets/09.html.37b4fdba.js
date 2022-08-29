import{_ as t}from"./gzh.aa7caba6.js";import{_ as p}from"./zsxq.96f46dfd.js";import{_ as e}from"./plugin-vue_export-helper.21dcd24c.js";import{o,c as i,a as n,b as c,e as l,d as s,r as u}from"./app.2f2e4e4d.js";const r={},k=l(`<h1 id="_1-\u5B9E\u73B0-python-\u5206\u5272\u89C6\u9891" tabindex="-1"><a class="header-anchor" href="#_1-\u5B9E\u73B0-python-\u5206\u5272\u89C6\u9891" aria-hidden="true">#</a> 1. \u5B9E\u73B0 Python \u5206\u5272\u89C6\u9891</h1><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># -*- coding: utf-8 -*-</span>
<span class="token comment"># @Author: AI\u60A6\u521B</span>
<span class="token comment"># @Date:   2022-05-19 11:40:50</span>
<span class="token comment"># @Last Modified by:   aiyc</span>
<span class="token comment"># @Last Modified time: 2022-05-20 11:28:48</span>
<span class="token keyword">import</span> os<span class="token punctuation">,</span> time

<span class="token keyword">def</span> <span class="token function">parse_path</span><span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token comment"># for i in os.walk(path):</span>
	<span class="token keyword">for</span> dirpath<span class="token punctuation">,</span> dirnames<span class="token punctuation">,</span> filenames <span class="token keyword">in</span> os<span class="token punctuation">.</span>walk<span class="token punctuation">(</span>path<span class="token punctuation">)</span><span class="token punctuation">:</span>
		<span class="token comment"># print(i)</span>
		<span class="token keyword">for</span> path <span class="token keyword">in</span> filenames<span class="token punctuation">:</span>
			<span class="token comment"># print(os.path.join(dirpath, path))</span>
			<span class="token comment"># file_path = os.path.join(dirpath, path)</span>
			<span class="token comment"># if file_path.split(&quot;.&quot;)[-1] == &quot;mp4&quot;: </span>
			<span class="token keyword">if</span> path<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&quot;.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">&quot;mp4&quot;</span><span class="token punctuation">:</span> 
				<span class="token comment"># print(file_path)</span>
				<span class="token keyword">return</span> path

<span class="token keyword">def</span> <span class="token function">generate_html</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token keyword">pass</span>
<span class="token keyword">def</span> <span class="token function">split_movie</span><span class="token punctuation">(</span>path<span class="token punctuation">,</span> movie_name<span class="token operator">=</span><span class="token string">&quot;Defualt&quot;</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token comment"># os.system(&quot;cd result&quot;)</span>
	os<span class="token punctuation">.</span>chdir<span class="token punctuation">(</span><span class="token string">&quot;result&quot;</span><span class="token punctuation">)</span>  <span class="token comment"># \u6307\u5B9A\u8F93\u51FA\u8DEF\u5F84</span>
	<span class="token keyword">print</span><span class="token punctuation">(</span>os<span class="token punctuation">.</span>getcwd<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">6</span><span class="token punctuation">)</span>
	os<span class="token punctuation">.</span>system<span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;ffmpeg -i </span><span class="token interpolation"><span class="token punctuation">{</span>path<span class="token punctuation">}</span></span><span class="token string"> -profile:v &quot;</span></span> \\
		<span class="token string">&quot;baseline -level 3.0 -s 1920x1080 -start_number 0 &quot;</span> \\
		<span class="token string-interpolation"><span class="token string">f&quot;-hls_time 10 -hls_list_size 0 -f hls </span><span class="token interpolation"><span class="token punctuation">{</span>movie_name<span class="token punctuation">}</span></span><span class="token string">.m3u8&quot;</span></span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
	path <span class="token operator">=</span> <span class="token string">&quot;.&quot;</span>
	file_path <span class="token operator">=</span> parse_path<span class="token punctuation">(</span>path<span class="token punctuation">)</span>
	r_path <span class="token operator">=</span> os<span class="token punctuation">.</span>path<span class="token punctuation">.</span>join<span class="token punctuation">(</span>os<span class="token punctuation">.</span>getcwd<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">,</span> file_path<span class="token punctuation">)</span>
	<span class="token comment"># movie_name = file_path.split(&quot;.&quot;)[0].replace(&quot;\\\\&quot;, &quot;&quot;)</span>
	movie_name <span class="token operator">=</span> file_path<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&quot;.&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span>
	<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&quot;r_path: </span><span class="token interpolation"><span class="token punctuation">{</span>r_path<span class="token punctuation">}</span></span><span class="token string">, \\nmovie_name: </span><span class="token interpolation"><span class="token punctuation">{</span>movie_name<span class="token punctuation">}</span></span><span class="token string">&quot;</span></span><span class="token punctuation">)</span>
	<span class="token comment"># print(os.getcwd())</span>
	<span class="token comment"># print(os.path.join(os.getcwd(), file_path))</span>
	split_movie<span class="token punctuation">(</span>r_path<span class="token punctuation">,</span> movie_name<span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&quot;__main__&quot;</span><span class="token punctuation">:</span>
	main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6B22\u8FCE\u5173\u6CE8\u6211\u516C\u4F17\u53F7\uFF1AAI\u60A6\u521B\uFF0C\u6709\u66F4\u591A\u66F4\u597D\u73A9\u7684\u7B49\u4F60\u53D1\u73B0\uFF01</p><details class="custom-container details"><summary>\u516C\u4F17\u53F7\uFF1AAI\u60A6\u521B\u3010\u4E8C\u7EF4\u7801\u3011</summary><p><img src="`+t+'" alt=""></p></details>',4),d={class:"custom-container info"},m=n("p",{class:"custom-container-title"},"AI\u60A6\u521B\xB7\u7F16\u7A0B\u4E00\u5BF9\u4E00",-1),v=n("p",null,"AI\u60A6\u521B\xB7\u63A8\u51FA\u8F85\u5BFC\u73ED\u5566\uFF0C\u5305\u62EC\u300CPython \u8BED\u8A00\u8F85\u5BFC\u73ED\u3001C++ \u8F85\u5BFC\u73ED\u3001java \u8F85\u5BFC\u73ED\u3001\u7B97\u6CD5/\u6570\u636E\u7ED3\u6784\u8F85\u5BFC\u73ED\u3001\u5C11\u513F\u7F16\u7A0B\u3001pygame \u6E38\u620F\u5F00\u53D1\u300D\uFF0C\u5168\u90E8\u90FD\u662F\u4E00\u5BF9\u4E00\u6559\u5B66\uFF1A\u4E00\u5BF9\u4E00\u8F85\u5BFC + \u4E00\u5BF9\u4E00\u7B54\u7591 + \u5E03\u7F6E\u4F5C\u4E1A + \u9879\u76EE\u5B9E\u8DF5\u7B49\u3002\u5F53\u7136\uFF0C\u8FD8\u6709\u7EBF\u4E0B\u7EBF\u4E0A\u6444\u5F71\u8BFE\u7A0B\u3001Photoshop\u3001Premiere \u4E00\u5BF9\u4E00\u6559\u5B66\u3001QQ\u3001\u5FAE\u4FE1\u5728\u7EBF\uFF0C\u968F\u65F6\u54CD\u5E94\uFF01\u5FAE\u4FE1\uFF1AJiabcdefh",-1),_=n("p",null,"C++ \u4FE1\u606F\u5965\u8D5B\u9898\u89E3\uFF0C\u957F\u671F\u66F4\u65B0\uFF01\u957F\u671F\u62DB\u6536\u4E00\u5BF9\u4E00\u4E2D\u5C0F\u5B66\u4FE1\u606F\u5965\u8D5B\u96C6\u8BAD\uFF0C\u8386\u7530\u3001\u53A6\u95E8\u5730\u533A\u6709\u673A\u4F1A\u7EBF\u4E0B\u4E0A\u95E8\uFF0C\u5176\u4ED6\u5730\u533A\u7EBF\u4E0A\u3002\u5FAE\u4FE1\uFF1AJiabcdefh",-1),h=s("\u65B9\u6CD5\u4E00\uFF1A"),b={href:"http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes",target:"_blank",rel:"noopener noreferrer"},f=s("QQ"),q=n("p",null,"\u65B9\u6CD5\u4E8C\uFF1A\u5FAE\u4FE1\uFF1AJiabcdefh",-1),g=n("p",null,[n("img",{src:p,alt:""})],-1);function y(w,x){const a=u("ExternalLinkIcon");return o(),i("div",null,[k,n("div",d,[m,v,_,n("p",null,[h,n("a",b,[f,c(a)])]),q]),g])}var N=e(r,[["render",y],["__file","09.html.vue"]]);export{N as default};
