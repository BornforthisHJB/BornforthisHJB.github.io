import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as e,c as a,e as s}from"./app.9add2d53.js";const o={},c=s(`<p><code>&lt;form&gt;</code>元素代表了表单，继承了 HTMLFormElement 接口。</p><h2 id="htmlformelement-的实例属性" tabindex="-1"><a class="header-anchor" href="#htmlformelement-的实例属性" aria-hidden="true">#</a> HTMLFormElement 的实例属性</h2><ul><li><code>elements</code>：返回一个类似数组的对象，成员是属于该表单的所有控件元素。该属性只读。</li><li><code>length</code>：返回一个整数，表示属于该表单的控件数量。该属性只读。</li><li><code>name</code>：字符串，表示该表单的名称。</li><li><code>method</code>：字符串，表示提交给服务器时所使用的 HTTP 方法。</li><li><code>target</code>：字符串，表示表单提交后，服务器返回的数据的展示位置。</li><li><code>action</code>：字符串，表示表单提交数据的 URL。</li><li><code>enctype</code>（或<code>encoding</code>）：字符串，表示表单提交数据的编码方法，可能的值有<code>application/x-www-form-urlencoded</code>、<code>multipart/form-data</code>和<code>text/plain</code>。</li><li><code>acceptCharset</code>：字符串，表示服务器所能接受的字符编码，多个编码格式之间使用逗号或空格分隔。</li><li><code>autocomplete</code>：字符串<code>on</code>或<code>off</code>，表示浏览器是否要对<code>&lt;input&gt;</code>控件提供自动补全。</li><li><code>noValidate</code>：布尔值，表示是否关闭表单的自动校验。</li></ul><h2 id="htmlformelement-的实例方法" tabindex="-1"><a class="header-anchor" href="#htmlformelement-的实例方法" aria-hidden="true">#</a> HTMLFormElement 的实例方法</h2><ul><li><code>submit()</code>：提交表单，但是不会触发<code>submit</code>事件和表单的自动校验。</li><li><code>reset()</code>：重置表单控件的值为默认值。</li><li><code>checkValidity()</code>：如果控件能够通过自动校验，返回<code>true</code>，否则返回<code>false</code>，同时触发<code>invalid</code>事件。</li></ul><p>下面是一个创建表单并提交的例子。</p><div class="language-javascript line-numbers-mode" data-ext="js"><pre class="language-javascript"><code><span class="token keyword">var</span> f <span class="token operator">=</span> document<span class="token punctuation">.</span><span class="token function">createElement</span><span class="token punctuation">(</span><span class="token string">&#39;form&#39;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
document<span class="token punctuation">.</span>body<span class="token punctuation">.</span><span class="token function">appendChild</span><span class="token punctuation">(</span>f<span class="token punctuation">)</span><span class="token punctuation">;</span>
f<span class="token punctuation">.</span>action <span class="token operator">=</span> <span class="token string">&#39;/cgi-bin/some.cgi&#39;</span><span class="token punctuation">;</span>
f<span class="token punctuation">.</span>method <span class="token operator">=</span> <span class="token string">&#39;POST&#39;</span><span class="token punctuation">;</span>
f<span class="token punctuation">.</span><span class="token function">submit</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">;</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,7),t=[c];function i(l,d){return e(),a("div",null,t)}const u=n(o,[["render",i],["__file","form.html.vue"]]);export{u as default};
