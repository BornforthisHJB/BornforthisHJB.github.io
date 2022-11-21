import{_ as s}from"./gzh.b03adfd2.js";import{_ as t}from"./zsxq.77f6dc86.js";import{_ as o}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as p,c as i,a as e,d as n,b as r,e as c,r as d}from"./app.b0eae2c5.js";const l={},u=c(`<h2 id="使用" tabindex="-1"><a class="header-anchor" href="#使用" aria-hidden="true">#</a> 使用</h2><p>平时导出依赖一般都是：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>pip freeze <span class="token operator">&gt;</span>  requirements<span class="token punctuation">.</span>txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>这种方式导出的是当前 Python 环境中所有的包，有些库不是必需的也跟着导出来，安装的时候也过于麻烦。</p><p>这种时候就要使用 <code>pipreqs</code> ，它只会导出当前项目运行所依赖的包。</p><p>下载命令：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>pip install pipreqs
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>使用命令如下，进入项目的根目录后输入如下命令：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>pipreqs <span class="token punctuation">.</span><span class="token operator">/</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>然后会在当前目录下生成 <strong>requirements.txt</strong> 文件。</p><h2 id="问题" tabindex="-1"><a class="header-anchor" href="#问题" aria-hidden="true">#</a> 问题</h2><div class="custom-container warning"><p class="custom-container-title">注意</p><p>UnicodeDecodeError: &#39;gbk&#39; codec can&#39;t decode byte 0x80 in position 175: illegal multibyte sequence</p></div><h2 id="解决方法-指定编码格式" tabindex="-1"><a class="header-anchor" href="#解决方法-指定编码格式" aria-hidden="true">#</a> 解决方法：指定编码格式</h2><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>pipreqs <span class="token punctuation">.</span><span class="token operator">/</span> <span class="token operator">-</span><span class="token operator">-</span>encoding<span class="token operator">=</span>utf8
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>之后便会生成 <code>requirements.txt</code> 文件，包含了此路径下项目中的依赖项。</p><h2 id="导入" tabindex="-1"><a class="header-anchor" href="#导入" aria-hidden="true">#</a> 导入</h2><p>导入依赖包：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>pip install <span class="token operator">-</span>r <span class="token punctuation">.</span><span class="token operator">/</span>requirements<span class="token punctuation">.</span>txt
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>即可安装所有依赖，另外还可以使用其他源来加速下载，如清华源：</p><div class="language-python line-numbers-mode" data-ext="py"><pre class="language-python"><code>pip install <span class="token operator">-</span>r <span class="token punctuation">.</span><span class="token operator">/</span>requriements<span class="token punctuation">.</span>txt <span class="token operator">-</span>i https<span class="token punctuation">:</span><span class="token operator">//</span>pypi<span class="token punctuation">.</span>tuna<span class="token punctuation">.</span>tsinghua<span class="token punctuation">.</span>edu<span class="token punctuation">.</span>cn<span class="token operator">/</span>simple
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><div class="custom-container info"><p class="custom-container-title">细节</p><p>有些小细节也是值得一提的，那就是 <code>pip freeze &gt; requirements.txt</code> 指令必须用在整个工程项目完全跑通了（也就是项目依赖已经全部安装完成）的情况下，才能将所有的有关依赖库写入 <code>requirements.txt</code> 文件中去，而 <code>pip install -r requirements.txt</code> 指令则使用于服务器部署时较为合适。</p></div><h2 id="补充-python-项目环境迁移" tabindex="-1"><a class="header-anchor" href="#补充-python-项目环境迁移" aria-hidden="true">#</a> 补充：Python 项目环境迁移</h2><p>将 Python 项目迁移到新电脑时，不可以直接复制虚拟环境，因为在建立虚拟环境时，虚拟环境中的 <code>python.exe</code> , <code>pip.exe</code> ......等一些文件会“<strong>硬编码</strong>”，记录的是绝对路径，放到其他电脑后，因为路径不同会出错！</p><p>正确的做法是在新电脑中创建新的虚拟环境：<code>python -m venv MyApp</code> ，接下来（方法可供选择）：</p><ol><li><p>复制之前的 lib 文件中的 packes 直接到新电脑的 lib 文件中</p></li><li><p><code>pip freeze &gt; requirements.txt</code> 将包目录存在 txt 中，复制 txt 到新环境，cmd 到新环境，执行 <code>pip install -r requirements.txt</code>。</p></li></ol><p>欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！</p><details class="custom-container details"><summary>公众号：AI悦创【二维码】</summary><p><img src="`+s+'" alt="" loading="lazy"></p></details>',27),h={class:"custom-container info"},m=e("p",{class:"custom-container-title"},"AI悦创·编程一对一",-1),v=e("p",null,"AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh",-1),g=e("p",null,"C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh",-1),_={href:"http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes",target:"_blank",rel:"noopener noreferrer"},y=e("p",null,"方法二：微信：Jiabcdefh",-1),b=e("p",null,[e("img",{src:t,alt:"",loading:"lazy"})],-1);function k(x,f){const a=d("ExternalLinkIcon");return p(),i("div",null,[u,e("div",h,[m,v,g,e("p",null,[n("方法一："),e("a",_,[n("QQ"),r(a)])]),y]),b])}const A=o(l,[["render",k],["__file","requirements.html.vue"]]);export{A as default};
