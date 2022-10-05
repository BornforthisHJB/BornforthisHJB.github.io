import{_ as r}from"./gzh.45dd564e.js";import{_ as a}from"./zsxq.d8d312d4.js";import{_ as i}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as c,c as l,a as e,b as n,d as o,e as s,r as d}from"./app.fff5e1bb.js";const h="/assets/DNA_Structure+Key+Labelled.pn_NoBB.abc945c9.png",u={},p=e("p",null,[e("strong",null,"Hand-in format:"),o(" IPython Notebook or python program. Submit via email.")],-1),_=e("blockquote",null,[e("p",null,[e("strong",null,"\u63D0\u4EA4\u683C\u5F0F:"),o(" IPython Notebook \u6216 python \u7A0B\u5E8F\u3002\u901A\u8FC7\u7535\u5B50\u90AE\u4EF6\u63D0\u4EA4\u3002")])],-1),m=e("p",null,"As a reminder: please make sure your code is clean, documentated, and understandable. Make sure it runs without errors.",-1),A=e("blockquote",null,[e("p",null,"\u4F5C\u4E3A\u4E00\u4E2A\u63D0\u9192:\u8BF7\u786E\u4FDD\u60A8\u7684\u4EE3\u7801\u662F\u5E72\u51C0\u7684\u3001\u6709\u6587\u6863\u8BB0\u5F55\u7684\u548C\u53EF\u7406\u89E3\u7684\u3002\u786E\u4FDD\u5B83\u6CA1\u6709\u9519\u8BEF\u5730\u8FD0\u884C\u3002")],-1),b=e("h2",{id:"background",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#background","aria-hidden":"true"},"#"),o(" Background")],-1),f={href:"http://en.wikipedia.org/wiki/DNA",target:"_blank",rel:"noopener noreferrer"},k=o("DNA"),g=o(" is a molecule that encodes genetic instructions for living organisms. DNA typically takes the form of double-stranded helix: each strand corresponds to a sequence of "),q=e("em",null,"nucleotides",-1),N=o("."),C={href:"http://en.wikipedia.org/wiki/DNA",target:"_blank",rel:"noopener noreferrer"},T=o("DNA"),y=o(" \u662F\u4E00\u79CD\u4E3A\u751F\u7269\u4F53\u7F16\u7801\u9057\u4F20\u6307\u4EE4\u7684\u5206\u5B50\u3002DNA \u901A\u5E38\u91C7\u7528\u53CC\u94FE\u87BA\u65CB\u7ED3\u6784:\u6BCF\u6761\u94FE\u5BF9\u5E94\u4E00\u4E2A\u6838\u82F7\u9178\u5E8F\u5217\u3002"),G=s('<p>Each nucleotide consists of a nucleobase (guanine, adenine, thymine, or cytosine) attached to sugars, which are in turn separated from each other by phosphate groups:</p><blockquote><p>\u6BCF\u4E2A\u6838\u82F7\u9178\u7531\u9644\u5728\u7CD6\u4E0A\u7684\u4E00\u4E2A\u78B1\u57FA(\u9E1F\u560C\u5464\u3001\u817A\u560C\u5464\u3001\u80F8\u817A\u5627\u5576\u6216\u80DE\u5627\u5576)\u7EC4\u6210\uFF0C\u8FD9\u4E9B\u78B1\u57FA\u53C8\u7531\u78F7\u9178\u57FA\u5F7C\u6B64\u5206\u79BB:</p></blockquote><p><img src="'+h+`" alt="DNA_Structure+Key+Labelled.pn_NoBB" loading="lazy"></p><p>The nucleobases are commonly referred to with the letters:</p><blockquote><p>\u78B1\u57FA\u901A\u5E38\u7528\u5B57\u6BCD\u8868\u793A:</p></blockquote><ul><li><code>G</code> (guanine)</li></ul><blockquote><p>\u201CG\u201D(\u9E1F\u560C\u5464)</p></blockquote><ul><li><code>A</code> (adenine)</li></ul><blockquote><p>A(\u817A\u560C\u5464)</p></blockquote><ul><li><code>T</code> (thymine) and</li></ul><blockquote><p>(\u80F8\u817A\u5627\u5576)\u548C\u201CT\u201D</p></blockquote><ul><li><code>C</code> (cytosine).</li></ul><blockquote><p>\u201CC\u201D(\u80DE\u5627\u5576)\u3002</p></blockquote><p>The nucleobases form pairs (or &quot;complements&quot;): <code>G</code> pairs with <code>C</code>, and <code>T</code> pairs with <code>A</code>.</p><blockquote><p>\u78B1\u57FA\u5F62\u6210\u4E00\u5BF9(\u6216\u201C\u8865\u4F53\u201D):\u201CG\u201D\u5BF9\u4E0E\u201CC\u201D\uFF0C\u201CT\u201D\u5BF9\u4E0E\u201CA\u201D\u3002</p></blockquote><p>The information content of a piece of DNA is therefore commonly represented as a string, giving a sequence of nucleobases, such as <code>GATTACACCTCATTATAAA</code>.</p><blockquote><p>\u56E0\u6B64\uFF0C\u4E00\u6BB5 DNA \u7684\u4FE1\u606F\u5185\u5BB9\u901A\u5E38\u88AB\u8868\u793A\u4E3A\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u7ED9\u51FA\u4E00\u4E2A\u78B1\u57FA\u5E8F\u5217\uFF0C\u5982 \u201CGATTACACCTCATTATAAA\u201D\u3002</p></blockquote><p>In this problem set, we will be working with fake genetic data, since real-life data often has added complications, but the functions and techniques uses here are the same or very similar to techniques used on real data.</p><blockquote><p>\u5728\u8FD9\u4E2A\u95EE\u9898\u96C6\u4E2D\uFF0C\u6211\u4EEC\u5C06\u5904\u7406\u5047\u7684\u57FA\u56E0\u6570\u636E\uFF0C\u56E0\u4E3A\u73B0\u5B9E\u751F\u6D3B\u4E2D\u7684\u6570\u636E\u901A\u5E38\u4F1A\u589E\u52A0\u590D\u6742\u6027\uFF0C\u4F46\u8FD9\u91CC\u4F7F\u7528\u7684\u529F\u80FD\u548C\u6280\u672F\u4E0E\u771F\u5B9E\u6570\u636E\u4E2D\u4F7F\u7528\u7684\u6280\u672F\u76F8\u540C\u6216\u975E\u5E38\u76F8\u4F3C\u3002</p></blockquote><h2 id="part-1" tabindex="-1"><a class="header-anchor" href="#part-1" aria-hidden="true">#</a> Part 1</h2><h3 id="question-1" tabindex="-1"><a class="header-anchor" href="#question-1" aria-hidden="true">#</a> Question 1</h3><p>The <strong>reverse complement</strong> of DNA is found by reversing the DNA sequence, then replacing each base by its complement. For example, the reverse complement of <code>ATGCGGC</code> is <code>GCCGCAT</code>.</p><blockquote><p>DNA \u7684\u9006\u8865\u4F53\u662F\u901A\u8FC7\u98A0\u5012 DNA \u5E8F\u5217\uFF0C\u7136\u540E\u7528\u5176\u8865\u4F53\u66FF\u6362\u6BCF\u4E2A\u78B1\u57FA\u6765\u53D1\u73B0\u7684\u3002\u4F8B\u5982\uFF0C&#39; ATGCGGC &#39;\u7684\u53CD\u5411\u8865\u8BED\u662F&#39; GCCGCAT &#39;\u3002</p></blockquote><p>Write a Python function <code>reverse_complement()</code> that takes a DNA sequence as a string, and returns the reverse complement. Test your function, then find and print the reverse complement of the following sequence:</p><blockquote><p>\u7F16\u5199\u4E00\u4E2A Python \u51FD\u6570&#39; reverse_complement() &#39;\uFF0C\u5B83\u63A5\u53D7\u4E00\u4E2A DNA \u5E8F\u5217\u4F5C\u4E3A\u5B57\u7B26\u4E32\uFF0C\u5E76\u8FD4\u56DE\u53CD\u5411\u8865\u4F53\u3002\u6D4B\u8BD5\u4F60\u7684\u51FD\u6570\uFF0C\u7136\u540E\u627E\u5230\u5E76\u6253\u5370\u4EE5\u4E0B\u5E8F\u5217\u7684\u9006\u8865:</p></blockquote><pre><code>ATGCGCGGATCGTACCTAATCGATGGCATTAGCCGAGCCCGATTACGC
</code></pre><p>Note that this function is not needed for the remaining questions below.</p><blockquote><p>\u6CE8\u610F\uFF0C\u4E0B\u9762\u5176\u4F59\u7684\u95EE\u9898\u4E0D\u9700\u8981\u8FD9\u4E2A\u51FD\u6570\u3002</p></blockquote><h3 id="\u66FF\u6362\u539F\u5219" tabindex="-1"><a class="header-anchor" href="#\u66FF\u6362\u539F\u5219" aria-hidden="true">#</a> \u66FF\u6362\u539F\u5219</h3><ol><li>G-C</li><li>T-A</li></ol><h3 id="\u7B54\u6848" tabindex="-1"><a class="header-anchor" href="#\u7B54\u6848" aria-hidden="true">#</a> \u7B54\u6848</h3><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code></code></pre><div class="line-numbers" aria-hidden="true"></div></div><h3 id="question-2" tabindex="-1"><a class="header-anchor" href="#question-2" aria-hidden="true">#</a> Question 2</h3>`,33),w={href:"http://en.wikipedia.org/wiki/RNA",target:"_blank",rel:"noopener noreferrer"},D=o("Ribonucleic acid (RNA)"),v=o(" is a family of large biological molecules that are "),R=e("em",null,"transcribed",-1),x=o(' from DNA by the "RNA polymerase" enzyme.'),P={href:"http://en.wikipedia.org/wiki/RNA",target:"_blank",rel:"noopener noreferrer"},I=o("\u6838\u7CD6\u6838\u9178(RNA)"),B=o(" \u662F\u4E00\u4E2A\u5927\u5206\u5B50\u5BB6\u65CF\uFF0C\u7531\u201CRNA \u805A\u5408\u9176\u201D\u9176\u4ECE DNA \u8F6C\u5F55\u800C\u6765\u3002"),Q={href:"http://en.wikipedia.org/wiki/Messenger_RNA",target:"_blank",rel:"noopener noreferrer"},S=o("Messenger RNA"),z=o(" molecules (or mRNA) are a subset of RNA molecules that are used to pass information from DNA to ribosomes, which then translates the mRNA to protein sequences."),E={href:"http://en.wikipedia.org/wiki/Messenger_RNA",target:"_blank",rel:"noopener noreferrer"},L=o("\u4FE1\u4F7FRNA"),M=o(" \u5206\u5B50(\u6216mRNA)\u662F RNA \u5206\u5B50\u7684\u4E00\u4E2A\u5B50\u96C6\uFF0C\u7528\u4E8E\u5C06\u4FE1\u606F\u4ECEDNA\u4F20\u9012\u5230\u6838\u7CD6\u4F53\uFF0C\u7136\u540E\u6838\u7CD6\u4F53\u5C06 mRNA \u7FFB\u8BD1\u6210\u86CB\u767D\u8D28\u5E8F\u5217\u3002"),V=s('<p>mRNA consists of a single strand of nucleotides that are identical to the ones found in DNA, with the exception of uracil (<code>U</code>), which replaces thymine (<code>T</code>).</p><p>Write a Python function <code>dna_to_mrna()</code> that takes a DNA sequence and returns the corresponding mRNA sequence. For example, the DNA sequence <code>ATCGCGAT</code> should produce the mRNA sequence <code>AUCGCGAU</code>.</p><p>\u6B22\u8FCE\u5173\u6CE8\u6211\u516C\u4F17\u53F7\uFF1AAI\u60A6\u521B\uFF0C\u6709\u66F4\u591A\u66F4\u597D\u73A9\u7684\u7B49\u4F60\u53D1\u73B0\uFF01</p><details class="custom-container details"><summary>\u516C\u4F17\u53F7\uFF1AAI\u60A6\u521B\u3010\u4E8C\u7EF4\u7801\u3011</summary><p><img src="'+r+'" alt="" loading="lazy"></p></details>',4),H={class:"custom-container info"},J=e("p",{class:"custom-container-title"},"AI\u60A6\u521B\xB7\u7F16\u7A0B\u4E00\u5BF9\u4E00",-1),U=e("p",null,"AI\u60A6\u521B\xB7\u63A8\u51FA\u8F85\u5BFC\u73ED\u5566\uFF0C\u5305\u62EC\u300CPython \u8BED\u8A00\u8F85\u5BFC\u73ED\u3001C++ \u8F85\u5BFC\u73ED\u3001java \u8F85\u5BFC\u73ED\u3001\u7B97\u6CD5/\u6570\u636E\u7ED3\u6784\u8F85\u5BFC\u73ED\u3001\u5C11\u513F\u7F16\u7A0B\u3001pygame \u6E38\u620F\u5F00\u53D1\u300D\uFF0C\u5168\u90E8\u90FD\u662F\u4E00\u5BF9\u4E00\u6559\u5B66\uFF1A\u4E00\u5BF9\u4E00\u8F85\u5BFC + \u4E00\u5BF9\u4E00\u7B54\u7591 + \u5E03\u7F6E\u4F5C\u4E1A + \u9879\u76EE\u5B9E\u8DF5\u7B49\u3002\u5F53\u7136\uFF0C\u8FD8\u6709\u7EBF\u4E0B\u7EBF\u4E0A\u6444\u5F71\u8BFE\u7A0B\u3001Photoshop\u3001Premiere \u4E00\u5BF9\u4E00\u6559\u5B66\u3001QQ\u3001\u5FAE\u4FE1\u5728\u7EBF\uFF0C\u968F\u65F6\u54CD\u5E94\uFF01\u5FAE\u4FE1\uFF1AJiabcdefh",-1),F=e("p",null,"C++ \u4FE1\u606F\u5965\u8D5B\u9898\u89E3\uFF0C\u957F\u671F\u66F4\u65B0\uFF01\u957F\u671F\u62DB\u6536\u4E00\u5BF9\u4E00\u4E2D\u5C0F\u5B66\u4FE1\u606F\u5965\u8D5B\u96C6\u8BAD\uFF0C\u8386\u7530\u3001\u53A6\u95E8\u5730\u533A\u6709\u673A\u4F1A\u7EBF\u4E0B\u4E0A\u95E8\uFF0C\u5176\u4ED6\u5730\u533A\u7EBF\u4E0A\u3002\u5FAE\u4FE1\uFF1AJiabcdefh",-1),K=o("\u65B9\u6CD5\u4E00\uFF1A"),W={href:"http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes",target:"_blank",rel:"noopener noreferrer"},j=o("QQ"),O=e("p",null,"\u65B9\u6CD5\u4E8C\uFF1A\u5FAE\u4FE1\uFF1AJiabcdefh",-1),X=e("p",null,[e("img",{src:a,alt:"",loading:"lazy"})],-1);function Y(Z,$){const t=d("ExternalLinkIcon");return c(),l("div",null,[p,_,m,A,b,e("p",null,[e("a",f,[k,n(t)]),g,q,N]),e("blockquote",null,[e("p",null,[e("a",C,[T,n(t)]),y])]),G,e("p",null,[e("a",w,[D,n(t)]),v,R,x]),e("blockquote",null,[e("p",null,[e("a",P,[I,n(t)]),B])]),e("p",null,[e("a",Q,[S,n(t)]),z]),e("blockquote",null,[e("p",null,[e("a",E,[L,n(t)]),M])]),V,e("div",H,[J,U,F,e("p",null,[K,e("a",W,[j,n(t)])]),O]),X])}const se=i(u,[["render",Y],["__file","01-Homework-Problem-DNA-sequencing.html.vue"]]);export{se as default};
