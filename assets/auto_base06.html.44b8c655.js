import{_ as e}from"./gzh.b03adfd2.js";import{_ as t}from"./zsxq.77f6dc86.js";import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c as i,a as n,d as s,b as l,e as c,r as u}from"./app.9b23c9fb.js";const r="/assets/image-20220712135438520.684278c0.png",d={},k=c(`<h2 id="xlutils-库的安装" tabindex="-1"><a class="header-anchor" href="#xlutils-库的安装" aria-hidden="true">#</a> xlutils 库的安装</h2><p>你好，我是悦创。</p><h3 id="需求" tabindex="-1"><a class="header-anchor" href="#需求" aria-hidden="true">#</a> 需求</h3><p>往“<strong>虚假用户数据.xls</strong>”里面，追加额外的 50 条用户数据，就是<strong>标题+数据</strong>，达到 150 条。</p><h3 id="思路" tabindex="-1"><a class="header-anchor" href="#思路" aria-hidden="true">#</a> 思路</h3><ul><li>xlrd 是读取 Excel 文件的库</li><li>xlwt 是写入 Excel 的库</li></ul><p>如果使用以上两个库，可以一边读取，一边写入新文件。</p><p>不过在此，有另一个方便使用的库，库名是 xlutils，安装命令：<code>pip install xlutils</code>。</p><div class="language-cmd line-numbers-mode" data-ext="cmd"><pre class="language-cmd"><code>pip install xlutils
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>安装好之后，开始写代码，完成追加 50 条数据的需求。</p><h2 id="书写代码" tabindex="-1"><a class="header-anchor" href="#书写代码" aria-hidden="true">#</a> 书写代码</h2><ol><li>导入所需的库，分别是 xlrd 和 xlutils</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> xlrd
<span class="token keyword">from</span> xlutils<span class="token punctuation">.</span>copy <span class="token keyword">import</span> copy
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><ol start="2"><li>使用 xlrd 打开文件，然后 xlutils 赋值打开后的 workbook，如下代码：</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>wb <span class="token operator">=</span> xlrd<span class="token punctuation">.</span>open_workbook<span class="token punctuation">(</span><span class="token string">&#39;虚假用户数据.xls&#39;</span><span class="token punctuation">,</span> formatting_info<span class="token operator">=</span><span class="token boolean">True</span><span class="token punctuation">)</span>
xwb <span class="token operator">=</span> copy<span class="token punctuation">(</span>wb<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>wb 对象是 workbook，xwb 也是 workbook，但是后者可以写操作，前者不可以。</p><ol start="3"><li>有了 workbook 之后，就开始指定 sheet，并获取这个 sheet 的总行数。</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>sheet <span class="token operator">=</span> xwb<span class="token punctuation">.</span>get_sheet<span class="token punctuation">(</span><span class="token string">&#39;第一个sheet&#39;</span><span class="token punctuation">)</span>
rows <span class="token operator">=</span> sheet<span class="token punctuation">.</span>get_rows<span class="token punctuation">(</span><span class="token punctuation">)</span>
length <span class="token operator">=</span> <span class="token builtin">len</span><span class="token punctuation">(</span>rows<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>length<span class="token punctuation">)</span>  <span class="token comment"># 输出 100</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>指定名称为“<strong>第一个sheet</strong>”的 sheet，然后获取全部的行，并输出总量，就得到了 sheet 中有 100 行。</p><ol start="4"><li>有了具体的行数，然后保证原有数据不变动的情况下，从第 101 行写数据。101 行的索引是 100，索引循环的起始数值是 100。</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> faker

fake <span class="token operator">=</span> faker<span class="token punctuation">.</span>Faker<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token builtin">len</span><span class="token punctuation">(</span>rows<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token number">150</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    sheet<span class="token punctuation">.</span>write<span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> fake<span class="token punctuation">.</span>first_name<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&#39; &#39;</span> <span class="token operator">+</span> fake<span class="token punctuation">.</span>last_name<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    sheet<span class="token punctuation">.</span>write<span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">1</span><span class="token punctuation">,</span> fake<span class="token punctuation">.</span>address<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    sheet<span class="token punctuation">.</span>write<span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">2</span><span class="token punctuation">,</span> fake<span class="token punctuation">.</span>phone_number<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
    sheet<span class="token punctuation">.</span>write<span class="token punctuation">(</span>i<span class="token punctuation">,</span> <span class="token number">3</span><span class="token punctuation">,</span> fake<span class="token punctuation">.</span>city<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>range 函数，从 <code>len(rows)</code> 开始，到 <code>150-1</code> 结束，共 50 条。 faker 库是制造虚假数据的，这个在前面写数据有用过，循环写入了 50条。</p><ol start="5"><li>最后保存就可以了</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>xwb<span class="token punctuation">.</span>save<span class="token punctuation">(</span><span class="token string">&#39;虚假用户数据.xls&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用 xwb，也就是操作之后的 workbook 对象，直接保存原来的文件名就可以了。</p><h2 id="office-办公软件查看数据结果" tabindex="-1"><a class="header-anchor" href="#office-办公软件查看数据结果" aria-hidden="true">#</a> Office 办公软件查看数据结果</h2><p>最后使用 Excel 软件打开这个 xls 文件，查看数据有多少行，如下代码：</p><p><img src="`+r+'" alt="image-20220712135438520"></p><p>总共 150 行，原有数据 100 行，加上新写入的 50 行，数据没问题。</p><p>将以上的代码，合并起来多次运行，“<strong>虚假用户数据.xls</strong>” 的数据量会逐步增加，运行一次增加 50 行。</p><p>xlutils 是 <code>xlrd+xlwt</code> 的操作合集，但又不等于他们相加。库不一样，完成的操作不一样，所需的场景也不同，不同的需求用不同的库。</p><p>欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！</p><details class="custom-container details"><summary>公众号：AI悦创【二维码】</summary><p><img src="'+e+'" alt=""></p></details>',33),m={class:"custom-container info"},h=n("p",{class:"custom-container-title"},"AI悦创·编程一对一",-1),v=n("p",null,"AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh",-1),b=n("p",null,"C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh",-1),g={href:"http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes",target:"_blank",rel:"noopener noreferrer"},x=n("p",null,"方法二：微信：Jiabcdefh",-1),_=n("p",null,[n("img",{src:t,alt:""})],-1);function f(w,y){const a=u("ExternalLinkIcon");return o(),i("div",null,[k,n("div",m,[h,v,b,n("p",null,[s("方法一："),n("a",g,[s("QQ"),l(a)])]),x]),_])}const N=p(d,[["render",f],["__file","auto_base06.html.vue"]]);export{N as default};
