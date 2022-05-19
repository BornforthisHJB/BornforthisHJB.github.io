import { defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
// import { photoSwipePlugin } from "vuepress-plugin-photo-swipe";
import theme from "./theme";
// const { searchPlugin } = require('@vuepress/plugin-search');
import { sitemapPlugin } from "vuepress-plugin-sitemap2";

export default defineUserConfig({
  lang: "zh-CN",
  title: "AI悦创",
  description: "AI悦创,Python,编程一对一,C++,Java,AI,人工智能,黄家宝",
  // searchPlugin: true,
  base: "/",

  head: [
    // [
    //   "script",
    //   { 
    //     type: "text/javascript",
    //     src: "/js/video-js/m3u8player.js"
    //   },
    // ],
    // [
    //   "script",
    //   { 
    //     type: "text/javascript",
    //     src: "/js/video-js/videojs-contrib-hls.min.js"
    //   },
    // ],
    // [
    //   "script",
    //   { 
    //     type: "text/javascript",
    //     src: "/js/video-js/video.js"
    //   },
    // ],
    // [
    //   "script",
    //   { 
    //     type: "text/javascript",
    //     src: "/js/video-js/jquery-3.2.1.min.js"
    //   },
    // ],
    // [
    //   "link",
    //   {
    //     rel: "stylesheet",
    //     href: "/js/video-js/video-js.css"
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

    // sitemapPlugin({
    //   hostname: "bornforthis.cn",
    // }),
  ],

  theme,
});
