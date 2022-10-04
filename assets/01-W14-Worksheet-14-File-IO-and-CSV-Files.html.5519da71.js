import{_ as a}from"./gzh.45dd564e.js";import{_ as s}from"./zsxq.d8d312d4.js";import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as r,c as i,a as e,b as c,e as l,d as t,r as d}from"./app.b3984bdc.js";const h={},p=l('<h2 id="forgetful-karaoke" tabindex="-1"><a class="header-anchor" href="#forgetful-karaoke" aria-hidden="true">#</a> Forgetful Karaoke</h2><blockquote><p>\u5065\u5FD8\u7684\u5361\u62C9ok</p></blockquote><p><strong>Life hack:</strong> if you&#39;re really bad at karaoke and can&#39;t remember the words, you can just repeatedly sing one word. If it&#39;s the most common word in the song, you&#39;ll be right more often than you might think (and may get away with it!).</p><blockquote><p>\u751F\u6D3B\u5C0F\u8D34\u58EB:\u5982\u679C\u4F60\u771F\u7684\u4E0D\u64C5\u957F\u5361\u62C9 ok\uFF0C\u4E0D\u8BB0\u5F97\u6B4C\u8BCD\uFF0C\u4F60\u53EF\u4EE5\u91CD\u590D\u5531\u4E00\u4E2A\u8BCD\u3002\u5982\u679C\u5B83\u662F\u6B4C\u66F2\u4E2D\u6700\u5E38\u89C1\u7684\u5355\u8BCD\uFF0C\u90A3\u4E48\u4F60\u731C\u5BF9\u7684\u6B21\u6570\u6BD4\u4F60\u60F3\u8C61\u7684\u8981\u591A(\u800C\u4E14\u53EF\u80FD\u4F1A\u4FA5\u5E78\u9003\u8131!)</p></blockquote><p>Write a function <code>approximate_song(filename)</code> that reads the lyrics of the song in the file of name filename, and returns the most common word in the song. In the event of a tie, your function should return the word that comes first alphabetically. Assume that words are whitespace-delimited, and use .split() with no stripping of punctuation or folding of case to extract the words from the text.</p><blockquote><p>\u7F16\u5199\u4E00\u4E2A\u51FD\u6570 <code>approximate_song(filename)</code>\uFF0C\u5B83\u8BFB\u53D6\u6587\u4EF6\u540D\u4E3A filename \u7684\u6587\u4EF6\u4E2D\u6B4C\u66F2\u7684\u6B4C\u8BCD\uFF0C\u5E76\u8FD4\u56DE\u6B4C\u66F2\u4E2D\u6700\u5E38\u89C1\u7684\u5355\u8BCD\u3002\u5728\u5E73\u5C40\u7684\u60C5\u51B5\u4E0B\uFF0C\u51FD\u6570\u5E94\u8BE5\u8FD4\u56DE\u5B57\u6BCD\u987A\u5E8F\u6392\u5728\u524D\u9762\u7684\u5355\u8BCD\u3002\u5047\u8BBE\u5355\u8BCD\u662F\u7528\u7A7A\u683C\u5206\u9694\u7684\uFF0C\u5E76\u4F7F\u7528 <code>.split()</code> \u4ECE\u6587\u672C\u4E2D\u63D0\u53D6\u5355\u8BCD\uFF0C\u4E0D\u5220\u9664\u6807\u70B9\u7B26\u53F7\u6216\u6298\u53E0\u5927\u5C0F\u5199\u3002</p></blockquote><p>We have provided lyrics for three songs for you to test your function: somebody.txt, barbrastrelsand.txt, and fakesong.txt. Note these are not the only files we will use to test your code. You can see the contents of these files by clicking on the tabs at the top-right of the page.</p><blockquote><p>\u6211\u4EEC\u63D0\u4F9B\u4E86\u4E09\u9996\u6B4C\u66F2\u7684\u6B4C\u8BCD\u4F9B\u60A8\u6D4B\u8BD5\u60A8\u7684\u529F\u80FD: <code>some .txt</code>\u3001<code>barbrastrelsand.txt</code> \u548C <code>faksong .txt</code> \u3002\u6CE8\u610F\uFF0C\u8FD9\u4E9B\u5E76\u4E0D\u662F\u6211\u4EEC\u7528\u6765\u6D4B\u8BD5\u4EE3\u7801\u7684\u552F\u4E00\u6587\u4EF6\u3002\u60A8\u53EF\u4EE5\u901A\u8FC7\u5355\u51FB\u9875\u9762\u53F3\u4E0A\u89D2\u7684\u9009\u9879\u5361\u67E5\u770B\u8FD9\u4E9B\u6587\u4EF6\u7684\u5185\u5BB9\u3002</p></blockquote><p>Outputs should be as below:</p><blockquote><p>\u4EA7\u51FA\u5E94\u5982\u4E0B:</p></blockquote><p>\u6B22\u8FCE\u5173\u6CE8\u6211\u516C\u4F17\u53F7\uFF1AAI\u60A6\u521B\uFF0C\u6709\u66F4\u591A\u66F4\u597D\u73A9\u7684\u7B49\u4F60\u53D1\u73B0\uFF01</p><details class="custom-container details"><summary>\u516C\u4F17\u53F7\uFF1AAI\u60A6\u521B\u3010\u4E8C\u7EF4\u7801\u3011</summary><p><img src="'+a+'" alt="" loading="lazy"></p></details>',12),u={class:"custom-container info"},m=e("p",{class:"custom-container-title"},"AI\u60A6\u521B\xB7\u7F16\u7A0B\u4E00\u5BF9\u4E00",-1),f=e("p",null,"AI\u60A6\u521B\xB7\u63A8\u51FA\u8F85\u5BFC\u73ED\u5566\uFF0C\u5305\u62EC\u300CPython \u8BED\u8A00\u8F85\u5BFC\u73ED\u3001C++ \u8F85\u5BFC\u73ED\u3001java \u8F85\u5BFC\u73ED\u3001\u7B97\u6CD5/\u6570\u636E\u7ED3\u6784\u8F85\u5BFC\u73ED\u3001\u5C11\u513F\u7F16\u7A0B\u3001pygame \u6E38\u620F\u5F00\u53D1\u300D\uFF0C\u5168\u90E8\u90FD\u662F\u4E00\u5BF9\u4E00\u6559\u5B66\uFF1A\u4E00\u5BF9\u4E00\u8F85\u5BFC + \u4E00\u5BF9\u4E00\u7B54\u7591 + \u5E03\u7F6E\u4F5C\u4E1A + \u9879\u76EE\u5B9E\u8DF5\u7B49\u3002\u5F53\u7136\uFF0C\u8FD8\u6709\u7EBF\u4E0B\u7EBF\u4E0A\u6444\u5F71\u8BFE\u7A0B\u3001Photoshop\u3001Premiere \u4E00\u5BF9\u4E00\u6559\u5B66\u3001QQ\u3001\u5FAE\u4FE1\u5728\u7EBF\uFF0C\u968F\u65F6\u54CD\u5E94\uFF01\u5FAE\u4FE1\uFF1AJiabcdefh",-1),_=e("p",null,"C++ \u4FE1\u606F\u5965\u8D5B\u9898\u89E3\uFF0C\u957F\u671F\u66F4\u65B0\uFF01\u957F\u671F\u62DB\u6536\u4E00\u5BF9\u4E00\u4E2D\u5C0F\u5B66\u4FE1\u606F\u5965\u8D5B\u96C6\u8BAD\uFF0C\u8386\u7530\u3001\u53A6\u95E8\u5730\u533A\u6709\u673A\u4F1A\u7EBF\u4E0B\u4E0A\u95E8\uFF0C\u5176\u4ED6\u5730\u533A\u7EBF\u4E0A\u3002\u5FAE\u4FE1\uFF1AJiabcdefh",-1),k=t("\u65B9\u6CD5\u4E00\uFF1A"),b={href:"http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes",target:"_blank",rel:"noopener noreferrer"},g=t("QQ"),y=e("p",null,"\u65B9\u6CD5\u4E8C\uFF1A\u5FAE\u4FE1\uFF1AJiabcdefh",-1),x=e("p",null,[e("img",{src:s,alt:"",loading:"lazy"})],-1);function w(q,I){const o=d("ExternalLinkIcon");return r(),i("div",null,[p,e("div",u,[m,f,_,e("p",null,[k,e("a",b,[g,c(o)])]),y]),x])}const C=n(h,[["render",w],["__file","01-W14-Worksheet-14-File-IO-and-CSV-Files.html.vue"]]);export{C as default};
