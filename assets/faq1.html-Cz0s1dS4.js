import{_ as a}from"./gzh-DnOBNg6W.js";import{_ as n}from"./zsxq-BcdwOI-_.js";import{_ as l}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as o,a as p,o as e}from"./app-BFJczFUY.js";const F="/assets/image-20220519194710393-DCPDNrhO.png",t={};function r(c,s){return e(),o("div",null,s[0]||(s[0]=[p('<h2 id="项目链接如下" tabindex="-1"><a class="header-anchor" href="#项目链接如下"><span>项目链接如下</span></a></h2><p><a href="https://github.com/AndersonHJB/Python_FAQ" target="_blank" rel="noopener noreferrer">https://github.com/AndersonHJB/Python_FAQ</a></p><h2 id="报错如下" tabindex="-1"><a class="header-anchor" href="#报错如下"><span>报错如下</span></a></h2><figure><img src="'+F+`" alt="image-20220519194710393" tabindex="0" loading="lazy"><figcaption>image-20220519194710393</figcaption></figure><details class="hint-container details"><summary>文字</summary><div class="language-cmd line-numbers-mode has-collapsed-lines collapsed" data-highlighter="shiki" data-ext="cmd" data-title="cmd" style="--vp-collapsed-lines:15;background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F8F8F2;">clela@AIYC D:\\Github_pages\\Python_FAQ\\</span><span style="color:#AE81FF;">01</span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;">Python 项目文件不能添加空格的原因\\测试项目\\</span><span style="color:#AE81FF;">02</span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;">Python 视频分割生成链接</span></span>
<span class="line"><span style="color:#F8F8F2;"># python split_demo.py</span></span>
<span class="line"><span style="color:#F8F8F2;">r_path: D:\\Github_pages\\Python_FAQ\\</span><span style="color:#AE81FF;">01</span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;">Python 项目文件不能添加空格的原因\\测试项目\\</span><span style="color:#AE81FF;">02</span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;">Python 视频分割生成链接\\one.</span></span>
<span class="line"><span style="color:#F8F8F2;">movie_name: one</span></span>
<span class="line"><span style="color:#F8F8F2;">D:\\Github_pages\\Python_FAQ\\</span><span style="color:#AE81FF;">01</span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;">Python 项目文件不能添加空格的原因\\测试项目\\</span><span style="color:#AE81FF;">02</span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;">Python 视频分割生成链接\\result</span></span>
<span class="line"><span style="color:#F8F8F2;">ffmpeg version </span><span style="color:#AE81FF;">4.4</span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;">essentials_build</span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;">www.gyan.dev Copyright (c) </span><span style="color:#AE81FF;">2000-2021</span><span style="color:#F8F8F2;"> the FFmpeg developers</span></span>
<span class="line"><span style="color:#F8F8F2;">  built </span><span style="color:#F92672;">with</span><span style="color:#F8F8F2;"> gcc </span><span style="color:#AE81FF;">10.2.0</span><span style="color:#F8F8F2;"> (Rev6, Built by MSYS2 project)</span></span>
<span class="line"><span style="color:#F8F8F2;">  configuration: </span><span style="color:#F92672;">--</span><span style="color:#F8F8F2;">enable</span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;">gpl </span><span style="color:#F92672;">--</span><span style="color:#F8F8F2;">enable</span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;">version3 </span><span style="color:#F92672;">--</span><span style="color:#F8F8F2;">enable</span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;">static </span><span style="color:#F92672;">--</span><span style="color:#F8F8F2;">disable</span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;">w32threads </span><span style="color:#F92672;">--</span><span style="color:#F8F8F2;">disable</span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;">autodetect </span><span style="color:#F92672;">--</span><span style="color:#F8F8F2;">enable</span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;">fontconfig </span><span style="color:#F92672;">--</span><span style="color:#F8F8F2;">enable</span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;">iconv </span><span style="color:#F92672;">--</span><span style="color:#F8F8F2;">enable</span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;">gnutls </span><span style="color:#F92672;">--</span><span style="color:#F8F8F2;">enable</span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;">libxml2 </span><span style="color:#F92672;">--</span><span style="color:#F8F8F2;">enable</span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;">gmp </span><span style="color:#F92672;">--</span><span style="color:#F8F8F2;">enable</span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;">lzma </span><span style="color:#F92672;">--</span><span style="color:#F8F8F2;">enable</span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;">zlib </span><span style="color:#F92672;">--</span><span style="color:#F8F8F2;">enable</span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;">libsrt </span><span style="color:#F92672;">--</span><span style="color:#F8F8F2;">enable</span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;">libssh </span><span style="color:#F92672;">--</span><span style="color:#F8F8F2;">enable</span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;">libzmq </span><span style="color:#F92672;">--</span><span style="color:#F8F8F2;">enable</span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;">avisynth </span><span style="color:#F92672;">--</span><span style="color:#F8F8F2;">enable</span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;">sdl2 </span><span style="color:#F92672;">--</span><span style="color:#F8F8F2;">enable</span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;">libwebp </span><span style="color:#F92672;">--</span><span style="color:#F8F8F2;">enable</span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;">libx264 </span><span style="color:#F92672;">--</span><span style="color:#F8F8F2;">enable</span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;">libx265 </span><span style="color:#F92672;">--</span><span style="color:#F8F8F2;">enable</span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;">libxvid </span><span style="color:#F92672;">--</span><span style="color:#F8F8F2;">enable</span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;">libaom </span><span style="color:#F92672;">--</span><span style="color:#F8F8F2;">enable</span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;">libopenjpeg </span><span style="color:#F92672;">--</span><span style="color:#F8F8F2;">enable</span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;">libvpx </span><span style="color:#F92672;">--</span><span style="color:#F8F8F2;">enable</span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;">libass </span><span style="color:#F92672;">--</span><span style="color:#F8F8F2;">enable</span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;">libfreetype </span><span style="color:#F92672;">--</span><span style="color:#F8F8F2;">enable</span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;">libfribidi </span><span style="color:#F92672;">--</span><span style="color:#F8F8F2;">enable</span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;">libvidstab </span><span style="color:#F92672;">--</span><span style="color:#F8F8F2;">enable</span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;">libvmaf </span><span style="color:#F92672;">--</span><span style="color:#F8F8F2;">enable</span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;">libzimg </span><span style="color:#F92672;">--</span><span style="color:#F8F8F2;">enable</span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;">amf </span><span style="color:#F92672;">--</span><span style="color:#F8F8F2;">enable</span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;">cuda</span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;">llvm </span><span style="color:#F92672;">--</span><span style="color:#F8F8F2;">enable</span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;">cuvid </span><span style="color:#F92672;">--</span><span style="color:#F8F8F2;">enable</span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;">ffnvcodec </span><span style="color:#F92672;">--</span><span style="color:#F8F8F2;">enable</span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;">nvdec </span><span style="color:#F92672;">--</span><span style="color:#F8F8F2;">enable</span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;">nvenc </span><span style="color:#F92672;">--</span><span style="color:#F8F8F2;">enable</span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;">d3d11va </span><span style="color:#F92672;">--</span><span style="color:#F8F8F2;">enable</span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;">dxva2 </span><span style="color:#F92672;">--</span><span style="color:#F8F8F2;">enable</span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;">libmfx </span><span style="color:#F92672;">--</span><span style="color:#F8F8F2;">enable</span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;">libgme </span><span style="color:#F92672;">--</span><span style="color:#F8F8F2;">enable</span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;">libopenmpt </span><span style="color:#F92672;">--</span><span style="color:#F8F8F2;">enable</span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;">libopencore</span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;">amrwb </span><span style="color:#F92672;">--</span><span style="color:#F8F8F2;">enable</span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;">libmp3lame </span><span style="color:#F92672;">--</span><span style="color:#F8F8F2;">enable</span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;">libtheora </span><span style="color:#F92672;">--</span><span style="color:#F8F8F2;">enable</span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;">libvo</span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;">amrwbenc </span><span style="color:#F92672;">--</span><span style="color:#F8F8F2;">enable</span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;">libgsm </span><span style="color:#F92672;">--</span><span style="color:#F8F8F2;">enable</span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;">libopencore</span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;">amrnb </span><span style="color:#F92672;">--</span><span style="color:#F8F8F2;">enable</span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;">libopus </span><span style="color:#F92672;">--</span><span style="color:#F8F8F2;">enable</span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;">libspeex </span><span style="color:#F92672;">--</span><span style="color:#F8F8F2;">enable</span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;">libvorbis </span><span style="color:#F92672;">--</span><span style="color:#F8F8F2;">enable</span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;">librubberband</span></span>
<span class="line"><span style="color:#F8F8F2;">  libavutil      </span><span style="color:#AE81FF;">56</span><span style="color:#F8F8F2;">. </span><span style="color:#AE81FF;">70.100</span><span style="color:#F8F8F2;"> / </span><span style="color:#AE81FF;">56</span><span style="color:#F8F8F2;">. </span><span style="color:#AE81FF;">70.100</span></span>
<span class="line"><span style="color:#F8F8F2;">  libavcodec     </span><span style="color:#AE81FF;">58.134.100</span><span style="color:#F8F8F2;"> / </span><span style="color:#AE81FF;">58.134.100</span></span>
<span class="line"><span style="color:#F8F8F2;">  libavformat    </span><span style="color:#AE81FF;">58</span><span style="color:#F8F8F2;">. </span><span style="color:#AE81FF;">76.100</span><span style="color:#F8F8F2;"> / </span><span style="color:#AE81FF;">58</span><span style="color:#F8F8F2;">. </span><span style="color:#AE81FF;">76.100</span></span>
<span class="line"><span style="color:#F8F8F2;">  libavdevice    </span><span style="color:#AE81FF;">58</span><span style="color:#F8F8F2;">. </span><span style="color:#AE81FF;">13.100</span><span style="color:#F8F8F2;"> / </span><span style="color:#AE81FF;">58</span><span style="color:#F8F8F2;">. </span><span style="color:#AE81FF;">13.100</span></span>
<span class="line"><span style="color:#F8F8F2;">  libavfilter     </span><span style="color:#AE81FF;">7.110.100</span><span style="color:#F8F8F2;"> /  </span><span style="color:#AE81FF;">7.110.100</span></span>
<span class="line"><span style="color:#F8F8F2;">  libswscale      </span><span style="color:#AE81FF;">5</span><span style="color:#F8F8F2;">.  </span><span style="color:#AE81FF;">9.100</span><span style="color:#F8F8F2;"> /  </span><span style="color:#AE81FF;">5</span><span style="color:#F8F8F2;">.  </span><span style="color:#AE81FF;">9.100</span></span>
<span class="line"><span style="color:#F8F8F2;">  libswresample   </span><span style="color:#AE81FF;">3</span><span style="color:#F8F8F2;">.  </span><span style="color:#AE81FF;">9.100</span><span style="color:#F8F8F2;"> /  </span><span style="color:#AE81FF;">3</span><span style="color:#F8F8F2;">.  </span><span style="color:#AE81FF;">9.100</span></span>
<span class="line"><span style="color:#F8F8F2;">  libpostproc    </span><span style="color:#AE81FF;">55</span><span style="color:#F8F8F2;">.  </span><span style="color:#AE81FF;">9.100</span><span style="color:#F8F8F2;"> / </span><span style="color:#AE81FF;">55</span><span style="color:#F8F8F2;">.  </span><span style="color:#AE81FF;">9.100</span></span>
<span class="line"><span style="color:#F8F8F2;">D:\\Github_pages\\Python_FAQ\\</span><span style="color:#AE81FF;">01</span><span style="color:#F92672;">-</span><span style="color:#F8F8F2;">Python: No such file </span><span style="color:#F92672;">or</span><span style="color:#F8F8F2;"> directory</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div><div class="collapsed-lines"></div></div></details><h2 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法"><span>解决方法</span></a></h2><p>去掉项目名称中的所有空格。</p><h2 id="why" tabindex="-1"><a class="header-anchor" href="#why"><span>Why？</span></a></h2><p>命令行或者代码中，包含空格时，其实大部分是语法或者命令：</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="background-color:#272822;color:#F8F8F2;"><pre class="shiki monokai vp-code"><code><span class="line"><span style="color:#F8F8F2;">python file.py  </span><span style="color:#88846F;"># 这里的空格是下一个命令的编写</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>所以，文件中出现空格，代码实现却是和路径有关，所以程序将会无法分清。</p><p>欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！</p><details class="hint-container details"><summary>公众号：AI悦创【二维码】</summary><figure><img src="`+a+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></details><div class="hint-container info"><p class="hint-container-title">AI悦创·编程一对一</p><p>AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh</p><p>C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh</p><p>方法一：<a href="http://wpa.qq.com/msgrd?v=3&amp;uin=1432803776&amp;site=qq&amp;menu=yes" target="_blank" rel="noopener noreferrer">QQ</a></p><p>方法二：微信：Jiabcdefh</p></div><figure><img src="'+n+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',15)]))}const m=l(t,[["render",r],["__file","faq1.html.vue"]]),h=JSON.parse('{"path":"/Python/basequestion/faq1.html","title":"01-Python 项目文件不能添加空格的原因","lang":"zh-CN","frontmatter":{"title":"01-Python 项目文件不能添加空格的原因","date":"2022-05-19T19:26:00.000Z","author":"AI悦创","isOriginal":true,"category":"Python 私教问答","tag":["Python 私教问答"],"icon":"python","sticky":false,"star":false,"article":true,"timeline":true,"image":false,"navbar":true,"sidebarIcon":true,"headerDepth":5,"comment":true,"lastUpdated":true,"editLink":true,"backToTop":true,"toc":true,"feed":false,"seo":false,"head":[]},"headers":[{"level":2,"title":"项目链接如下","slug":"项目链接如下","link":"#项目链接如下","children":[]},{"level":2,"title":"报错如下","slug":"报错如下","link":"#报错如下","children":[]},{"level":2,"title":"解决方法","slug":"解决方法","link":"#解决方法","children":[]},{"level":2,"title":"Why？","slug":"why","link":"#why","children":[]}],"git":{"createdTime":1704501196000,"updatedTime":1704501196000,"contributors":[{"name":"AndersonHJB","email":"cleland1432803776@icloud.com","commits":1}]},"readingTime":{"minutes":2.27,"words":681},"filePathRelative":"Python/basequestion/faq1.md","localizedDate":"2022年5月19日","copyright":{"author":"AI悦创"}}');export{m as comp,h as data};
