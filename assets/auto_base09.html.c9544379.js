import{_ as a}from"./gzh.aa7caba6.js";import{_ as i}from"./zsxq.96f46dfd.js";import{_ as p}from"./plugin-vue_export-helper.21dcd24c.js";import{o,c as r,a as e,b as m,e as n,d as s,r as c}from"./app.89b53fdb.js";var l="/assets/image-20220717104603622.1b223859.png",d="/assets/image-20220717104952779.79c87101.png",_="/assets/image-20220717120252540.bea27f69.png",g="/assets/image-20220717120453407.3181d70f.png",h="/assets/image-20220717133154926.cb324338.png",u="/assets/image-20220717133809389.541730dc.png",f="/assets/image-20220717133940556.87e8189e.png",q="/assets/image-20220717134958299.d63d99ef.png",b="/assets/image-20220717135817135.6fba0d7e.png",v="/assets/image-20220717141101312.7e498623.png",x="/assets/image-20220717141230058.79a98f2e.png",k="/assets/image-20220717141304198.f85982fa.png",I="/assets/image-20220717141702850.53fbd4a5.png";const w={},y=n('<h2 id="sqlitestudio-\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#sqlitestudio-\u4ECB\u7ECD" aria-hidden="true">#</a> sqlitestudio \u4ECB\u7ECD</h2><p>\u672C\u8282\u5185\u5BB9\u7684\u76EE\u7684\uFF0C\u662F\u6559\u5927\u5BB6\u5982\u4F55\u5728\u975E\u4EE3\u7801\u7684\u60C5\u51B5\u4E0B\uFF0C\u521B\u5EFA sqlite3 \u6570\u636E\u5E93\u6587\u4EF6\u548C\u8868\u683C\u7F16\u8F91\u64CD\u4F5C\u3002</p><p>\u65E2\u7136\u4E0D\u5199\u4EE3\u7801\uFF0C\u5C31\u80AF\u5B9A\u9700\u8981\u501F\u52A9\u8F6F\u4EF6\u6765\u64CD\u4F5C\u3002\u672C\u8282\u8BFE\u5BF9\u5E94\u7684\u6E90\u7801\u4E2D\uFF0C\u51C6\u5907\u597D\u4E86 windows\u3001macos\u3001linux \u4E09\u4E2A\u7CFB\u7EDF\u7684 sqlitestudio \u8F6F\u4EF6\uFF0C\u5982\u4E0B\u56FE\uFF1A</p><p><img src="'+l+'" alt="image-20220717104603622"></p><blockquote><p>windows \u4F7F\u7528 zip\uFF1Bmacos \u4F7F\u7528 dmg\uFF1Blinux \u4F7F\u7528 tar.xz\uFF1B</p></blockquote><p>sqlitestudio \u662F\u4E00\u6B3E\u7EFF\u8272\u8F6F\u4EF6\uFF0C\u5B89\u88C5\u4F60\u7684\u64CD\u4F5C\u7CFB\u7EDF\u6240\u5BF9\u5E94\u7684 sqlitestudio \u8F6F\u4EF6\uFF0C\u7136\u540E\u6267\u884C\uFF0C\u5C31\u53EF\u4EE5\u5F97\u5230\u542F\u52A8\u754C\u9762\u3002</p><p><img src="'+d+'" alt="image-20220717104952779"></p><h2 id="\u65B0\u5EFA-sqlite-\u6570\u636E\u5E93\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u65B0\u5EFA-sqlite-\u6570\u636E\u5E93\u6587\u4EF6" aria-hidden="true">#</a> \u65B0\u5EFA sqlite \u6570\u636E\u5E93\u6587\u4EF6</h2><p>\u70B9\u51FB\u5DE6\u4E0A\u89D2\u7684\u6570\u636E\u5E93\uFF0C\u9009\u62E9\u6DFB\u52A0\u6570\u636E\u5E93\uFF0C\u5219\u4F1A\u5F39\u6846\uFF0C\u8BA9\u4F60\u9009\u62E9\u67D0\u4E2A\u6570\u636E\u5E93\u6587\u4EF6\uFF0C\u6216\u8005\u521B\u5EFA\u4E00\u4E2A\u65B0\u7684 sqlite \u6587\u4EF6</p><p><img src="'+_+'" alt="image-20220717120252540"></p><p>\u70B9\u51FB\u9EC4\u8272\u7684\u6587\u4EF6\u5939\uFF0C\u662F\u6307\u6253\u5F00\u67D0\u4E2A\u5B58\u5728\u7684 sqlite \u6587\u4EF6\u3002</p><p>\u70B9\u51FB <code>\u7EFF\u8272\u7684+</code> \uFF0C\u662F\u65B0\u5EFA\u4E00\u4E2A sqlite \u6587\u4EF6\uFF0C\u5E76\u4E14\u4F60\u4E5F\u9700\u8981\u6307\u5B9A\u5B58\u50A8\u7684\u5177\u4F53\u4F4D\u7F6E\u3002</p><p>\u9009\u62E9\u5728\u4E09\u4E2A sqlitestudio \u5B89\u88C5\u5305\u65C1\u8FB9\uFF0C\u65B0\u5EFA\u4E00\u4E2A\u540D\u4E3A <code>first.db</code> \u7684\u6587\u4EF6\uFF0C\u5982\u4E0B\u622A\u56FE\uFF1A</p><p><img src="'+g+'" alt="image-20220717120453407"></p><p>\u5E76\u4E14\uFF0C\u6587\u4EF6\u4E5F\u6709\u5BF9\u5E94\u7684\u751F\u6210\u3002</p><p><img src="'+h+'" alt="image-20220717133154926"></p><h2 id="\u65B0\u589E\u6570\u636E" tabindex="-1"><a class="header-anchor" href="#\u65B0\u589E\u6570\u636E" aria-hidden="true">#</a> \u65B0\u589E\u6570\u636E</h2><p>\u56DE\u5230 sqlitestudio \u8F6F\u4EF6\u754C\u9762\uFF0C\u6253\u5F00\u521A\u65B0\u5EFA\u7684 <code>first.db</code> \uFF0C\u91CC\u9762\u4EC0\u4E48\u90FD\u6CA1\u6709\uFF0C\u8868\u683C\u662F\u7A7A\u7684\uFF0C\u73B0\u5728\u6765\u65B0\u5EFA\u4E00\u4E2A\u8868\u683C\u3002</p><p>\u9F20\u6807\u53F3\u952E\u70B9\u51FB Tables\uFF0C\u7136\u540E\u9009\u62E9\u65B0\u5EFA\u8868\u683C\uFF0C\u5728\u65B0\u51FA\u7684\u754C\u9762\u4E2D\uFF0C\u5199\u8868\u683C\u540D\u3001\u5B57\u6BB5\u540D\u548C\u5B57\u6BB5\u7C7B\u578B\uFF0C\u5982\u4E0B\u56FE\uFF1A</p><p><strong>\u65B9\u6CD5\u4E00\uFF1A</strong></p><p><img src="'+u+'" alt="image-20220717133809389"></p><p><strong>\u65B9\u6CD5\u4E8C\uFF1A</strong></p><p><img src="'+f+'" alt="image-20220717133940556"></p><hr><p><img src="'+q+'" alt="image-20220717134958299"></p><p><img src="'+b+'" alt="image-20220717135817135"></p><p>Table Name \u8868\u683C\u540D\uFF0C\u8F93\u5165\u5177\u4F53\u540D\u79F0\u3002\u6700\u4E0A\u65B9\u6846\u4E2D\u7684\u90A3\u4E2A\u6309\u94AE\uFF0C\u662F\u589E\u5217\u5B57\u6BB5\u7684\u6309\u94AE\uFF0C\u70B9\u51FB\u6309\u94AE\u5F39\u51FA\u4E2D\u95F4\u7684\u5B57\u6BB5\u4FE1\u606F\uFF0C\u8F93\u5165\u5B57\u6BB5\u540D\u3001\u7C7B\u578B\u3001\u5927\u5C0F\u7B49\u3002</p><p>\u8FD9\u91CC\u5199\u4E86id title content author \u56DB\u4E2A\u5B57\u6BB5\u4FE1\u606F\uFF0C\u7136\u540E\u70B9\u51FB\u7EFF\u8272\u7684\u52FE\uFF0C\u4FDD\u5B58\u8868\u683C\u5373\u53EF\u3002</p><p><img src="'+v+'" alt="image-20220717141101312"></p><p><img src="'+x+'" alt="image-20220717141230058"></p><p>\u4FDD\u5B58\u4E86\u6587\u4EF6\uFF0C\u91CD\u65B0\u5237\u65B0\u9875\u9762\uFF0C\u5C31\u53EF\u4EE5\u67E5\u770B\u6570\u636E\u680F\uFF0C\u5982\u4E0B\uFF1A</p><p><img src="'+k+'" alt="image-20220717141304198"></p><p><img src="'+I+'" alt="image-20220717141702850"></p><p>\u70B9\u51FB<code>\u7EFF\u8272\u7684+</code>\u53F7\uFF0C\u7136\u540E\u589E\u52A0\u51E0\u6761\u6570\u636E\uFF0C\u65B9\u4FBF\u6211\u4EEC\u4E0B\u8282\u8BFE\u7684\u4EE3\u7801\u7EC3\u4E60\u3002\u56FE\u4E2D\u6709\u4E09\u6761\u3002</p><p>sqlitestudio \u4E5F\u8981\u4FDD\u7559\uFF0C\u65B9\u4FBF\u6211\u4EEC\u4E0B\u8282\u8BFE\uFF0C\u67E5\u770B\u4EE3\u7801\u7EC3\u4E60\u7684\u6570\u636E\u53D8\u5316\u7ED3\u679C\u3002</p><p>\u6B22\u8FCE\u5173\u6CE8\u6211\u516C\u4F17\u53F7\uFF1AAI\u60A6\u521B\uFF0C\u6709\u66F4\u591A\u66F4\u597D\u73A9\u7684\u7B49\u4F60\u53D1\u73B0\uFF01</p><details class="custom-container details"><summary>\u516C\u4F17\u53F7\uFF1AAI\u60A6\u521B\u3010\u4E8C\u7EF4\u7801\u3011</summary><p><img src="'+a+'" alt=""></p></details>',37),N={class:"custom-container info"},A=e("p",{class:"custom-container-title"},"AI\u60A6\u521B\xB7\u7F16\u7A0B\u4E00\u5BF9\u4E00",-1),Q=e("p",null,"AI\u60A6\u521B\xB7\u63A8\u51FA\u8F85\u5BFC\u73ED\u5566\uFF0C\u5305\u62EC\u300CPython \u8BED\u8A00\u8F85\u5BFC\u73ED\u3001C++ \u8F85\u5BFC\u73ED\u3001java \u8F85\u5BFC\u73ED\u3001\u7B97\u6CD5/\u6570\u636E\u7ED3\u6784\u8F85\u5BFC\u73ED\u3001\u5C11\u513F\u7F16\u7A0B\u3001pygame \u6E38\u620F\u5F00\u53D1\u300D\uFF0C\u5168\u90E8\u90FD\u662F\u4E00\u5BF9\u4E00\u6559\u5B66\uFF1A\u4E00\u5BF9\u4E00\u8F85\u5BFC + \u4E00\u5BF9\u4E00\u7B54\u7591 + \u5E03\u7F6E\u4F5C\u4E1A + \u9879\u76EE\u5B9E\u8DF5\u7B49\u3002\u5F53\u7136\uFF0C\u8FD8\u6709\u7EBF\u4E0B\u7EBF\u4E0A\u6444\u5F71\u8BFE\u7A0B\u3001Photoshop\u3001Premiere \u4E00\u5BF9\u4E00\u6559\u5B66\u3001QQ\u3001\u5FAE\u4FE1\u5728\u7EBF\uFF0C\u968F\u65F6\u54CD\u5E94\uFF01\u5FAE\u4FE1\uFF1AJiabcdefh",-1),V=e("p",null,"C++ \u4FE1\u606F\u5965\u8D5B\u9898\u89E3\uFF0C\u957F\u671F\u66F4\u65B0\uFF01\u957F\u671F\u62DB\u6536\u4E00\u5BF9\u4E00\u4E2D\u5C0F\u5B66\u4FE1\u606F\u5965\u8D5B\u96C6\u8BAD\uFF0C\u8386\u7530\u3001\u53A6\u95E8\u5730\u533A\u6709\u673A\u4F1A\u7EBF\u4E0B\u4E0A\u95E8\uFF0C\u5176\u4ED6\u5730\u533A\u7EBF\u4E0A\u3002\u5FAE\u4FE1\uFF1AJiabcdefh",-1),B=s("\u65B9\u6CD5\u4E00\uFF1A"),C={href:"http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes",target:"_blank",rel:"noopener noreferrer"},E=s("QQ"),J=e("p",null,"\u65B9\u6CD5\u4E8C\uFF1A\u5FAE\u4FE1\uFF1AJiabcdefh",-1),P=e("p",null,[e("img",{src:i,alt:""})],-1);function T(z,L){const t=c("ExternalLinkIcon");return o(),r("div",null,[y,e("div",N,[A,Q,V,e("p",null,[B,e("a",C,[E,m(t)])]),J]),P])}var F=p(w,[["render",T],["__file","auto_base09.html.vue"]]);export{F as default};
