<template><div><h2 id="项目链接如下" tabindex="-1"><a class="header-anchor" href="#项目链接如下" aria-hidden="true">#</a> 项目链接如下</h2>
<p><a href="https://github.com/AndersonHJB/Python_FAQ" target="_blank" rel="noopener noreferrer">https://github.com/AndersonHJB/Python_FAQ<ExternalLinkIcon/></a></p>
<h2 id="报错如下" tabindex="-1"><a class="header-anchor" href="#报错如下" aria-hidden="true">#</a> 报错如下</h2>
<p><img src="@source/column/py/basequestion/bq.assets/image-20220519194710393.png" alt="image-20220519194710393" loading="lazy"></p>
<details class="custom-container details"><summary>文字</summary>
<div class="language-cmd ext-cmd line-numbers-mode"><pre v-pre class="language-cmd"><code>clela@AIYC D:\Github_pages\Python_FAQ\01-Python 项目文件不能添加空格的原因\测试项目\02-Python 视频分割生成链接
# python split_demo.py
r_path: D:\Github_pages\Python_FAQ\01-Python 项目文件不能添加空格的原因\测试项目\02-Python 视频分割生成链接\one.
movie_name: one
D:\Github_pages\Python_FAQ\01-Python 项目文件不能添加空格的原因\测试项目\02-Python 视频分割生成链接\result
ffmpeg version 4.4-essentials_build-www.gyan.dev Copyright (c) 2000-2021 the FFmpeg developers
  built with gcc 10.2.0 (Rev6, Built by MSYS2 project)
  configuration: --enable-gpl --enable-version3 --enable-static --disable-w32threads --disable-autodetect --enable-fontconfig --enable-iconv --enable-gnutls --enable-libxml2 --enable-gmp --enable-lzma --enable-zlib --enable-libsrt --enable-libssh --enable-libzmq --enable-avisynth --enable-sdl2 --enable-libwebp --enable-libx264 --enable-libx265 --enable-libxvid --enable-libaom --enable-libopenjpeg --enable-libvpx --enable-libass --enable-libfreetype --enable-libfribidi --enable-libvidstab --enable-libvmaf --enable-libzimg --enable-amf --enable-cuda-llvm --enable-cuvid --enable-ffnvcodec --enable-nvdec --enable-nvenc --enable-d3d11va --enable-dxva2 --enable-libmfx --enable-libgme --enable-libopenmpt --enable-libopencore-amrwb --enable-libmp3lame --enable-libtheora --enable-libvo-amrwbenc --enable-libgsm --enable-libopencore-amrnb --enable-libopus --enable-libspeex --enable-libvorbis --enable-librubberband
  libavutil      56. 70.100 / 56. 70.100
  libavcodec     58.134.100 / 58.134.100
  libavformat    58. 76.100 / 58. 76.100
  libavdevice    58. 13.100 / 58. 13.100
  libavfilter     7.110.100 /  7.110.100
  libswscale      5.  9.100 /  5.  9.100
  libswresample   3.  9.100 /  3.  9.100
  libpostproc    55.  9.100 / 55.  9.100
D:\Github_pages\Python_FAQ\01-Python: No such file or directory
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details>
<h2 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法" aria-hidden="true">#</a> 解决方法</h2>
<p>去掉项目名称中的所有空格。</p>
<h2 id="why" tabindex="-1"><a class="header-anchor" href="#why" aria-hidden="true">#</a> Why？</h2>
<p>命令行或者代码中，包含空格时，其实大部分是语法或者命令：</p>
<div class="language-python ext-py line-numbers-mode"><pre v-pre class="language-python"><code>python <span class="token builtin">file</span><span class="token punctuation">.</span>py  <span class="token comment"># 这里的空格是下一个命令的编写</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>所以，文件中出现空格，代码实现却是和路径有关，所以程序将会无法分清。</p>
<p>欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！</p>
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


