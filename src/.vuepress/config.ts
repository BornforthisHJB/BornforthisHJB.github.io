import { defineUserConfig } from "vuepress";
import { viteBundler } from '@vuepress/bundler-vite'
import theme from "./theme.js";
export default defineUserConfig({
  bundler: viteBundler(),
  lang: "zh-CN",
  title: "AI悦创-Python一对一辅导",
  description: "Python 1v1,AI悦创,一对一,Python,编程一对一,C++,Java,AI,人工智能,黄家宝,Python一对一教学",
  base: "/",
  theme,

  head: [
    [
      "link", {
        rel: "shortcut icon",
        // href: "/favicon.ico",
        href: "/aiyc.svg",
      }
    ],
    [
      "meta", {
        name: "keywords",
        content: "一对一辅导编程,编程1v1,CS辅导,编程一对一辅导,少儿编程一对一,Python 1v1,AI悦创,一对一,菜鸟教程,Python,编程一对一,C++,Java,AI,人工智能,黄家宝,Python一对一教学,Python辅导,留学生CS辅导,ChatGPT代注册"
      }
    ],
    [
      "meta", {
        name: "description",
        content: "Python一对一辅导,编程1v1,Java一对一辅导,一对一教学辅导,CS辅导,面试辅导,爬虫一对一教学,菜鸟教程,编程一对一教学,少儿编程一对一,人工智能,黄家宝,全网3000+学员,值得信赖,Python一对一教学,Java一对一教学,留学生CS辅导,ChatGPT代注册"
      }
    ]
    
    

  ],
  
  shouldPrefetch: false,
  markdown: {
    headers: {
      level: [2, 3, 4, 5, 6],
    }
  }
});
