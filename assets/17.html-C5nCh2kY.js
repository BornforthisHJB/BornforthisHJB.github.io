import{_ as s}from"./gzh-DnOBNg6W.js";import{_ as n}from"./zsxq-BcdwOI-_.js";import{_ as a}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as e,o as l,a as o}from"./app-DguKnX9N.js";const p="/assets/dc830dd58d35cfd9025bfea084aeec0f-BChj29nu.jpg",r={},c=o('<figure><img src="'+p+`" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><p>你好，我是悦创。</p><p>装饰器一直以来都是 Python 中很有用、很经典的一个 feature，在工程中的应用也十分广泛，比如日志、缓存等等的任务都会用到。然而，在平常工作生活中，我发现不少人，尤其是初学者，常常因为其相对复杂的表示，对装饰器望而生畏，认为它“too fancy to learn”，实际并不如此。</p><p>今天这节课，我会以前面所讲的函数、闭包为切入点，引出装饰器的概念、表达和基本用法，最后，再通过实际工程中的例子，让你再次加深理解。</p><p>接下来，让我们进入正文一起学习吧！</p><h2 id="_1-函数-装饰器" tabindex="-1"><a class="header-anchor" href="#_1-函数-装饰器"><span>1. 函数 -&gt; 装饰器</span></a></h2><h3 id="_1-1-函数核心回顾" tabindex="-1"><a class="header-anchor" href="#_1-1-函数核心回顾"><span>1.1 函数核心回顾</span></a></h3><p>引入装饰器之前，我们首先一起来复习一下，必须掌握的函数的几个核心概念。</p><p>第一点，我们要知道，在 Python 中，函数是一等公民（first-class citizen），函数也是对象。我们可以把函数赋予变量，比如下面这段代码：</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">def</span><span style="color:#88C0D0;"> func</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">message</span><span style="color:#ECEFF4;">):</span></span>
<span class="line"><span style="color:#88C0D0;">    print</span><span style="color:#ECEFF4;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">Got a message: </span><span style="color:#EBCB8B;">{}</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">format</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9FF;">message</span><span style="color:#ECEFF4;">))</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span></span>
<span class="line"><span style="color:#D8DEE9FF;">send_message </span><span style="color:#81A1C1;">=</span><span style="color:#D8DEE9FF;"> func</span></span>
<span class="line"><span style="color:#88C0D0;">send_message</span><span style="color:#ECEFF4;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">hello world</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#ECEFF4;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;"># 输出</span></span>
<span class="line"><span style="color:#D8DEE9FF;">Got a message</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> hello world</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个例子中，我们把函数 func 赋予了变量 <code>send_message</code>，这样之后你调用 <code>send_message</code>，就相当于是调用函数 <code>func()</code>。</p><p>第二点，我们可以把函数当作参数，传入另一个函数中，比如下面这段代码：</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">def</span><span style="color:#88C0D0;"> get_message</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">message</span><span style="color:#ECEFF4;">):</span></span>
<span class="line"><span style="color:#81A1C1;">    return</span><span style="color:#ECEFF4;"> &#39;</span><span style="color:#A3BE8C;">Got a message: </span><span style="color:#ECEFF4;">&#39;</span><span style="color:#81A1C1;"> +</span><span style="color:#D8DEE9FF;"> message</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">def</span><span style="color:#88C0D0;"> root_call</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">func</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9;"> message</span><span style="color:#ECEFF4;">):</span></span>
<span class="line"><span style="color:#88C0D0;">    print</span><span style="color:#ECEFF4;">(</span><span style="color:#88C0D0;">func</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9FF;">message</span><span style="color:#ECEFF4;">))</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    </span></span>
<span class="line"><span style="color:#88C0D0;">root_call</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9FF;">get_message</span><span style="color:#ECEFF4;">,</span><span style="color:#ECEFF4;"> &#39;</span><span style="color:#A3BE8C;">hello world</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#ECEFF4;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;"># 输出</span></span>
<span class="line"><span style="color:#D8DEE9FF;">Got a message</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> hello world</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这个例子中，我们就把函数 <code>get_message</code> 以参数的形式，传入了函数 <code>root_call()</code> 中然后调用它。</p><p>第三点，我们可以在函数里定义函数，也就是函数的嵌套。这里我同样举了一个例子：</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">def</span><span style="color:#88C0D0;"> func</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">message</span><span style="color:#ECEFF4;">):</span></span>
<span class="line"><span style="color:#81A1C1;">    def</span><span style="color:#88C0D0;"> get_message</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">message</span><span style="color:#ECEFF4;">):</span></span>
<span class="line"><span style="color:#88C0D0;">        print</span><span style="color:#ECEFF4;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">Got a message: </span><span style="color:#EBCB8B;">{}</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">format</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9FF;">message</span><span style="color:#ECEFF4;">))</span></span>
<span class="line"><span style="color:#81A1C1;">    return</span><span style="color:#88C0D0;"> get_message</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9FF;">message</span><span style="color:#ECEFF4;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88C0D0;">func</span><span style="color:#ECEFF4;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">hello world</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#ECEFF4;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;"># 输出</span></span>
<span class="line"><span style="color:#D8DEE9FF;">Got a message</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> hello world</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这段代码中，我们在函数 <code>func()</code> 里又定义了新的函数 <code>get_message()</code>，调用后作为 <code>func()</code> 的返回值返回。</p><p>第四点，要知道，函数的返回值也可以是函数对象（闭包），比如下面这个例子：</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">def</span><span style="color:#88C0D0;"> func_closure</span><span style="color:#ECEFF4;">():</span></span>
<span class="line"><span style="color:#81A1C1;">    def</span><span style="color:#88C0D0;"> get_message</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">message</span><span style="color:#ECEFF4;">):</span></span>
<span class="line"><span style="color:#88C0D0;">        print</span><span style="color:#ECEFF4;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">Got a message: </span><span style="color:#EBCB8B;">{}</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#ECEFF4;">.</span><span style="color:#88C0D0;">format</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9FF;">message</span><span style="color:#ECEFF4;">))</span></span>
<span class="line"><span style="color:#81A1C1;">    return</span><span style="color:#D8DEE9FF;"> get_message</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9FF;">send_message </span><span style="color:#81A1C1;">=</span><span style="color:#88C0D0;"> func_closure</span><span style="color:#ECEFF4;">()</span></span>
<span class="line"><span style="color:#88C0D0;">send_message</span><span style="color:#ECEFF4;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">hello world</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#ECEFF4;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;"># 输出</span></span>
<span class="line"><span style="color:#D8DEE9FF;">Got a message</span><span style="color:#ECEFF4;">:</span><span style="color:#D8DEE9FF;"> hello world</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里，函数 <code>func_closure()</code> 的返回值是函数对象 <code>get_message</code> 本身，之后，我们将其赋予变量 <code>send_message</code>，再调用 <code>send_message(‘hello world’)</code>，最后输出了<code>&#39;Got a message: hello world&#39;</code>。</p><h3 id="_1-2-简单的装饰器" tabindex="-1"><a class="header-anchor" href="#_1-2-简单的装饰器"><span>1.2 简单的装饰器</span></a></h3><p>简单的复习之后，我们接下来学习今天的新知识——装饰器。按照习惯，我们可以先来看一个装饰器的简单例子：</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">def</span><span style="color:#88C0D0;"> my_decorator</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">func</span><span style="color:#ECEFF4;">):</span></span>
<span class="line"><span style="color:#81A1C1;">    def</span><span style="color:#88C0D0;"> wrapper</span><span style="color:#ECEFF4;">():</span></span>
<span class="line"><span style="color:#88C0D0;">        print</span><span style="color:#ECEFF4;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">wrapper of decorator</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#ECEFF4;">)</span></span>
<span class="line"><span style="color:#88C0D0;">        func</span><span style="color:#ECEFF4;">()</span></span>
<span class="line"><span style="color:#81A1C1;">    return</span><span style="color:#D8DEE9FF;"> wrapper</span></span>
<span class="line"></span>
<span class="line"><span style="color:#81A1C1;">def</span><span style="color:#88C0D0;"> greet</span><span style="color:#ECEFF4;">():</span></span>
<span class="line"><span style="color:#88C0D0;">    print</span><span style="color:#ECEFF4;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">hello world</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#ECEFF4;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D8DEE9FF;">greet </span><span style="color:#81A1C1;">=</span><span style="color:#88C0D0;"> my_decorator</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9FF;">greet</span><span style="color:#ECEFF4;">)</span></span>
<span class="line"><span style="color:#88C0D0;">greet</span><span style="color:#ECEFF4;">()</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;"># 输出</span></span>
<span class="line"><span style="color:#D8DEE9FF;">wrapper of decorator</span></span>
<span class="line"><span style="color:#D8DEE9FF;">hello world</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这段代码中，变量 greet 指向了内部函数 <code>wrapper()</code>，而内部函数 <code>wrapper()</code> 中又会调用原函数 <code>greet()</code>，因此，最后调用 <code>greet()</code> 时，就会先打印<code>&#39;wrapper of decorator&#39;</code>，然后输出<code>&#39;hello world&#39;</code>。</p><p>这里的函数 <code>my_decorator()</code> 就是一个装饰器，它把真正需要执行的函数 <code>greet()</code> 包裹在其中，并且改变了它的行为，但是原函数 <code>greet()</code> 不变。</p><p>事实上，上述代码在 Python 中有更简单、更优雅的表示：</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">def</span><span style="color:#88C0D0;"> my_decorator</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">func</span><span style="color:#ECEFF4;">):</span></span>
<span class="line"><span style="color:#81A1C1;">    def</span><span style="color:#88C0D0;"> wrapper</span><span style="color:#ECEFF4;">():</span></span>
<span class="line"><span style="color:#88C0D0;">        print</span><span style="color:#ECEFF4;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">wrapper of decorator</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#ECEFF4;">)</span></span>
<span class="line"><span style="color:#88C0D0;">        func</span><span style="color:#ECEFF4;">()</span></span>
<span class="line"><span style="color:#81A1C1;">    return</span><span style="color:#D8DEE9FF;"> wrapper</span></span>
<span class="line"></span>
<span class="line"><span style="color:#ECEFF4;">@</span><span style="color:#D08770;">my_decorator</span></span>
<span class="line"><span style="color:#81A1C1;">def</span><span style="color:#88C0D0;"> greet</span><span style="color:#ECEFF4;">():</span></span>
<span class="line"><span style="color:#88C0D0;">    print</span><span style="color:#ECEFF4;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">hello world</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#ECEFF4;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#88C0D0;">greet</span><span style="color:#ECEFF4;">()</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这里的<code>@</code>，我们称之为语法糖，<code>@my_decorator</code> 就相当于前面的 <code>greet=my_decorator(greet)</code> 语句，只不过更加简洁。因此，如果你的程序中有其它函数需要做类似的装饰，你只需在它们的上方加上 <code>@decorator</code> 就可以了，这样就大大提高了函数的重复利用和程序的可读性。</p><h3 id="_1-3-带有参数的装饰器" tabindex="-1"><a class="header-anchor" href="#_1-3-带有参数的装饰器"><span>1.3 带有参数的装饰器</span></a></h3><p>你或许会想到，如果原函数 <code>greet()</code> 中，有参数需要传递给装饰器怎么办？</p><p>一个简单的办法，是可以在对应的装饰器函数 <code>wrapper()</code> 上，加上相应的参数，比如：</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">def</span><span style="color:#88C0D0;"> my_decorator</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">func</span><span style="color:#ECEFF4;">):</span></span>
<span class="line"><span style="color:#81A1C1;">    def</span><span style="color:#88C0D0;"> wrapper</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">message</span><span style="color:#ECEFF4;">):</span></span>
<span class="line"><span style="color:#88C0D0;">        print</span><span style="color:#ECEFF4;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">wrapper of decorator</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#ECEFF4;">)</span></span>
<span class="line"><span style="color:#88C0D0;">        func</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9FF;">message</span><span style="color:#ECEFF4;">)</span></span>
<span class="line"><span style="color:#81A1C1;">    return</span><span style="color:#D8DEE9FF;"> wrapper</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#ECEFF4;">@</span><span style="color:#D08770;">my_decorator</span></span>
<span class="line"><span style="color:#81A1C1;">def</span><span style="color:#88C0D0;"> greet</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">message</span><span style="color:#ECEFF4;">):</span></span>
<span class="line"><span style="color:#88C0D0;">    print</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9FF;">message</span><span style="color:#ECEFF4;">)</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="color:#88C0D0;">greet</span><span style="color:#ECEFF4;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">hello world</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#ECEFF4;">)</span></span>
<span class="line"></span>
<span class="line"><span style="color:#616E88;"># 输出</span></span>
<span class="line"><span style="color:#D8DEE9FF;">wrapper of decorator</span></span>
<span class="line"><span style="color:#D8DEE9FF;">hello world</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>不过，新的问题来了。如果我另外还有一个函数，也需要使用 <code>my_decorator()</code> 装饰器，但是这个新的函数有两个参数，又该怎么办呢？比如：</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#ECEFF4;">@</span><span style="color:#D08770;">my_decorator</span></span>
<span class="line"><span style="color:#81A1C1;">def</span><span style="color:#88C0D0;"> celebrate</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">name</span><span style="color:#ECEFF4;">,</span><span style="color:#D8DEE9;"> message</span><span style="color:#ECEFF4;">):</span></span>
<span class="line"><span style="color:#D8DEE9FF;">    ...</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>事实上，通常情况下，我们会把 <code>*args</code> 和 <code>**kwargs</code> ，作为装饰器内部函数 <code>wrapper()</code> 的参数。<code>*args</code> 和 <code>**kwargs</code>，表示接受任意数量和类型的参数，因此装饰器就可以写成下面的形式：</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#2e3440ff;color:#d8dee9ff;"><pre class="shiki nord vp-code"><code><span class="line"><span style="color:#81A1C1;">def</span><span style="color:#88C0D0;"> my_decorator</span><span style="color:#ECEFF4;">(</span><span style="color:#D8DEE9;">func</span><span style="color:#ECEFF4;">):</span></span>
<span class="line"><span style="color:#81A1C1;">    def</span><span style="color:#88C0D0;"> wrapper</span><span style="color:#ECEFF4;">(</span><span style="color:#81A1C1;">*</span><span style="color:#D8DEE9;">args</span><span style="color:#ECEFF4;">,</span><span style="color:#81A1C1;"> **</span><span style="color:#D8DEE9;">kwargs</span><span style="color:#ECEFF4;">):</span></span>
<span class="line"><span style="color:#88C0D0;">        print</span><span style="color:#ECEFF4;">(</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#A3BE8C;">wrapper of decorator</span><span style="color:#ECEFF4;">&#39;</span><span style="color:#ECEFF4;">)</span></span>
<span class="line"><span style="color:#88C0D0;">        func</span><span style="color:#ECEFF4;">(</span><span style="color:#81A1C1;">*</span><span style="color:#D8DEE9FF;">args</span><span style="color:#ECEFF4;">,</span><span style="color:#81A1C1;"> **</span><span style="color:#D8DEE9FF;">kwargs</span><span style="color:#ECEFF4;">)</span></span>
<span class="line"><span style="color:#81A1C1;">    return</span><span style="color:#D8DEE9FF;"> wrapper</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="_1-4-带有自定义参数的装饰器" tabindex="-1"><a class="header-anchor" href="#_1-4-带有自定义参数的装饰器"><span>1.4 带有自定义参数的装饰器</span></a></h3><p>其实，装饰器还有更大程度的灵活性。刚刚说了，装饰器可以接受原函数任意类型和数量的参数，除此之外，它还可以接受自己定义的参数。</p><p>欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！</p><details class="hint-container details"><summary>公众号：AI悦创【二维码】</summary><figure><img src="`+s+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></details><div class="hint-container info"><p class="hint-container-title">AI悦创·编程一对一</p><p>AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh</p><p>C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh</p><p>方法一：<a href="http://wpa.qq.com/msgrd?v=3&amp;uin=1432803776&amp;site=qq&amp;menu=yes" target="_blank" rel="noopener noreferrer">QQ</a></p><p>方法二：微信：Jiabcdefh</p></div><figure><img src="'+n+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',42),t=[c];function i(d,E){return l(),e("div",null,t)}const C=a(r,[["render",i],["__file","17.html.vue"]]),u=JSON.parse('{"path":"/Python/Python-core-technology-and-practice/17.html","title":"17-强大的装饰器","lang":"zh-CN","frontmatter":{"title":"17-强大的装饰器","icon":"python","date":"2023-08-01T12:07:09.000Z","author":"AI悦创","isOriginal":true,"category":"Python 进阶","tag":["Python 进阶"],"sticky":false,"star":false,"article":true,"timeline":true,"image":false,"navbar":true,"sidebarIcon":true,"headerDepth":5,"comment":true,"lastUpdated":true,"editLink":false,"backToTop":true,"toc":true,"feed":false,"seo":false,"head":[]},"headers":[{"level":2,"title":"1. 函数 -> 装饰器","slug":"_1-函数-装饰器","link":"#_1-函数-装饰器","children":[{"level":3,"title":"1.1 函数核心回顾","slug":"_1-1-函数核心回顾","link":"#_1-1-函数核心回顾","children":[]},{"level":3,"title":"1.2 简单的装饰器","slug":"_1-2-简单的装饰器","link":"#_1-2-简单的装饰器","children":[]},{"level":3,"title":"1.3 带有参数的装饰器","slug":"_1-3-带有参数的装饰器","link":"#_1-3-带有参数的装饰器","children":[]},{"level":3,"title":"1.4 带有自定义参数的装饰器","slug":"_1-4-带有自定义参数的装饰器","link":"#_1-4-带有自定义参数的装饰器","children":[]}]}],"git":{"createdTime":1705215474000,"updatedTime":1705215474000,"contributors":[{"name":"AndersonHJB","email":"cleland1432803776@icloud.com","commits":1}]},"readingTime":{"minutes":4.97,"words":1492},"filePathRelative":"Python/Python-core-technology-and-practice/17.md","localizedDate":"2023年8月1日","copyright":{"author":"AI悦创"}}');export{C as comp,u as data};
