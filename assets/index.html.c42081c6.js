import{_ as n}from"./plugin-vue_export-helper.21dcd24c.js";import{o as s,c as a,e as t}from"./app.17a63ca9.js";var p="/assets/eec7c55447ce39942d9a45afe5b78874.a1f404b2.png";const e={},o=t('<blockquote><p>\u673A\u667A\u5982\u4F60\uFF0C\u8FD9\u6837\u4F60\u5C31\u53EF\u4EE5\u66F4\u52A0\u4E13\u6CE8\u7684\u6295\u5165\u5230\u5B66\u4E60\u4E2D\u53BB\uFF0C\u51C6\u5907\u597D\u6211\u4EEC\u5C31\u53EF\u4EE5\u626C\u5E06\u8FDC\u822A\u5566~</p></blockquote><p>\u4F60\u597D\uFF0C\u6211\u662F\u60A6\u521B\u3002\u5148\u5E26\u4F60\u4EEC\u8BA4\u8BC6\u4E00\u4E0B Python \u8FD9\u4E2A\u795E\u5947\u7684\u5DE5\u5177\u3002</p><p>\u4E00\u8BF4\u8D77 Python\uFF0C\u5927\u5BB6\u603B\u4F1A\u8054\u60F3\u5230\u8FD1\u6765\u8D85\u706B\u7206\u7684\u4EBA\u5DE5\u667A\u80FD\uFF0C\u6CA1\u9519\uFF0CPython \u5C31\u662F\u4EBA\u5DE5\u667A\u80FD\u7684\u5165\u95E8\u57FA\u7840\u3002</p><p>\u5E9F\u8BDD\u5C11\u8BF4\uFF0C\u60A6\u521B\u73B0\u5728\u5C31\u5E26\u4F60\u611F\u53D7\u4E00\u4E0B\u4F7F\u7528 Python \u5B9E\u73B0\u4EBA\u5DE5\u667A\u80FD\u3002</p><p>\u6709\u4E86 Python\uFF0C\u4F60\u4E0D\u5149\u53EF\u4EE5\u548C<strong>\u4EBA\u7C7B</strong>\u5BF9\u8BDD\uFF0C\u8FD8\u53EF\u4EE5\u548C<strong>\u673A\u5668\u4EBA</strong>\u5BF9\u8BDD\uFF0C\u53EF\u522B\u5C0F\u77A7\u4E86\u673A\u5668\u4EBA\u7684\u667A\u5546~</p><p><img src="'+p+`" alt="img" loading="lazy"></p><p>\u6211\u4EEC\u6765\u8BD5\u7740\u548C\u53EF\u7231\u7684\u673A\u5668\u4EBA\uFF0C\u60A6\u521B\u5B9D\u5B9D\u8BF4\u8BF4\u8BDD\u5427~</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">import</span> json
<span class="token keyword">import</span> urllib<span class="token punctuation">.</span>request

api_url <span class="token operator">=</span> <span class="token string">&quot;http://openapi.turingapi.com/openapi/api/v2&quot;</span>
text_input <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&#39;\u6211\uFF1A&#39;</span><span class="token punctuation">)</span>

req <span class="token operator">=</span> <span class="token punctuation">{</span>
    <span class="token string">&quot;perception&quot;</span><span class="token punctuation">:</span>
    <span class="token punctuation">{</span>
        <span class="token string">&quot;inputText&quot;</span><span class="token punctuation">:</span>
        <span class="token punctuation">{</span>
            <span class="token string">&quot;text&quot;</span><span class="token punctuation">:</span> text_input
        <span class="token punctuation">}</span><span class="token punctuation">,</span>

        <span class="token string">&quot;selfInfo&quot;</span><span class="token punctuation">:</span>
        <span class="token punctuation">{</span>
            <span class="token string">&quot;location&quot;</span><span class="token punctuation">:</span>
            <span class="token punctuation">{</span>
                <span class="token string">&quot;city&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\u4E0A\u6D77&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;province&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\u4E0A\u6D77&quot;</span><span class="token punctuation">,</span>
                <span class="token string">&quot;street&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;\u6587\u6C47\u8DEF&quot;</span>
            <span class="token punctuation">}</span>
        <span class="token punctuation">}</span>
    <span class="token punctuation">}</span><span class="token punctuation">,</span>

    <span class="token string">&quot;userInfo&quot;</span><span class="token punctuation">:</span>
    <span class="token punctuation">{</span>
        <span class="token string">&quot;apiKey&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;ef6f308833d5426696cc3502735c13af&quot;</span><span class="token punctuation">,</span>
        <span class="token string">&quot;userId&quot;</span><span class="token punctuation">:</span> <span class="token string">&quot;OnlyUseAlphabet&quot;</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
<span class="token comment"># print(req)</span>
<span class="token comment"># \u5C06\u5B57\u5178\u683C\u5F0F\u7684req\u7F16\u7801\u4E3Autf8</span>
req <span class="token operator">=</span> json<span class="token punctuation">.</span>dumps<span class="token punctuation">(</span>req<span class="token punctuation">)</span><span class="token punctuation">.</span>encode<span class="token punctuation">(</span><span class="token string">&#39;utf8&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># print(req)</span>

http_post <span class="token operator">=</span> urllib<span class="token punctuation">.</span>request<span class="token punctuation">.</span>Request<span class="token punctuation">(</span>api_url<span class="token punctuation">,</span> data<span class="token operator">=</span>req<span class="token punctuation">,</span> headers<span class="token operator">=</span><span class="token punctuation">{</span><span class="token string">&#39;content-type&#39;</span><span class="token punctuation">:</span> <span class="token string">&#39;application/json&#39;</span><span class="token punctuation">}</span><span class="token punctuation">)</span>
response <span class="token operator">=</span> urllib<span class="token punctuation">.</span>request<span class="token punctuation">.</span>urlopen<span class="token punctuation">(</span>http_post<span class="token punctuation">)</span>
response_str <span class="token operator">=</span> response<span class="token punctuation">.</span>read<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">.</span>decode<span class="token punctuation">(</span><span class="token string">&#39;utf8&#39;</span><span class="token punctuation">)</span>
<span class="token comment"># print(response_str)</span>
response_dic <span class="token operator">=</span> json<span class="token punctuation">.</span>loads<span class="token punctuation">(</span>response_str<span class="token punctuation">)</span>
<span class="token comment"># print(response_dic)</span>

intent_code <span class="token operator">=</span> response_dic<span class="token punctuation">[</span><span class="token string">&#39;intent&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&#39;code&#39;</span><span class="token punctuation">]</span>
results_text <span class="token operator">=</span> response_dic<span class="token punctuation">[</span><span class="token string">&#39;results&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&#39;values&#39;</span><span class="token punctuation">]</span><span class="token punctuation">[</span><span class="token string">&#39;text&#39;</span><span class="token punctuation">]</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Turing\u7684\u56DE\u7B54\uFF1A&#39;</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;code\uFF1A&#39;</span> <span class="token operator">+</span> <span class="token builtin">str</span><span class="token punctuation">(</span>intent_code<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;text\uFF1A&#39;</span> <span class="token operator">+</span> results_text<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div>`,8),i=[o];function c(u,l){return s(),a("div",null,i)}var d=n(e,[["render",c],["__file","index.html.vue"]]);export{d as default};
