import{_ as e}from"./gzh-DnOBNg6W.js";import{_ as i}from"./zsxq-BcdwOI-_.js";import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as s,a as n,o as l}from"./app-BOPxYLyE.js";const r={};function h(o,t){return l(),s("div",null,t[0]||(t[0]=[n(`<h2 id="example" tabindex="-1"><a class="header-anchor" href="#example"><span>Example</span></a></h2><p>Find out if a string contains a sequence of characters:</p><blockquote><p>找出一个字符串是否包含一个字符序列:</p></blockquote><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> myStr </span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;Hello&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">myStr</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">contains</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Hel&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">));</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">   // true</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">myStr</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">contains</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;e&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">));</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">     // true</span></span>
<span class="line"><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">System</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">out</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">println</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#E45649;--shiki-dark:#E5C07B;">myStr</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">contains</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;">&quot;Hi&quot;</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">));</span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;">    // false</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="definition-and-usage" tabindex="-1"><a class="header-anchor" href="#definition-and-usage"><span>Definition and Usage</span></a></h2><blockquote><p>定义和用法</p></blockquote><p>The <code>contains()</code> method checks whether a string contains a sequence of characters.</p><blockquote><p><code>contains()</code>方法检查字符串是否包含字符序列。</p></blockquote><p>Returns <code>true</code> if the characters exist and <code>false</code> if not.</p><blockquote><p>如果字符存在返回&#39; true &#39;，如果不存在返回&#39; false &#39;。</p></blockquote><h2 id="syntax" tabindex="-1"><a class="header-anchor" href="#syntax"><span>Syntax</span></a></h2><blockquote><p>语法</p></blockquote><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> boolean</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> contains</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">CharSequence</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;"> chars)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="parameter-values" tabindex="-1"><a class="header-anchor" href="#parameter-values"><span>Parameter Values</span></a></h2><blockquote><p>参数值</p></blockquote><table><thead><tr><th style="text-align:left;">Parameter</th><th style="text-align:left;">Description</th></tr></thead><tbody><tr><td style="text-align:left;">CharSequence <em>chars</em><br>字符序列 <em>字符</em></td><td style="text-align:left;">The characters to be searched for<br>要搜索的字符</td></tr></tbody></table><div class="hint-container tip"><p class="hint-container-title">提示</p><p>The CharSequence interface is a readable sequence of char values, found in the java.lang package.</p><blockquote><p>CharSequence 接口是一个可读的 char 值序列，可在 java.lang 包中找到。</p></blockquote></div><h2 id="technical-details" tabindex="-1"><a class="header-anchor" href="#technical-details"><span>Technical Details</span></a></h2><div style="text-align:left;"><table><thead><tr><th style="text-align:left;">Returns:</th><th>A <code>boolean</code>, indicating whether a sequence of characters exist in the specified string:<br>1. <code>true</code> - sequence of characters exists<br>2. <code>false</code> - sequence of characters do not exist</th><th>A <code>boolean</code>，表示指定字符串中是否存在一个字符序列：<br>1. <code>true</code>- 存在字符序列<br>2. <code>false</code>- 字符序列不存在</th></tr></thead><tbody><tr><td style="text-align:left;">Throws:</td><td><code>NullPointerException</code> - if the returned value is null<br><code>NullPointerException</code>- 如果返回值为 null</td><td></td></tr><tr><td style="text-align:left;">Java Version:</td><td>1.5</td><td></td></tr></tbody></table></div><p>欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！</p><details class="hint-container details"><summary>公众号：AI悦创【二维码】</summary><figure><img src="`+e+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></details><div class="hint-container info"><p class="hint-container-title">AI悦创·编程一对一</p><p>AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh</p><p>C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh</p><p>方法一：<a href="http://wpa.qq.com/msgrd?v=3&amp;uin=1432803776&amp;site=qq&amp;menu=yes" target="_blank" rel="noopener noreferrer">QQ</a></p><p>方法二：微信：Jiabcdefh</p></div><figure><img src="'+i+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',23)]))}const g=a(r,[["render",h],["__file","01-Java-String-contains-Method.html.vue"]]),u=JSON.parse('{"path":"/Java/supplement/01-Java-String-contains-Method.html","title":"01-Java String contains() Method","lang":"zh-CN","frontmatter":{"title":"01-Java String contains() Method","date":"2022-11-12T21:35:55.000Z","icon":"java","author":"AI悦创","isOriginal":true,"category":["Java体系课","Java FQA","Java supplement"],"tag":["Java体系课","Java FQA","Java supplement"],"sticky":false,"star":false,"article":true,"timeline":true,"image":false,"navbar":true,"sidebarIcon":true,"headerDepth":5,"comment":true,"lastUpdated":true,"editLink":false,"backToTop":true,"toc":true,"description":"Example Find out if a string contains a sequence of characters: 找出一个字符串是否包含一个字符序列: Definition and Usage 定义和用法 The contains() method checks whether a string contains a sequence o...","head":[["meta",{"property":"og:url","content":"https://bornforthis.cn/Java/supplement/01-Java-String-contains-Method.html"}],["meta",{"property":"og:site_name","content":"AI悦创-Python一对一辅导"}],["meta",{"property":"og:title","content":"01-Java String contains() Method"}],["meta",{"property":"og:description","content":"Example Find out if a string contains a sequence of characters: 找出一个字符串是否包含一个字符序列: Definition and Usage 定义和用法 The contains() method checks whether a string contains a sequence o..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:image","content":"https://bornforthis.cn/gzh.jpg"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-11-19T14:58:08.000Z"}],["meta",{"property":"article:author","content":"AI悦创"}],["meta",{"property":"article:tag","content":"Java体系课"}],["meta",{"property":"article:tag","content":"Java FQA"}],["meta",{"property":"article:tag","content":"Java supplement"}],["meta",{"property":"article:published_time","content":"2022-11-12T21:35:55.000Z"}],["meta",{"property":"article:modified_time","content":"2024-11-19T14:58:08.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"01-Java String contains() Method\\",\\"image\\":[\\"https://bornforthis.cn/gzh.jpg\\",\\"https://bornforthis.cn/zsxq.jpg\\"],\\"datePublished\\":\\"2022-11-12T21:35:55.000Z\\",\\"dateModified\\":\\"2024-11-19T14:58:08.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"AI悦创\\"}]}"]]},"headers":[{"level":2,"title":"Example","slug":"example","link":"#example","children":[]},{"level":2,"title":"Definition and Usage","slug":"definition-and-usage","link":"#definition-and-usage","children":[]},{"level":2,"title":"Syntax","slug":"syntax","link":"#syntax","children":[]},{"level":2,"title":"Parameter Values","slug":"parameter-values","link":"#parameter-values","children":[]},{"level":2,"title":"Technical Details","slug":"technical-details","link":"#technical-details","children":[]}],"git":{"createdTime":1732028288000,"updatedTime":1732028288000,"contributors":[{"name":"AndersonHJB","email":"bornforthis@bornforthis.cn","commits":1}]},"readingTime":{"minutes":1.88,"words":563},"filePathRelative":"Java/supplement/01-Java-String-contains-Method.md","localizedDate":"2022年11月12日","copyright":{"author":"AI悦创"},"autoDesc":true}');export{g as comp,u as data};
