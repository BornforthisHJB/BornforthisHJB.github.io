import { defineUserConfig } from "vuepress";
import theme from "./theme";

export default defineUserConfig({
  lang: "zh-CN",
  title: "AI悦创",
  description: "AI悦创,Python,编程一对一,C++,Java,AI,人工智能,黄家宝",

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

  theme,
});
