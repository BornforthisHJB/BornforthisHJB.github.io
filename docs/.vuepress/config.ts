import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
// import { searchPlugin } from "@vuepress/plugin-search";
import { docsearchPlugin } from '@vuepress/plugin-docsearch';

export default defineUserConfig({
  lang: "zh-CN",
  title: "AI悦创",
  description: "Python 1v1,AI悦创,一对一,Python,编程一对一,C++,Java,AI,人工智能,黄家宝,Python一对一教学",
  base: "/",
  // shouldPrefetch: false,
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
    [
      "link", {
        rel: "shortcut icon",
        href: "/favicon.ico",
      }
    ],
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

    docsearchPlugin({
      // 你的选项
      // appId, apiKey 和 indexName 是必填的
      appId: "ACD1S100IT",
      apiKey: "409311158985cfee5c0a535e5998ddd2",
      indexName: "bornforthis",
      placeholder: "搜索",
    }),
    
    // searchPlugin({
    //   locales: {
    //     "/": {
    //       placeholder: "搜索",
          
    //     },
    //   },
    // }),
  ],

  theme,
});
