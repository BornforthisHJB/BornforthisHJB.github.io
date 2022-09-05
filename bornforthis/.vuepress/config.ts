import { defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
// import { pwaPlugin } from "vuepress-plugin-pwa2";
// import { docsearchPlugin } from '@vuepress/plugin-docsearch';
import theme from "./theme";
// import { commentPlugin } from "vuepress-plugin-comment2";

export default defineUserConfig({
  lang: "zh-CN",
  title: "AI悦创",
  description: "AI悦创,一对一,Python,编程一对一,C++,Java,AI,人工智能,黄家宝",
  base: "/",
  shouldPrefetch: false,
  head: [
    // [
    //   "script",
    //   {
    //     async: true,
    //     defer: true,
    //     type: "text/javascript",
    //     src: "https://platform.linkedin.com/badges/js/profile.js",
    //   }
    // ],
    // [
    //   "script",
    //   {
    //     type: "text/javascript",
    //     src: "//unpkg.byted-static.com/xgplayer-hls.js/2.2.2/browser/index.js",
    //     charset: "utf-8",
    //   }
    // ],
    // [
    //   "link", {
    //     rel: "stylesheet",
    //     href: "https://cdn.jsdelivr.net/npm/@docsearch/css@3",
    //   }
    // ],
    // [
    //   "script", {
    //     type: "text/javascript",
    //     src: "https://cdn.jsdelivr.net/npm/@docsearch/js@3",
    //   }
    // ],
    // [
    //   "script",
    //   { 
    //     type: "text/javascript",
    //     src: "/js/myjs.js"
    //   },
    // ],
    [
      "script",
      { 
        type: "text/javascript",
        src: "/js/baidu.js"
      }
    ],
    [
      "link",
      {
        rel: "stylesheet",
        href: "//at.alicdn.com/t/font_2410206_mfj6e1vbwo.css",
        // href: "/css/font_2410206_mfj6e1vbwo.css",
      },
    ],
  ],
  
  plugins: [
    // commentPlugin({
    //   pageSize: 10,
    //   copyright: false,
    // }),

    // pwaPlugin({
    //   // cacheHTML: true,
    //   // update: "available",
    //   // update: "force",
    //   update: "hint",
    //   // maxSize: 6,
    //   // favicon: "/"
    // }),

    // docsearchPlugin({
    //   // 你的选项
    //   // appId, apiKey 和 indexName 是必填的
    //   appId: "ACD1S100IT",
    //   apiKey: "409311158985cfee5c0a535e5998ddd2",
    //   indexName: "bornforthis",
    //   // placeholder: "搜索",
    // }),
    
    searchPlugin({
      locales: {
        "/": {
          placeholder: "搜索",
          
        },
      },
    }),
  ],

  theme,
});
