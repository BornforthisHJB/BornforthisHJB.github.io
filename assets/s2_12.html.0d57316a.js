import{_ as p}from"./gzh.b03adfd2.js";import{_ as e}from"./zsxq.77f6dc86.js";import{_ as t}from"./_plugin-vue_export-helper.cdc0426e.js";import{o,c,a as n,d as s,b as i,e as l,r as u}from"./app.d82efacb.js";const r={},d=l(`<p>你好，我是悦创。</p><p>在上一课时我们了解了多线程的基本概念，同时我们也提到，Python 中的多线程是不能很好发挥多核优势的，如果想要发挥多核优势，最好还是使用多进程。</p><p>那么本课时我们就来了解下多进程的基本概念和用 Python 实现多进程的方法。</p><h2 id="多进程的含义" tabindex="-1"><a class="header-anchor" href="#多进程的含义" aria-hidden="true">#</a> 多进程的含义</h2><p>进程（Process）是具有一定独立功能的程序关于某个数据集合上的一次运行活动，是系统进行资源分配和调度的一个独立单位。</p><p>顾名思义，多进程就是启用多个进程同时运行。由于进程是线程的集合，而且进程是由一个或多个线程构成的，所以多进程的运行意味着有大于或等于进程数量的线程在运行。</p><h2 id="python-多进程的优势" tabindex="-1"><a class="header-anchor" href="#python-多进程的优势" aria-hidden="true">#</a> Python 多进程的优势</h2><p>通过上一课时我们知道，由于进程中 GIL 的存在，Python 中的多线程并不能很好地发挥多核优势，一个进程中的多个线程，在同一时刻只能有一个线程运行。</p><p>而对于多进程来说，每个进程都有属于自己的 GIL，所以，在多核处理器下，多进程的运行是不会受 GIL 的影响的。因此，多进程能更好地发挥多核的优势。</p><p>当然，对于爬虫这种 IO 密集型任务来说，多线程和多进程影响差别并不大。对于计算密集型任务来说，Python 的多进程相比多线程，其多核运行效率会有成倍的提升。</p><p>总的来说，Python 的多进程整体来看是比多线程更有优势的。所以，在条件允许的情况下，能用多进程就尽量用多进程。</p><p>不过值得注意的是，由于进程是系统进行资源分配和调度的一个独立单位，所以各个进程之间的数据是无法共享的，如多个进程无法共享一个全局变量，进程之间的数据共享需要有单独的机制来实现，这在后面也会讲到。</p><h2 id="多进程的实现" tabindex="-1"><a class="header-anchor" href="#多进程的实现" aria-hidden="true">#</a> 多进程的实现</h2><p>在 Python 中也有内置的库来实现多进程，它就是 multiprocessing。</p><p>multiprocessing 提供了一系列的组件，如 Process（进程）、Queue（队列）、Semaphore（信号量）、Pipe（管道）、Lock（锁）、Pool（进程池）等，接下来让我们来了解下它们的使用方法。</p><h3 id="直接使用-process-类" tabindex="-1"><a class="header-anchor" href="#直接使用-process-类" aria-hidden="true">#</a> 直接使用 Process 类</h3><p>在 multiprocessing 中，每一个进程都用一个 Process 类来表示。它的 API 调用如下：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>Process<span class="token punctuation">(</span><span class="token punctuation">[</span>group <span class="token punctuation">[</span><span class="token punctuation">,</span> target <span class="token punctuation">[</span><span class="token punctuation">,</span> name <span class="token punctuation">[</span><span class="token punctuation">,</span> args <span class="token punctuation">[</span><span class="token punctuation">,</span> kwargs<span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><ul><li>target 表示调用对象，你可以传入方法的名字。</li><li>args 表示被调用对象的位置参数元组，比如 target 是函数 func，他有两个参数 m，n，那么 args 就传入 [m, n] 即可。</li><li>kwargs 表示调用对象的字典。</li><li>name 是别名，相当于给这个进程取一个名字。</li><li>group 分组。</li></ul><p>我们先用一个实例来感受一下：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> multiprocessing

<span class="token keyword">def</span> <span class="token function">process</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;Process: </span><span class="token interpolation"><span class="token punctuation">{</span>index<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        p <span class="token operator">=</span> multiprocessing<span class="token punctuation">.</span>Process<span class="token punctuation">(</span>target<span class="token operator">=</span>process<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">(</span>i<span class="token punctuation">,</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
        p<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>这是一个实现多进程最基础的方式：通过创建 Process 来新建一个子进程，其中 target 参数传入方法名，args 是方法的参数，是以元组的形式传入，其和被调用的方法 process 的参数是一一对应的。</p><blockquote><p>注意：这里 args 必须要是一个元组，如果只有一个参数，那也要在元组第一个元素后面加一个逗号，如果没有逗号则和单个元素本身没有区别，无法构成元组，导致参数传递出现问题。</p></blockquote><p>创建完进程之后，我们通过调用 start 方法即可启动进程了。运行结果如下：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>Process<span class="token punctuation">:</span> <span class="token number">0</span>
Process<span class="token punctuation">:</span> <span class="token number">1</span>
Process<span class="token punctuation">:</span> <span class="token number">2</span>
Process<span class="token punctuation">:</span> <span class="token number">3</span>
Process<span class="token punctuation">:</span> <span class="token number">4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，我们运行了 5 个子进程，每个进程都调用了 process 方法。process 方法的 index 参数通过 Process 的 args 传入，分别是 0~4 这 5 个序号，最后打印出来，5 个子进程运行结束。</p><p>由于进程是 Python 中最小的资源分配单元，因此这些进程和线程不同，各个进程之间的数据是不会共享的，每启动一个进程，都会独立分配资源。</p><p>另外，在当前 CPU 核数足够的情况下，这些不同的进程会分配给不同的 CPU 核来运行，实现真正的并行执行。</p><p>multiprocessing 还提供了几个比较有用的方法，如我们可以通过 <code>cpu_count</code> 的方法来获取当前机器 CPU 的核心数量，通过 <code>active_children</code> 方法获取当前还在运行的所有进程。</p><p>下面通过一个实例来看一下：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">import</span> multiprocessing
<span class="token keyword">import</span> time

<span class="token keyword">def</span> <span class="token function">process</span><span class="token punctuation">(</span>index<span class="token punctuation">)</span><span class="token punctuation">:</span>
    time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span>index<span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;Process: </span><span class="token interpolation"><span class="token punctuation">{</span>index<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        p <span class="token operator">=</span> multiprocessing<span class="token punctuation">.</span>Process<span class="token punctuation">(</span>target<span class="token operator">=</span>process<span class="token punctuation">,</span> args<span class="token operator">=</span><span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">)</span>
        p<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;CPU number: </span><span class="token interpolation"><span class="token punctuation">{</span>multiprocessing<span class="token punctuation">.</span>cpu_count<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>
    <span class="token keyword">for</span> p <span class="token keyword">in</span> multiprocessing<span class="token punctuation">.</span>active_children<span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;Child process name: </span><span class="token interpolation"><span class="token punctuation">{</span>p<span class="token punctuation">.</span>name<span class="token punctuation">}</span></span><span class="token string"> id: </span><span class="token interpolation"><span class="token punctuation">{</span>p<span class="token punctuation">.</span>pid<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>
    <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Process Ended&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果如下：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>Process<span class="token punctuation">:</span> <span class="token number">0</span>
CPU number<span class="token punctuation">:</span> <span class="token number">8</span>
Child process name<span class="token punctuation">:</span> Process<span class="token operator">-</span><span class="token number">5</span> <span class="token builtin">id</span><span class="token punctuation">:</span> <span class="token number">73595</span>
Child process name<span class="token punctuation">:</span> Process<span class="token operator">-</span><span class="token number">2</span> <span class="token builtin">id</span><span class="token punctuation">:</span> <span class="token number">73592</span>
Child process name<span class="token punctuation">:</span> Process<span class="token operator">-</span><span class="token number">3</span> <span class="token builtin">id</span><span class="token punctuation">:</span> <span class="token number">73593</span>
Child process name<span class="token punctuation">:</span> Process<span class="token operator">-</span><span class="token number">4</span> <span class="token builtin">id</span><span class="token punctuation">:</span> <span class="token number">73594</span>
Process Ended
Process<span class="token punctuation">:</span> <span class="token number">1</span>
Process<span class="token punctuation">:</span> <span class="token number">2</span>
Process<span class="token punctuation">:</span> <span class="token number">3</span>
Process<span class="token punctuation">:</span> <span class="token number">4</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在上面的例子中我们通过 <code>cpu_count</code> 成功获取了 CPU 核心的数量：8 个，当然不同的机器结果可能不同。</p><p>另外我们还通过 <code>active_children</code> 获取到了当前正在活跃运行的进程列表。然后我们遍历了每个进程，并将它们的名称和进程号打印出来了，这里进程号直接使用 pid 属性即可获取，进程名称直接通过 name 属性即可获取。</p><p>以上我们就完成了多进程的创建和一些基本信息的获取。</p><h3 id="继承-process-类" tabindex="-1"><a class="header-anchor" href="#继承-process-类" aria-hidden="true">#</a> 继承 Process 类</h3><p>在上面的例子中，我们创建进程是直接使用 Process 这个类来创建的，这是一种创建进程的方式。不过，创建进程的方式不止这一种，同样，我们也可以像线程 Thread 一样来通过继承的方式创建一个进程类，进程的基本操作我们在子类的 run 方法中实现即可。</p><p>通过一个实例来看一下：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> multiprocessing <span class="token keyword">import</span> Process
<span class="token keyword">import</span> time

<span class="token keyword">class</span> <span class="token class-name">MyProcess</span><span class="token punctuation">(</span>Process<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> loop<span class="token punctuation">)</span><span class="token punctuation">:</span>
        Process<span class="token punctuation">.</span>__init__<span class="token punctuation">(</span>self<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>loop <span class="token operator">=</span> loop

    <span class="token keyword">def</span> <span class="token function">run</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">for</span> count <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>loop<span class="token punctuation">)</span><span class="token punctuation">:</span>
            time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;Pid: </span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>pid<span class="token punctuation">}</span></span><span class="token string"> LoopCount: </span><span class="token interpolation"><span class="token punctuation">{</span>count<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        p <span class="token operator">=</span> MyProcess<span class="token punctuation">(</span>i<span class="token punctuation">)</span>
        p<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>我们首先声明了一个构造方法，这个方法接收一个 loop 参数，代表循环次数，并将其设置为全局变量。在 run 方法中，又使用这个 loop 变量循环了 loop 次并打印了当前的进程号和循环次数。</p><p>在调用时，我们用 range 方法得到了 2、3、4 三个数字，并把它们分别初始化了 MyProcess 进程，然后调用 start 方法将进程启动起来。</p><blockquote><p>注意：这里进程的执行逻辑需要在 run 方法中实现，启动进程需要调用 start 方法，调用之后 run 方法便会执行。</p></blockquote><p>运行结果如下：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>Pid<span class="token punctuation">:</span> <span class="token number">73667</span> LoopCount<span class="token punctuation">:</span> <span class="token number">0</span>
Pid<span class="token punctuation">:</span> <span class="token number">73668</span> LoopCount<span class="token punctuation">:</span> <span class="token number">0</span>
Pid<span class="token punctuation">:</span> <span class="token number">73669</span> LoopCount<span class="token punctuation">:</span> <span class="token number">0</span>
Pid<span class="token punctuation">:</span> <span class="token number">73667</span> LoopCount<span class="token punctuation">:</span> <span class="token number">1</span>
Pid<span class="token punctuation">:</span> <span class="token number">73668</span> LoopCount<span class="token punctuation">:</span> <span class="token number">1</span>
Pid<span class="token punctuation">:</span> <span class="token number">73669</span> LoopCount<span class="token punctuation">:</span> <span class="token number">1</span>
Pid<span class="token punctuation">:</span> <span class="token number">73668</span> LoopCount<span class="token punctuation">:</span> <span class="token number">2</span>
Pid<span class="token punctuation">:</span> <span class="token number">73669</span> LoopCount<span class="token punctuation">:</span> <span class="token number">2</span>
Pid<span class="token punctuation">:</span> <span class="token number">73669</span> LoopCount<span class="token punctuation">:</span> <span class="token number">3</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>可以看到，三个进程分别打印出了 2、3、4 条结果，即进程 73667 打印了 2 次 结果，进程 73668 打印了 3 次结果，进程 73669 打印了 4 次结果。</p><blockquote><p>注意，这里的进程 pid 代表进程号，不同机器、不同时刻运行结果可能不同。</p></blockquote><p>通过上面的方式，我们也非常方便地实现了一个进程的定义。为了复用方便，我们可以把一些方法写在每个进程类里封装好，在使用时直接初始化一个进程类运行即可。</p><h3 id="守护进程" tabindex="-1"><a class="header-anchor" href="#守护进程" aria-hidden="true">#</a> 守护进程</h3><p>在多进程中，同样存在守护进程的概念，如果一个进程被设置为守护进程，当父进程结束后，子进程会自动被终止，我们可以通过设置 daemon 属性来控制是否为守护进程。</p><p>还是原来的例子，增加了 deamon 属性的设置：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code><span class="token keyword">from</span> multiprocessing <span class="token keyword">import</span> Process
<span class="token keyword">import</span> time

<span class="token keyword">class</span> <span class="token class-name">MyProcess</span><span class="token punctuation">(</span>Process<span class="token punctuation">)</span><span class="token punctuation">:</span>
    <span class="token keyword">def</span> <span class="token function">__init__</span><span class="token punctuation">(</span>self<span class="token punctuation">,</span> loop<span class="token punctuation">)</span><span class="token punctuation">:</span>
        Process<span class="token punctuation">.</span>__init__<span class="token punctuation">(</span>self<span class="token punctuation">)</span>
        self<span class="token punctuation">.</span>loop <span class="token operator">=</span> loop

    <span class="token keyword">def</span> <span class="token function">run</span><span class="token punctuation">(</span>self<span class="token punctuation">)</span><span class="token punctuation">:</span>
        <span class="token keyword">for</span> count <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span>self<span class="token punctuation">.</span>loop<span class="token punctuation">)</span><span class="token punctuation">:</span>
            time<span class="token punctuation">.</span>sleep<span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
            <span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string-interpolation"><span class="token string">f&#39;Pid: </span><span class="token interpolation"><span class="token punctuation">{</span>self<span class="token punctuation">.</span>pid<span class="token punctuation">}</span></span><span class="token string"> LoopCount: </span><span class="token interpolation"><span class="token punctuation">{</span>count<span class="token punctuation">}</span></span><span class="token string">&#39;</span></span><span class="token punctuation">)</span>

<span class="token keyword">if</span> __name__ <span class="token operator">==</span> <span class="token string">&#39;__main__&#39;</span><span class="token punctuation">:</span>
    <span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
        p <span class="token operator">=</span> MyProcess<span class="token punctuation">(</span>i<span class="token punctuation">)</span>
        p<span class="token punctuation">.</span>daemon <span class="token operator">=</span> <span class="token boolean">True</span>
        p<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>

<span class="token keyword">print</span><span class="token punctuation">(</span><span class="token string">&#39;Main Process ended&#39;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>运行结果如下：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>Main Process ended
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>结果很简单，因为主进程没有做任何事情，直接输出一句话结束，所以在这时也直接终止了子进程的运行。</p><p>这样可以有效防止无控制地生成子进程。这样的写法可以让我们在主进程运行结束后无需额外担心子进程是否关闭，避免了独立子进程的运行。</p><h3 id="进程等待" tabindex="-1"><a class="header-anchor" href="#进程等待" aria-hidden="true">#</a> 进程等待</h3><p>上面的运行效果其实不太符合我们预期：主进程运行结束时，子进程（守护进程）也都退出了，子进程什么都没来得及执行。</p><p>能不能让所有子进程都执行完了然后再结束呢？当然是可以的，只需要加入 join 方法即可，我们可以将代码改写如下：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>processes <span class="token operator">=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span>
<span class="token keyword">for</span> i <span class="token keyword">in</span> <span class="token builtin">range</span><span class="token punctuation">(</span><span class="token number">2</span><span class="token punctuation">,</span> <span class="token number">5</span><span class="token punctuation">)</span><span class="token punctuation">:</span>
    p <span class="token operator">=</span> MyProcess<span class="token punctuation">(</span>i<span class="token punctuation">)</span>
    processes<span class="token punctuation">.</span>append<span class="token punctuation">(</span>p<span class="token punctuation">)</span>
    p<span class="token punctuation">.</span>daemon <span class="token operator">=</span> <span class="token boolean">True</span>
    p<span class="token punctuation">.</span>start<span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token keyword">for</span> p <span class="token keyword">in</span> processes<span class="token punctuation">:</span>
    p<span class="token punctuation">.</span>join<span class="token punctuation">(</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><details class="custom-container details"><summary>公众号：AI悦创【二维码】</summary><p><img src="`+p+'" alt="" loading="lazy"></p></details>',61),k={class:"custom-container info"},m=n("p",{class:"custom-container-title"},"AI悦创·编程一对一",-1),v=n("p",null,"AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发、Linux、Web全栈」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh",-1),b=n("p",null,"C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh",-1),g={href:"http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes",target:"_blank",rel:"noopener noreferrer"},h=n("p",null,"方法二：微信：Jiabcdefh",-1),y=n("p",null,[n("img",{src:e,alt:"",loading:"lazy"})],-1);function _(P,f){const a=u("ExternalLinkIcon");return o(),c("div",null,[d,n("div",k,[m,v,b,n("p",null,[s("方法一："),n("a",g,[s("QQ"),i(a)])]),h]),y])}const q=t(r,[["render",_],["__file","s2_12.html.vue"]]);export{q as default};
