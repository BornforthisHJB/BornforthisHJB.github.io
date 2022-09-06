import{_ as o}from"./gzh.aa7caba6.js";import{_ as s}from"./zsxq.96f46dfd.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";import{o as n,c as i,a as e,b as c,e as h,d as t,r as p}from"./app.9898f5b0.js";const d={},_=h('<h2 id="\u4E00\u3001\u4ECB\u7ECD" tabindex="-1"><a class="header-anchor" href="#\u4E00\u3001\u4ECB\u7ECD" aria-hidden="true">#</a> \u4E00\u3001\u4ECB\u7ECD</h2><p>k-\u8FD1\u90BB\u7B97\u6CD5\uFF08K-Nearest Neighbour algorithm\uFF09\uFF0C\u53C8\u79F0 KNN \u7B97\u6CD5\uFF0C\u662F\u6570\u636E\u6316\u6398\u6280\u672F\u4E2D\u539F\u7406\u6700\u7B80\u5355\u7684\u7B97\u6CD5\u3002</p><p>\u5DE5\u4F5C\u539F\u7406\uFF1A\u7ED9\u5B9A\u4E00\u4E2A\u5DF2\u77E5\u6807\u7B7E\u7C7B\u522B\u7684\u8BAD\u7EC3\u6570\u636E\u96C6\uFF0C\u8F93\u5165\u6CA1\u6709\u6807\u7B7E\u7684\u65B0\u6570\u636E\u540E\uFF0C\u5728\u8BAD\u7EC3\u6570\u636E\u96C6\u4E2D\u627E\u5230\u4E0E\u65B0\u6570\u636E\u6700\u90BB\u8FD1\u7684 k \u4E2A\u5B9E\u4F8B\uFF0C\u5982\u679C\u8FD9 k \u4E2A\u5B9E\u4F8B\u7684\u591A\u6570\u5C5E\u4E8E\u67D0\u4E2A\u7C7B\u522B\uFF0C\u90A3\u4E48\u65B0\u6570\u636E\u5C31\u5C5E\u4E8E\u8FD9\u4E2A\u7C7B\u522B\u3002\u7B80\u5355\u7406\u89E3\u4E3A\uFF1A\u7531\u90A3\u4E9B\u79BB X \u6700\u8FD1\u7684 k \u4E2A\u70B9\u6765\u6295\u7968\u51B3\u5B9A X \u5F52\u4E3A\u54EA\u4E00\u7C7B\u3002</p><h2 id="\u4E8C\u3001k-\u8FD1\u90BB\u7B97\u6CD5\u7684\u6B65\u9AA4" tabindex="-1"><a class="header-anchor" href="#\u4E8C\u3001k-\u8FD1\u90BB\u7B97\u6CD5\u7684\u6B65\u9AA4" aria-hidden="true">#</a> \u4E8C\u3001k-\u8FD1\u90BB\u7B97\u6CD5\u7684\u6B65\u9AA4</h2><p>\uFF081\uFF09\u8BA1\u7B97\u5DF2\u77E5\u7C7B\u522B\u6570\u636E\u96C6\u4E2D\u7684\u70B9\u4E0E\u5F53\u524D\u70B9\u4E4B\u95F4\u7684\u8DDD\u79BB\uFF1B</p><p>\uFF082\uFF09\u6309\u7167\u8DDD\u79BB\u9012\u589E\u6B21\u5E8F\u6392\u5E8F\uFF1B</p><p>\uFF083\uFF09\u9009\u53D6\u4E0E\u5F53\u524D\u70B9\u8DDD\u79BB\u6700\u5C0F\u7684 k \u4E2A\u70B9\uFF1B</p><p>\uFF084\uFF09\u786E\u5B9A\u524Dk\u4E2A\u70B9\u6240\u5728\u7C7B\u522B\u7684\u51FA\u73B0\u9891\u7387\uFF1B</p><p>\uFF085\uFF09\u8FD4\u56DE\u524Dk\u4E2A\u70B9\u51FA\u73B0\u9891\u7387\u6700\u9AD8\u7684\u7C7B\u522B\u4F5C\u4E3A\u5F53\u524D\u70B9\u7684\u9884\u6D4B\u7C7B\u522B\u3002</p><h2 id="\u4E09\u3001python\u5B9E\u73B0" tabindex="-1"><a class="header-anchor" href="#\u4E09\u3001python\u5B9E\u73B0" aria-hidden="true">#</a> \u4E09\u3001Python\u5B9E\u73B0</h2><p>\u5224\u65AD\u4E00\u4E2A\u7535\u5F71\u662F\u7231\u60C5\u7247\u8FD8\u662F\u52A8\u4F5C\u7247\u3002</p><p>\u6B22\u8FCE\u5173\u6CE8\u6211\u516C\u4F17\u53F7\uFF1AAI\u60A6\u521B\uFF0C\u6709\u66F4\u591A\u66F4\u597D\u73A9\u7684\u7B49\u4F60\u53D1\u73B0\uFF01</p><details class="custom-container details"><summary>\u516C\u4F17\u53F7\uFF1AAI\u60A6\u521B\u3010\u4E8C\u7EF4\u7801\u3011</summary><p><img src="'+o+'" alt=""></p></details>',13),l={class:"custom-container info"},m=e("p",{class:"custom-container-title"},"AI\u60A6\u521B\xB7\u7F16\u7A0B\u4E00\u5BF9\u4E00",-1),u=e("p",null,"AI\u60A6\u521B\xB7\u63A8\u51FA\u8F85\u5BFC\u73ED\u5566\uFF0C\u5305\u62EC\u300CPython \u8BED\u8A00\u8F85\u5BFC\u73ED\u3001C++ \u8F85\u5BFC\u73ED\u3001java \u8F85\u5BFC\u73ED\u3001\u7B97\u6CD5/\u6570\u636E\u7ED3\u6784\u8F85\u5BFC\u73ED\u3001\u5C11\u513F\u7F16\u7A0B\u3001pygame \u6E38\u620F\u5F00\u53D1\u300D\uFF0C\u5168\u90E8\u90FD\u662F\u4E00\u5BF9\u4E00\u6559\u5B66\uFF1A\u4E00\u5BF9\u4E00\u8F85\u5BFC + \u4E00\u5BF9\u4E00\u7B54\u7591 + \u5E03\u7F6E\u4F5C\u4E1A + \u9879\u76EE\u5B9E\u8DF5\u7B49\u3002\u5F53\u7136\uFF0C\u8FD8\u6709\u7EBF\u4E0B\u7EBF\u4E0A\u6444\u5F71\u8BFE\u7A0B\u3001Photoshop\u3001Premiere \u4E00\u5BF9\u4E00\u6559\u5B66\u3001QQ\u3001\u5FAE\u4FE1\u5728\u7EBF\uFF0C\u968F\u65F6\u54CD\u5E94\uFF01\u5FAE\u4FE1\uFF1AJiabcdefh",-1),f=e("p",null,"C++ \u4FE1\u606F\u5965\u8D5B\u9898\u89E3\uFF0C\u957F\u671F\u66F4\u65B0\uFF01\u957F\u671F\u62DB\u6536\u4E00\u5BF9\u4E00\u4E2D\u5C0F\u5B66\u4FE1\u606F\u5965\u8D5B\u96C6\u8BAD\uFF0C\u8386\u7530\u3001\u53A6\u95E8\u5730\u533A\u6709\u673A\u4F1A\u7EBF\u4E0B\u4E0A\u95E8\uFF0C\u5176\u4ED6\u5730\u533A\u7EBF\u4E0A\u3002\u5FAE\u4FE1\uFF1AJiabcdefh",-1),k=t("\u65B9\u6CD5\u4E00\uFF1A"),b={href:"http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes",target:"_blank",rel:"noopener noreferrer"},x=t("QQ"),y=e("p",null,"\u65B9\u6CD5\u4E8C\uFF1A\u5FAE\u4FE1\uFF1AJiabcdefh",-1),N=e("p",null,[e("img",{src:s,alt:""})],-1);function g(v,I){const a=p("ExternalLinkIcon");return n(),i("div",null,[_,e("div",l,[m,u,f,e("p",null,[k,e("a",b,[x,c(a)])]),y]),N])}var V=r(d,[["render",g],["__file","01.html.vue"]]);export{V as default};
