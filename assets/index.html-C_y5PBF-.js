import{_ as s}from"./gzh-DnOBNg6W.js";import{_ as a}from"./zsxq-BcdwOI-_.js";import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,o as e,a as o}from"./app-DguKnX9N.js";const p="/assets/image-20220712135438520-B_Lqb20R.png",t={},r=o(`<h2 id="xlutils-库的安装" tabindex="-1"><a class="header-anchor" href="#xlutils-库的安装"><span>xlutils 库的安装</span></a></h2><p>你好，我是悦创。</p><h3 id="需求" tabindex="-1"><a class="header-anchor" href="#需求"><span>需求</span></a></h3><p>往“<strong>虚假用户数据.xls</strong>”里面，追加额外的 50 条用户数据，就是<strong>标题+数据</strong>，达到 150 条。</p><h3 id="思路" tabindex="-1"><a class="header-anchor" href="#思路"><span>思路</span></a></h3><ul><li>xlrd 是读取 Excel 文件的库</li><li>xlwt 是写入 Excel 的库</li></ul><p>如果使用以上两个库，可以一边读取，一边写入新文件。</p><p>不过在此，有另一个方便使用的库，库名是 xlutils，安装命令：<code>pip install xlutils</code>。</p><div class="language-cmd line-numbers-mode" data-highlighter="shiki" data-ext="cmd" data-title="cmd" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#D8DEE9FF;">pip install xlutils</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>安装好之后，开始写代码，完成追加 50 条数据的需求。</p><h2 id="书写代码" tabindex="-1"><a class="header-anchor" href="#书写代码"><span>书写代码</span></a></h2><ol><li>导入所需的库，分别是 xlrd 和 xlutils</li></ol><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">import</span><span style="color:#D8DEE9FF;"> xlrd</span></span>
<span class="line"><span style="color:#81A1C1;">from</span><span style="color:#D8DEE9FF;"> xlutils</span><span style="color:#ECEFF4;">.</span><span style="color:#D8DEE9FF;">copy </span><span style="color:#81A1C1;">import</span><span style="color:#D8DEE9FF;"> copy</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>使用 xlrd 打开文件，然后 xlutils 赋值打开后的 workbook，如下代码：</li></ol><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#D8DEE9FF;">wb </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> xlrd</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">open_workbook</span><span style="color:#ECEFF4;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">虚假用户数据.xls</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9;"> formatting_info</span><span style="color:#81A1C1;">=True</span><span style="color:#ECEFF4;">)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">xwb </span><span style="color:#81A1C1;">=</span><span style="color:#88C0D0;"> copy</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9FF;">wb</span><span style="color:#ECEFF4;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>wb 对象是 workbook，xwb 也是 workbook，但是后者可以写操作，前者不可以。</p><ol start="3"><li>有了 workbook 之后，就开始指定 sheet，并获取这个 sheet 的总行数。</li></ol><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#D8DEE9FF;">sheet </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> xwb</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">get_sheet</span><span style="color:#ECEFF4;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">第一个sheet</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#ECEFF4;">)</span></span>
<span class="line"><span style="color:#D8DEE9FF;">rows </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> sheet</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">get_rows</span><span style="color:#ECEFF4;">()</span></span>
<span class="line"><span style="color:#D8DEE9FF;">length </span><span style="color:#81A1C1;">=</span><span style="color:#88C0D0;"> len</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9FF;">rows</span><span style="color:#ECEFF4;">)</span></span>
<span class="line"><span style="color:#88C0D0;">print</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9FF;">length</span><span style="color:#ECEFF4;">)</span><span style="color:#616E88;">  # 输出 100</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>指定名称为“<strong>第一个sheet</strong>”的 sheet，然后获取全部的行，并输出总量，就得到了 sheet 中有 100 行。</p><ol start="4"><li>有了具体的行数，然后保证原有数据不变动的情况下，从第 101 行写数据。101 行的索引是 100，索引循环的起始数值是 100。</li></ol><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">import</span><span style="color:#D8DEE9FF;"> faker</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9FF;">fake </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> faker</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">Faker</span><span style="color:#ECEFF4;">()</span></span>
<span class="line"><span style="color:#81A1C1;">for</span><span style="color:#D8DEE9FF;"> i </span><span style="color:#81A1C1;">in</span><span style="color:#88C0D0;"> range</span><span style="color:#ECEFF4;">(</span><span style="color:#88C0D0;">len</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9FF;">rows</span><span style="color:#ECEFF4;">),</span><span style="color:#B48EAD;"> 150</span><span style="color:#ECEFF4;">):</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    sheet</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">write</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9FF;">i</span><span style="color:#ECEFF4;">,</span><span style="color:#B48EAD;"> 0</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> fake</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">first_name</span><span style="color:#ECEFF4;">()</span><span style="color:#81A1C1;"> +</span><span style="color:#ECEFF4;"> &#39;</span><span style="color:#ECEFF4;"> &#39;</span><span style="color:#81A1C1;"> +</span><span style="color:#D8DEE9FF;"> fake</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">last_name</span><span style="color:#ECEFF4;">())</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    sheet</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">write</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9FF;">i</span><span style="color:#ECEFF4;">,</span><span style="color:#B48EAD;"> 1</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> fake</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">address</span><span style="color:#ECEFF4;">())</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    sheet</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">write</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9FF;">i</span><span style="color:#ECEFF4;">,</span><span style="color:#B48EAD;"> 2</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> fake</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">phone_number</span><span style="color:#ECEFF4;">())</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    sheet</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">write</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9FF;">i</span><span style="color:#ECEFF4;">,</span><span style="color:#B48EAD;"> 3</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9FF;"> fake</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">city</span><span style="color:#ECEFF4;">())</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>range 函数，从 <code>len(rows)</code> 开始，到 <code>150-1</code> 结束，共 50 条。 faker 库是制造虚假数据的，这个在前面写数据有用过，循环写入了 50条。</p><ol start="5"><li>最后保存就可以了</li></ol><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#D8DEE9FF;">xwb</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">save</span><span style="color:#ECEFF4;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">虚假用户数据.xls</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#ECEFF4;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>使用 xwb，也就是操作之后的 workbook 对象，直接保存原来的文件名就可以了。</p><h2 id="office-办公软件查看数据结果" tabindex="-1"><a class="header-anchor" href="#office-办公软件查看数据结果"><span>Office 办公软件查看数据结果</span></a></h2><p>最后使用 Excel 软件打开这个 xls 文件，查看数据有多少行，如下代码：</p><figure><img src="`+p+'" alt="image-20220712135438520" tabindex="0" loading="lazy"><figcaption>image-20220712135438520</figcaption></figure><p>总共 150 行，原有数据 100 行，加上新写入的 50 行，数据没问题。</p><p>将以上的代码，合并起来多次运行，“<strong>虚假用户数据.xls</strong>” 的数据量会逐步增加，运行一次增加 50 行。</p><p>xlutils 是 <code>xlrd+xlwt</code> 的操作合集，但又不等于他们相加。库不一样，完成的操作不一样，所需的场景也不同，不同的需求用不同的库。</p><p>欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！</p><details class="hint-container details"><summary>公众号：AI悦创【二维码】</summary><figure><img src="'+s+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></details><div class="hint-container info"><p class="hint-container-title">AI悦创·编程一对一</p><p>AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh</p><p>C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh</p><p>方法一：<a href="http://wpa.qq.com/msgrd?v=3&amp;uin=1432803776&amp;site=qq&amp;menu=yes" target="_blank" rel="noopener noreferrer">QQ</a></p><p>方法二：微信：Jiabcdefh</p></div><figure><img src="'+a+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',35),i=[r];function c(d,E){return e(),n("div",null,i)}const m=l(t,[["render",c],["__file","index.html.vue"]]),C=JSON.parse('{"path":"/Python/pyauto/gkk/","title":"01-Python 追加 Excel 数据","lang":"zh-CN","frontmatter":{"title":"01-Python 追加 Excel 数据","date":"2022-07-16T21:02:30.000Z","author":"AI悦创","isOriginal":true,"category":["Python 办公自动化","公开课"],"tag":["Python 办公自动化","公开课"],"icon":"python","sticky":false,"star":false,"article":true,"timeline":true,"image":false,"navbar":true,"sidebarIcon":true,"headerDepth":5,"comment":true,"lastUpdated":true,"editLink":true,"backToTop":true,"toc":true,"feed":false,"seo":false,"head":[]},"headers":[{"level":2,"title":"xlutils 库的安装","slug":"xlutils-库的安装","link":"#xlutils-库的安装","children":[{"level":3,"title":"需求","slug":"需求","link":"#需求","children":[]},{"level":3,"title":"思路","slug":"思路","link":"#思路","children":[]}]},{"level":2,"title":"书写代码","slug":"书写代码","link":"#书写代码","children":[]},{"level":2,"title":"Office 办公软件查看数据结果","slug":"office-办公软件查看数据结果","link":"#office-办公软件查看数据结果","children":[]}],"git":{"createdTime":1706497934000,"updatedTime":1706497934000,"contributors":[{"name":"AndersonHJB","email":"cleland1432803776@icloud.com","commits":1}]},"readingTime":{"minutes":2.97,"words":891},"filePathRelative":"Python/pyauto/gkk/README.md","localizedDate":"2022年7月16日","copyright":{"author":"AI悦创"}}');export{m as comp,C as data};
