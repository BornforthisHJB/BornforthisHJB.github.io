import { defineUserConfig } from "vuepress";
import { searchPlugin } from "@vuepress/plugin-search";
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
    searchPlugin({
      // ...

      locales: {
        "/": {
          placeholder: "搜索",
        },
      },
    }),

    // sitemapPlugin({
    //   // 配置选项
    // }),
  ],

  theme,
});
