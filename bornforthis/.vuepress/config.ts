import { defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
// import { photoSwipePlugin } from "vuepress-plugin-photo-swipe";
import theme from "./theme";
// const { searchPlugin } = require('@vuepress/plugin-search');
// import { sitemapPlugin } from "vuepress-plugin-sitemap2";
import { feedPlugin } from "vuepress-plugin-feed2";
import { copyrightPlugin } from "vuepress-plugin-copyright2";

export default defineUserConfig({
  lang: "zh-CN",
  title: "AI悦创",
  description: "AI悦创,Python,编程一对一,C++,Java,AI,人工智能,黄家宝",
  // searchPlugin: true,
  base: "/",

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
    //   zoom: "string";
    //   close: "close";
    //   share: "Share";

    // }),

    searchPlugin({
      // ...

      locales: {
        "/": {
          placeholder: "搜索",
        },
      },
    }),

    feedPlugin({
      hostname: "https://bornforthis.cn/",
      rss: true,
      image: "/img_home/logo_min.png",
    }),

    copyrightPlugin({
      author: "AI悦创",
      global: true,
      triggerWords: 10,
    }),

    // sitemapPlugin({
    //   hostname: "bornforthis.cn",
    // }),
  ],

  theme,
});
