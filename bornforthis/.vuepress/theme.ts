import { hopeTheme } from "vuepress-theme-hope";
import navbar from "./navbar";
import sidebar from "./sidebar";


export default hopeTheme({
  hostname: "https://bornforthis.cn/",

  author: {
    name: "AndersonHJB",
    url: "https://www.bornforthis.cn/",
  },

  iconPrefix: "iconfont icon-",
  
  // iconAssets: "iconfont",
  iconAssets: "//at.alicdn.com/t/c/font_3426793_x3hah585oq.css",

  logo: "/img_home/logo_min.png",

  // repo: "BornforthisHJB/BornforthisHJB.github.io",
  // repo: "AndersonHJB/AndersonHJB.github.io",
  repo: "AndersonHJB?tab=repositories",
  editLink: false,

  docsDir: "bornforthis/",
  
  // darkmode: "enable", // 强制深色模式
  // darkmode: "switch",
  darkmode: "toggle",

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: sidebar,

  footer: '长期招收编程一对一学员!微信:Jiabcdefh, <a href="https://beian.miit.gov.cn/" target="_blank">闽ICP备19021486号-6</a>',

  displayFooter: true,

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  blog: {
    name: "AI悦创",
    avatar: "/aiyc.jpg",
    description: "一个思考者,编程私教 1v1",
    intro: "/intro.md",
    articlePerPage: 6,
    medias: {
      Email: "mailto:bornforthis@bornforthis.cn",
      Gitee: "https://gitee.com/huangjiabaoaiyc",
      GitHub: "https://github.com/AndersonHJB",
      Gmail: "mailto:aiyuechuang@gmail.com",
      QQ: "http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes",
      Youtube: "https://www.youtube.com/channel/UCT525Fk74w_l9Pk06OxkLxg",
      Zhihu: "https://www.zhihu.com/people/aiyuechuang",
    },
  },

  encrypt: {
    config: {
      "/1v1/01-Thomas-hw-note/": ["123123"],
      "/column/python60/": "123123a",
      // "/column/Fifth_brother_photography_class/": "123123a",
      // "/column/data-structure/": "123123a",
      // "/column/web/": "123123a",
      "/dedao/": "123123a",
      // "/column/data_analysis/week1": "123123a",
      [encodeURI("/column/TensorFlow/零基础实战机器学习/")]: "123123a",
      "/column/Programmingthinking/": "123123a",
      "/column/playback/01-Tommy.html": "20220517",
      "/column/playback/02-LKW.html": "lkw",
      "/column/playback/03-20220610.html": "20220610",
    },
  },
  
  plugins: {
    pwa: {
      update: "hint",
      maxPicSize: 2048,
      
    },
    copyright: {
      author: "黄家宝|AI悦创",
      global: true,
      triggerWords: 100,
      disableCopy: false,
      disableSelection: false,
    },
    

    blog: {
      autoExcerpt: true,
    },

    comment: {
      // /**
      //  * Using giscus
      //  */
      // provider: "giscus",
      // repo: "BornforthisHJB/comment",
      // repoId: "R_kgDOHTJESw",
      // category: "Announcements",
      // categoryId: "DIC_kwDOHTJES84CO_Qz",

      /**
       * Using Waline
       */
      provider: "Waline",
      serverURL: "https://comment.bornforthis.cn/",
      comment: true, // 评论数统计
      // pageview: true, // 浏览量统计
      pageview: true,
      copyright: false,
      // dark: true,
      emoji: [
        'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/qq',
        'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/weibo',
        'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/bilibili',
        'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/alus',
        'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/tieba',
        'https://cdn.jsdelivr.net/gh/walinejs/emojis@1.0.0/tw-emoji',
      ],
    },

    components: [
      "Badge",
      "PDF",
      "YouTube",
    ],

    mdEnhance: {
      tex: true,
      // enableAll: true,
      attrs: true,
      tabs: true,
      // vpre: true,
      codetabs: true,
      tasklist: true,
      // 启用图片标记
      imageMark: true,
      // 启用图片大小
      imageSize: true,
      align: true, // 自定义对齐
      footnote: true,
      // this is the default option, so you can use it directly
      container: true,
      presentation: {
        plugins: ["highlight", "math", "search", "notes", "zoom"],
      },
    },
  },
});
