import{_ as n}from"./zsxq-BcdwOI-_.js";import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,a as l,o}from"./app-BFJczFUY.js";const p={};function t(i,s){return o(),e("div",null,s[0]||(s[0]=[l(`<ol><li>游戏名称：主角打怪-文字游戏</li><li>一个玩家【Player】、一个敌人【Enemy】</li><li>敌人和玩家互相攻击</li><li>玩家可以选择攻击也可以选择防守，敌人也一定会攻击，防守受到的攻击为：十分之一</li><li>敌人的攻击数值随机【random】</li></ol><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#88846F;"># -*- coding: utf-8 -*-</span></span>
<span class="line"><span style="color:#88846F;"># @Author: clela</span></span>
<span class="line"><span style="color:#88846F;"># @Date:   2020-03-31 14:13:35</span></span>
<span class="line"><span style="color:#88846F;"># @Last Modified by:   clela</span></span>
<span class="line"><span style="color:#88846F;"># @Last Modified time: 2020-04-01 17:51:50</span></span>
<span class="line"><span style="color:#F92672;">import</span><span style="color:#F8F8F2;"> random</span></span>
<span class="line"><span style="color:#88846F;"># 1</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">class</span><span> </span><span style="color:#A6E22E;text-decoration:underline;">Creature</span><span style="color:#F8F8F2;">():</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">    def</span><span style="color:#A6E22E;"> attack</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;font-style:italic;">self</span><span style="color:#F8F8F2;">):</span></span>
<span class="line"><span style="color:#88846F;">        # 我希望得到一个随机的攻击数值</span></span>
<span class="line"><span style="color:#F8F8F2;">        attack_value </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> random.randint(</span><span style="color:#AE81FF;">0</span><span style="color:#F8F8F2;">, </span><span style="color:#AE81FF;">50</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F92672;">        return</span><span style="color:#F8F8F2;"> attack_value</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>上面我们类创建好了之后，我接下来就需要实例化了：</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F8F8F2;">player </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> Creature()</span></span>
<span class="line"><span style="color:#F8F8F2;">enemy </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> Creature()</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>对于游戏的设定我们一般要判断用户和敌人的状态，也就是活着还是死了(玩家或者敌人)，也就是不断地判断，那这个时候需要什么呢？很明显是需要一个 <code>while</code> 循环在这里的。我们定义一个 <code>not_dead()</code> 函数来判断：</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F92672;">while</span><span style="color:#F8F8F2;"> player.not_dead() </span><span style="color:#F92672;">and</span><span style="color:#F8F8F2;"> enemy.not_dead():</span></span>
<span class="line"><span style="color:#F92672;">    pass</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>所以这就需要给玩家和敌人设定一个初始的值(初始的生命值)也就是需要在类的实例化的时候传入设定的生命值，比如：玩家生命值：<code>100</code> ，敌人：<code>80</code>，既然我们要添加初始的值，那接下来就需要编写类的初始化。</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F8F8F2;">player </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> Creature(</span><span style="color:#AE81FF;">100</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">enemy </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> Creature(</span><span style="color:#AE81FF;">80</span><span style="color:#F8F8F2;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>类的初始化，我们接下来使用 <code>hp</code> 来存储用户初始化的血量。(使用 <code>self.hp</code> 来存储用户和敌人的血量)</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#66D9EF;font-style:italic;">class</span><span> </span><span style="color:#A6E22E;text-decoration:underline;">Creature</span><span style="color:#F8F8F2;">():</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">    def</span><span style="color:#66D9EF;"> __init__</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;font-style:italic;">self</span><span style="color:#F8F8F2;">, </span><span style="color:#FD971F;font-style:italic;">hp</span><span style="color:#F8F8F2;">):</span></span>
<span class="line"><span style="color:#FD971F;">        self</span><span style="color:#F8F8F2;">.hp </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> hp</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个时候，我们游戏就有了生命值了，接下来就是要判断玩家和敌人的游戏状态：</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#88846F;"># 写法一：</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">def</span><span style="color:#A6E22E;"> not_dead</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;font-style:italic;">self</span><span style="color:#F8F8F2;">):</span></span>
<span class="line"><span style="color:#F92672;">    if</span><span style="color:#FD971F;"> self</span><span style="color:#F8F8F2;">.hp </span><span style="color:#F92672;">&lt;=</span><span style="color:#AE81FF;"> 0</span><span style="color:#F8F8F2;">:</span></span>
<span class="line"><span style="color:#F92672;">        return</span><span style="color:#AE81FF;"> False</span></span>
<span class="line"><span style="color:#F92672;">    else</span><span style="color:#F8F8F2;">:</span></span>
<span class="line"><span style="color:#F92672;">        return</span><span style="color:#AE81FF;"> True</span></span>
<span class="line"><span style="color:#88846F;"># 写法二</span></span>
<span class="line"><span style="color:#66D9EF;font-style:italic;">def</span><span style="color:#A6E22E;"> not_dead</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;font-style:italic;">self</span><span style="color:#F8F8F2;">):</span></span>
<span class="line"><span style="color:#F92672;">    if</span><span style="color:#FD971F;"> self</span><span style="color:#F8F8F2;">.hp </span><span style="color:#F92672;">&lt;=</span><span style="color:#AE81FF;"> 0</span><span style="color:#F8F8F2;">:</span></span>
<span class="line"><span style="color:#F92672;">        return</span><span style="color:#AE81FF;"> False</span></span>
<span class="line"><span style="color:#F92672;">    return</span><span style="color:#AE81FF;"> True</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那接下来就继续编写，<code>not_dead()</code> 返回的值是 <code>True</code>，那么游戏继续继续进行。</p><p>又因为我们的游戏是用户的输入来获取操作，所以需要在 while 循环中添加用户输入：</p><h6 id="这里我就写的简单点-就不判断用户输入的是否符合规则-我们这里就先默认用户输入是对的-课后自行添加" tabindex="-1"><a class="header-anchor" href="#这里我就写的简单点-就不判断用户输入的是否符合规则-我们这里就先默认用户输入是对的-课后自行添加"><span>这里我就写的简单点，就不判断用户输入的是否符合规则，我们这里就先默认用户输入是对的，课后自行添加！</span></a></h6><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F92672;">while</span><span style="color:#F8F8F2;"> player.not_dead() </span><span style="color:#F92672;">and</span><span style="color:#F8F8F2;"> enemy.not_dead():</span></span>
<span class="line"><span style="color:#F8F8F2;">    user_input </span><span style="color:#F92672;">=</span><span style="color:#66D9EF;"> input</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&quot;Attack or Defence(A/D):&quot;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;"> </span></span>
<span class="line"><span style="color:#F92672;">    if</span><span style="color:#F8F8F2;"> user_input </span><span style="color:#F92672;">==</span><span style="color:#E6DB74;"> &quot;A&quot;</span><span style="color:#F8F8F2;">:</span></span>
<span class="line"><span style="color:#F8F8F2;">        player_attack_value </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> player.attack()</span></span>
<span class="line"><span style="color:#F8F8F2;">        enemy_attack_value </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> enemy.attack()</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那现在我们获取到了玩家的攻击值和敌人的攻击值，我们就需要来减少生命值。</p><p>所以，接下来我们编写一个 <code>being_attack()</code> 生命值减少的规则：</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F8F8F2;">enemy.being_attack(player_attack_value)</span></span>
<span class="line"><span style="color:#F8F8F2;">player.being_attack(enemy_attack_value)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>这个时候我们就需要添加一个受到攻击的函数：</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#66D9EF;font-style:italic;">def</span><span style="color:#A6E22E;"> being_attack</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;font-style:italic;">self</span><span style="color:#F8F8F2;">, </span><span style="color:#FD971F;font-style:italic;">attack_value</span><span style="color:#F8F8F2;">):</span></span>
<span class="line"><span style="color:#FD971F;">    self</span><span style="color:#F8F8F2;">.hp </span><span style="color:#F92672;">=</span><span style="color:#FD971F;"> self</span><span style="color:#F8F8F2;">.hp </span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;"> attack_value</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来，我们要编写的是，当用户输入防守的时候操作，当玩家选择防守的时候，那就只剩下敌人的攻击值，受到的攻击值减少十分之一：</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F92672;">elif</span><span style="color:#F8F8F2;"> user_input </span><span style="color:#F92672;">==</span><span style="color:#E6DB74;"> &quot;D&quot;</span><span style="color:#F8F8F2;">:</span></span>
<span class="line"><span style="color:#F8F8F2;">    enemy_attack_value </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> enemy.attack()</span><span style="color:#F92672;">*</span><span style="color:#AE81FF;">0.1</span></span>
<span class="line"><span style="color:#F8F8F2;">    player.being_attack(enemy_attack_value)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>那么有没有觉得少了点什么呢？也就是游戏状态，而这个游戏状态应该写在什么位置呢？</p><p>那就是玩家的选择之前，实时的看见玩家和敌人的生命值：</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F8F8F2;">player.show_status()</span></span>
<span class="line"><span style="color:#F8F8F2;">enemy.show_status()</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>编写所需要的函数：</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#66D9EF;font-style:italic;">def</span><span style="color:#A6E22E;"> show_status</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;font-style:italic;">self</span><span style="color:#F8F8F2;">):</span></span>
<span class="line"><span style="color:#66D9EF;">    print</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;">self</span><span style="color:#F8F8F2;">.hp)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>现在我们需要知道那个是用户哪个个敌人，所以我们就需要在在初始化的地方添加自定义的用户名称：</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F8F8F2;">player </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> Creature(</span><span style="color:#AE81FF;">100</span><span style="color:#F8F8F2;">, </span><span style="color:#E6DB74;">&quot;AI悦创&quot;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F8F8F2;">enemy </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> Creature(</span><span style="color:#AE81FF;">80</span><span style="color:#F8F8F2;">, </span><span style="color:#E6DB74;">&quot;Enemy&quot;</span><span style="color:#F8F8F2;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>那我们就需要编写类的初始化的部分：</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#66D9EF;font-style:italic;">def</span><span style="color:#66D9EF;"> __init__</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;font-style:italic;">self</span><span style="color:#F8F8F2;">, </span><span style="color:#FD971F;font-style:italic;">hp</span><span style="color:#F8F8F2;">, </span><span style="color:#FD971F;font-style:italic;">name</span><span style="color:#F8F8F2;">):</span></span>
<span class="line"><span style="color:#FD971F;">    self</span><span style="color:#F8F8F2;">.hp </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> hp</span></span>
<span class="line"><span style="color:#FD971F;">    self</span><span style="color:#F8F8F2;">.name </span><span style="color:#F92672;">=</span><span style="color:#F8F8F2;"> name</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>接下来就需要写一个，显示名称和血量了，所以我们需要修改函数 <code>show_status()</code> ：</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#66D9EF;font-style:italic;">def</span><span style="color:#A6E22E;"> show_status</span><span style="color:#F8F8F2;">(</span><span style="color:#FD971F;font-style:italic;">self</span><span style="color:#F8F8F2;">):</span></span>
<span class="line"><span style="color:#66D9EF;">    print</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&quot;</span><span style="color:#AE81FF;">{}</span><span style="color:#E6DB74;">&#39; hp is </span><span style="color:#AE81FF;">{}</span><span style="color:#E6DB74;">.&quot;</span><span style="color:#F8F8F2;">.format(</span><span style="color:#FD971F;">self</span><span style="color:#F8F8F2;">.name, </span><span style="color:#FD971F;">self</span><span style="color:#F8F8F2;">.hp))</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>现在我们主程序就编写结束了。我们还要判断谁输谁赢：</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F92672;">if</span><span style="color:#F8F8F2;"> player.not_dead():</span></span>
<span class="line"><span style="color:#66D9EF;">    print</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&quot;You Win!&quot;</span><span style="color:#F8F8F2;">)</span></span>
<span class="line"><span style="color:#F92672;">else</span><span style="color:#F8F8F2;">:</span></span>
<span class="line"><span style="color:#66D9EF;">    print</span><span style="color:#F8F8F2;">(</span><span style="color:#E6DB74;">&quot;You Lose&quot;</span><span style="color:#F8F8F2;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>程序源代码可关注公众号：<strong>AI悦创</strong>，后台回复：文字游戏即可获取！</p><div class="hint-container info"><p class="hint-container-title">AI悦创·编程一对一</p><p>AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh</p><p>C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh</p><p>方法一：<a href="http://wpa.qq.com/msgrd?v=3&amp;uin=1432803776&amp;site=qq&amp;menu=yes" target="_blank" rel="noopener noreferrer">QQ</a></p><p>方法二：微信：Jiabcdefh</p></div><figure><img src="`+n+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',39)]))}const d=a(p,[["render",t],["__file","hw_word_game.html.vue"]]),y=JSON.parse('{"path":"/Python/basequestion/hw_word_game.html","title":"11-悦创带你现场 coding 小游戏【主角打怪-文字游戏】","lang":"zh-CN","frontmatter":{"title":"11-悦创带你现场 coding 小游戏【主角打怪-文字游戏】","date":"2022-05-09T09:07:00.000Z","author":"AI悦创","isOriginal":true,"category":"Python 私教练习题【基础】","tag":["Python 基础练习题"],"icon":"python","sticky":false,"star":false,"article":true,"timeline":true,"image":false,"navbar":true,"sidebarIcon":true,"headerDepth":5,"comment":true,"lastUpdated":true,"editLink":true,"prev":"README.md","next":"02.md","backToTop":true,"toc":true,"feed":false,"seo":false,"head":[]},"headers":[{"level":6,"title":"这里我就写的简单点，就不判断用户输入的是否符合规则，我们这里就先默认用户输入是对的，课后自行添加！","slug":"这里我就写的简单点-就不判断用户输入的是否符合规则-我们这里就先默认用户输入是对的-课后自行添加","link":"#这里我就写的简单点-就不判断用户输入的是否符合规则-我们这里就先默认用户输入是对的-课后自行添加","children":[]}],"git":{"createdTime":1704501196000,"updatedTime":1704501196000,"contributors":[{"name":"AndersonHJB","email":"cleland1432803776@icloud.com","commits":1}]},"readingTime":{"minutes":4.13,"words":1240},"filePathRelative":"Python/basequestion/hw_word_game.md","localizedDate":"2022年5月9日","copyright":{"author":"AI悦创"}}');export{d as comp,y as data};
