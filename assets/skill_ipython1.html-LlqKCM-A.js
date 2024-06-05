import{_ as i}from"./gzh-DnOBNg6W.js";import{_ as s}from"./zsxq-BcdwOI-_.js";import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as n,o as h,a as t}from"./app-DuqmmGCS.js";const l={},e=t(`<p>你好，我是悦创。</p><p>经常给一对一学员上课的时候，会用到 IPython 来演示代码，毕竟 IPython 不用不知道，一用根本停不下来。我都不想用 Pycharm 来调试代码了。</p><p>但是，用了这么久，一直惯性思维回答编程一对一学员： <strong>IPython 的优点是我刚刚说的这些，但是就是代码保存不了。</strong> 很多人问我，我也一直是这个想法并且做的非常彻底去回答。</p><p>但是，今天一个学员，学计算机专业的在伯克利，上课后问我：老师，IPython 真的不能保留「保存」代码？ 我说是的！非常肯定的回答，一直都是这个回答的不会有错！但是，当听见这句话的时候，我惊呆了：<strong>从来如此就是对的吗？</strong> 那一瞬间，好像有什么东西破碎一般，所有自我的矇昧体现了出来。我想起了柴静的《看见》中的一句话：<strong>要想“看见”，就要从蒙昧中睁开眼来。这才是最困难的地方，因为蒙昧就是我自身，像石头一样成了心里的坝。</strong> 然后我就去找了一下，然后就有了下面的小笔记： <strong>回到上面的问题, 两种办法解决：</strong></p><ol><li>用 <code>%hist</code> 保存后把 <code>%</code> 开头的删掉再执行。</li></ol><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">Input[</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]:</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">hist </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">f filename.py</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><ol start="2"><li>用 <code>%logstart</code> 和 <code>%logstop</code> 。它会把你所用的 <code>%</code> 命令对应的的 <code>Python</code> 代码（如下面的 magic…）。</li></ol><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">In [</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">7</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]: </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">logstart </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">tmp</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">test_log.py</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">Activating auto</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">logging. Current session state plus future </span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">input</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> saved.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">Filename       : </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">tmp</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">test_log.py</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">Mode           : backup</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">Output logging : </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">False</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">Raw </span><span style="--shiki-light:#005CC5;--shiki-dark:#56B6C2;">input</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> log  : </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">False</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">Timestamping   : </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">False</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">State          : active</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> In [</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">8</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]: a </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 10</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> In [</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">9</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]: b </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> a</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">a</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> In [</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">10</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]: </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">who</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">a        b</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> In [</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">11</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]: </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">logstop</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> In [</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">12</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]: </span><span style="--shiki-light:#B31D28;--shiki-dark:#FFFFFF;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">!</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">cat </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">tmp</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">/</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">test_log.py</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#7F848E;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;"># IPython log file</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#B31D28;--shiki-dark:#FFFFFF;--shiki-light-font-style:italic;--shiki-dark-font-style:inherit;">357x46</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">357</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">46</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">54</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">32</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">53</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">42</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">52</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">43</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">532</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">*</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">4</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;">get_ipython</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">().</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;">magic</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">u</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;logstart /tmp/test_log.py&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">a </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;"> 10</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">b </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> a</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">*</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">a</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;">get_ipython</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">().</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;">magic</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">u</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;who&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;">get_ipython</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">().</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;">magic</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">u</span><span style="--shiki-light:#032F62;--shiki-dark:#98C379;">&#39;logstop&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">)</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><ol start="3"><li>例如，对于你的用例，有 <a href="http://ipython.readthedocs.io/en/stable/interactive/magics.html#magic-save" target="_blank" rel="noopener noreferrer"><code>%save</code> magic command</a> 你只需输入<code>%save my_useful_session 10-20 23</code>保存输入行 10 至 20 和 23 到 <code>my_useful_session.py</code></li></ol><hr><p>如果你的 IPython 会话如下所示</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">In [</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">] : </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">import</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> numpy </span><span style="--shiki-light:#D73A49;--shiki-dark:#C678DD;">as</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;"> np</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">...</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">In [</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">135</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]: counter</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">collections.</span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;">Counter</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">(mapusercluster[</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">])</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">In [</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">136</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]: counter</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">Out[</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">136</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]: </span><span style="--shiki-light:#24292E;--shiki-dark:#61AFEF;">Counter</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">({</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">2</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">700</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">351</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">, </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">: </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">233</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">})</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>你希望将行从 1 保存到 135，然后在同一个 IPython 会话上使用以下命令</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">In [</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">137</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">]: </span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">%</span><span style="--shiki-light:#24292E;--shiki-dark:#ABB2BF;">save aiyc.py </span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">1</span><span style="--shiki-light:#D73A49;--shiki-dark:#56B6C2;">-</span><span style="--shiki-light:#005CC5;--shiki-dark:#D19A66;">135</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>这将所有 Python 语句保存在当前目录(启动 IPython 的位置)中的 <code>aiyc.py</code> 文件中。 <strong>此外，文件指出：</strong></p><blockquote><p>此函数使用与<a href="http://ipython.readthedocs.io/en/5.x/interactive/magics.html#magic-history" target="_blank" rel="noopener noreferrer">%history</a>对于输入范围，然后将行保存到指定的文件名。</p></blockquote><p>例如，这允许引用较早的会话，例如</p><div class="language-ipython line-numbers-mode" data-highlighter="shiki" data-ext="ipython" data-title="ipython" style="--shiki-light:#24292e;--shiki-dark:#abb2bf;--shiki-light-bg:#fff;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes github-light one-dark-pro vp-code"><code><span class="line"><span>%save current_session ~0/</span></span>
<span class="line"><span>%save previous_session ~1/</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><p>欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！</p><details class="hint-container details"><summary>公众号：AI悦创【二维码】</summary><figure><img src="`+i+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></details><div class="hint-container info"><p class="hint-container-title">AI悦创·编程一对一</p><p>AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh</p><p>C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh</p><p>方法一：<a href="http://wpa.qq.com/msgrd?v=3&amp;uin=1432803776&amp;site=qq&amp;menu=yes" target="_blank" rel="noopener noreferrer">QQ</a></p><p>方法二：微信：Jiabcdefh</p></div><figure><img src="'+s+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',22),k=[e];function p(r,d){return h(),n("div",null,k)}const c=a(l,[["render",p],["__file","skill_ipython1.html.vue"]]),A=JSON.parse('{"path":"/Python/basequestion/skill_ipython1.html","title":"02-如何将 IPython 的历史记录导出到.py 文件中?","lang":"zh-CN","frontmatter":{"title":"02-如何将 IPython 的历史记录导出到.py 文件中?","date":"2022-06-07T16:01:00.000Z","author":"AI悦创","isOriginal":true,"category":["编辑器技巧","IPython"],"tag":["编辑器技巧","IPython","使用技巧"],"icon":"python","sticky":false,"star":false,"article":true,"timeline":true,"image":false,"navbar":true,"sidebarIcon":true,"headerDepth":5,"comment":true,"lastUpdated":true,"editLink":true,"prev":"skill_pycharm1","next":"skill_pycharm1.md","backToTop":true,"toc":true,"feed":false,"seo":false,"head":[]},"headers":[],"git":{"createdTime":1704501196000,"updatedTime":1704501196000,"contributors":[{"name":"AndersonHJB","email":"cleland1432803776@icloud.com","commits":1}]},"readingTime":{"minutes":3.15,"words":946},"filePathRelative":"Python/basequestion/skill_ipython1.md","localizedDate":"2022年6月7日","copyright":{"author":"AI悦创"}}');export{c as comp,A as data};
