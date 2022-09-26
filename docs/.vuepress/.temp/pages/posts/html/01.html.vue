<template><div><h2 id="html-注释标签" tabindex="-1"><a class="header-anchor" href="#html-注释标签" aria-hidden="true">#</a> HTML <code v-pre>&lt;!--...--&gt;</code> 注释标签</h2>
<h2 id="标签定义及使用说明" tabindex="-1"><a class="header-anchor" href="#标签定义及使用说明" aria-hidden="true">#</a> 标签定义及使用说明</h2>
<p><code v-pre>&lt;!--...--&gt;</code> 注释标签用来在源文档中插入注释。注释不会在浏览器中显示。</p>
<p>您可使用注释对您的代码进行解释，这样做有助于您在以后的时间对代码的编辑。特别是代码量很大的情况下很有用。</p>
<p>您也可以在注释内容存储针对程序所定制的信息。在这种情况下，这些信息对用户是不可见的，但是对程序来说是可用的。一个好的习惯是把注释或样式元素放入注释文本中，这样就可避免不支持脚本或样式的老浏览器把它们显示为纯文本。</p>
<div class="language-javascript ext-js line-numbers-mode"><pre v-pre class="language-javascript"><code><span class="token operator">&lt;</span>script type<span class="token operator">=</span><span class="token string">"text/javascript"</span><span class="token operator">></span>            
<span class="token operator">&lt;</span><span class="token operator">!</span><span class="token operator">--</span>             
<span class="token keyword">function</span> <span class="token function">displayMsg</span><span class="token punctuation">(</span><span class="token punctuation">)</span>                
<span class="token punctuation">{</span>                
<span class="token function">alert</span><span class="token punctuation">(</span><span class="token string">"Hello World!"</span><span class="token punctuation">)</span>                
<span class="token punctuation">}</span>                
<span class="token comment">//-->                </span>
<span class="token operator">&lt;</span><span class="token operator">/</span>script<span class="token operator">></span> 
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="@source/posts/html/01.assets/201611031658515662.png" alt="html 注释代码分析图" loading="lazy"></p>
<p>**注释：**命令行最后的两个正斜杠（<code v-pre>//</code>）是 JavaScript 注释符号。这确保了 JavaScript 不会执行 <code v-pre>--&gt;</code> 标签。</p>
<p>除了在源文档中有非常明显的作用外，许多 Web 服务器也利用注释来实现文档服务端软件特有的特性。这些服务器可以扫描文档，从传统的 <code v-pre>HTML/XHTML</code> 注释中找到特定的字符序列，然后再根据嵌在注释中的命令采取相应的动作。这些动作可能是简单的包括其他文件中的文本（即所谓的服务器端包含，<code v-pre>server-inside include</code>），也可能是复杂地执行其他命令去动态生成文档的内容。</p>
<p>HTML 注释：</p>
<div class="language-html ext-html line-numbers-mode"><pre v-pre class="language-html"><code><span class="token doctype"><span class="token punctuation">&lt;!</span><span class="token doctype-tag">DOCTYPE</span> <span class="token name">html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>meta</span> <span class="token attr-name">charset</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">"</span>utf-8<span class="token punctuation">"</span></span><span class="token punctuation">></span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">></span></span>Bornforthis(bornforthis.cn)<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">></span></span>

<span class="token comment">&lt;!--这是一个注释，注释在浏览器中不会显示--></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>p</span><span class="token punctuation">></span></span>这是一个段落<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>p</span><span class="token punctuation">></span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">></span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">></span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以使用的开发的在线 HTML 直接测试：<a href="https://bornforthis.cn/html_runing/01-1.html" target="_blank" rel="noopener noreferrer">https://bornforthis.cn/html_runing/01-1.html<ExternalLinkIcon/></a></p>
<h2 id="待更新" tabindex="-1"><a class="header-anchor" href="#待更新" aria-hidden="true">#</a> 待更新</h2>
</div></template>


