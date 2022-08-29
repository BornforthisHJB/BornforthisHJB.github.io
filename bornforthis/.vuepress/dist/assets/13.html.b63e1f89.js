import{_ as d}from"./gzh.aa7caba6.js";import{_ as n}from"./zsxq.96f46dfd.js";import{_ as i}from"./plugin-vue_export-helper.21dcd24c.js";import{o as l,c as r,a as e,b as t,e as c,d as s,r as m}from"./app.2f2e4e4d.js";const u={},o=c(`<p>\u4F60\u597D\uFF0C\u6211\u662F\u60A6\u521B\u3002</p><h1 id="\u64CD\u4F5C\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#\u64CD\u4F5C\u6570\u636E\u5E93" aria-hidden="true">#</a> \u64CD\u4F5C\u6570\u636E\u5E93</h1><h2 id="\u8FDE\u63A5\u6570\u636E\u5E93" tabindex="-1"><a class="header-anchor" href="#\u8FDE\u63A5\u6570\u636E\u5E93" aria-hidden="true">#</a> \u8FDE\u63A5\u6570\u636E\u5E93</h2><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>mysql -uroot -proot;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u67E5\u770B\u5F53\u524D\u4F7F\u7528\u7684\u6570\u636E\u5E93\u{1F447}" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u5F53\u524D\u4F7F\u7528\u7684\u6570\u636E\u5E93\u{1F447}" aria-hidden="true">#</a> \u67E5\u770B\u5F53\u524D\u4F7F\u7528\u7684\u6570\u636E\u5E93\u{1F447}</h2><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>show databases;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u67E5\u770B\u6240\u6709\u6570\u636E\u5E93\u{1F447}" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u6240\u6709\u6570\u636E\u5E93\u{1F447}" aria-hidden="true">#</a> \u67E5\u770B\u6240\u6709\u6570\u636E\u5E93\u{1F447}</h2><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>select database();
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u67E5\u770B\u6570\u636E\u5E93\u4F7F\u7528\u7AEF\u53E3" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u6570\u636E\u5E93\u4F7F\u7528\u7AEF\u53E3" aria-hidden="true">#</a> \u67E5\u770B\u6570\u636E\u5E93\u4F7F\u7528\u7AEF\u53E3</h2><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>show variables like &#39;port&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u67E5\u770B\u6570\u636E\u5E93\u7F16\u7801" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u6570\u636E\u5E93\u7F16\u7801" aria-hidden="true">#</a> \u67E5\u770B\u6570\u636E\u5E93\u7F16\u7801</h2><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>show variables like &#39;character%&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>character_set_client</code> \u4E3A\u5BA2\u6237\u7AEF\u7F16\u7801\u65B9\u5F0F <code>character_set_connection</code> \u4E3A\u5EFA\u7ACB\u8FDE\u63A5\u4F7F\u7528\u7684\u7F16\u7801 <code>character_set_database</code> \u4E3A\u6570\u636E\u5E93\u7684\u7F16\u7801 <code>character_set_results</code> \u4E3A\u7ED3\u679C\u96C6\u7684\u7F16\u7801 <code>character_set_server</code> \u4E3A\u6570\u636E\u5E93\u670D\u52A1\u5668\u7684\u7F16\u7801</p><h1 id="\u64CD\u4F5C\u8868" tabindex="-1"><a class="header-anchor" href="#\u64CD\u4F5C\u8868" aria-hidden="true">#</a> \u64CD\u4F5C\u8868</h1><h2 id="\u67E5\u770B\u6570\u636E\u5E93\u8868\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u6570\u636E\u5E93\u8868\u4FE1\u606F" aria-hidden="true">#</a> \u67E5\u770B\u6570\u636E\u5E93\u8868\u4FE1\u606F</h2><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>show tables;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>show tables from book;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>show columns from reader;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u67E5\u770B\u8868\u7ED3\u6784\u4FE1\u606F" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u8868\u7ED3\u6784\u4FE1\u606F" aria-hidden="true">#</a> \u67E5\u770B\u8868\u7ED3\u6784\u4FE1\u606F</h2><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>desc reader;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u67E5\u770B\u6570\u636E\u8868\u5F53\u65F6\u521B\u5EFA\u8868\u7684\u8BED\u53E5" tabindex="-1"><a class="header-anchor" href="#\u67E5\u770B\u6570\u636E\u8868\u5F53\u65F6\u521B\u5EFA\u8868\u7684\u8BED\u53E5" aria-hidden="true">#</a> \u67E5\u770B\u6570\u636E\u8868\u5F53\u65F6\u521B\u5EFA\u8868\u7684\u8BED\u53E5</h2><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>show create table reader;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h2 id="\u4FEE\u6539\u8868\u7ED3\u6784" tabindex="-1"><a class="header-anchor" href="#\u4FEE\u6539\u8868\u7ED3\u6784" aria-hidden="true">#</a> \u4FEE\u6539\u8868\u7ED3\u6784</h2><p><code>alter table</code> \u8868\u540D add \u5217\u540D \u7C7B\u578B/\u7EA6\u675F; \u6DFB\u52A0\u5B57\u6BB5</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>alter table students add birthday datetime default &#39;2012-12-12 12:12:12&#39;;
alter table students add birthday datetime default &#39;2008-08-08 12:12:12&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p><code>alter table</code> \u8868\u540D modify \u5217\u540D \u7C7B\u578B\u53CA\u7EA6\u675F; \u4FEE\u6539\u5B57\u6BB5\uFF0C\u5B57\u6BB5\u540D\u79F0\u4E0D\u4F1A\u88AB\u91CD\u65B0\u547D\u540D</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>alter table students modify brithday date default &#39;2012-12-12&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><code>alter table</code> \u8868\u540D <code>change</code> \u539F\u5217\u540D \u65B0\u5217\u540D \u7C7B\u578B\u53CA\u7EA6\u675F; \u4FEE\u6539\u5B57\u6BB5\uFF0C\u5B57\u6BB5\u540D\u4F1A\u88AB\u91CD\u65B0\u547D\u540D\uFF0C\u5373\u4FEE\u6539\u539F\u5217\u540D</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>alter table students change birthday birth date default &#39;2012-12-12&#39;;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\u4FEE\u6539\u8868\u5220\u9664\u5B57\u6BB5</strong></p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>alter table students drop birth;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>tudents | CREATE TABLE \`students\` (
  \`id\` int(10) unsigned NOT NULL AUTO_INCREMENT,
  \`name\` varchar(15) NOT NULL,
  \`age\` tinyint(3) unsigned DEFAULT &#39;0&#39;,
  \`high\` decimal(5,2) DEFAULT &#39;0.00&#39;,
  \`gender\` enum(&#39;\u7537&#39;,&#39;\u5973&#39;,&#39;\u4E2D\u6027&#39;,&#39;\u4FDD\u5BC6&#39;) DEFAULT NULL,
  \`cls_id\` int(10) unsigned NOT NULL,
  \`brith\` date DEFAULT &#39;2011-11-11&#39;,
  PRIMARY KEY (\`id\`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 |
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u5220\u9664\u8868</strong></p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>drop table students;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><h1 id="\u64CD\u4F5C\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u64CD\u4F5C\u6570\u636E" aria-hidden="true">#</a> \u64CD\u4F5C\u6570\u636E</h1><p><strong>\u6570\u636E\u589E\u5220\u6539\u67E5</strong></p><p><code>insert [into]</code> \u8868\u540D <code>values</code> (\u503C1\uFF0C\u503C2\uFF0C\u2026)</p><p>\u5168\u5217\u63D2\u5165 \u503C\u548C\u8868\u7684\u5B57\u6BB5\u7684\u987A\u5E8F\u4E00\u4E00\u5BF9\u5E94,\u5168\u5217\u63D2\u5165\u5728\u5B9E\u9645\u5F00\u53D1\u4E2D\u7528\u7684\u4E0D\u591A\uFF0C\u5982\u679C\u8868\u7ED3\u6784\u4E00\u65E6\u53D1\u751F\u53D8\u5316\uFF0C\u5168\u5217\u63D2\u5165\u5C31\u4F1A\u62A5\u9519\uFF1B</p><p>\u5360\u4F4D\u7B26\uFF1A\u53EA\u6709\u4E3B\u952E\u5B57\u6BB5\u624D\u6709\u5360\u4F4D\u7B26\u7684\u6982\u5FF5 \uFF0C\u5176\u8868\u793A\u4E3A 0\uFF0Cdefault \uFF0Cnull</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>insert into students values (0,&#39;\u5C0F\u4E54&#39;,18,180.00,&#39;\u5973&#39;,2);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u5982\u679C\u591A\u6572\u4E86\u4E00\u4E2A\u56DE\u8F66\uFF0C\u5F04\u6210\u4E86\u4E24\u4E2A\u6570\u636E\uFF0C\u73B0\u5728\u6211\u4EEC\u628A\u5B83\u6539\u5220\u9664\u4E00\u4E2A</p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>delete from students -&gt; where id=1;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\u6307\u5B9A\u5217\u63D2\u5165</strong></p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>mysql&gt; insert into students
    -&gt; (name,age,high,gender)
    -&gt; values
    -&gt; (&#39;\u5F20\u98DE&#39;,20,190.00,&#39;\u5973&#39;);
Query OK, 1 row affected, 1 warning (0.03 sec)
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u591A\u884C\u63D2\u5165 \u6279\u91CF\u63D2\u5165 insert into \u8868\u540D\uFF08\u52171\uFF0C\u2026\uFF09 values (\u503C1\uFF0C\u2026),(\u503C2\uFF0C\u2026)\u2026</strong></p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>mysql&gt; insert into students
    -&gt; values
    -&gt; (0,&#39;\u5B59\u5C1A\u9999&#39;,18,180.00,&#39;\u5973&#39;,2),
    -&gt; (1,&#39;\u5B59\u609F\u7A7A&#39;,15,170.00,&#39;\u7537&#39;,2);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>mysql&gt; insert into students
    -&gt; (name,age,high,gender)
    -&gt; values
    -&gt; (&#39;\u516B\u6212&#39;,20,175.00,&#39;\u7537&#39;),
    -&gt; (&#39;\u609F\u7A7A&#39;,22,180.00,&#39;\u7537&#39;);
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><strong>\u4FEE\u6539 update</strong></p><p>where \u8868\u793A\u4FEE\u6539\u7684\u8303\u56F4</p><p>update \u8868\u540D set \u5217 1 = \u503C1\uFF0C\u52172 = \u503C2\u2026[where \u6761\u4EF6]</p><p>\u6CA1\u6709 where \u8FDB\u884C\u6761\u4EF6\u9650\u5236\u5C31\u662F \u5168\u8868\u66F4\u65B0</p><div class="language-url ext-url line-numbers-mode"><pre class="language-url"><code><span class="token path">mysql</span>&gt; update students set age=20;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u52A0 where \u6761\u4EF6\u8FDB\u884C\u9650\u5236\u7684</p><p><strong>\u5220\u9664,\u7269\u7406\u5220\u9664,delect from tbname [where \u6761\u4EF6\u5224\u65AD]</strong></p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>delete from students  where id =4
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><strong>\u67E5\u8BE2\u8868\u7684\u6570\u636E</strong></p><div class="language-mysql ext-mysql line-numbers-mode"><pre class="language-mysql"><code>select *from students;
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6B22\u8FCE\u5173\u6CE8\u6211\u516C\u4F17\u53F7\uFF1AAI\u60A6\u521B\uFF0C\u6709\u66F4\u591A\u66F4\u597D\u73A9\u7684\u7B49\u4F60\u53D1\u73B0\uFF01</p><details class="custom-container details"><summary>\u516C\u4F17\u53F7\uFF1AAI\u60A6\u521B\u3010\u4E8C\u7EF4\u7801\u3011</summary><p><img src="`+d+'" alt=""></p></details>',59),v={class:"custom-container info"},h=e("p",{class:"custom-container-title"},"AI\u60A6\u521B\xB7\u7F16\u7A0B\u4E00\u5BF9\u4E00",-1),g=e("p",null,"AI\u60A6\u521B\xB7\u63A8\u51FA\u8F85\u5BFC\u73ED\u5566\uFF0C\u5305\u62EC\u300CPython \u8BED\u8A00\u8F85\u5BFC\u73ED\u3001C++ \u8F85\u5BFC\u73ED\u3001java \u8F85\u5BFC\u73ED\u3001\u7B97\u6CD5/\u6570\u636E\u7ED3\u6784\u8F85\u5BFC\u73ED\u3001\u5C11\u513F\u7F16\u7A0B\u3001pygame \u6E38\u620F\u5F00\u53D1\u300D\uFF0C\u5168\u90E8\u90FD\u662F\u4E00\u5BF9\u4E00\u6559\u5B66\uFF1A\u4E00\u5BF9\u4E00\u8F85\u5BFC + \u4E00\u5BF9\u4E00\u7B54\u7591 + \u5E03\u7F6E\u4F5C\u4E1A + \u9879\u76EE\u5B9E\u8DF5\u7B49\u3002\u5F53\u7136\uFF0C\u8FD8\u6709\u7EBF\u4E0B\u7EBF\u4E0A\u6444\u5F71\u8BFE\u7A0B\u3001Photoshop\u3001Premiere \u4E00\u5BF9\u4E00\u6559\u5B66\u3001QQ\u3001\u5FAE\u4FE1\u5728\u7EBF\uFF0C\u968F\u65F6\u54CD\u5E94\uFF01\u5FAE\u4FE1\uFF1AJiabcdefh",-1),b=e("p",null,"C++ \u4FE1\u606F\u5965\u8D5B\u9898\u89E3\uFF0C\u957F\u671F\u66F4\u65B0\uFF01\u957F\u671F\u62DB\u6536\u4E00\u5BF9\u4E00\u4E2D\u5C0F\u5B66\u4FE1\u606F\u5965\u8D5B\u96C6\u8BAD\uFF0C\u8386\u7530\u3001\u53A6\u95E8\u5730\u533A\u6709\u673A\u4F1A\u7EBF\u4E0B\u4E0A\u95E8\uFF0C\u5176\u4ED6\u5730\u533A\u7EBF\u4E0A\u3002\u5FAE\u4FE1\uFF1AJiabcdefh",-1),p=s("\u65B9\u6CD5\u4E00\uFF1A"),y={href:"http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes",target:"_blank",rel:"noopener noreferrer"},q=s("QQ"),_=e("p",null,"\u65B9\u6CD5\u4E8C\uFF1A\u5FAE\u4FE1\uFF1AJiabcdefh",-1),f=e("p",null,[e("img",{src:n,alt:""})],-1);function x(w,E){const a=m("ExternalLinkIcon");return l(),r("div",null,[o,e("div",v,[h,g,b,e("p",null,[p,e("a",y,[q,t(a)])]),_]),f])}var I=i(u,[["render",x],["__file","13.html.vue"]]);export{I as default};
