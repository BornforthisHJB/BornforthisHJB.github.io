import{_ as e}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as d,c,e as o}from"./app.9add2d53.js";const t={},a=o(`<h2 id="dom" tabindex="-1"><a class="header-anchor" href="#dom" aria-hidden="true">#</a> DOM</h2><p>DOM 是 JavaScript 操作网页的接口，全称为“文档对象模型”（Document Object Model）。它的作用是将网页转为一个 JavaScript 对象，从而可以用脚本进行各种操作（比如增删内容）。</p><p>浏览器会根据 DOM 模型，将结构化文档（比如 HTML 和 XML）解析成一系列的节点，再由这些节点组成一个树状结构（DOM Tree）。所有的节点和最终的树状结构，都有规范的对外接口。</p><p>DOM 只是一个接口规范，可以用各种语言实现。所以严格地说，DOM 不是 JavaScript 语法的一部分，但是 DOM 操作是 JavaScript 最常见的任务，离开了 DOM，JavaScript 就无法控制网页。另一方面，JavaScript 也是最常用于 DOM 操作的语言。后面介绍的就是 JavaScript 对 DOM 标准的实现和用法。</p><h2 id="节点" tabindex="-1"><a class="header-anchor" href="#节点" aria-hidden="true">#</a> 节点</h2><p>DOM 的最小组成单位叫做节点（node）。文档的树形结构（DOM 树），就是由各种不同类型的节点组成。每个节点可以看作是文档树的一片叶子。</p><p>节点的类型有七种。</p><ul><li><code>Document</code>：整个文档树的顶层节点</li><li><code>DocumentType</code>：<code>doctype</code>标签（比如<code>&lt;!DOCTYPE html&gt;</code>）</li><li><code>Element</code>：网页的各种HTML标签（比如<code>&lt;body&gt;</code>、<code>&lt;a&gt;</code>等）</li><li><code>Attr</code>：网页元素的属性（比如<code>class=&quot;right&quot;</code>）</li><li><code>Text</code>：标签之间或标签包含的文本</li><li><code>Comment</code>：注释</li><li><code>DocumentFragment</code>：文档的片段</li></ul><p>浏览器提供一个原生的节点对象<code>Node</code>，上面这七种节点都继承了<code>Node</code>，因此具有一些共同的属性和方法。</p><h2 id="节点树" tabindex="-1"><a class="header-anchor" href="#节点树" aria-hidden="true">#</a> 节点树</h2><p>一个文档的所有节点，按照所在的层级，可以抽象成一种树状结构。这种树状结构就是 DOM 树。它有一个顶层节点，下一层都是顶层节点的子节点，然后子节点又有自己的子节点，就这样层层衍生出一个金字塔结构，又像一棵树。</p><p>浏览器原生提供<code>document</code>节点，代表整个文档。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code>document
<span class="token comment">// 整个文档树</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>文档的第一层有两个节点，第一个是文档类型节点（<code>&lt;!doctype html&gt;</code>），第二个是 HTML 网页的顶层容器标签<code>&lt;html&gt;</code>。后者构成了树结构的根节点（root node），其他 HTML 标签节点都是它的下级节点。</p><p>除了根节点，其他节点都有三种层级关系。</p><ul><li>父节点关系（parentNode）：直接的那个上级节点</li><li>子节点关系（childNodes）：直接的下级节点</li><li>同级节点关系（sibling）：拥有同一个父节点的节点</li></ul><p>DOM 提供操作接口，用来获取这三种关系的节点。比如，子节点接口包括<code>firstChild</code>（第一个子节点）和<code>lastChild</code>（最后一个子节点）等属性，同级节点接口包括<code>nextSibling</code>（紧邻在后的那个同级节点）和<code>previousSibling</code>（紧邻在前的那个同级节点）属性。</p>`,17),i=[a];function l(n,r){return d(),c("div",null,i)}const h=e(t,[["render",l],["__file","general.html.vue"]]);export{h as default};
