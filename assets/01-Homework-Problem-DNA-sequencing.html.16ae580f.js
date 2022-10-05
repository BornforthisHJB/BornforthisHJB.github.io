import{_ as o}from"./gzh.45dd564e.js";import{_ as i}from"./zsxq.d8d312d4.js";import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as c,c as l,a as n,b as a,d as s,e as t,r}from"./app.cb78f0f5.js";const u="/assets/DNA_Structure+Key+Labelled.pn_NoBB.abc945c9.png",d={},k=n("p",null,[n("strong",null,"Hand-in format:"),s(" IPython Notebook or python program. Submit via email.")],-1),m=n("blockquote",null,[n("p",null,[n("strong",null,"\u63D0\u4EA4\u683C\u5F0F:"),s(" IPython Notebook \u6216 python \u7A0B\u5E8F\u3002\u901A\u8FC7\u7535\u5B50\u90AE\u4EF6\u63D0\u4EA4\u3002")])],-1),h=n("p",null,"As a reminder: please make sure your code is clean, documentated, and understandable. Make sure it runs without errors.",-1),b=n("blockquote",null,[n("p",null,"\u4F5C\u4E3A\u4E00\u4E2A\u63D0\u9192:\u8BF7\u786E\u4FDD\u60A8\u7684\u4EE3\u7801\u662F\u5E72\u51C0\u7684\u3001\u6709\u6587\u6863\u8BB0\u5F55\u7684\u548C\u53EF\u7406\u89E3\u7684\u3002\u786E\u4FDD\u5B83\u6CA1\u6709\u9519\u8BEF\u5730\u8FD0\u884C\u3002")],-1),A=n("h2",{id:"background",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#background","aria-hidden":"true"},"#"),s(" Background")],-1),_={href:"http://en.wikipedia.org/wiki/DNA",target:"_blank",rel:"noopener noreferrer"},v=s("DNA"),q=s(" is a molecule that encodes genetic instructions for living organisms. DNA typically takes the form of double-stranded helix: each strand corresponds to a sequence of "),f=n("em",null,"nucleotides",-1),G=s("."),g={href:"http://en.wikipedia.org/wiki/DNA",target:"_blank",rel:"noopener noreferrer"},T=s("DNA"),C=s(" \u662F\u4E00\u79CD\u4E3A\u751F\u7269\u4F53\u7F16\u7801\u9057\u4F20\u6307\u4EE4\u7684\u5206\u5B50\u3002DNA \u901A\u5E38\u91C7\u7528\u53CC\u94FE\u87BA\u65CB\u7ED3\u6784:\u6BCF\u6761\u94FE\u5BF9\u5E94\u4E00\u4E2A\u6838\u82F7\u9178\u5E8F\u5217\u3002"),y=t('<p>Each nucleotide consists of a nucleobase (guanine, adenine, thymine, or cytosine) attached to sugars, which are in turn separated from each other by phosphate groups:</p><blockquote><p>\u6BCF\u4E2A\u6838\u82F7\u9178\u7531\u9644\u5728\u7CD6\u4E0A\u7684\u4E00\u4E2A\u78B1\u57FA(\u9E1F\u560C\u5464\u3001\u817A\u560C\u5464\u3001\u80F8\u817A\u5627\u5576\u6216\u80DE\u5627\u5576)\u7EC4\u6210\uFF0C\u8FD9\u4E9B\u78B1\u57FA\u53C8\u7531\u78F7\u9178\u57FA\u5F7C\u6B64\u5206\u79BB:</p></blockquote><p><img src="'+u+`" alt="DNA_Structure+Key+Labelled.pn_NoBB" loading="lazy"></p><p>The nucleobases are commonly referred to with the letters:</p><blockquote><p>\u78B1\u57FA\u901A\u5E38\u7528\u5B57\u6BCD\u8868\u793A:</p></blockquote><ul><li><code>G</code> (guanine)</li></ul><blockquote><p>\u201CG\u201D(\u9E1F\u560C\u5464)</p></blockquote><ul><li><code>A</code> (adenine)</li></ul><blockquote><p>A(\u817A\u560C\u5464)</p></blockquote><ul><li><code>T</code> (thymine) and</li></ul><blockquote><p>(\u80F8\u817A\u5627\u5576)\u548C\u201CT\u201D</p></blockquote><ul><li><code>C</code> (cytosine).</li></ul><blockquote><p>\u201CC\u201D(\u80DE\u5627\u5576)\u3002</p></blockquote><p>The nucleobases form pairs (or &quot;complements&quot;): <code>G</code> pairs with <code>C</code>, and <code>T</code> pairs with <code>A</code>.</p><blockquote><p>\u78B1\u57FA\u5F62\u6210\u4E00\u5BF9(\u6216\u201C\u8865\u4F53\u201D):\u201CG\u201D\u5BF9\u4E0E\u201CC\u201D\uFF0C\u201CT\u201D\u5BF9\u4E0E\u201CA\u201D\u3002</p></blockquote><p>The information content of a piece of DNA is therefore commonly represented as a string, giving a sequence of nucleobases, such as <code>GATTACACCTCATTATAAA</code>.</p><blockquote><p>\u56E0\u6B64\uFF0C\u4E00\u6BB5 DNA \u7684\u4FE1\u606F\u5185\u5BB9\u901A\u5E38\u88AB\u8868\u793A\u4E3A\u4E00\u4E2A\u5B57\u7B26\u4E32\uFF0C\u7ED9\u51FA\u4E00\u4E2A\u78B1\u57FA\u5E8F\u5217\uFF0C\u5982 \u201CGATTACACCTCATTATAAA\u201D\u3002</p></blockquote><p>In this problem set, we will be working with fake genetic data, since real-life data often has added complications, but the functions and techniques uses here are the same or very similar to techniques used on real data.</p><blockquote><p>\u5728\u8FD9\u4E2A\u95EE\u9898\u96C6\u4E2D\uFF0C\u6211\u4EEC\u5C06\u5904\u7406\u5047\u7684\u57FA\u56E0\u6570\u636E\uFF0C\u56E0\u4E3A\u73B0\u5B9E\u751F\u6D3B\u4E2D\u7684\u6570\u636E\u901A\u5E38\u4F1A\u589E\u52A0\u590D\u6742\u6027\uFF0C\u4F46\u8FD9\u91CC\u4F7F\u7528\u7684\u529F\u80FD\u548C\u6280\u672F\u4E0E\u771F\u5B9E\u6570\u636E\u4E2D\u4F7F\u7528\u7684\u6280\u672F\u76F8\u540C\u6216\u975E\u5E38\u76F8\u4F3C\u3002</p></blockquote><h2 id="part-1" tabindex="-1"><a class="header-anchor" href="#part-1" aria-hidden="true">#</a> Part 1</h2><h3 id="question-1" tabindex="-1"><a class="header-anchor" href="#question-1" aria-hidden="true">#</a> Question 1</h3><p>The <strong>reverse complement</strong> of DNA is found by reversing the DNA sequence, then replacing each base by its complement. For example, the reverse complement of <code>ATGCGGC</code> is <code>GCCGCAT</code>.</p><blockquote><p>DNA \u7684\u9006\u8865\u4F53\u662F\u901A\u8FC7\u98A0\u5012 DNA \u5E8F\u5217\uFF0C\u7136\u540E\u7528\u5176\u8865\u4F53\u66FF\u6362\u6BCF\u4E2A\u78B1\u57FA\u6765\u53D1\u73B0\u7684\u3002\u4F8B\u5982\uFF0C&#39; ATGCGGC &#39;\u7684\u53CD\u5411\u8865\u8BED\u662F&#39; GCCGCAT &#39;\u3002</p></blockquote><p>Write a Python function <code>reverse_complement()</code> that takes a DNA sequence as a string, and returns the reverse complement. Test your function, then find and print the reverse complement of the following sequence:</p><blockquote><p>\u7F16\u5199\u4E00\u4E2A Python \u51FD\u6570&#39; reverse_complement() &#39;\uFF0C\u5B83\u63A5\u53D7\u4E00\u4E2A DNA \u5E8F\u5217\u4F5C\u4E3A\u5B57\u7B26\u4E32\uFF0C\u5E76\u8FD4\u56DE\u53CD\u5411\u8865\u4F53\u3002\u6D4B\u8BD5\u4F60\u7684\u51FD\u6570\uFF0C\u7136\u540E\u627E\u5230\u5E76\u6253\u5370\u4EE5\u4E0B\u5E8F\u5217\u7684\u9006\u8865:</p></blockquote><pre><code>ATGCGCGGATCGTACCTAATCGATGGCATTAGCCGAGCCCGATTACGC
</code></pre><p>Note that this function is not needed for the remaining questions below.</p><blockquote><p>\u6CE8\u610F\uFF0C\u4E0B\u9762\u5176\u4F59\u7684\u95EE\u9898\u4E0D\u9700\u8981\u8FD9\u4E2A\u51FD\u6570\u3002</p></blockquote><h3 id="\u66FF\u6362\u539F\u5219" tabindex="-1"><a class="header-anchor" href="#\u66FF\u6362\u539F\u5219" aria-hidden="true">#</a> \u66FF\u6362\u539F\u5219</h3><ol><li>G-C</li><li>T-A</li></ol><h3 id="\u7B54\u6848" tabindex="-1"><a class="header-anchor" href="#\u7B54\u6848" aria-hidden="true">#</a> \u7B54\u6848</h3><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># -*- coding: utf-8 -*-</span>
<span class="token comment"># @Time    : 2022/10/5 21:48</span>
<span class="token comment"># @Author  : AI\u60A6\u521B</span>
<span class="token comment"># @FileName: hw1.py</span>
<span class="token comment"># @Software: PyCharm</span>
<span class="token comment"># @Blog    \uFF1Ahttps://bornforthis.cn/</span>
<span class="token keyword">def</span> <span class="token function">reverse_complement</span><span class="token punctuation">(</span>dna_str<span class="token punctuation">)</span><span class="token punctuation">:</span>
    reverse_dna_str <span class="token operator">=</span> dna_str<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">]</span>
    <span class="token comment"># replace_dna_str = reverse_dna_str.replace(&quot;G&quot;, &quot;C&quot;)</span>
    <span class="token comment"># replace_dna_str = replace_dna_str.replace(&quot;C&quot;, &quot;G&quot;)</span>
    <span class="token comment"># replace_dna_str = replace_dna_str.replace(&quot;A&quot;, &quot;T&quot;)</span>
    <span class="token comment"># replace_dna_str = replace_dna_str.replace(&quot;T&quot;, &quot;A&quot;)</span>
    <span class="token comment"># return replace_dna_str</span>
    TA <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;T&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;A&quot;</span><span class="token punctuation">]</span>
    CG <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token string">&quot;C&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;G&quot;</span><span class="token punctuation">]</span>
    result <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> s <span class="token keyword">in</span> reverse_dna_str<span class="token punctuation">:</span>
        <span class="token keyword">if</span> s <span class="token keyword">in</span> TA<span class="token punctuation">:</span>
            <span class="token keyword">if</span> s <span class="token operator">==</span> <span class="token string">&quot;T&quot;</span><span class="token punctuation">:</span>
                result<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token string">&quot;A&quot;</span><span class="token punctuation">)</span>
            <span class="token keyword">else</span><span class="token punctuation">:</span>
                result<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token string">&quot;T&quot;</span><span class="token punctuation">)</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            <span class="token keyword">if</span> s <span class="token operator">==</span> <span class="token string">&quot;C&quot;</span><span class="token punctuation">:</span>
                result<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token string">&quot;G&quot;</span><span class="token punctuation">)</span>
            <span class="token keyword">else</span><span class="token punctuation">:</span>
                result<span class="token punctuation">.</span>append<span class="token punctuation">(</span><span class="token string">&quot;C&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">.</span>join<span class="token punctuation">(</span>result<span class="token punctuation">)</span>


reverse_complement<span class="token punctuation">(</span><span class="token string">&quot;ATGCGGC&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="question-2" tabindex="-1"><a class="header-anchor" href="#question-2" aria-hidden="true">#</a> Question 2</h3>`,33),N={href:"http://en.wikipedia.org/wiki/RNA",target:"_blank",rel:"noopener noreferrer"},w=s("Ribonucleic acid (RNA)"),R=s(" is a family of large biological molecules that are "),D=n("em",null,"transcribed",-1),x=s(' from DNA by the "RNA polymerase" enzyme.'),P={href:"http://en.wikipedia.org/wiki/RNA",target:"_blank",rel:"noopener noreferrer"},S=s("\u6838\u7CD6\u6838\u9178(RNA)"),U=s(" \u662F\u4E00\u4E2A\u5927\u5206\u5B50\u5BB6\u65CF\uFF0C\u7531\u201CRNA \u805A\u5408\u9176\u201D\u9176\u4ECE DNA \u8F6C\u5F55\u800C\u6765\u3002"),I={href:"http://en.wikipedia.org/wiki/Messenger_RNA",target:"_blank",rel:"noopener noreferrer"},B=s("Messenger RNA"),F=s(" molecules (or mRNA) are a subset of RNA molecules that are used to pass information from DNA to ribosomes, which then translates the mRNA to protein sequences."),Q={href:"http://en.wikipedia.org/wiki/Messenger_RNA",target:"_blank",rel:"noopener noreferrer"},L=s("\u4FE1\u4F7FRNA"),E=s(" \u5206\u5B50(\u6216mRNA)\u662F RNA \u5206\u5B50\u7684\u4E00\u4E2A\u5B50\u96C6\uFF0C\u7528\u4E8E\u5C06\u4FE1\u606F\u4ECEDNA\u4F20\u9012\u5230\u6838\u7CD6\u4F53\uFF0C\u7136\u540E\u6838\u7CD6\u4F53\u5C06 mRNA \u7FFB\u8BD1\u6210\u86CB\u767D\u8D28\u5E8F\u5217\u3002"),H=t(`<p>mRNA consists of a single strand of nucleotides that are identical to the ones found in DNA, with the exception of uracil (<code>U</code>), which replaces thymine (<code>T</code>).</p><blockquote><p>mRNA\u7531\u4E00\u6761\u6838\u82F7\u9178\u94FE\u7EC4\u6210\uFF0C\u9664\u4E86\u5C3F\u5627\u5576(&#39; U &#39;)\u53D6\u4EE3\u4E86\u80F8\u817A\u5627\u5576(&#39; T &#39;)\u4E4B\u5916\uFF0C\u5B83\u4E0EDNA\u4E2D\u7684\u6838\u82F7\u9178\u94FE\u76F8\u540C\u3002</p></blockquote><p>Write a Python function <code>dna_to_mrna()</code> that takes a DNA sequence and returns the corresponding mRNA sequence. For example, the DNA sequence <code>ATCGCGAT</code> should produce the mRNA sequence <code>AUCGCGAU</code>.</p><blockquote><p>\u7F16\u5199\u4E00\u4E2APython\u51FD\u6570&#39; dna_to_mrna() &#39;\uFF0C\u5B83\u63A5\u53D7\u4E00\u4E2ADNA\u5E8F\u5217\u5E76\u8FD4\u56DE\u76F8\u5E94\u7684mRNA\u5E8F\u5217\u3002\u4F8B\u5982\uFF0CDNA\u5E8F\u5217&#39; ATCGCGAT &#39;\u5E94\u8BE5\u4EA7\u751FmRNA\u5E8F\u5217&#39; AUCGCGAU &#39;\u3002</p></blockquote><h3 id="\u66FF\u6362\u539F\u5219-1" tabindex="-1"><a class="header-anchor" href="#\u66FF\u6362\u539F\u5219-1" aria-hidden="true">#</a> \u66FF\u6362\u539F\u5219</h3><ol><li>U-T</li></ol><h3 id="\u7B54\u6848-1" tabindex="-1"><a class="header-anchor" href="#\u7B54\u6848-1" aria-hidden="true">#</a> \u7B54\u6848</h3><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">dna_to_mrna</span><span class="token punctuation">(</span>dna<span class="token punctuation">)</span><span class="token punctuation">:</span>
    mRNA <span class="token operator">=</span> dna<span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">&quot;T&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;U&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> mRNA
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="part-2" tabindex="-1"><a class="header-anchor" href="#part-2" aria-hidden="true">#</a> Part 2</h2><h3 id="question-3" tabindex="-1"><a class="header-anchor" href="#question-3" aria-hidden="true">#</a> Question 3</h3><p>When the mRNA is translated to a protein sequence, each set of three nucleotides, called a <strong>codon</strong>, is translated into a single amino acid. For example, the codon <code>UUC</code> translates to the amino acid <em>Phenylalanine</em>. Each amino acid can be represented by a single letter - for example Phenylalanine is represented by the letter <code>F</code>.</p><blockquote><p>\u5F53mRNA\u88AB\u7FFB\u8BD1\u6210\u86CB\u767D\u8D28\u5E8F\u5217\u65F6\uFF0C\u6BCF\u4E00\u7EC4\u6838\u82F7\u9178(\u79F0\u4E3A<strong>\u5BC6\u7801\u5B50</strong>)\u88AB\u7FFB\u8BD1\u6210\u4E00\u4E2A\u5355\u4E00\u7684\u6C28\u57FA\u9178\u3002\u4F8B\u5982\uFF0C\u5BC6\u7801\u5B50&#39; &#39; UUC &#39; &#39;\u7FFB\u8BD1\u6210\u6C28\u57FA\u9178<em>\u82EF\u4E19\u6C28\u9178</em>\u3002\u6BCF\u4E2A\u6C28\u57FA\u9178\u90FD\u53EF\u4EE5\u7528\u4E00\u4E2A\u5B57\u6BCD\u8868\u793A\uFF0C\u4F8B\u5982\u82EF\u4E19\u6C28\u9178\u7528\u5B57\u6BCD\u201CF\u201D\u8868\u793A\u3002</p></blockquote><blockquote><p>A protein, which is formed from a sequence of amino acids, can therefore be written as a sequence of letters in the same way as DNA or mRNA, but using more of the letters of the alphabet since there are more than four amino acids.</p></blockquote><blockquote><p>\u56E0\u6B64\uFF0C\u7531\u6C28\u57FA\u9178\u5E8F\u5217\u7EC4\u6210\u7684\u86CB\u767D\u8D28\u53EF\u4EE5\u50CFDNA\u6216mRNA\u4E00\u6837\u88AB\u5199\u6210\u5B57\u6BCD\u5E8F\u5217\uFF0C\u4F46\u7531\u4E8E\u6C28\u57FA\u9178\u591A\u4E8E4\u4E2A\uFF0C\u6240\u4EE5\u86CB\u767D\u8D28\u53EF\u4EE5\u4F7F\u7528\u66F4\u591A\u7684\u5B57\u6BCD\u3002</p></blockquote><blockquote><p>protein\u4E5F\u53EF\u4EE5\u88AB\u5199\u6210\u5B57\u6BCD\u5E8F\u5217\uFF0C\u4F46\u662F\u4E4B\u524Dmrna\u6BCF\u4E2A\u5B57\u6BCD\u53EF\u80FD\u8981\u88AB\u5199\u6210\u591A\u4E2A\u5B57\u6BCD</p></blockquote><p>The <a href="/1v1/08-LionGuo/01-Homework-Problem-DNA-sequencing/p1_codons.txt">data/p1_codons.txt</a> file contains a list of codon-amino acid pairs. There are two columns:</p><blockquote><p><a href="/1v1/08-LionGuo/01-Homework-Problem-DNA-sequencing/p1_codons.txt">data/p1_codons.txt</a> \u6587\u4EF6\u5305\u542B\u5BC6\u7801\u5B50-\u6C28\u57FA\u9178\u5BF9\u7684\u5217\u8868\u3002\u6709\u4E24\u680F:</p></blockquote><ul><li>first column: codon (represented by three letters).</li></ul><blockquote><p>\u7B2C\u4E00\u5217:\u5BC6\u7801\u5B50(\u7531\u4E09\u4E2A\u5B57\u6BCD\u8868\u793A)\u3002</p></blockquote><ul><li>second column: corresponding amino acid (represented by a single letter).</li></ul><blockquote><p>\u7B2C\u4E8C\u5217:\u5BF9\u5E94\u7684\u6C28\u57FA\u9178(\u7528\u4E00\u4E2A\u5B57\u6BCD\u8868\u793A)\u3002</p></blockquote><p>Certain codons do not correspond to an amino acid, but instead indicate that the amino acid sequence is finished. These are indicated by <code>Stop</code>.</p><blockquote><p>\u67D0\u4E9B\u5BC6\u7801\u5B50\u5E76\u4E0D\u5BF9\u5E94\u67D0\u4E2A\u6C28\u57FA\u9178\uFF0C\u800C\u662F\u8868\u793A\u8BE5\u6C28\u57FA\u9178\u5E8F\u5217\u7ED3\u675F\u4E86\u3002\u5B83\u4EEC\u7531\u201CStop\u201D\u8868\u793A\u3002</p></blockquote><p>Write a function <code>mrna_to_protein()</code> that takes an mRNA sequence (as a string) and returns the sequence of amino acids (as a string), stopping the first time a <code>Stop</code> codon is encountered.</p><blockquote><p>\u7F16\u5199\u4E00\u4E2A\u51FD\u6570&#39; mrna_to_protein() &#39;\uFF0C\u5B83\u63A5\u53D7\u4E00\u4E2AmRNA\u5E8F\u5217(\u4F5C\u4E3A\u5B57\u7B26\u4E32)\u5E76\u8FD4\u56DE\u6C28\u57FA\u9178\u5E8F\u5217(\u4F5C\u4E3A\u5B57\u7B26\u4E32)\uFF0C\u5728\u7B2C\u4E00\u6B21\u9047\u5230&#39; Stop &#39;\u5BC6\u7801\u5B50\u65F6\u505C\u6B62\u3002</p></blockquote><blockquote><p>Make sure that the codon map file is only read once when running the script (and not every time you want to translate a codon).</p></blockquote><blockquote><p>\u786E\u4FDD\u5728\u8FD0\u884C\u811A\u672C\u65F6\u53EA\u8BFB\u53D6\u4E00\u6B21\u5BC6\u7801\u5B50\u6620\u5C04\u6587\u4EF6(\u800C\u4E0D\u662F\u6BCF\u6B21\u60A8\u60F3\u7FFB\u8BD1\u5BC6\u7801\u5B50\u65F6\u90FD\u8BFB\u53D6)\u3002</p></blockquote><p>Then, write a function <code>dna_to_protein()</code> that takes a DNA sequence (as a string) and returns the sequence of amino acids (as a string), making use of the functions that you wrote previously.</p><blockquote><p>\u7136\u540E\uFF0C\u7F16\u5199\u4E00\u4E2A\u51FD\u6570&#39; dna_to_protein() &#39;\uFF0C\u5B83\u63A5\u53D7\u4E00\u4E2ADNA\u5E8F\u5217(\u4F5C\u4E3A\u5B57\u7B26\u4E32)\u5E76\u8FD4\u56DE\u6C28\u57FA\u9178\u5E8F\u5217(\u4F5C\u4E3A\u5B57\u7B26\u4E32)\uFF0C\u4F7F\u7528\u524D\u9762\u7F16\u5199\u7684\u51FD\u6570\u3002</p></blockquote><p>Print out the amino acid sequence for the following DNA sequence:</p><blockquote><p>\u6253\u5370\u51FA\u4EE5\u4E0BDNA\u5E8F\u5217\u7684\u6C28\u57FA\u9178\u5E8F\u5217:</p></blockquote><pre><code>AATCTCTACGGAAGTAGGTCAGTACTGATCGATCAGTCGATCGGGCGGCGATTTCGATCTGATTGTACGGCGGGCTAG
</code></pre><h3 id="\u7B54\u6848-2" tabindex="-1"><a class="header-anchor" href="#\u7B54\u6848-2" aria-hidden="true">#</a> \u7B54\u6848</h3><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">dna_to_mrna</span><span class="token punctuation">(</span>dna<span class="token punctuation">)</span><span class="token punctuation">:</span>
    mRNA <span class="token operator">=</span> dna<span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">&quot;T&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;U&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">return</span> mRNA


<span class="token keyword">def</span> <span class="token function">mrna_to_protein</span><span class="token punctuation">(</span>mRNA<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">with</span> <span class="token builtin">open</span><span class="token punctuation">(</span><span class="token string">&quot;p1_codons.txt&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;r&quot;</span><span class="token punctuation">)</span> <span class="token keyword">as</span> f<span class="token punctuation">:</span>
        content_list <span class="token operator">=</span> f<span class="token punctuation">.</span>readlines<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token comment"># print(content_list)</span>
    target_list <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">for</span> line <span class="token keyword">in</span> content_list<span class="token punctuation">:</span>
        line <span class="token operator">=</span> <span class="token builtin">tuple</span><span class="token punctuation">(</span>line<span class="token punctuation">.</span>replace<span class="token punctuation">(</span><span class="token string">&quot;\\n&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">)</span><span class="token punctuation">.</span>split<span class="token punctuation">(</span><span class="token string">&quot; &quot;</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        <span class="token comment"># print(line)</span>
        target_list<span class="token punctuation">.</span>append<span class="token punctuation">(</span>line<span class="token punctuation">)</span>
    <span class="token comment"># print(target_list)</span>
    target_dict <span class="token operator">=</span> <span class="token builtin">dict</span><span class="token punctuation">(</span>target_list<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>target_dict<span class="token punctuation">)</span>
    <span class="token comment"># index = 0</span>
    result_lst <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
    <span class="token keyword">while</span> <span class="token boolean">True</span><span class="token punctuation">:</span>
        <span class="token keyword">if</span> mRNA<span class="token punctuation">:</span>
            use_mrna <span class="token operator">=</span> mRNA<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token number">3</span><span class="token punctuation">]</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;use_mrna:&gt;&gt;&gt;&quot;</span><span class="token punctuation">,</span> use_mrna<span class="token punctuation">)</span>
            <span class="token keyword">if</span> target_dict<span class="token punctuation">[</span>use_mrna<span class="token punctuation">]</span> <span class="token operator">==</span> <span class="token string">&quot;Stop&quot;</span><span class="token punctuation">:</span>
                <span class="token keyword">break</span>
            <span class="token keyword">else</span><span class="token punctuation">:</span>
                result_lst<span class="token punctuation">.</span>append<span class="token punctuation">(</span>target_dict<span class="token punctuation">[</span>use_mrna<span class="token punctuation">]</span><span class="token punctuation">)</span>
            <span class="token comment"># print(&quot;use_mran:&gt;&gt;&gt;&quot;, use_mrna)</span>
            <span class="token comment"># if target_list[index][1] == &quot;Stop&quot;:</span>
            <span class="token comment">#     break</span>
            <span class="token comment"># elif use_mrna in target_list[index]:</span>
            <span class="token comment">#     result_lst.append(target_list[index][1])</span>
            <span class="token comment">#     index += 1</span>
            mRNA <span class="token operator">=</span> mRNA<span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
        <span class="token keyword">else</span><span class="token punctuation">:</span>
            <span class="token keyword">break</span>

    <span class="token comment"># print(result_lst)</span>
    <span class="token keyword">return</span> <span class="token string">&quot;&quot;</span><span class="token punctuation">.</span>join<span class="token punctuation">(</span>result_lst<span class="token punctuation">)</span>


DNA <span class="token operator">=</span> <span class="token string">&quot;AATCTCTACGGAAGTAGGTCAGTACTGATCGATCAGTCGATCGGGCGGCGATTTCGATCTGATTGTACGGCGGGCTAG&quot;</span>
mRNA <span class="token operator">=</span> dna_to_mrna<span class="token punctuation">(</span>DNA<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>mRNA<span class="token punctuation">)</span>
<span class="token comment"># print(len(mRNA) / 3)</span>
r <span class="token operator">=</span> mrna_to_protein<span class="token punctuation">(</span>mRNA<span class="token punctuation">)</span>
<span class="token keyword">print</span><span class="token punctuation">(</span>r<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="question-4" tabindex="-1"><a class="header-anchor" href="#question-4" aria-hidden="true">#</a> Question 4</h3>`,35),M=s("In the previous questions, we have been specifying the DNA sequence by hand, but DNA sequences are usually long and are stored in files. A common file format is the "),W={href:"http://en.wikipedia.org/wiki/FASTA_format",target:"_blank",rel:"noopener noreferrer"},z=s("FASTA format"),V=s(" which is a text-file of the form:"),j=t(`<pre><code>&gt;label1
ACTGTATCGATGCTAGCTACGTAGCTAGCTAGCTAGCTGACGTA
ACGATGTGCGAGGGTCATGGGACGCGAGCGAGTCTAGCACGATC
&gt;label2
ACTGGGCTTGACTACGGCGGTATCTGACGGGCGAGCTGTACGAG
ACGGACTAGGGCGCGGCGGGGCGGATTTTCGAGTCGAGCGTTAT
</code></pre><p>The first line starts with a <code>&gt;</code> which is immediately followed by a label (an arbitrary string, e.g. the name of the gene). The sequence then starts on the second line, and may continue on several lines. It is common to limit the length of each line to 80, but this may vary from file to file. The sequence stops once either the file ends, or a line starts with <code>&gt;</code>, which indicates that a new sequence is being given. There may be any number of sequences in a file.</p><p>Write a function <code>read_fasta()</code>, that takes the name of a file (as a string) and returns a Python dictionary containing all the sequences from the file, with the keys in the dictionary corresponding to the label.</p><p>Use this function and the functions you have written above to read in the <a href="data/p1_fasta_q4.txt">data/p1_fasta_q4.txt</a> file and print out, for each sequence, the label, followed by the <strong>amino acid</strong> sequence (not the DNA sequence!).</p><p>\u6B22\u8FCE\u5173\u6CE8\u6211\u516C\u4F17\u53F7\uFF1AAI\u60A6\u521B\uFF0C\u6709\u66F4\u591A\u66F4\u597D\u73A9\u7684\u7B49\u4F60\u53D1\u73B0\uFF01</p><details class="custom-container details"><summary>\u516C\u4F17\u53F7\uFF1AAI\u60A6\u521B\u3010\u4E8C\u7EF4\u7801\u3011</summary><p><img src="`+o+'" alt="" loading="lazy"></p></details>',6),J={class:"custom-container info"},K=n("p",{class:"custom-container-title"},"AI\u60A6\u521B\xB7\u7F16\u7A0B\u4E00\u5BF9\u4E00",-1),O=n("p",null,"AI\u60A6\u521B\xB7\u63A8\u51FA\u8F85\u5BFC\u73ED\u5566\uFF0C\u5305\u62EC\u300CPython \u8BED\u8A00\u8F85\u5BFC\u73ED\u3001C++ \u8F85\u5BFC\u73ED\u3001java \u8F85\u5BFC\u73ED\u3001\u7B97\u6CD5/\u6570\u636E\u7ED3\u6784\u8F85\u5BFC\u73ED\u3001\u5C11\u513F\u7F16\u7A0B\u3001pygame \u6E38\u620F\u5F00\u53D1\u300D\uFF0C\u5168\u90E8\u90FD\u662F\u4E00\u5BF9\u4E00\u6559\u5B66\uFF1A\u4E00\u5BF9\u4E00\u8F85\u5BFC + \u4E00\u5BF9\u4E00\u7B54\u7591 + \u5E03\u7F6E\u4F5C\u4E1A + \u9879\u76EE\u5B9E\u8DF5\u7B49\u3002\u5F53\u7136\uFF0C\u8FD8\u6709\u7EBF\u4E0B\u7EBF\u4E0A\u6444\u5F71\u8BFE\u7A0B\u3001Photoshop\u3001Premiere \u4E00\u5BF9\u4E00\u6559\u5B66\u3001QQ\u3001\u5FAE\u4FE1\u5728\u7EBF\uFF0C\u968F\u65F6\u54CD\u5E94\uFF01\u5FAE\u4FE1\uFF1AJiabcdefh",-1),X=n("p",null,"C++ \u4FE1\u606F\u5965\u8D5B\u9898\u89E3\uFF0C\u957F\u671F\u66F4\u65B0\uFF01\u957F\u671F\u62DB\u6536\u4E00\u5BF9\u4E00\u4E2D\u5C0F\u5B66\u4FE1\u606F\u5965\u8D5B\u96C6\u8BAD\uFF0C\u8386\u7530\u3001\u53A6\u95E8\u5730\u533A\u6709\u673A\u4F1A\u7EBF\u4E0B\u4E0A\u95E8\uFF0C\u5176\u4ED6\u5730\u533A\u7EBF\u4E0A\u3002\u5FAE\u4FE1\uFF1AJiabcdefh",-1),Y=s("\u65B9\u6CD5\u4E00\uFF1A"),Z={href:"http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes",target:"_blank",rel:"noopener noreferrer"},$=s("QQ"),nn=n("p",null,"\u65B9\u6CD5\u4E8C\uFF1A\u5FAE\u4FE1\uFF1AJiabcdefh",-1),sn=n("p",null,[n("img",{src:i,alt:"",loading:"lazy"})],-1);function en(an,tn){const e=r("ExternalLinkIcon");return c(),l("div",null,[k,m,h,b,A,n("p",null,[n("a",_,[v,a(e)]),q,f,G]),n("blockquote",null,[n("p",null,[n("a",g,[T,a(e)]),C])]),y,n("p",null,[n("a",N,[w,a(e)]),R,D,x]),n("blockquote",null,[n("p",null,[n("a",P,[S,a(e)]),U])]),n("p",null,[n("a",I,[B,a(e)]),F]),n("blockquote",null,[n("p",null,[n("a",Q,[L,a(e)]),E])]),H,n("p",null,[M,n("a",W,[z,a(e)]),V]),j,n("div",J,[K,O,X,n("p",null,[Y,n("a",Z,[$,a(e)])]),nn]),sn])}const rn=p(d,[["render",en],["__file","01-Homework-Problem-DNA-sequencing.html.vue"]]);export{rn as default};
