import{_ as s}from"./gzh-DnOBNg6W.js";import{_ as a}from"./zsxq-BcdwOI-_.js";import{_ as h}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as k,a as n,o as l}from"./app-s3r-HoJ7.js";const t="/assets/image-20220519194710393-DCPDNrhO.png",p={};function e(B,i){return l(),k("div",null,i[0]||(i[0]=[n('<h2 id="项目链接如下" tabindex="-1"><a class="header-anchor" href="#项目链接如下"><span>项目链接如下</span></a></h2><p><a href="https://github.com/AndersonHJB/Python_FAQ" target="_blank" rel="noopener noreferrer">https://github.com/AndersonHJB/Python_FAQ</a></p><h2 id="报错如下" tabindex="-1"><a class="header-anchor" href="#报错如下"><span>报错如下</span></a></h2><figure><img src="'+t+`" alt="image-20220519194710393" tabindex="0" loading="lazy"><figcaption>image-20220519194710393</figcaption></figure><details class="hint-container details"><summary>文字</summary><div class="language-cmd line-numbers-mode" data-highlighter="shiki" data-ext="cmd" data-title="cmd" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">clela@AIYC D:\\</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Github_pages</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\\</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Python_FAQ</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\\</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">01</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Python</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 项目文件不能添加空格的原因\\测试项目\\</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">02</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Python</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 视频分割生成链接</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"># python split_demo.py</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">r_path: D:\\</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Github_pages</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\\</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Python_FAQ</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\\</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">01</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Python</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 项目文件不能添加空格的原因\\测试项目\\</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">02</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Python</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 视频分割生成链接\\one.</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">movie_name: one</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">D:\\</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Github_pages</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\\</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Python_FAQ</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\\</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">01</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Python</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 项目文件不能添加空格的原因\\测试项目\\</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">02</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Python</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 视频分割生成链接\\</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">result</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">ffmpeg version </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">4.4</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">essentials_build</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-www.gyan.dev </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Copyright</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">c</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">2000-2021</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> the FFmpeg developers</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  built </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">with</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> gcc </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">10.2.0</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> (</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Rev6</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">,</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> Built</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> by MSYS2 </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">project</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  configuration: --</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">enable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">gpl</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> --</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">enable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">version3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> --</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">enable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">static</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> --</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">disable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">w32threads</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> --</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">disable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">autodetect</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> --</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">enable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">fontconfig</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> --</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">enable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">iconv</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> --</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">enable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">gnutls</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> --</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">enable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">libxml2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> --</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">enable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">gmp</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> --</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">enable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">lzma</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> --</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">enable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">zlib</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> --</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">enable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">libsrt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> --</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">enable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">libssh</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> --</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">enable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">libzmq</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> --</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">enable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">avisynth</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> --</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">enable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">sdl2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> --</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">enable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">libwebp</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> --</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">enable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">libx264</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> --</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">enable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">libx265</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> --</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">enable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">libxvid</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> --</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">enable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">libaom</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> --</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">enable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">libopenjpeg</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> --</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">enable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">libvpx</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> --</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">enable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">libass</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> --</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">enable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">libfreetype</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> --</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">enable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">libfribidi</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> --</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">enable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">libvidstab</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> --</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">enable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">libvmaf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> --</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">enable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">libzimg</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> --</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">enable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">amf</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> --</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">enable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">cuda</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">llvm</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> --</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">enable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">cuvid</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> --</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">enable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">ffnvcodec</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> --</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">enable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">nvdec</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> --</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">enable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">nvenc</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> --</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">enable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">d3d11va</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> --</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">enable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">dxva2</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> --</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">enable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">libmfx</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> --</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">enable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">libgme</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> --</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">enable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">libopenmpt</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> --</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">enable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">libopencore</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">amrwb</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> --</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">enable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">libmp3lame</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> --</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">enable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">libtheora</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> --</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">enable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">libvo</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">amrwbenc</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> --</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">enable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">libgsm</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> --</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">enable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">libopencore</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">amrnb</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> --</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">enable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">libopus</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> --</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">enable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">libspeex</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> --</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">enable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">libvorbis</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> --</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">enable</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">librubberband</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  libavutil      </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">56</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">. </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">70.100</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> / </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">56</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">. </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">70.100</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  libavcodec     </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">58.134.100</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> / </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">58.134.100</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  libavformat    </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">58</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">. </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">76.100</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> / </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">58</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">. </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">76.100</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  libavdevice    </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">58</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">. </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">13.100</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> / </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">58</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">. </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">13.100</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  libavfilter     </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">7.110.100</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> /  </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">7.110.100</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  libswscale      </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.  </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">9.100</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> /  </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">5</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.  </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">9.100</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  libswresample   </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.  </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">9.100</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> /  </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.  </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">9.100</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">  libpostproc    </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">55</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.  </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">9.100</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> / </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">55</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.  </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">9.100</span></span>
<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">D:\\</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Github_pages</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\\</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Python_FAQ</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">\\</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">01</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">-</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">Python</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">: No such file or directory</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="解决方法" tabindex="-1"><a class="header-anchor" href="#解决方法"><span>解决方法</span></a></h2><p>去掉项目名称中的所有空格。</p><h2 id="why" tabindex="-1"><a class="header-anchor" href="#why"><span>Why？</span></a></h2><p>命令行或者代码中，包含空格时，其实大部分是语法或者命令：</p><div class="language-python line-numbers-mode" data-highlighter="shiki" data-ext="python" data-title="python" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">python </span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;">file</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.py  </span><span style="--shiki-light:#A0A1A7;--shiki-light-font-style:italic;--shiki-dark:#7F848E;--shiki-dark-font-style:italic;"># 这里的空格是下一个命令的编写</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>所以，文件中出现空格，代码实现却是和路径有关，所以程序将会无法分清。</p><p>欢迎关注我公众号：AI悦创，有更多更好玩的等你发现！</p><details class="hint-container details"><summary>公众号：AI悦创【二维码】</summary><figure><img src="`+s+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure></details><div class="hint-container info"><p class="hint-container-title">AI悦创·编程一对一</p><p>AI悦创·推出辅导班啦，包括「Python 语言辅导班、C++ 辅导班、java 辅导班、算法/数据结构辅导班、少儿编程、pygame 游戏开发」，全部都是一对一教学：一对一辅导 + 一对一答疑 + 布置作业 + 项目实践等。当然，还有线下线上摄影课程、Photoshop、Premiere 一对一教学、QQ、微信在线，随时响应！微信：Jiabcdefh</p><p>C++ 信息奥赛题解，长期更新！长期招收一对一中小学信息奥赛集训，莆田、厦门地区有机会线下上门，其他地区线上。微信：Jiabcdefh</p><p>方法一：<a href="http://wpa.qq.com/msgrd?v=3&amp;uin=1432803776&amp;site=qq&amp;menu=yes" target="_blank" rel="noopener noreferrer">QQ</a></p><p>方法二：微信：Jiabcdefh</p></div><figure><img src="'+a+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure>',15)]))}const y=h(p,[["render",e],["__file","faq1.html.vue"]]),E=JSON.parse('{"path":"/Python/basequestion/faq1.html","title":"01-Python 项目文件不能添加空格的原因","lang":"zh-CN","frontmatter":{"title":"01-Python 项目文件不能添加空格的原因","date":"2022-05-19T19:26:00.000Z","author":"AI悦创","isOriginal":true,"category":"Python 私教问答","tag":["Python 私教问答"],"icon":"python","sticky":false,"star":false,"article":true,"timeline":true,"image":false,"navbar":true,"sidebarIcon":true,"headerDepth":5,"comment":true,"lastUpdated":true,"editLink":true,"backToTop":true,"toc":true,"feed":false,"seo":false,"head":[]},"headers":[{"level":2,"title":"项目链接如下","slug":"项目链接如下","link":"#项目链接如下","children":[]},{"level":2,"title":"报错如下","slug":"报错如下","link":"#报错如下","children":[]},{"level":2,"title":"解决方法","slug":"解决方法","link":"#解决方法","children":[]},{"level":2,"title":"Why？","slug":"why","link":"#why","children":[]}],"git":{"createdTime":1704501196000,"updatedTime":1704501196000,"contributors":[{"name":"AndersonHJB","email":"cleland1432803776@icloud.com","commits":1}]},"readingTime":{"minutes":2.27,"words":681},"filePathRelative":"Python/basequestion/faq1.md","localizedDate":"2022年5月19日","copyright":{"author":"AI悦创"}}');export{y as comp,E as data};
