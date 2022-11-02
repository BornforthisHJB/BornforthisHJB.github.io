import{_ as e}from"./zsxq.77f6dc86.js";import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as p,c as o,a as n,d as s,b as c,e as l,r as i}from"./app.9b23c9fb.js";const u={},d=l(`<ol><li>游戏名称：主角打怪-文字游戏</li><li>一个玩家【Player】、一个敌人【Enemy】</li><li>敌人和玩家互相攻击</li><li>玩家可以选择攻击也可以选择防守，敌人也一定会攻击，防守受到的攻击为：十分之一</li><li>敌人的攻击数值随机【random】</li></ol><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># -*- coding: utf-8 -*-</span>
<span class="token comment"># @Author: clela</span>
<span class="token comment"># @Date:   2020-03-31 14:13:35</span>
<span class="token comment"># @Last Modified by:   clela</span>
<span class="token comment"># @Last Modified time: 2020-04-01 17:51:50</span>
<span class="token keyword">import</span> random
<span class="token comment"># 1</span>
<span class="token keyword">class</span> <span class="token class-name">Creature</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">attack</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token comment"># 我希望得到一个随机的攻击数值</span>
        attack_value <span class="token operator">=</span> random<span class="token punctuation">.</span>randint<span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">50</span><span class="token punctuation">)</span>
        <span class="token keyword">return</span> attack_value
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面我们类创建好了之后，我接下来就需要实例化了：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>player <span class="token operator">=</span> Creature<span class="token punctuation">(</span><span class="token punctuation">)</span>
enemy <span class="token operator">=</span> Creature<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>对于游戏的设定我们一般要判断用户和敌人的状态，也就是活着还是死了(玩家或者敌人)，也就是不断地判断，那这个时候需要什么呢？很明显是需要一个 <code>while</code> 循环在这里的。我们定义一个 <code>not_dead()</code> 函数来判断：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">while</span> player<span class="token punctuation">.</span>not_dead<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">and</span> enemy<span class="token punctuation">.</span>not_dead<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">pass</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>所以这就需要给玩家和敌人设定一个初始的值(初始的生命值)也就是需要在类的实例化的时候传入设定的生命值，比如：玩家生命值：<code>100</code> ，敌人：<code>80</code>，既然我们要添加初始的值，那接下来就需要编写类的初始化。</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>player <span class="token operator">=</span> Creature<span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">)</span>
enemy <span class="token operator">=</span> Creature<span class="token punctuation">(</span><span class="token number">80</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>类的初始化，我们接下来使用 <code>hp</code> 来存储用户初始化的血量。(使用 <code>self.hp</code> 来存储用户和敌人的血量)</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">class</span> <span class="token class-name">Creature</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> hp<span class="token punctuation">)</span><span class="token punctuation">:</span>
        self<span class="token punctuation">.</span>hp <span class="token operator">=</span> hp
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个时候，我们游戏就有了生命值了，接下来就是要判断玩家和敌人的游戏状态：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token comment"># 写法一：</span>
<span class="token keyword">def</span> <span class="token function">not_dead</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> self<span class="token punctuation">.</span>hp <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token boolean">False</span>
    <span class="token keyword">else</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token boolean">True</span>
<span class="token comment"># 写法二</span>
<span class="token keyword">def</span> <span class="token function">not_dead</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">if</span> self<span class="token punctuation">.</span>hp <span class="token operator">&lt;=</span> <span class="token number">0</span><span class="token punctuation">:</span>
        <span class="token keyword">return</span> <span class="token boolean">False</span>
    <span class="token keyword">return</span> <span class="token boolean">True</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那接下来就继续编写，<code>not_dead()</code> 返回的值是 <code>True</code>，那么游戏继续继续进行。</p><p>又因为我们的游戏是用户的输入来获取操作，所以需要在 while 循环中添加用户输入：</p><h6 id="这里我就写的简单点-就不判断用户输入的是否符合规则-我们这里就先默认用户输入是对的-课后自行添加" tabindex="-1"><a class="header-anchor" href="#这里我就写的简单点-就不判断用户输入的是否符合规则-我们这里就先默认用户输入是对的-课后自行添加" aria-hidden="true">#</a> 这里我就写的简单点，就不判断用户输入的是否符合规则，我们这里就先默认用户输入是对的，课后自行添加！</h6><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">while</span> player<span class="token punctuation">.</span>not_dead<span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token keyword">and</span> enemy<span class="token punctuation">.</span>not_dead<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    user_input <span class="token operator">=</span> <span class="token builtin">input</span><span class="token punctuation">(</span><span class="token string">&quot;Attack or Defence(A/D):&quot;</span><span class="token punctuation">)</span>
 
    <span class="token keyword">if</span> user_input <span class="token operator">==</span> <span class="token string">&quot;A&quot;</span><span class="token punctuation">:</span>
        player_attack_value <span class="token operator">=</span> player<span class="token punctuation">.</span>attack<span class="token punctuation">(</span><span class="token punctuation">)</span>
        enemy_attack_value <span class="token operator">=</span> enemy<span class="token punctuation">.</span>attack<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那现在我们获取到了玩家的攻击值和敌人的攻击值，我们就需要来减少生命值。</p><p>所以，接下来我们编写一个 <code>being_attack()</code> 生命值减少的规则：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>enemy<span class="token punctuation">.</span>being_attack<span class="token punctuation">(</span>player_attack_value<span class="token punctuation">)</span>
player<span class="token punctuation">.</span>being_attack<span class="token punctuation">(</span>enemy_attack_value<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>这个时候我们就需要添加一个受到攻击的函数：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">being_attack</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> attack_value<span class="token punctuation">)</span><span class="token punctuation">:</span>
    self<span class="token punctuation">.</span>hp <span class="token operator">=</span> self<span class="token punctuation">.</span>hp <span class="token operator">-</span> attack_value
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来，我们要编写的是，当用户输入防守的时候操作，当玩家选择防守的时候，那就只剩下敌人的攻击值，受到的攻击值减少十分之一：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">elif</span> user_input <span class="token operator">==</span> <span class="token string">&quot;D&quot;</span><span class="token punctuation">:</span>
    enemy_attack_value <span class="token operator">=</span> enemy<span class="token punctuation">.</span>attack<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token operator">*</span><span class="token number">0.1</span>
    player<span class="token punctuation">.</span>being_attack<span class="token punctuation">(</span>enemy_attack_value<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么有没有觉得少了点什么呢？也就是游戏状态，而这个游戏状态应该写在什么位置呢？</p><p>那就是玩家的选择之前，实时的看见玩家和敌人的生命值：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>player<span class="token punctuation">.</span>show_status<span class="token punctuation">(</span><span class="token punctuation">)</span>
enemy<span class="token punctuation">.</span>show_status<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>编写所需要的函数：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">show_status</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>hp<span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>现在我们需要知道那个是用户哪个个敌人，所以我们就需要在在初始化的地方添加自定义的用户名称：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>player <span class="token operator">=</span> Creature<span class="token punctuation">(</span><span class="token number">100</span><span class="token punctuation">,</span> <span class="token string">&quot;AI悦创&quot;</span><span class="token punctuation">)</span>
enemy <span class="token operator">=</span> Creature<span class="token punctuation">(</span><span class="token number">80</span><span class="token punctuation">,</span> <span class="token string">&quot;Enemy&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>那我们就需要编写类的初始化的部分：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> hp<span class="token punctuation">,</span> name<span class="token punctuation">)</span><span class="token punctuation">:</span>
    self<span class="token punctuation">.</span>hp <span class="token operator">=</span> hp
    self<span class="token punctuation">.</span>name <span class="token operator">=</span> name
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来就需要写一个，显示名称和血量了，所以我们需要修改函数 <code>show_status()</code> ：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">def</span> <span class="token function">show_status</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;{}&#39; hp is {}.&quot;</span><span class="token punctuation">.</span><span class="token builtin">format</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>name<span class="token punctuation">,</span> self<span class="token punctuation">.</span>hp<span class="token punctuation">)</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div></div></div><p>现在我们主程序就编写结束了。我们还要判断谁输谁赢：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">if</span> player<span class="token punctuation">.</span>not_dead<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;You Win!&quot;</span><span class="token punctuation">)</span>
<span class="token keyword">else</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&quot;You Lose&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>程序源代码可关注公众号：<strong>AI悦创</strong>，后台回复：文字游戏即可获取！</p>`,37),r={class:"custom-container info"},k=n("p",{class:"custom-container-title"},"AI悦创·编程一对一",-1),v=n("p",null,"AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh",-1),m=n("p",null,"C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh",-1),b={href:"http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes",target:"_blank",rel:"noopener noreferrer"},y=n("p",null,"方法二：微信：Jiabcdefh",-1),h=n("p",null,[n("img",{src:e,alt:""})],-1);function g(_,f){const a=i("ExternalLinkIcon");return p(),o("div",null,[d,n("div",r,[k,v,m,n("p",null,[s("方法一："),n("a",b,[s("QQ"),c(a)])]),y]),h])}const C=t(u,[["render",g],["__file","hw_word_game.html.vue"]]);export{C as default};
