<template><div><p>你好，我是悦创。 我接下来，把所有 Python pip 换源的方法，都整理下来。</p>
<h2 id="第一种方法" tabindex="-1"><a class="header-anchor" href="#第一种方法" aria-hidden="true">#</a> 第一种方法</h2>
<ol>
<li>打开 appdata 文件夹，在资源管理器的地址栏输入 <code v-pre>%appdata%</code> 后回车：</li>
</ol>
<p><img src="@source/posts/16.assets/20210508192633540.png" alt="在这里插入图片描述" loading="lazy"></p>
<ol start="2">
<li>新建一个 pip 文件夹，在 pip 文件夹里面新建一个配置文件 <code v-pre>pip.ini</code>：</li>
</ol>
<p><img src="@source/posts/16.assets/20210508193011731.png" alt="在这里插入图片描述" loading="lazy"></p>
<ol start="3">
<li>在配置文件中输入如下内容后保存即可：</li>
</ol>
<div class="language-cmd ext-cmd line-numbers-mode"><pre v-pre class="language-cmd"><code>[global]
timeout = 6000
index-url = https://pypi.tuna.tsinghua.edu.cn/simple
trusted-host = pypi.tuna.tsinghua.edu.cn
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>再次使用 pip，即会使用新源。 <strong>一些常用的国内源：</strong></p>
<ul>
<li>
<p>清华大学：<a href="https://pypi.tuna.tsinghua.edu.cn/simple" target="_blank" rel="noopener noreferrer">https://pypi.tuna.tsinghua.edu.cn/simple<ExternalLinkIcon/></a></p>
</li>
<li>
<p>阿里云：<a href="https://mirrors.aliyun.com/pypi/simple" target="_blank" rel="noopener noreferrer">https://mirrors.aliyun.com/pypi/simple<ExternalLinkIcon/></a></p>
</li>
<li>
<p>中国科学技术大学 <a href="https://pypi.mirrors.ustc.edu.cn/simple" target="_blank" rel="noopener noreferrer">https://pypi.mirrors.ustc.edu.cn/simple<ExternalLinkIcon/></a></p>
</li>
<li>
<p>豆瓣：<a href="http://pypi.douban.com/simple" target="_blank" rel="noopener noreferrer">http://pypi.douban.com/simple<ExternalLinkIcon/></a></p>
</li>
</ul>
<h2 id="第二种方法" tabindex="-1"><a class="header-anchor" href="#第二种方法" aria-hidden="true">#</a> 第二种方法</h2>
<p><img src="@source/posts/16.assets/20210508200241770.png" alt="在这里插入图片描述" loading="lazy"></p>
<h2 id="第三种方法" tabindex="-1"><a class="header-anchor" href="#第三种方法" aria-hidden="true">#</a> 第三种方法</h2>
<p>从 <code v-pre>pip10.0.0</code> 开始，有个 config 子命令可用来改配置，无需关心不同操作系统下配置文件路径。 详见讨论：<a href="https://link.zhihu.com/?target=https%3A//github.com/pypa/pip/issues/1736" target="_blank" rel="noopener noreferrer">https://link.zhihu.com/?target=https%3A//github.com/pypa/pip/issues/1736<ExternalLinkIcon/></a> 实际使用例子：</p>
<div class="language-cmd ext-cmd line-numbers-mode"><pre v-pre class="language-cmd"><code># 阿里源
pip config set global.index-url http://mirrors.aliyun.com/pypi/simple/

# 豆瓣源
pip config set global.index-url https://pypi.douban.com/simple

# 阿里云 http://mirrors.aliyun.com/pypi/simple/
# 科技大学 https://pypi.mirrors.ustc.edu.cn/simple/
# 豆瓣(douban) http://pypi.douban.com/simple/
# 清华大学 https://pypi.tuna.tsinghua.edu.cn/simple/
# 中国科学技术大学 http://pypi.mirrors.ustc.edu.cn/simple/
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="换回官方源" tabindex="-1"><a class="header-anchor" href="#换回官方源" aria-hidden="true">#</a> 换回官方源</h2>
<div class="language-pip ext-pip line-numbers-mode"><pre v-pre class="language-pip"><code>pip config set global.index-url https://pypi.org/simple
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！</p>
<details class="custom-container details"><summary>公众号：AI悦创【二维码】</summary>
<p><img src="/gzh.jpg" alt="" loading="lazy"></p>
</details>
<div class="custom-container info">
<p class="custom-container-title">AI悦创·编程一对一</p>
<p>AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh</p>
<p>C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh</p>
<p>方法一：<a href="http://wpa.qq.com/msgrd?v=3&amp;uin=1432803776&amp;site=qq&amp;menu=yes" target="_blank" rel="noopener noreferrer">QQ<ExternalLinkIcon/></a></p>
<p>方法二：微信：Jiabcdefh</p>
</div>
<p><img src="/zsxq.jpg" alt="" loading="lazy"></p>
</div></template>


