import { defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
import { pwaPlugin } from "vuepress-plugin-pwa2";
// import { photoSwipePlugin } from "vuepress-plugin-photo-swipe";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "AI悦创",
  description: "AI悦创,Python,编程一对一,C++,Java,AI,人工智能,黄家宝",
  base: "/",
  shouldPrefetch: false,
  head: [
    [
      "script",
      { 
        type: "text/javascript",
        src: "/js/myjs.js"
      },
    ],
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
    // photoSwipePlugin({
    //   // 你的选项
    // }),

    pwaPlugin({
      // cacheHTML: true,
      // update: "available",
      // update: "force",
      update: "hint",
      // maxSize: 6,
    }),
    
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
