import{_ as e}from"./gzh.b03adfd2.js";import{_ as t}from"./zsxq.77f6dc86.js";import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c,a as s,d as a,b as i,e as l,r}from"./app.9b23c9fb.js";const d="/assets/1564991404221966.e8cba9c0.jpg",u="/assets/image-20220804204018133.a979d233.png",m="/assets/image-20220804204757133.62762965.png",g="/assets/image-20220804204915086.39c7cd7a.png",h="/assets/image-20220804205745412.38710cc2.png",k="/assets/image-20220804210007255.94814d5d.png",b="/assets/image-20220804210223138.d2da5d98.png",v="/assets/image-20220804210625235.6da4cb5f.png",_="/assets/image-20220804210950582.df5d43f4.png",x="/assets/image-20220804211359841.07a71df3.png",f="/assets/image-20220804211456290.c0423f3d.png",S="/assets/image-20220804211626909.e0ca9e21.png",y="/assets/image-20220804215136030.3b8d4f19.png",C="/assets/image-20220804215541047.7322ab2d.png",q={},E=l('<h2 id="萨摩耶-猎豹-的精修成长日记" tabindex="-1"><a class="header-anchor" href="#萨摩耶-猎豹-的精修成长日记" aria-hidden="true">#</a> 萨摩耶“猎豹”的精修成长日记</h2><p>昨天 Lisa 带我散步时，向邻居们展示了我的成长日记。</p><p>他们对我拥有网页版的成长日记感到非常惊奇，</p><p>但是他们觉得成长日记可以变得更加美观，</p><p>你愿意帮我装修网页日记吗？</p><p><img src="'+d+'" alt="CSS实战"></p><h2 id="第1步-更改段落字体颜色" tabindex="-1"><a class="header-anchor" href="#第1步-更改段落字体颜色" aria-hidden="true">#</a> 第1步 更改段落字体颜色</h2><p>为了使猎豹的成长日记更加美观，我们需要使用 CSS。</p><p>CSS 能达成的美观程度取决于 CSS 的样式。</p><p>因此，请<strong>在项目文件中新建一个 styles 文件夹</strong>，专门用于存放 CSS 的各类样式文件。</p><p><img src="'+u+'" alt="image-20220804204018133"></p><p>新建一个文件，文件命名为：<code>css1.css</code> ：</p><p><img src="'+m+`" alt="image-20220804204757133"></p><p>将下面这段代码复制到新的文件里：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">p</span> <span class="token punctuation">{</span>
    <span class="token property">color</span><span class="token punctuation">:</span> blue<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+g+`" alt="image-20220804204915086"></p><p><strong>还记得，这段 CSS 代码的含义吗？</strong></p><ul><li><p>P: 选择器。它告诉浏览器选定 P 元素,即段落元素进行更改。</p></li><li><p>color：属性。它告诉浏览器要更改的是颜色属性。</p></li><li><p>blue: 属性的值。本例中的值是蓝色。</p></li></ul><p><strong>把当前 CSS 文件保存到新建的 styles 文件夹中。</strong></p><p>这是你的第一个 CSS 文件，不妨把它命名为 <code>css1</code> (关于文件名你也可另起）。</p><p>既然是 CSS 文件，它的拓展名也应选择 CSS 格式。</p><p>当前，你的编译器里有两个类型的文件。一个是 html 文件，另一个是 css 文件。如果你不在 html 的文件中引用 css 文件，你的网页将不会有任何改变。对本例来说，萨摩耶猎豹的成长日记依然是毛坯网页。</p><h3 id="html-引用-css" tabindex="-1"><a class="header-anchor" href="#html-引用-css" aria-hidden="true">#</a> HTML 引用 CSS</h3><p>接下来，我们要学着<strong>把 css 文件与 html 文件绑定。</strong></p><p>请你在编译器中打开 <code>index.html</code> 文件，将下面的代码复制到 <code>&lt;head&gt;&lt;/head&gt;</code> 之间。</p><div class="language-html line-numbers-mode" data-ext="html"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>link</span> <span class="token attr-name">href</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>styles/css1.css<span class="token punctuation">&quot;</span></span> <span class="token attr-name">rel</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>stylesheet<span class="token punctuation">&quot;</span></span> <span class="token attr-name">type</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>text/css<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p><img src="`+h+'" alt="image-20220804205745412"></p><p>再次把 <code>index.html</code> 文件拖入浏览器中，看看发生了什么变化？</p><h3 id="before-网页" tabindex="-1"><a class="header-anchor" href="#before-网页" aria-hidden="true">#</a> Before 网页</h3><p><img src="'+k+'" alt="image-20220804210007255"></p><h3 id="after-网页" tabindex="-1"><a class="header-anchor" href="#after-网页" aria-hidden="true">#</a> After 网页</h3><p><img src="'+b+`" alt="image-20220804210223138"></p><p>你发现了吗？</p><p>CSS 改变了猎豹成长日记的段落字体颜色。它们由黑变蓝了。</p><h2 id="第2步-更改界面颜色" tabindex="-1"><a class="header-anchor" href="#第2步-更改界面颜色" aria-hidden="true">#</a> 第2步 更改界面颜色</h2><p>猎豹成长日记的界面颜色是白色的，字体颜色在没有使用 CSS 之前是黑色的。界面的白色和字体黑色，均是浏览器给元素设置的默认样式。</p><p>这样的效果有点儿像白纸黑字的合同书，显得单调。</p><p>我们可以通过 CSS 优化这个界面的颜色。直接在 <code>css1.css</code> 文件里面进行编写。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">html</span> <span class="token punctuation">{</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span> #E6E6E6<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+v+'" alt="image-20220804210625235"></p><p>保存当前 html 文件后，请将 <code>index.html</code> 文件拖入浏览器，看看变化：</p><p><img src="'+_+`" alt="image-20220804210950582"></p><p>网页的背景颜色由白色变为灰色了！</p><p>恭喜你！你又新增了一项 CSS 技能！</p><h2 id="第3步-更改定位主标题-添加样式" tabindex="-1"><a class="header-anchor" href="#第3步-更改定位主标题-添加样式" aria-hidden="true">#</a> 第3步 更改定位主标题&amp;添加样式</h2><p>我们将继续在 <code>index.html</code> 的文件中引用新的样式以使网页更美观。</p><p>观察以下代码：</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">h1</span> <span class="token punctuation">{</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 20px 0<span class="token punctuation">;</span> 
    <span class="token property">color</span><span class="token punctuation">:</span> #00539F<span class="token punctuation">;</span>
    <span class="token property">text-shadow</span><span class="token punctuation">:</span> 3px 3px 1px grey<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>还记得其中的要点吗？</p><ul><li><strong>margin：0;</strong> 它可覆盖浏览器为 <code>&lt;h1&gt;</code> 设置的默认样式。</li><li><strong>text-shadow: 3px 3px 1px grey;</strong> 它能为 <code>&lt;h1&gt;</code> 字体添加阴影效果。</li></ul><p><img src="`+x+'" alt="image-20220804211359841"></p><p>注意：</p><ul><li>如果 html 引用了 css 文件后，网页仍没有发现变化，请注意检查 <code>&lt;link&gt;</code> 元素属性 href 内的地址。比如：我们将更改文档体格式设置的文件命名为css1，请确定其在 href 中被指向正确。</li></ul><p>如果你跟着我们的步骤，你的网页已发生了变化：</p><p><img src="'+f+`" alt="image-20220804211456290"></p><h2 id="第4步-更改文档体格式设置" tabindex="-1"><a class="header-anchor" href="#第4步-更改文档体格式设置" aria-hidden="true">#</a> 第4步 更改文档体格式设置</h2><p>仅改变标题的样式，网页还是不够美观。</p><p>我们可尝试编写下面这段代码，它能使网页更加精致。</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">body</span> <span class="token punctuation">{</span>
    <span class="token property">width</span><span class="token punctuation">:</span> 600px<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
    <span class="token property">background-color</span><span class="token punctuation">:</span>#FFCCEB<span class="token punctuation">;</span>
    <span class="token property">padding</span><span class="token punctuation">:</span> 0 20px 20px 20px<span class="token punctuation">;</span>
    <span class="token property">border</span><span class="token punctuation">:</span> 3px solid grey<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p><img src="`+S+'" alt="image-20220804211626909"></p><p>你能理解以上代码的含义吗？</p><ul><li><strong>body：选择器</strong>。</li><li><strong>width: 600px;</strong> 说明 body 元素的宽度保持在 600 像素。</li><li><strong>margin: 0 auto；</strong> 为 margin 或 padding 等属性设置两个值，第一个值代表元素的上、下方向（本例设置为 0）；第二个值代表左、右两边（本例中的 auto 是特殊值，含义是水平方向左右对称）。</li><li><strong>background-color: #FFCCEB;</strong> 它指定了 body 元素的背景颜色。<code>#FFCCEB</code> 是颜色的十六进制编码。你不需要记忆这些编码。需要时，请前往 the color picker 或使用在线取色器，即可获得你想要的颜色的十六进制编码。</li><li><strong>padding: 0 20px 20px 20px;</strong> 内边距设置的四个值。用于给网页内容的四周制造一些空白空间。这些空间为右边、下方，左边的内边距，像素为20。它们的值按照上、右、下、左的顺序排列。</li><li><strong>border: 5px solid grey;</strong> 为 body 设置 3 像素的灰色实线边框。</li></ul><p>如果你跟着我们的步骤，猎豹的成长日记现在已经是这样的了：</p><p><img src="'+y+`" alt="image-20220804215136030"></p><p>猜你可能并不喜欢粉萌的配色。</p><p>我们建议你在 CSS 文件中尝试不同的值。比如：为 <code>background-color</code> 添加其它的颜色或是改变 border 的粗细和颜色。</p><p>只要敢于尝试，你会发现你的每次更改都会使网页产生变化！</p><h2 id="第5步-图片居中" tabindex="-1"><a class="header-anchor" href="#第5步-图片居中" aria-hidden="true">#</a> 第5步 图片居中</h2><p>网页中的图片向左对齐显得拘谨。</p><p>使用以下 CSS 样式，将帮助网页的图片居中显示;</p><div class="language-css line-numbers-mode" data-ext="css"><pre class="language-css"><code><span class="token selector">img</span> <span class="token punctuation">{</span>
    <span class="token property">display</span><span class="token punctuation">:</span> block<span class="token punctuation">;</span>
    <span class="token property">margin</span><span class="token punctuation">:</span> 0 auto<span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>注意:</p><ul><li><code>&lt;img&gt;</code> 是内联元素，为了赋予它也具有块级元素更改外边距和其它间距的值的行为，我们必须使用 <code>display:block</code></li></ul><p>如果你在 <code>index.html</code> 文件中引用了以上 CSS 的样式, 原本向左对齐的图片都能居中显示了：</p><p><img src="`+C+'" alt="image-20220804215541047"></p><p>此刻，如果你的编译器中已存有 5 个 css 文件，说明你：</p><ol><li><p>掌握了更改字体颜色、背景颜色、添加文本阴影、文档体格式设置以及图片居中。</p></li><li><p>已经入门 CSS 了！</p></li></ol><p>尽管入门了 CSS，猎豹的网页看起来还不像那些明星网页那般吸引人，但它已经比仅使用 html 时更加丰富了。</p><p>接下来，我们将带领你入门 JS，JS 能使猎豹的成长日记与访问它的用户互动起来。</p><h2 id="代码下载" tabindex="-1"><a class="header-anchor" href="#代码下载" aria-hidden="true">#</a> 代码下载</h2><p><button name="button" style="color:black;"><a href="https://bornforthis.cn/web_runing/data/base_09/base_09.zip" target="_blank">代码下载</a></button></p><details class="custom-container details"><summary>公众号：AI悦创【二维码】</summary><p><img src="'+e+'" alt=""></p></details>',82),B={class:"custom-container info"},F=s("p",{class:"custom-container-title"},"AI悦创·编程一对一",-1),w=s("p",null,"AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh",-1),I=s("p",null,"C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh",-1),J={href:"http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes",target:"_blank",rel:"noopener noreferrer"},P=s("p",null,"方法二：微信：Jiabcdefh",-1),A=s("p",null,[s("img",{src:t,alt:""})],-1);function L(N,Q){const n=r("ExternalLinkIcon");return o(),c("div",null,[E,s("div",B,[F,w,I,s("p",null,[a("方法一："),s("a",J,[a("QQ"),i(n)])]),P]),A])}const z=p(q,[["render",L],["__file","base_09.html.vue"]]);export{z as default};
