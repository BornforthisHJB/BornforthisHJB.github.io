import{_ as e}from"./zsxq.5b71a58b.js";import{_ as p}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as t,c as o,a as n,d as s,b as c,e as l,r as i}from"./app.1ec90f96.js";const u={},d=l(`<ol><li>\u6E38\u620F\u540D\u79F0\uFF1A\u4E3B\u89D2\u6253\u602A-\u6587\u5B57\u6E38\u620F</li><li>\u4E00\u4E2A\u73A9\u5BB6\u3010Player\u3011\u3001\u4E00\u4E2A\u654C\u4EBA\u3010Enemy\u3011</li><li>\u654C\u4EBA\u548C\u73A9\u5BB6\u4E92\u76F8\u653B\u51FB</li><li>\u73A9\u5BB6\u53EF\u4EE5\u9009\u62E9\u653B\u51FB\u4E5F\u53EF\u4EE5\u9009\u62E9\u9632\u5B88\uFF0C\u654C\u4EBA\u4E5F\u4E00\u5B9A\u4F1A\u653B\u51FB\uFF0C\u9632\u5B88\u53D7\u5230\u7684\u653B\u51FB\u4E3A\uFF1A\u5341\u5206\u4E4B\u4E00</li><li>\u654C\u4EBA\u7684\u653B\u51FB\u6570\u503C\u968F\u673A\u3010random\u3011</li></ol><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># -*- coding: utf-8 -*-</span>
<span class="token comment"># @Author: clela</span>
<span class="token comment"># @Date:   2020-03-31 14:13:35</span>
<span class="token comment"># @Last Modified by:   clela</span>
<span class="token comment"># @Last Modified time: 2020-04-01 17:51:50</span>
<span class="token keyword">import</span> random
<span class="token comment"># 1</span>
<span class="token keyword">class</span> <span class="token class-name">Creature</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">attack</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># \u6211\u5E0C\u671B\u5F97\u5230\u4E00\u4E2A\u968F\u673A\u7684\u653B\u51FB\u6570\u503C</span>
        attack_value <span class="token operator">=</span> random<span class="token punctuation">.</span>randint<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> attack_value
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u4E0A\u9762\u6211\u4EEC\u7C7B\u521B\u5EFA\u597D\u4E86\u4E4B\u540E\uFF0C\u6211\u63A5\u4E0B\u6765\u5C31\u9700\u8981\u5B9E\u4F8B\u5316\u4E86\uFF1A</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>player <span class="token operator">=</span> Creature<span class="token punctuation">(</span><span class="token punctuation">)</span>
enemy <span class="token operator">=</span> Creature<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u5BF9\u4E8E\u6E38\u620F\u7684\u8BBE\u5B9A\u6211\u4EEC\u4E00\u822C\u8981\u5224\u65AD\u7528\u6237\u548C\u654C\u4EBA\u7684\u72B6\u6001\uFF0C\u4E5F\u5C31\u662F\u6D3B\u7740\u8FD8\u662F\u6B7B\u4E86(\u73A9\u5BB6\u6216\u8005\u654C\u4EBA)\uFF0C\u4E5F\u5C31\u662F\u4E0D\u65AD\u5730\u5224\u65AD\uFF0C\u90A3\u8FD9\u4E2A\u65F6\u5019\u9700\u8981\u4EC0\u4E48\u5462\uFF1F\u5F88\u660E\u663E\u662F\u9700\u8981\u4E00\u4E2A <code>while</code> \u5FAA\u73AF\u5728\u8FD9\u91CC\u7684\u3002\u6211\u4EEC\u5B9A\u4E49\u4E00\u4E2A <code>not_dead()</code> \u51FD\u6570\u6765\u5224\u65AD\uFF1A</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">while</span> player<span class="token punctuation">.</span>not_dead<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">and</span> enemy<span class="token punctuation">.</span>not_dead<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u6240\u4EE5\u8FD9\u5C31\u9700\u8981\u7ED9\u73A9\u5BB6\u548C\u654C\u4EBA\u8BBE\u5B9A\u4E00\u4E2A\u521D\u59CB\u7684\u503C(\u521D\u59CB\u7684\u751F\u547D\u503C)\u4E5F\u5C31\u662F\u9700\u8981\u5728\u7C7B\u7684\u5B9E\u4F8B\u5316\u7684\u65F6\u5019\u4F20\u5165\u8BBE\u5B9A\u7684\u751F\u547D\u503C\uFF0C\u6BD4\u5982\uFF1A\u73A9\u5BB6\u751F\u547D\u503C\uFF1A<code>100</code> \uFF0C\u654C\u4EBA\uFF1A<code>80</code>\uFF0C\u65E2\u7136\u6211\u4EEC\u8981\u6DFB\u52A0\u521D\u59CB\u7684\u503C\uFF0C\u90A3\u63A5\u4E0B\u6765\u5C31\u9700\u8981\u7F16\u5199\u7C7B\u7684\u521D\u59CB\u5316\u3002</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>player <span class="token operator">=</span> Creature<span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>
enemy <span class="token operator">=</span> Creature<span class="token punctuation">(</span><span class="token number">80</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7C7B\u7684\u521D\u59CB\u5316\uFF0C\u6211\u4EEC\u63A5\u4E0B\u6765\u4F7F\u7528 <code>hp</code> \u6765\u5B58\u50A8\u7528\u6237\u521D\u59CB\u5316\u7684\u8840\u91CF\u3002(\u4F7F\u7528 <code>self.hp</code> \u6765\u5B58\u50A8\u7528\u6237\u548C\u654C\u4EBA\u7684\u8840\u91CF)</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Creature</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> hp<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>hp <span class="token operator">=</span> hp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E2A\u65F6\u5019\uFF0C\u6211\u4EEC\u6E38\u620F\u5C31\u6709\u4E86\u751F\u547D\u503C\u4E86\uFF0C\u63A5\u4E0B\u6765\u5C31\u662F\u8981\u5224\u65AD\u73A9\u5BB6\u548C\u654C\u4EBA\u7684\u6E38\u620F\u72B6\u6001\uFF1A</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token comment"># \u5199\u6CD5\u4E00\uFF1A</span>
<span class="token keyword">def</span> <span class="token function">not_dead</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> self<span class="token punctuation">.</span>hp <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token boolean">False</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token boolean">True</span>
<span class="token comment"># \u5199\u6CD5\u4E8C</span>
<span class="token keyword">def</span> <span class="token function">not_dead</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> self<span class="token punctuation">.</span>hp <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token boolean">False</span>
    <span class="token keyword">return</span> <span class="token boolean">True</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u90A3\u63A5\u4E0B\u6765\u5C31\u7EE7\u7EED\u7F16\u5199\uFF0C<code>not_dead()</code> \u8FD4\u56DE\u7684\u503C\u662F <code>True</code>\uFF0C\u90A3\u4E48\u6E38\u620F\u7EE7\u7EED\u7EE7\u7EED\u8FDB\u884C\u3002</p><p>\u53C8\u56E0\u4E3A\u6211\u4EEC\u7684\u6E38\u620F\u662F\u7528\u6237\u7684\u8F93\u5165\u6765\u83B7\u53D6\u64CD\u4F5C\uFF0C\u6240\u4EE5\u9700\u8981\u5728 while \u5FAA\u73AF\u4E2D\u6DFB\u52A0\u7528\u6237\u8F93\u5165\uFF1A</p><h6 id="\u8FD9\u91CC\u6211\u5C31\u5199\u7684\u7B80\u5355\u70B9-\u5C31\u4E0D\u5224\u65AD\u7528\u6237\u8F93\u5165\u7684\u662F\u5426\u7B26\u5408\u89C4\u5219-\u6211\u4EEC\u8FD9\u91CC\u5C31\u5148\u9ED8\u8BA4\u7528\u6237\u8F93\u5165\u662F\u5BF9\u7684-\u8BFE\u540E\u81EA\u884C\u6DFB\u52A0" tabindex="-1"><a class="header-anchor" href="#\u8FD9\u91CC\u6211\u5C31\u5199\u7684\u7B80\u5355\u70B9-\u5C31\u4E0D\u5224\u65AD\u7528\u6237\u8F93\u5165\u7684\u662F\u5426\u7B26\u5408\u89C4\u5219-\u6211\u4EEC\u8FD9\u91CC\u5C31\u5148\u9ED8\u8BA4\u7528\u6237\u8F93\u5165\u662F\u5BF9\u7684-\u8BFE\u540E\u81EA\u884C\u6DFB\u52A0" aria-hidden="true">#</a> \u8FD9\u91CC\u6211\u5C31\u5199\u7684\u7B80\u5355\u70B9\uFF0C\u5C31\u4E0D\u5224\u65AD\u7528\u6237\u8F93\u5165\u7684\u662F\u5426\u7B26\u5408\u89C4\u5219\uFF0C\u6211\u4EEC\u8FD9\u91CC\u5C31\u5148\u9ED8\u8BA4\u7528\u6237\u8F93\u5165\u662F\u5BF9\u7684\uFF0C\u8BFE\u540E\u81EA\u884C\u6DFB\u52A0\uFF01</h6><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">while</span> player<span class="token punctuation">.</span>not_dead<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">and</span> enemy<span class="token punctuation">.</span>not_dead<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    user_input <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;Attack or Defence(A/D):&quot;</span><span class="token punctuation">)</span>
 
    <span class="token keyword">if</span> user_input <span class="token operator">==</span> <span class="token string">&quot;A&quot;</span><span class="token punctuation">:</span>
        player_attack_value <span class="token operator">=</span> player<span class="token punctuation">.</span>attack<span class="token punctuation">(</span><span class="token punctuation">)</span>
        enemy_attack_value <span class="token operator">=</span> enemy<span class="token punctuation">.</span>attack<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u90A3\u73B0\u5728\u6211\u4EEC\u83B7\u53D6\u5230\u4E86\u73A9\u5BB6\u7684\u653B\u51FB\u503C\u548C\u654C\u4EBA\u7684\u653B\u51FB\u503C\uFF0C\u6211\u4EEC\u5C31\u9700\u8981\u6765\u51CF\u5C11\u751F\u547D\u503C\u3002</p><p>\u6240\u4EE5\uFF0C\u63A5\u4E0B\u6765\u6211\u4EEC\u7F16\u5199\u4E00\u4E2A <code>being_attack()</code> \u751F\u547D\u503C\u51CF\u5C11\u7684\u89C4\u5219\uFF1A</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>enemy<span class="token punctuation">.</span>being_attack<span class="token punctuation">(</span>player_attack_value<span class="token punctuation">)</span>
player<span class="token punctuation">.</span>being_attack<span class="token punctuation">(</span>enemy_attack_value<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u8FD9\u4E2A\u65F6\u5019\u6211\u4EEC\u5C31\u9700\u8981\u6DFB\u52A0\u4E00\u4E2A\u53D7\u5230\u653B\u51FB\u7684\u51FD\u6570\uFF1A</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">being_attack</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> attack_value<span class="token punctuation">)</span><span class="token punctuation">:</span>
    self<span class="token punctuation">.</span>hp <span class="token operator">=</span> self<span class="token punctuation">.</span>hp <span class="token operator">-</span> attack_value
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u63A5\u4E0B\u6765\uFF0C\u6211\u4EEC\u8981\u7F16\u5199\u7684\u662F\uFF0C\u5F53\u7528\u6237\u8F93\u5165\u9632\u5B88\u7684\u65F6\u5019\u64CD\u4F5C\uFF0C\u5F53\u73A9\u5BB6\u9009\u62E9\u9632\u5B88\u7684\u65F6\u5019\uFF0C\u90A3\u5C31\u53EA\u5269\u4E0B\u654C\u4EBA\u7684\u653B\u51FB\u503C\uFF0C\u53D7\u5230\u7684\u653B\u51FB\u503C\u51CF\u5C11\u5341\u5206\u4E4B\u4E00\uFF1A</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">elif</span> user_input <span class="token operator">==</span> <span class="token string">&quot;D&quot;</span><span class="token punctuation">:</span>
    enemy_attack_value <span class="token operator">=</span> enemy<span class="token punctuation">.</span>attack<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">*</span><span class="token number">0.1</span>
    player<span class="token punctuation">.</span>being_attack<span class="token punctuation">(</span>enemy_attack_value<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u90A3\u4E48\u6709\u6CA1\u6709\u89C9\u5F97\u5C11\u4E86\u70B9\u4EC0\u4E48\u5462\uFF1F\u4E5F\u5C31\u662F\u6E38\u620F\u72B6\u6001\uFF0C\u800C\u8FD9\u4E2A\u6E38\u620F\u72B6\u6001\u5E94\u8BE5\u5199\u5728\u4EC0\u4E48\u4F4D\u7F6E\u5462\uFF1F</p><p>\u90A3\u5C31\u662F\u73A9\u5BB6\u7684\u9009\u62E9\u4E4B\u524D\uFF0C\u5B9E\u65F6\u7684\u770B\u89C1\u73A9\u5BB6\u548C\u654C\u4EBA\u7684\u751F\u547D\u503C\uFF1A</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>player<span class="token punctuation">.</span>show_status<span class="token punctuation">(</span><span class="token punctuation">)</span>
enemy<span class="token punctuation">.</span>show_status<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7F16\u5199\u6240\u9700\u8981\u7684\u51FD\u6570\uFF1A</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">show_status</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>hp<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u73B0\u5728\u6211\u4EEC\u9700\u8981\u77E5\u9053\u90A3\u4E2A\u662F\u7528\u6237\u54EA\u4E2A\u4E2A\u654C\u4EBA\uFF0C\u6240\u4EE5\u6211\u4EEC\u5C31\u9700\u8981\u5728\u5728\u521D\u59CB\u5316\u7684\u5730\u65B9\u6DFB\u52A0\u81EA\u5B9A\u4E49\u7684\u7528\u6237\u540D\u79F0\uFF1A</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>player <span class="token operator">=</span> Creature<span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token string">&quot;AI\u60A6\u521B&quot;</span><span class="token punctuation">)</span>
enemy <span class="token operator">=</span> Creature<span class="token punctuation">(</span><span class="token number">80</span><span class="token punctuation">,</span> <span class="token string">&quot;Enemy&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u90A3\u6211\u4EEC\u5C31\u9700\u8981\u7F16\u5199\u7C7B\u7684\u521D\u59CB\u5316\u7684\u90E8\u5206\uFF1A</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> hp<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">:</span>
    self<span class="token punctuation">.</span>hp <span class="token operator">=</span> hp
    self<span class="token punctuation">.</span>name <span class="token operator">=</span> name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u63A5\u4E0B\u6765\u5C31\u9700\u8981\u5199\u4E00\u4E2A\uFF0C\u663E\u793A\u540D\u79F0\u548C\u8840\u91CF\u4E86\uFF0C\u6240\u4EE5\u6211\u4EEC\u9700\u8981\u4FEE\u6539\u51FD\u6570 <code>show_status()</code> \uFF1A</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">show_status</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;{}&#39; hp is {}.&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>name<span class="token punctuation">,</span> self<span class="token punctuation">.</span>hp<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>\u73B0\u5728\u6211\u4EEC\u4E3B\u7A0B\u5E8F\u5C31\u7F16\u5199\u7ED3\u675F\u4E86\u3002\u6211\u4EEC\u8FD8\u8981\u5224\u65AD\u8C01\u8F93\u8C01\u8D62\uFF1A</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code><span class="token keyword">if</span> player<span class="token punctuation">.</span>not_dead<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;You Win!&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;You Lose&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>\u7A0B\u5E8F\u6E90\u4EE3\u7801\u53EF\u5173\u6CE8\u516C\u4F17\u53F7\uFF1A<strong>AI\u60A6\u521B</strong>\uFF0C\u540E\u53F0\u56DE\u590D\uFF1A\u6587\u5B57\u6E38\u620F\u5373\u53EF\u83B7\u53D6\uFF01</p>`,37),r={class:"custom-container info"},k=n("p",{class:"custom-container-title"},"AI\u60A6\u521B\xB7\u7F16\u7A0B\u4E00\u5BF9\u4E00",-1),v=n("p",null,"AI\u60A6\u521B\xB7\u63A8\u51FA\u8F85\u5BFC\u73ED\u5566\uFF0C\u5305\u62EC\u300CPython \u8BED\u8A00\u8F85\u5BFC\u73ED\u3001C++ \u8F85\u5BFC\u73ED\u3001java \u8F85\u5BFC\u73ED\u3001\u7B97\u6CD5/\u6570\u636E\u7ED3\u6784\u8F85\u5BFC\u73ED\u3001\u5C11\u513F\u7F16\u7A0B\u3001pygame \u6E38\u620F\u5F00\u53D1\u300D\uFF0C\u5168\u90E8\u90FD\u662F\u4E00\u5BF9\u4E00\u6559\u5B66\uFF1A\u4E00\u5BF9\u4E00\u8F85\u5BFC + \u4E00\u5BF9\u4E00\u7B54\u7591 + \u5E03\u7F6E\u4F5C\u4E1A + \u9879\u76EE\u5B9E\u8DF5\u7B49\u3002\u5F53\u7136\uFF0C\u8FD8\u6709\u7EBF\u4E0B\u7EBF\u4E0A\u6444\u5F71\u8BFE\u7A0B\u3001Photoshop\u3001Premiere \u4E00\u5BF9\u4E00\u6559\u5B66\u3001QQ\u3001\u5FAE\u4FE1\u5728\u7EBF\uFF0C\u968F\u65F6\u54CD\u5E94\uFF01\u5FAE\u4FE1\uFF1AJiabcdefh",-1),m=n("p",null,"C++ \u4FE1\u606F\u5965\u8D5B\u9898\u89E3\uFF0C\u957F\u671F\u66F4\u65B0\uFF01\u957F\u671F\u62DB\u6536\u4E00\u5BF9\u4E00\u4E2D\u5C0F\u5B66\u4FE1\u606F\u5965\u8D5B\u96C6\u8BAD\uFF0C\u8386\u7530\u3001\u53A6\u95E8\u5730\u533A\u6709\u673A\u4F1A\u7EBF\u4E0B\u4E0A\u95E8\uFF0C\u5176\u4ED6\u5730\u533A\u7EBF\u4E0A\u3002\u5FAE\u4FE1\uFF1AJiabcdefh",-1),b={href:"http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes",target:"_blank",rel:"noopener noreferrer"},y=n("p",null,"\u65B9\u6CD5\u4E8C\uFF1A\u5FAE\u4FE1\uFF1AJiabcdefh",-1),h=n("p",null,[n("img",{src:e,alt:"",loading:"lazy"})],-1);function g(_,f){const a=i("ExternalLinkIcon");return t(),o("div",null,[d,n("div",r,[k,v,m,n("p",null,[s("\u65B9\u6CD5\u4E00\uFF1A"),n("a",b,[s("QQ"),c(a)])]),y]),h])}const C=p(u,[["render",g],["__file","hw_word_game.html.vue"]]);export{C as default};
