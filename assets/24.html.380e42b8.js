import{_ as o}from"./gzh.b03adfd2.js";import{_ as a}from"./zsxq.77f6dc86.js";import{_ as n}from"./_plugin-vue_export-helper.cdc0426e.js";import{o as c,c as i,a as e,d as t,b as r,e as p,r as l}from"./app.a5204966.js";const _="/assets/b11b3ea50ef11c6531641b862d3b5b69.1dd99f77.jpg",d="/assets/6dac3a9961e69aa86d80de32bdc00987.004b34e0.png",m="/assets/fa0aa02dae219b21de5984371950c3cc.374872be.png",g={},h=p('<p><img src="'+_+'" alt="img" loading="lazy"></p><p>\u4F60\u597D\uFF0C\u6211\u662F\u60A6\u521B\u3002</p><p>\u4ECA\u5929\u6211\u6765\u5E26\u4F60\u8FDB\u884C KNN \u7684\u5B66\u4E60\uFF0CKNN \u7684\u82F1\u6587\u53EB K-Nearest Neighbor\uFF0C\u5E94\u8BE5\u7B97\u662F\u6570\u636E\u6316\u6398\u7B97\u6CD5\u4E2D\u6700\u7B80\u5355\u7684\u4E00\u79CD\u3002</p><p>\u6211\u4EEC\u5148\u7528\u4E00\u4E2A\u4F8B\u5B50\u4F53\u4F1A\u4E0B\u3002</p><p>\u5047\u8BBE\uFF0C\u6211\u4EEC\u60F3\u5BF9\u7535\u5F71\u7684\u7C7B\u578B\u8FDB\u884C\u5206\u7C7B\uFF0C\u7EDF\u8BA1\u4E86\u7535\u5F71\u4E2D\u6253\u6597\u6B21\u6570\u3001\u63A5\u543B\u6B21\u6570\uFF0C\u5F53\u7136\u8FD8\u6709\u5176\u4ED6\u7684\u6307\u6807\u4E5F\u53EF\u4EE5\u88AB\u7EDF\u8BA1\u5230\uFF0C\u5982\u4E0B\u8868\u6240\u793A\u3002</p><p><img src="'+d+'" alt="img" loading="lazy"></p><p>\u6211\u4EEC\u5F88\u5BB9\u6613\u7406\u89E3\u300A\u6218\u72FC\u300B\u300A\u7EA2\u6D77\u884C\u52A8\u300B\u300A\u789F\u4E2D\u8C0D 6\u300B\u662F\u52A8\u4F5C\u7247\uFF0C\u300A\u524D\u4EFB 3\u300B\u300A\u6625\u5A07\u6551\u5FD7\u660E\u300B\u300A\u6CF0\u5766\u5C3C\u514B\u53F7\u300B\u662F\u7231\u60C5\u7247\uFF0C\u4F46\u662F\u6709\u6CA1\u6709\u4E00\u79CD\u65B9\u6CD5\u8BA9\u673A\u5668\u4E5F\u53EF\u4EE5\u638C\u63E1\u8FD9\u4E2A\u5206\u7C7B\u7684\u89C4\u5219\uFF0C\u5F53\u6709\u4E00\u90E8\u65B0\u7535\u5F71\u7684\u65F6\u5019\uFF0C\u4E5F\u53EF\u4EE5\u5BF9\u5B83\u7684\u7C7B\u578B\u81EA\u52A8\u5206\u7C7B\u5462\uFF1F</p><p>\u6211\u4EEC\u53EF\u4EE5\u628A\u6253\u6597\u6B21\u6570\u770B\u6210 X \u8F74\uFF0C\u63A5\u543B\u6B21\u6570\u770B\u6210 Y \u8F74\uFF0C\u7136\u540E\u5728\u4E8C\u7EF4\u7684\u5750\u6807\u8F74\u4E0A\uFF0C\u5BF9\u8FD9\u51E0\u90E8\u7535\u5F71\u8FDB\u884C\u6807\u8BB0\uFF0C\u5982\u4E0B\u56FE\u6240\u793A\u3002</p><p>\u5BF9\u4E8E\u672A\u77E5\u7684\u7535\u5F71 A\uFF0C\u5750\u6807\u4E3A (x,y)\uFF0C\u6211\u4EEC\u9700\u8981\u770B\u4E0B\u79BB\u7535\u5F71 A \u6700\u8FD1\u7684\u90FD\u6709\u54EA\u4E9B\u7535\u5F71\uFF0C\u8FD9\u4E9B\u7535\u5F71\u4E2D\u7684\u5927\u591A\u6570\u5C5E\u4E8E\u54EA\u4E2A\u5206\u7C7B\uFF0C\u90A3\u4E48\u7535\u5F71 A \u5C31\u5C5E\u4E8E\u54EA\u4E2A\u5206\u7C7B\u3002\u5B9E\u9645\u64CD\u4F5C\u4E2D\uFF0C\u6211\u4EEC\u8FD8\u9700\u8981\u786E\u5B9A\u4E00\u4E2A K \u503C\uFF0C\u4E5F\u5C31\u662F\u6211\u4EEC\u8981\u89C2\u5BDF\u79BB\u7535\u5F71 A \u6700\u8FD1\u7684\u7535\u5F71\u6709\u591A\u5C11\u4E2A\u3002</p><p><img src="'+m+'" alt="img" loading="lazy"></p><p>\u6B22\u8FCE\u5173\u6CE8\u6211\u516C\u4F17\u53F7\uFF1AAI\u60A6\u521B\uFF0C\u6709\u66F4\u591A\u66F4\u597D\u73A9\u7684\u7B49\u4F60\u53D1\u73B0\uFF01</p><details class="custom-container details"><summary>\u516C\u4F17\u53F7\uFF1AAI\u60A6\u521B\u3010\u4E8C\u7EF4\u7801\u3011</summary><p><img src="'+o+'" alt="" loading="lazy"></p></details>',12),f={class:"custom-container info"},u=e("p",{class:"custom-container-title"},"AI\u60A6\u521B\xB7\u7F16\u7A0B\u4E00\u5BF9\u4E00",-1),b=e("p",null,"AI\u60A6\u521B\xB7\u63A8\u51FA\u8F85\u5BFC\u73ED\u5566\uFF0C\u5305\u62EC\u300CPython \u8BED\u8A00\u8F85\u5BFC\u73ED\u3001C++ \u8F85\u5BFC\u73ED\u3001java \u8F85\u5BFC\u73ED\u3001\u7B97\u6CD5/\u6570\u636E\u7ED3\u6784\u8F85\u5BFC\u73ED\u3001\u5C11\u513F\u7F16\u7A0B\u3001pygame \u6E38\u620F\u5F00\u53D1\u300D\uFF0C\u5168\u90E8\u90FD\u662F\u4E00\u5BF9\u4E00\u6559\u5B66\uFF1A\u4E00\u5BF9\u4E00\u8F85\u5BFC + \u4E00\u5BF9\u4E00\u7B54\u7591 + \u5E03\u7F6E\u4F5C\u4E1A + \u9879\u76EE\u5B9E\u8DF5\u7B49\u3002\u5F53\u7136\uFF0C\u8FD8\u6709\u7EBF\u4E0B\u7EBF\u4E0A\u6444\u5F71\u8BFE\u7A0B\u3001Photoshop\u3001Premiere \u4E00\u5BF9\u4E00\u6559\u5B66\u3001QQ\u3001\u5FAE\u4FE1\u5728\u7EBF\uFF0C\u968F\u65F6\u54CD\u5E94\uFF01\u5FAE\u4FE1\uFF1AJiabcdefh",-1),y=e("p",null,"C++ \u4FE1\u606F\u5965\u8D5B\u9898\u89E3\uFF0C\u957F\u671F\u66F4\u65B0\uFF01\u957F\u671F\u62DB\u6536\u4E00\u5BF9\u4E00\u4E2D\u5C0F\u5B66\u4FE1\u606F\u5965\u8D5B\u96C6\u8BAD\uFF0C\u8386\u7530\u3001\u53A6\u95E8\u5730\u533A\u6709\u673A\u4F1A\u7EBF\u4E0B\u4E0A\u95E8\uFF0C\u5176\u4ED6\u5730\u533A\u7EBF\u4E0A\u3002\u5FAE\u4FE1\uFF1AJiabcdefh",-1),N={href:"http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes",target:"_blank",rel:"noopener noreferrer"},A=e("p",null,"\u65B9\u6CD5\u4E8C\uFF1A\u5FAE\u4FE1\uFF1AJiabcdefh",-1),x=e("p",null,[e("img",{src:a,alt:"",loading:"lazy"})],-1);function v(I,k){const s=l("ExternalLinkIcon");return c(),i("div",null,[h,e("div",f,[u,b,y,e("p",null,[t("\u65B9\u6CD5\u4E00\uFF1A"),e("a",N,[t("QQ"),r(s)])]),A]),x])}const V=n(g,[["render",v],["__file","24.html.vue"]]);export{V as default};
