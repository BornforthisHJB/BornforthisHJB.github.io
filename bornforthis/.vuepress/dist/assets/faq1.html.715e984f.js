import{_ as l}from"./gzh.d6f5697d.js";import{_ as s}from"./zsxq.200e4a27.js";import{_ as t}from"./plugin-vue_export-helper.21dcd24c.js";import{r as o,o as b,c as r,a as e,b as i,d as n,e as d}from"./app.92410fa3.js";var c="/assets/image-20220519194710393.787cc0d9.png";const m={},h=e("h2",{id:"\u9879\u76EE\u94FE\u63A5\u5982\u4E0B",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#\u9879\u76EE\u94FE\u63A5\u5982\u4E0B","aria-hidden":"true"},"#"),n(" \u9879\u76EE\u94FE\u63A5\u5982\u4E0B")],-1),p={href:"https://github.com/AndersonHJB/Python_FAQ",target:"_blank",rel:"noopener noreferrer"},v=n("https://github.com/AndersonHJB/Python_FAQ"),u=d('<h2 id="\u62A5\u9519\u5982\u4E0B" tabindex="-1"><a class="header-anchor" href="#\u62A5\u9519\u5982\u4E0B" aria-hidden="true">#</a> \u62A5\u9519\u5982\u4E0B</h2><p><img src="'+c+`" alt="image-20220519194710393"></p><details class="custom-container details"><summary>\u6587\u5B57</summary><div class="language-cmd ext-cmd line-numbers-mode"><pre class="language-cmd"><code>clela@AIYC D:\\Github_pages\\Python_FAQ\\01-Python \u9879\u76EE\u6587\u4EF6\u4E0D\u80FD\u6DFB\u52A0\u7A7A\u683C\u7684\u539F\u56E0\\\u6D4B\u8BD5\u9879\u76EE\\02-Python \u89C6\u9891\u5206\u5272\u751F\u6210\u94FE\u63A5
# python split_demo.py
r_path: D:\\Github_pages\\Python_FAQ\\01-Python \u9879\u76EE\u6587\u4EF6\u4E0D\u80FD\u6DFB\u52A0\u7A7A\u683C\u7684\u539F\u56E0\\\u6D4B\u8BD5\u9879\u76EE\\02-Python \u89C6\u9891\u5206\u5272\u751F\u6210\u94FE\u63A5\\one.
movie_name: one
D:\\Github_pages\\Python_FAQ\\01-Python \u9879\u76EE\u6587\u4EF6\u4E0D\u80FD\u6DFB\u52A0\u7A7A\u683C\u7684\u539F\u56E0\\\u6D4B\u8BD5\u9879\u76EE\\02-Python \u89C6\u9891\u5206\u5272\u751F\u6210\u94FE\u63A5\\result
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
D:\\Github_pages\\Python_FAQ\\01-Python: No such file or directory
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div></details><h2 id="\u89E3\u51B3\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u89E3\u51B3\u65B9\u6CD5" aria-hidden="true">#</a> \u89E3\u51B3\u65B9\u6CD5</h2><p>\u53BB\u6389\u9879\u76EE\u540D\u79F0\u4E2D\u7684\u6240\u6709\u7A7A\u683C\u3002</p><h2 id="why" tabindex="-1"><a class="header-anchor" href="#why" aria-hidden="true">#</a> Why\uFF1F</h2><p>\u547D\u4EE4\u884C\u6216\u8005\u4EE3\u7801\u4E2D\uFF0C\u5305\u542B\u7A7A\u683C\u65F6\uFF0C\u5176\u5B9E\u5927\u90E8\u5206\u662F\u8BED\u6CD5\u6216\u8005\u547D\u4EE4\uFF1A</p><div class="language-python ext-py line-numbers-mode"><pre class="language-python"><code>python <span class="token builtin">file</span><span class="token punctuation">.</span>py  <span class="token comment"># \u8FD9\u91CC\u7684\u7A7A\u683C\u662F\u4E0B\u4E00\u4E2A\u547D\u4EE4\u7684\u7F16\u5199</span>
</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div></div></div><p>\u6240\u4EE5\uFF0C\u6587\u4EF6\u4E2D\u51FA\u73B0\u7A7A\u683C\uFF0C\u4EE3\u7801\u5B9E\u73B0\u5374\u662F\u548C\u8DEF\u5F84\u6709\u5173\uFF0C\u6240\u4EE5\u7A0B\u5E8F\u5C06\u4F1A\u65E0\u6CD5\u5206\u6E05\u3002</p><p>\u6B22\u8FCE\u5173\u6CE8\u6211\u516C\u4F17\u53F7\uFF1AAI\u60A6\u521B\uFF0C\u6709\u66F4\u591A\u66F4\u597D\u73A9\u7684\u7B49\u4F60\u53D1\u73B0\uFF01</p><details class="custom-container details"><summary>\u516C\u4F17\u53F7\uFF1AAI\u60A6\u521B\u3010\u4E8C\u7EF4\u7801\u3011</summary><p><img src="`+l+'" alt=""></p></details>',11),_={class:"custom-container info"},f=e("p",{class:"custom-container-title"},"AI\u60A6\u521B\xB7\u7F16\u7A0B\u4E00\u5BF9\u4E00",-1),g=e("p",null,"AI\u60A6\u521B\xB7\u63A8\u51FA\u8F85\u5BFC\u73ED\u5566\uFF0C\u5305\u62EC\u300CPython \u8BED\u8A00\u8F85\u5BFC\u73ED\u3001C++ \u8F85\u5BFC\u73ED\u3001java \u8F85\u5BFC\u73ED\u3001\u7B97\u6CD5/\u6570\u636E\u7ED3\u6784\u8F85\u5BFC\u73ED\u3001\u5C11\u513F\u7F16\u7A0B\u3001pygame \u6E38\u620F\u5F00\u53D1\u300D\uFF0C\u5168\u90E8\u90FD\u662F\u4E00\u5BF9\u4E00\u6559\u5B66\uFF1A\u4E00\u5BF9\u4E00\u8F85\u5BFC + \u4E00\u5BF9\u4E00\u7B54\u7591 + \u5E03\u7F6E\u4F5C\u4E1A + \u9879\u76EE\u5B9E\u8DF5\u7B49\u3002\u5F53\u7136\uFF0C\u8FD8\u6709\u7EBF\u4E0B\u7EBF\u4E0A\u6444\u5F71\u8BFE\u7A0B\u3001Photoshop\u3001Premiere \u4E00\u5BF9\u4E00\u6559\u5B66\u3001QQ\u3001\u5FAE\u4FE1\u5728\u7EBF\uFF0C\u968F\u65F6\u54CD\u5E94\uFF01\u5FAE\u4FE1\uFF1AJiabcdefh",-1),y=e("p",null,"C++ \u4FE1\u606F\u5965\u8D5B\u9898\u89E3\uFF0C\u957F\u671F\u66F4\u65B0\uFF01\u957F\u671F\u62DB\u6536\u4E00\u5BF9\u4E00\u4E2D\u5C0F\u5B66\u4FE1\u606F\u5965\u8D5B\u96C6\u8BAD\uFF0C\u8386\u7530\u3001\u53A6\u95E8\u5730\u533A\u6709\u673A\u4F1A\u7EBF\u4E0B\u4E0A\u95E8\uFF0C\u5176\u4ED6\u5730\u533A\u7EBF\u4E0A\u3002\u5FAE\u4FE1\uFF1AJiabcdefh",-1),x=n("\u65B9\u6CD5\u4E00\uFF1A"),P={href:"http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes",target:"_blank",rel:"noopener noreferrer"},w=n("QQ"),A=e("p",null,"\u65B9\u6CD5\u4E8C\uFF1A\u5FAE\u4FE1\uFF1AJiabcdefh",-1),Q=e("p",null,[e("img",{src:s,alt:""})],-1);function k(F,q){const a=o("ExternalLinkIcon");return b(),r("div",null,[h,e("p",null,[e("a",p,[v,i(a)])]),u,e("div",_,[f,g,y,e("p",null,[x,e("a",P,[w,i(a)])]),A]),Q])}var N=t(m,[["render",k],["__file","faq1.html.vue"]]);export{N as default};
