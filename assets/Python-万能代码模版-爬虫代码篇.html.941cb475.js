import{_ as p}from"./gzh.b03adfd2.js";import{_ as o}from"./zsxq.77f6dc86.js";import{_ as l}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as c,c as i,a as n,d as s,b as t,e,r as u}from"./app.f07ad651.js";const r="/assets/c14f6977d6974f58af65b6040640685e.3105871a.png",d="/assets/58e9a48031974c11b4d83f298ddba5d8.59de2246.png",k="/assets/412e7b2650e243b5a11576463f2e3161.851bcc11.png",m="/assets/874529a42d3d0560e5965a49faefeb1b.f50b27aa.png",v="/assets/e1cee1a571fbbd19f9e84dd396a88301.399d73f7.png",b="/assets/0ece9ddffbc51e2f4ba97ed8a40334ea.79a86505.png",_="/assets/03b70ec0aba50839a0d4f94a1ac01f43.f690d917.png",h="/assets/c768ab06672d2b09227329e2b8eb84ac.dcbcbf33.png",f="/assets/5d42c267664961f6dd31b45fcdeed47a.229211e0.png",g="/assets/041af86fd475fe50f5d66889ffbec0cf.2a411d03.png",y="/assets/f9c98665cf0620a17e3e2d8ad1cb29b7.77d541c2.png",q="/assets/c86cbec6a689367db7d95c616c9a4f7d.cf0b148f.png",w="/assets/cd9ac482fb77bb9c6a9150dff05adea3.56f7cdc8.png",A="/assets/d7ab476eba1a0e6b21653e33d3e6bb40.01b3cc34.png",E="/assets/730e859afee98d70e720362197b52c6c.41632cd1.png",x={},B=n("p",null,"你好，我是悦创。",-1),z=n("p",null,"很多同学一听到 Python 或编程语言，可能条件反射就会觉得“很难”。但今天的 Python 课程是个例外，因为今天讲的 **Python 技能，不需要你懂计算机原理，也不需要你理解复杂的编程模式。**即使是非开发人员，只要替换链接、文件，就可以轻松完成。",-1),P=n("p",null,"并且这些几个实用技巧，简直是 Python 日常帮手的最佳实践。比如：",-1),D=n("ul",null,[n("li",null,"爬取文档，爬表格，爬学习资料；"),n("li",null,"玩转图表，生成数据可视化；"),n("li",null,"批量命名文件，实现自动化办公；"),n("li",null,"批量搞图，加水印、调尺寸。")],-1),C=n("p",null,"接下来，我们就逐一用 Python 实现，其中我提供的代码是万能代码，只用替换成你想爬的网页链接、文件位置、照片就可以进行处理了。",-1),S=n("p",null,"如果你没有安装 Python 及相关环境搭建，你可以参考我之前写的文章：",-1),I={href:"https://www.aiyc.top/772.html",target:"_blank",rel:"noopener noreferrer"},T={href:"https://www.bilibili.com/video/BV1sa4y1a7kN",target:"_blank",rel:"noopener noreferrer"},H=n("p",null,[s("**Tips：**因为不同的章节的数据可能会交叉引用，所以建议你首先在桌面建立一个工作夹，然后每个章节都单独建立一个 Python 文件进行实验。比如可以新建一个 pytips 的目录，然后在该目录下，每个章节创建一个 tips 文件夹，里面创建对应的 "),n("code",null,".py"),s(" 文件。（按你具体的来，我的文件夹也和这个不一样）")],-1),J=n("h2",{id:"声明",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#声明","aria-hidden":"true"},"#"),s(" 声明")],-1),F={href:"https://mp.weixin.qq.com/s/jj8srwUPF9wJOHG7YrQvcA",target:"_blank",rel:"noopener noreferrer"},Y=e('<p>因为：</p><p><img src="'+r+'" alt="在这里插入图片描述" loading="lazy"></p><p><img src="'+d+'" alt="在这里插入图片描述" loading="lazy"></p><p><img src="'+k+'" alt="在这里插入图片描述" loading="lazy"></p><h1 id="_1-巧用-python-爬虫-实现财富自由" tabindex="-1"><a class="header-anchor" href="#_1-巧用-python-爬虫-实现财富自由" aria-hidden="true">#</a> 1. 巧用 Python 爬虫，实现财富自由</h1><p>首先可以用 Python 来进行爬虫，什么是爬虫？简单理解来说就是抓取网络上的数据（文档、资料、图片等）。比如你考研可以爬文档和学习资料，要网络上的表格数据做分析，批量下载图片等。</p><p>下面我们来看看如何一一实现。</p><h2 id="_1-1-爬取文档、学习资料" tabindex="-1"><a class="header-anchor" href="#_1-1-爬取文档、学习资料" aria-hidden="true">#</a> 1.1 爬取文档、学习资料</h2><p>首先，你得先确定你要爬的网站是什么？你要获取的目的是什么？比如，小悦想爬青岩帮网站中的<strong>报考指南</strong>，所以他想搜集目前该网页的所有文章的标题和超链接，以方便后续浏览。</p><p><img src="'+m+'" alt="image.png" loading="lazy"></p><p><img src="'+v+'" alt="image.png" loading="lazy"></p>',11),G={href:"https://zkaoy.com/sions/exam",target:"_blank",rel:"noopener noreferrer"},M=e(`<p>那使用 Python，可以参考以下两步的代码模板实现（提示：需要先安装 Python 依赖：urllib3 bs4）。 <strong>安装所需要的库：</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>pip install urllib3 BeautifulSoup4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>第一步，下载该网页并保存为文件，代码如下。</strong> **PS：**这里，我为了清晰一些，拆成两个代码文件，后面我再来一个合并成一个代码文件。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># urllib3 的方法</span>
<span class="token comment"># file_name:Crawler_urllib3.py</span>
<span class="token keyword">import</span> urllib3


<span class="token keyword">def</span> <span class="token function">download_content</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    第一个函数，用来下载网页，返回网页内容
    参数 url 代表所要下载的网页网址。
    整体代码和之前类似
    &quot;&quot;&quot;</span>
    http <span class="token operator">=</span> urllib3<span class="token punctuation">.</span>PoolManager<span class="token punctuation">(</span><span class="token punctuation">)</span>
    response <span class="token operator">=</span> http<span class="token punctuation">.</span>request<span class="token punctuation">(</span><span class="token string">&quot;GET&quot;</span><span class="token punctuation">,</span> url<span class="token punctuation">)</span>
    response_data <span class="token operator">=</span> response<span class="token punctuation">.</span>data
    html_content <span class="token operator">=</span> response_data<span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> html_content


<span class="token comment"># 第二个函数，将字符串内容保存到文件中</span>
<span class="token comment"># 第一个参数为所要保存的文件名，第二个参数为要保存的字符串内容的变量</span>
<span class="token keyword">def</span> <span class="token function">save_to_file</span><span class="token punctuation">(</span>filename<span class="token punctuation">,</span> content<span class="token punctuation">)</span><span class="token punctuation">:</span>
    fo <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span>filename<span class="token punctuation">,</span> <span class="token string">&quot;w&quot;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span>
    fo<span class="token punctuation">.</span>write<span class="token punctuation">(</span>content<span class="token punctuation">)</span>
    fo<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 下载报考指南的网页</span>
    url <span class="token operator">=</span> <span class="token string">&quot;https://zkaoy.com/sions/exam&quot;</span>
    result <span class="token operator">=</span> download_content<span class="token punctuation">(</span>url<span class="token punctuation">)</span>
    save_to_file<span class="token punctuation">(</span><span class="token string">&quot;tips1.html&quot;</span><span class="token punctuation">,</span> result<span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># requests 代码</span>
<span class="token comment"># file_name:Crawler_requests.py</span>
<span class="token keyword">import</span> requests


<span class="token keyword">def</span> <span class="token function">download_content</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    第一个函数，用来下载网页，返回网页内容
    参数 url 代表所要下载的网页网址。
    整体代码和之前类似
    &quot;&quot;&quot;</span>
    response <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span>text
    <span class="token keyword">return</span> response


<span class="token comment"># 第二个函数，将字符串内容保存到文件中</span>
<span class="token comment"># 第一个参数为所要保存的文件名，第二个参数为要保存的字符串内容的变量</span>
<span class="token keyword">def</span> <span class="token function">save_to_file</span><span class="token punctuation">(</span>filename<span class="token punctuation">,</span> content<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>filename<span class="token punctuation">,</span> mode<span class="token operator">=</span><span class="token string">&quot;w&quot;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
        f<span class="token punctuation">.</span>write<span class="token punctuation">(</span>content<span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 下载报考指南的网页</span>
    url <span class="token operator">=</span> <span class="token string">&quot;https://zkaoy.com/sions/exam&quot;</span>
    result <span class="token operator">=</span> download_content<span class="token punctuation">(</span>url<span class="token punctuation">)</span>
    save_to_file<span class="token punctuation">(</span><span class="token string">&quot;tips1.html&quot;</span><span class="token punctuation">,</span> result<span class="token punctuation">)</span>


<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>第二步，解析网页，并提取出文章的链接和标题。</strong></p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># file_name:html_parse.py</span>
<span class="token comment"># 解析方法一</span>
<span class="token keyword">from</span> bs4 <span class="token keyword">import</span> BeautifulSoup

<span class="token comment"># 输入参数为要分析的 html 文件名，返回值为对应的 BeautifulSoup 对象</span>
<span class="token keyword">def</span> <span class="token function">create_doc_from_filename</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>filename<span class="token punctuation">,</span> <span class="token string">&quot;r&quot;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
		html_content <span class="token operator">=</span> f<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>
		doc <span class="token operator">=</span> BeautifulSoup<span class="token punctuation">(</span>html_content<span class="token punctuation">)</span>
	<span class="token keyword">return</span> doc

<span class="token keyword">def</span> <span class="token function">parse</span><span class="token punctuation">(</span>doc<span class="token punctuation">)</span><span class="token punctuation">:</span>
	post_list <span class="token operator">=</span> doc<span class="token punctuation">.</span>find_all<span class="token punctuation">(</span><span class="token string">&quot;div&quot;</span><span class="token punctuation">,</span> class_<span class="token operator">=</span><span class="token string">&quot;post-info&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">for</span> post <span class="token keyword">in</span> post_list<span class="token punctuation">:</span>
		link <span class="token operator">=</span> post<span class="token punctuation">.</span>find_all<span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
		<span class="token keyword">print</span><span class="token punctuation">(</span>link<span class="token punctuation">.</span>text<span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
		<span class="token keyword">print</span><span class="token punctuation">(</span>link<span class="token punctuation">[</span><span class="token string">&quot;href&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
	filename <span class="token operator">=</span> <span class="token string">&quot;tips1.html&quot;</span>
	doc <span class="token operator">=</span> create_doc_from_filename<span class="token punctuation">(</span>filename<span class="token punctuation">)</span>
	parse<span class="token punctuation">(</span>doc<span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
	main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># file_name:html_parse_lxml.py</span>
<span class="token comment"># 解析方法二，指定解析器</span>
<span class="token keyword">from</span> bs4 <span class="token keyword">import</span> BeautifulSoup

<span class="token comment"># 输入参数为要分析的 html 文件名，返回值为对应的 BeautifulSoup 对象</span>
<span class="token keyword">def</span> <span class="token function">create_doc_from_filename</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>filename<span class="token punctuation">,</span> <span class="token string">&quot;r&quot;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
		html_content <span class="token operator">=</span> f<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>
		soup <span class="token operator">=</span> BeautifulSoup<span class="token punctuation">(</span>html_content<span class="token punctuation">,</span> <span class="token string">&quot;lxml&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">return</span> soup

<span class="token keyword">def</span> <span class="token function">parse</span><span class="token punctuation">(</span>soup<span class="token punctuation">)</span><span class="token punctuation">:</span>
	post_list <span class="token operator">=</span> soup<span class="token punctuation">.</span>find_all<span class="token punctuation">(</span><span class="token string">&quot;div&quot;</span><span class="token punctuation">,</span> class_<span class="token operator">=</span><span class="token string">&quot;post-info&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">for</span> post <span class="token keyword">in</span> post_list<span class="token punctuation">:</span>
		link <span class="token operator">=</span> post<span class="token punctuation">.</span>find_all<span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
		<span class="token keyword">print</span><span class="token punctuation">(</span>link<span class="token punctuation">.</span>text<span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
		<span class="token keyword">print</span><span class="token punctuation">(</span>link<span class="token punctuation">[</span><span class="token string">&quot;href&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
	filename <span class="token operator">=</span> <span class="token string">&quot;tips1.html&quot;</span>
	soup <span class="token operator">=</span> create_doc_from_filename<span class="token punctuation">(</span>filename<span class="token punctuation">)</span>
	parse<span class="token punctuation">(</span>soup<span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
	main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>**PS：**两个代码很像，只是差别在指定了解析器——lxml ​</p><p>执行代码之后，你就可以看到网页中的标题和链接已经被打印到了屏幕上。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>敲黑板！这些省份往届生不能预报名！
https<span class="token punctuation">:</span><span class="token operator">//</span>zkaoy<span class="token punctuation">.</span>com<span class="token operator">/</span><span class="token number">15123</span><span class="token punctuation">.</span>html
二战必须回户籍所在地考吗？
https<span class="token punctuation">:</span><span class="token operator">//</span>zkaoy<span class="token punctuation">.</span>com<span class="token operator">/</span><span class="token number">15103</span><span class="token punctuation">.</span>html
这些同学不能参加预报名！不注意，有可能考研报名失败！
https<span class="token punctuation">:</span><span class="token operator">//</span>zkaoy<span class="token punctuation">.</span>com<span class="token operator">/</span><span class="token number">15093</span><span class="token punctuation">.</span>html
呜呼<span class="token operator">~</span>考研报名费，这种情况可以退款！
https<span class="token punctuation">:</span><span class="token operator">//</span>zkaoy<span class="token punctuation">.</span>com<span class="token operator">/</span><span class="token number">15035</span><span class="token punctuation">.</span>html
注意：又发通知！<span class="token number">22</span>研招有<span class="token number">4</span>点变化‼️
https<span class="token punctuation">:</span><span class="token operator">//</span>zkaoy<span class="token punctuation">.</span>com<span class="token operator">/</span><span class="token number">14977</span><span class="token punctuation">.</span>html
<span class="token number">2021</span>考研初试时间定了！正式网报时间有变化
https<span class="token punctuation">:</span><span class="token operator">//</span>zkaoy<span class="token punctuation">.</span>com<span class="token operator">/</span><span class="token number">14915</span><span class="token punctuation">.</span>html
快码住！考研前的这些关键时间点，千万不能错过！
https<span class="token punctuation">:</span><span class="token operator">//</span>zkaoy<span class="token punctuation">.</span>com<span class="token operator">/</span><span class="token number">14841</span><span class="token punctuation">.</span>html
近万名考生考研报名失败！问题出在这！<span class="token number">22</span>考研一定注意！
https<span class="token punctuation">:</span><span class="token operator">//</span>zkaoy<span class="token punctuation">.</span>com<span class="token operator">/</span><span class="token number">14822</span><span class="token punctuation">.</span>html
往届生比应届生更容易上岸，你认同吗？
https<span class="token punctuation">:</span><span class="token operator">//</span>zkaoy<span class="token punctuation">.</span>com<span class="token operator">/</span><span class="token number">14670</span><span class="token punctuation">.</span>html
各省市考研报名费用！
https<span class="token punctuation">:</span><span class="token operator">//</span>zkaoy<span class="token punctuation">.</span>com<span class="token operator">/</span><span class="token number">14643</span><span class="token punctuation">.</span>html
要开始报名了？现在不需要担心，没你想的那么复杂……
https<span class="token punctuation">:</span><span class="token operator">//</span>zkaoy<span class="token punctuation">.</span>com<span class="token operator">/</span><span class="token number">14620</span><span class="token punctuation">.</span>html
教育部公布重要数据：研究生扩招<span class="token number">20.74</span><span class="token operator">%</span>！
https<span class="token punctuation">:</span><span class="token operator">//</span>zkaoy<span class="token punctuation">.</span>com<span class="token operator">/</span><span class="token number">14593</span><span class="token punctuation">.</span>html
虚假招生？这一高校临近开学取消奖学金！
https<span class="token punctuation">:</span><span class="token operator">//</span>zkaoy<span class="token punctuation">.</span>com<span class="token operator">/</span><span class="token number">14494</span><span class="token punctuation">.</span>html
下个月要预报名了，高频问题早知道
https<span class="token punctuation">:</span><span class="token operator">//</span>zkaoy<span class="token punctuation">.</span>com<span class="token operator">/</span><span class="token number">14399</span><span class="token punctuation">.</span>html
注意！这些网报信息要准备好，否则影响<span class="token number">9</span>月考研报名！
https<span class="token punctuation">:</span><span class="token operator">//</span>zkaoy<span class="token punctuation">.</span>com<span class="token operator">/</span><span class="token number">14352</span><span class="token punctuation">.</span>html
想考上研，各科应该考多少分？
https<span class="token punctuation">:</span><span class="token operator">//</span>zkaoy<span class="token punctuation">.</span>com<span class="token operator">/</span><span class="token number">14273</span><span class="token punctuation">.</span>html
选择报考点需要注意什么？报考点有限制！
https<span class="token punctuation">:</span><span class="token operator">//</span>zkaoy<span class="token punctuation">.</span>com<span class="token operator">/</span><span class="token number">14161</span><span class="token punctuation">.</span>html
各地考研报名费汇总！快来看看你要交多少钱！
https<span class="token punctuation">:</span><span class="token operator">//</span>zkaoy<span class="token punctuation">.</span>com<span class="token operator">/</span><span class="token number">14158</span><span class="token punctuation">.</span>html
考研高校推免人数公布，统考名额还剩多少？
https<span class="token punctuation">:</span><span class="token operator">//</span>zkaoy<span class="token punctuation">.</span>com<span class="token operator">/</span><span class="token number">14092</span><span class="token punctuation">.</span>html
这几所高校考研参考书有变！参考书目要怎么搜集？
https<span class="token punctuation">:</span><span class="token operator">//</span>zkaoy<span class="token punctuation">.</span>com<span class="token operator">/</span><span class="token number">14061</span><span class="token punctuation">.</span>html
院校指南
https<span class="token punctuation">:</span><span class="token operator">//</span>zkaoy<span class="token punctuation">.</span>com<span class="token operator">/</span>sions<span class="token operator">/</span>zxgg1
这些要提前准备好！不然影响报名！
https<span class="token punctuation">:</span><span class="token operator">//</span>zkaoy<span class="token punctuation">.</span>com<span class="token operator">/</span><span class="token number">13958</span><span class="token punctuation">.</span>html
救命！近万人因为这个，错失考研机会！
https<span class="token punctuation">:</span><span class="token operator">//</span>zkaoy<span class="token punctuation">.</span>com<span class="token operator">/</span><span class="token number">13925</span><span class="token punctuation">.</span>html
考研如何看招生简章和招生目录？
https<span class="token punctuation">:</span><span class="token operator">//</span>zkaoy<span class="token punctuation">.</span>com<span class="token operator">/</span><span class="token number">13924</span><span class="token punctuation">.</span>html
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面，我是拆开了，现在合并成一个代码文件即可：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># file_name:Crawler.py</span>
<span class="token keyword">import</span> requests
<span class="token keyword">from</span> bs4 <span class="token keyword">import</span> BeautifulSoup


<span class="token keyword">def</span> <span class="token function">download_content</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token triple-quoted-string string">&quot;&quot;&quot;
    第一个函数，用来下载网页，返回网页内容
    参数 url 代表所要下载的网页网址。
    整体代码和之前类似
    &quot;&quot;&quot;</span>
    response <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">.</span>text
    <span class="token keyword">return</span> response


<span class="token comment"># 第二个函数，将字符串内容保存到文件中</span>
<span class="token comment"># 第一个参数为所要保存的文件名，第二个参数为要保存的字符串内容的变量</span>
<span class="token keyword">def</span> <span class="token function">save_to_file</span><span class="token punctuation">(</span>filename<span class="token punctuation">,</span> content<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>filename<span class="token punctuation">,</span> mode<span class="token operator">=</span><span class="token string">&quot;w&quot;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
        f<span class="token punctuation">.</span>write<span class="token punctuation">(</span>content<span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">create_doc_from_filename</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 输入参数为要分析的 html 文件名，返回值为对应的 BeautifulSoup 对象</span>
    <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span>filename<span class="token punctuation">,</span> <span class="token string">&quot;r&quot;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
        html_content <span class="token operator">=</span> f<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>
        soup <span class="token operator">=</span> BeautifulSoup<span class="token punctuation">(</span>html_content<span class="token punctuation">,</span> <span class="token string">&quot;lxml&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> soup

<span class="token keyword">def</span> <span class="token function">parse</span><span class="token punctuation">(</span>soup<span class="token punctuation">)</span><span class="token punctuation">:</span>
    post_list <span class="token operator">=</span> soup<span class="token punctuation">.</span>find_all<span class="token punctuation">(</span><span class="token string">&quot;div&quot;</span><span class="token punctuation">,</span> class_<span class="token operator">=</span><span class="token string">&quot;post-info&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> post <span class="token keyword">in</span> post_list<span class="token punctuation">:</span>
        link <span class="token operator">=</span> post<span class="token punctuation">.</span>find_all<span class="token punctuation">(</span><span class="token string">&quot;a&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>link<span class="token punctuation">.</span>text<span class="token punctuation">.</span>strip<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span>link<span class="token punctuation">[</span><span class="token string">&quot;href&quot;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token comment"># 下载报考指南的网页</span>
    url <span class="token operator">=</span> <span class="token string">&quot;https://zkaoy.com/sions/exam&quot;</span>
    filename <span class="token operator">=</span> <span class="token string">&quot;tips1.html&quot;</span>
    result <span class="token operator">=</span> download_content<span class="token punctuation">(</span>url<span class="token punctuation">)</span>
    save_to_file<span class="token punctuation">(</span>filename<span class="token punctuation">,</span> result<span class="token punctuation">)</span>
    soup <span class="token operator">=</span> create_doc_from_filename<span class="token punctuation">(</span>filename<span class="token punctuation">)</span>
    parse<span class="token punctuation">(</span>soup<span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,13),N=n("strong",null,"代码文件：",-1),Q={href:"https://github.com/AndersonHJB/AIYC_DATA/tree/main/01-Python",target:"_blank",rel:"noopener noreferrer"},j={href:"https://github.com/AndersonHJB/AIYC_DATA/tree/main/01-Python",target:"_blank",rel:"noopener noreferrer"},L=n("p",null,"那如果你想爬取其他网页如何替换呢？你只需替换几处即可，如下图所示。",-1),R=n("p",null,[n("img",{src:b,alt:"image.png",loading:"lazy"})],-1),V=n("p",null,[n("img",{src:_,alt:"image.png",loading:"lazy"})],-1),O=n("li",null,"替换为想要下载的网页地址",-1),U=n("li",null,"替换为网页保存的文件名",-1),$=n("code",null,"post-info",-1),K={href:"https://www.aiyc.top/673.html#%E5%85%AD%E3%80%81Requests_%E4%B8%8E_BeautifulSoup_%E5%BA%93%E7%9A%84%E5%9F%BA%E7%A1%80%E6%93%8D%E4%BD%9C",target:"_blank",rel:"noopener noreferrer"},W=e(`<h2 id="_1-2-抓取表格-做数据分析" tabindex="-1"><a class="header-anchor" href="#_1-2-抓取表格-做数据分析" aria-hidden="true">#</a> 1.2 抓取表格，做数据分析</h2><p>我们日常在上网的时候，往往都会看到一些有用的表格，都希望保存下来日后使用，但直接复制到 Excel 往往都很容易发生变形，或者乱码，或者格式错乱等种种问题，借助 Python 可以轻松实现网页中表格的保存。（提示：需要先安装依赖: urllib3, pandas）</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>pip install urllib3 pandas
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>以招行外汇页面为例：</p><p><img src="`+h+`" alt="image.png" loading="lazy"></p><p>Python 代码如下：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># file_name: excel_crawler_urllib3.py</span>
<span class="token keyword">import</span> urllib3
<span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd

<span class="token keyword">def</span> <span class="token function">download_content</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token comment"># 创建一个 PoolManager 对象，命名为 http</span>
	http <span class="token operator">=</span> urllib3<span class="token punctuation">.</span>PoolManager<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token comment"># 调用 http 对象的 request 方法，第一个参数传一个字符串 &quot;GET&quot;</span>
	<span class="token comment"># 第二个参数则是要下载的网址，也就是我们的 url 变量</span>
	<span class="token comment"># request 方法会返回一个 HTTPResponse 类的对象，我们命名为 response</span>
	response <span class="token operator">=</span> http<span class="token punctuation">.</span>request<span class="token punctuation">(</span><span class="token string">&quot;GET&quot;</span><span class="token punctuation">,</span> url<span class="token punctuation">)</span>

	<span class="token comment"># 获取 response 对象的 data 属性，存储在变量 response_data 中</span>
	response_data <span class="token operator">=</span> response<span class="token punctuation">.</span>data

	<span class="token comment"># 调用 response_data 对象的 decode 方法，获得网页的内容，存储在 html_content</span>
	<span class="token comment"># 变量中</span>
	html_content <span class="token operator">=</span> response_data<span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">return</span> html_content

<span class="token keyword">def</span> <span class="token function">save_excel</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
	html_content <span class="token operator">=</span> download_content<span class="token punctuation">(</span><span class="token string">&quot;http://fx.cmbchina.com/Hq/&quot;</span><span class="token punctuation">)</span>
	<span class="token comment"># 调用 read_html 函数，传入网页的内容，并将结果存储在 cmb_table_list 中</span>
	<span class="token comment"># read_html 函数返回的是一个 DataFrame 的list</span>
	cmb_table_list <span class="token operator">=</span> pd<span class="token punctuation">.</span>read_html<span class="token punctuation">(</span>html_content<span class="token punctuation">)</span>
	<span class="token comment"># 通过打印每个 list 元素，确认我们所需要的是第二个，也就是下标 1</span>
	cmb_table_list<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>to_excel<span class="token punctuation">(</span><span class="token string">&quot;tips2.xlsx&quot;</span><span class="token punctuation">)</span>

<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
	save_excel<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
	main<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># file_name: excel_crawler_requests.py</span>
<span class="token keyword">import</span> requests
<span class="token keyword">import</span> pandas <span class="token keyword">as</span> pd
<span class="token keyword">from</span> requests<span class="token punctuation">.</span>exceptions <span class="token keyword">import</span> RequestException


<span class="token keyword">def</span> <span class="token function">download_content</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">:</span>
	<span class="token keyword">try</span><span class="token punctuation">:</span>
		response <span class="token operator">=</span> requests<span class="token punctuation">.</span>get<span class="token punctuation">(</span>url<span class="token punctuation">)</span>
		<span class="token keyword">if</span> response<span class="token punctuation">.</span>status_code <span class="token operator">==</span> <span class="token number">200</span><span class="token punctuation">:</span>
			<span class="token keyword">return</span> response<span class="token punctuation">.</span>text
		<span class="token keyword">else</span><span class="token punctuation">:</span>
			<span class="token keyword">return</span> <span class="token string">&quot;None&quot;</span>
	<span class="token keyword">except</span> RequestException <span class="token keyword">as</span> e<span class="token punctuation">:</span>
		<span class="token keyword">return</span> e


<span class="token keyword">def</span> <span class="token function">save_excel</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span><span class="token punctuation">:</span>
	html_content <span class="token operator">=</span> download_content<span class="token punctuation">(</span><span class="token string">&quot;http://fx.cmbchina.com/Hq/&quot;</span><span class="token punctuation">)</span>
	<span class="token comment"># 调用 read_html 函数，传入网页的内容，并将结果存储在 cmb_table_list 中</span>
	<span class="token comment"># read_html 函数返回的是一个 DataFrame 的list</span>
	cmb_table_list <span class="token operator">=</span> pd<span class="token punctuation">.</span>read_html<span class="token punctuation">(</span>html_content<span class="token punctuation">)</span>
	<span class="token comment"># 通过打印每个 list 元素，确认我们所需要的是第二个，也就是下标 1</span>
	<span class="token comment"># print(cmb_table_list)</span>
	cmb_table_list<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">.</span>to_excel<span class="token punctuation">(</span>filename<span class="token punctuation">)</span>


<span class="token keyword">def</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
	filename <span class="token operator">=</span> <span class="token string">&quot;tips2.xlsx&quot;</span>
	save_excel<span class="token punctuation">(</span>filename<span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
	main<span class="token punctuation">(</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>下图为了辅助理解：</p><p><img src="`+f+'" alt="image.png" loading="lazy"></p><p><img src="'+g+'" alt="image.png" loading="lazy"></p><p>执行之后，会在代码文件所在的目录生成 <code>tips2.xlsx</code> 的 excel 文件，打开之后如下图所示。</p><p><img src="'+y+'" alt="image.png" loading="lazy"></p><p>当你希望抓取自己的表格时，替换下面 3 个部分即可。</p><p><img src="'+q+'" alt="image.png" loading="lazy"></p><ol><li>修改你要保存的 excel 文件名称；</li><li>替换为想要抓取表格所在网页的网址；</li><li>替换为表格的序号，比如想要抓取网页中的第几个表格；</li></ol>',16),X={href:"https://github.com/AndersonHJB/AIYC_DATA/tree/main/01-Python%20%E4%B8%87%E8%83%BD%E4%BB%A3%E7%A0%81%E6%A8%A1%E7%89%88%EF%BC%9A10%20%E5%A4%A7%E5%BF%85%E5%AD%A6%E5%AE%9E%E7%94%A8%E6%8A%80%E5%B7%A7/1.2%20%E6%8A%93%E5%8F%96%E8%A1%A8%E6%A0%BC%EF%BC%8C%E5%81%9A%E6%95%B0%E6%8D%AE%E5%88%86%E6%9E%90",target:"_blank",rel:"noopener noreferrer"},Z=e('<h2 id="_1-3-批量下载图片" tabindex="-1"><a class="header-anchor" href="#_1-3-批量下载图片" aria-hidden="true">#</a> 1.3 批量下载图片</h2><p>当我们看到一个网页上有很多喜欢的图片时，一张一张保存效率比较低。 ​</p><p>通过 Python 我们也可以实现快速的图片下载。以堆糖网为例，我们看到了这个网页。</p><p><img src="'+w+`" alt="image.png" loading="lazy"></p><p>感觉很好看，希望能够把所有图片下载下来，方案大体和 1 是一样的。 ​</p><p>我们首先下载网页，然后分析其中的 img 标签，然后把图片下载下载来。首先我们在工作目录建立一个文件夹 tips_3 用来放下载的图片。 ​</p><p>首先还是下载网页，Python 代码如下。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># -*- coding: utf-8 -*-</span>
<span class="token comment"># @Author: AI悦创</span>
<span class="token comment"># @Date:   2021-09-13 20:16:07</span>
<span class="token comment"># @Last Modified by:   aiyc</span>
<span class="token comment"># @Last Modified time: 2021-09-13 21:02:58</span>
<span class="token keyword">import</span> urllib3

<span class="token comment"># 第一个函数，用来下载网页，返回网页内容</span>
<span class="token comment"># 参数 url 代表所要下载的网页网址。</span>
<span class="token comment"># 整体代码和之前类似</span>
<span class="token keyword">def</span> <span class="token function">download_content</span><span class="token punctuation">(</span>url<span class="token punctuation">)</span><span class="token punctuation">:</span>
	http <span class="token operator">=</span> urllib3<span class="token punctuation">.</span>PoolManager<span class="token punctuation">(</span><span class="token punctuation">)</span>
	response <span class="token operator">=</span> http<span class="token punctuation">.</span>request<span class="token punctuation">(</span><span class="token string">&quot;GET&quot;</span><span class="token punctuation">,</span> url<span class="token punctuation">)</span>
	response_data <span class="token operator">=</span> response<span class="token punctuation">.</span>data
	html_content <span class="token operator">=</span> response_data<span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">return</span> html_content
<span class="token comment"># 第二个函数，将字符串内容保存到文件中</span>
<span class="token comment"># 第一个参数为所要保存的文件名，第二个参数为要保存的字符串内容的变量</span>

<span class="token keyword">def</span> <span class="token function">save_to_file</span><span class="token punctuation">(</span>filename<span class="token punctuation">,</span> content<span class="token punctuation">)</span><span class="token punctuation">:</span>
	fo <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span>filename<span class="token punctuation">,</span> <span class="token string">&quot;w&quot;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&quot;utf-8&quot;</span><span class="token punctuation">)</span>
	fo<span class="token punctuation">.</span>write<span class="token punctuation">(</span>content<span class="token punctuation">)</span>
	fo<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>

url <span class="token operator">=</span> <span class="token string">&quot;https://www.duitang.com/search/?kw=AI悦创&amp;type=feed&quot;</span>
result <span class="token operator">=</span> download_content<span class="token punctuation">(</span>url<span class="token punctuation">)</span>
save_to_file<span class="token punctuation">(</span><span class="token string">&quot;tips3.html&quot;</span><span class="token punctuation">,</span> result<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后是抽取 img 标签，下载图片。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> bs4 <span class="token keyword">import</span> BeautifulSoup
<span class="token keyword">from</span> urllib<span class="token punctuation">.</span>request <span class="token keyword">import</span> urlretrieve

<span class="token comment"># 输入参数为要分析的 html 文件名，返回值为对应的 BeautifulSoup 对象</span>
<span class="token keyword">def</span> <span class="token function">create_doc_from_filename</span><span class="token punctuation">(</span>filename<span class="token punctuation">)</span><span class="token punctuation">:</span>
	fo <span class="token operator">=</span> <span class="token builtin">open</span><span class="token punctuation">(</span>filename<span class="token punctuation">,</span> <span class="token string">&quot;r&quot;</span><span class="token punctuation">,</span> encoding<span class="token operator">=</span><span class="token string">&#39;utf-8&#39;</span><span class="token punctuation">)</span>
	html_content <span class="token operator">=</span> fo<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span>
	fo<span class="token punctuation">.</span>close<span class="token punctuation">(</span><span class="token punctuation">)</span>
	doc <span class="token operator">=</span> BeautifulSoup<span class="token punctuation">(</span>html_content<span class="token punctuation">,</span> <span class="token string">&quot;lxml&quot;</span><span class="token punctuation">)</span>
	<span class="token keyword">return</span> doc

doc <span class="token operator">=</span> create_doc_from_filename<span class="token punctuation">(</span><span class="token string">&quot;tips3.html&quot;</span><span class="token punctuation">)</span>
images <span class="token operator">=</span> doc<span class="token punctuation">.</span>find_all<span class="token punctuation">(</span><span class="token string">&quot;img&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> images<span class="token punctuation">:</span>
	src <span class="token operator">=</span> i<span class="token punctuation">[</span><span class="token string">&quot;src&quot;</span><span class="token punctuation">]</span>
	filename <span class="token operator">=</span> src<span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&quot;/&quot;</span><span class="token punctuation">)</span><span class="token punctuation">[</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
	<span class="token comment"># print(i[&quot;src&quot;])</span>
	urlretrieve<span class="token punctuation">(</span>src<span class="token punctuation">,</span> <span class="token string">&quot;tips_3/&quot;</span> <span class="token operator">+</span> filename<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>执行完毕后打开 <code>tips_3 </code>目录，可以看到图片都被下载下来了。</p><p><img src="`+A+'" alt="image.png" loading="lazy"></p><p>替换说明如下。</p><p><img src="'+E+'" alt="image.png" loading="lazy"></p><ol><li>替换为想要保存的文件名（网页文件）；</li><li>替换为想要下载网页的网址；</li><li>替换为想要保存图片的文件夹，需要创建好文件夹。</li></ol>',15),nn=n("strong",null,"另外，有的网站的图片是先显示网页之后才动态加载的，这类动态加载的内容的图片下载是不支持的喔。",-1),sn={href:"https://github.com/AndersonHJB/AIYC_DATA/tree/main/01-Python%20%E4%B8%87%E8%83%BD%E4%BB%A3%E7%A0%81%E6%A8%A1%E7%89%88%EF%BC%9A10%20%E5%A4%A7%E5%BF%85%E5%AD%A6%E5%AE%9E%E7%94%A8%E6%8A%80%E5%B7%A7/1.3%20%E6%89%B9%E9%87%8F%E4%B8%8B%E8%BD%BD%E5%9B%BE%E7%89%87",target:"_blank",rel:"noopener noreferrer"},an=n("p",null,"欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！",-1),tn=n("details",{class:"custom-container details"},[n("summary",null,"公众号：AI悦创【二维码】"),n("p",null,[n("img",{src:p,alt:"",loading:"lazy"})])],-1),en={class:"custom-container info"},pn=n("p",{class:"custom-container-title"},"AI悦创·编程一对一",-1),on=n("p",null,"AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Linux、」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh",-1),ln=n("p",null,"C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh",-1),cn={href:"http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes",target:"_blank",rel:"noopener noreferrer"},un=n("p",null,"方法二：微信：Jiabcdefh",-1),rn=n("p",null,[n("img",{src:o,alt:"",loading:"lazy"})],-1);function dn(kn,mn){const a=u("ExternalLinkIcon");return c(),i("div",null,[B,z,P,D,C,S,n("ul",null,[n("li",null,[n("a",I,[s("数据分析的环境不会搭？看这里准没错！"),t(a)])]),n("li",null,[n("a",T,[s("Python3 网络爬虫系统一对一教学（环境安装）"),t(a)])])]),H,J,n("p",null,[s("推荐去公众号阅读："),n("a",F,[s("https://mp.weixin.qq.com/s/jj8srwUPF9wJOHG7YrQvcA"),t(a)])]),Y,n("blockquote",null,[n("p",null,[s("爬取网站的链接："),n("a",G,[s("https://zkaoy.com/sions/exam"),t(a)]),s(" 目的：收集目前该网页的所有文章的标题和超链接")])]),M,n("p",null,[N,s("["),n("a",Q,[s("https://github.com/AndersonHJB/AIYC_DATA/tree/main/01-Python"),t(a)]),s(" 万能代码模版：10 大必学实用技巧/1.1 巧用 Python 爬虫，实现财富自由]("),n("a",j,[s("https://github.com/AndersonHJB/AIYC_DATA/tree/main/01-Python"),t(a)]),s(" 万能代码模版：10 大必学实用技巧/1.1 巧用 Python 爬虫，实现财富自由) ​")]),L,R,V,n("ol",null,[O,U,n("li",null,[s("是 BeautifulSoup 函数，我们用它一步步从 html 的结构中解析出我们想要的内容，这里我们实现的是首先找到所有 class 属性是 "),$,s(" 的 div 标签，然后将这些标签中的 a 标签的文本部分提取出来。如果你解析的网页结构和这个不同，具体 BeautifulSoup 的用法可以参考我们这节课程 "),n("a",K,[s("https://www.aiyc.top/673.html#六、Requests_与_BeautifulSoup_库的基础操作"),t(a)]),s("。")])]),W,n("p",null,[s("代码链接："),n("a",X,[s("https://github.com/AndersonHJB/AIYC_DATA/tree/main/01-Python%20万能代码模版：10%20大必学实用技巧/1.2%20抓取表格，做数据分析"),t(a)])]),Z,n("p",null,[nn,s(" 代码链接："),n("a",sn,[s("https://github.com/AndersonHJB/AIYC_DATA/tree/main/01-Python%20万能代码模版：10%20大必学实用技巧/1.3%20批量下载图片"),t(a)])]),an,tn,n("div",en,[pn,on,ln,n("p",null,[s("方法一："),n("a",cn,[s("QQ"),t(a)])]),un]),rn])}const fn=l(x,[["render",dn],["__file","Python-万能代码模版-爬虫代码篇.html.vue"]]);export{fn as default};
