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
  
  iconAssets: "iconfont",

  logo: "/img_home/logo_min.png",

  repo: "BornforthisHJB/BornforthisHJB.github.io",

  docsDir: "bornforthis/",
  
  // darkmode: "enable", // 强制深色模式
  // darkmode: "switch",
  darkmode: "toggle",

  // navbar
  navbar: navbar,

  // sidebar
  sidebar: sidebar,

  footer: "长期招收编程一对一学员！微信：Jiabcdefh",

  displayFooter: true,

  pageInfo: ["Author", "Original", "Date", "Category", "Tag", "ReadingTime"],

  blog: {
    name: "AI悦创",
    avatar: "/aiyc.jpg",
    description: "一个思考者 ",
    intro: "/intro.md",
    articlePerPage: 6,
    medias: {
      // Baidu: "https://example.com",
      // Bitbucket: "https://example.com",
      // Dingding: "https://example.com",
      // Discord: "https://example.com",
      // Dribbble: "https://example.com",
      Email: "mailto:bornforthis@bornforthis.cn",
      // Evernote: "https://example.com",
      // Facebook: "https://example.com",
      // Flipboard: "https://example.com",
      Gitee: "https://gitee.com/huangjiabaoaiyc",
      GitHub: "https://github.com/AndersonHJB",
      // Gitlab: "https://example.com",
      Gmail: "mailto:aiyuechuang@gmail.com",
      // Instagram: "https://example.com",
      // Lines: "https://example.com",
      // Linkedin: "https://example.com",
      // Pinterest: "https://example.com",
      // Pocket: "https://example.com",
      QQ: "http://wpa.qq.com/msgrd?v=3&uin=1432803776&site=qq&menu=yes",
      Qzone: "http://1432803776.qzone.qq.com",
      // Reddit: "https://example.com",
      // Rss: "https://example.com",
      // Steam: "https://example.com",
      // Twitter: "https://example.com",
      // Wechat: "https://example.com",
      Weibo: "https://weibo.com/u/5673898686",
      // Whatsapp: "https://example.com",
      
      Youtube: "https://www.youtube.com/channel/UCT525Fk74w_l9Pk06OxkLxg",
      Zhihu: "https://www.zhihu.com/people/aiyuechuang",
    },
  },

  encrypt: {
    config: {
      // "/dedao/01-Xue_Zhaofeng_economics_class/": "123123",
      // "/guide/encrypt.html": ["1234"],
      "/column/TensorFlow/零基础实战机器学习/": "123123",
      "/column/Programmingthinking/": "123123",
      "/column/playback/01-Tommy.html": "20220517",
      "/column/playback/02-LKW.html": "lkw",
      "/column/playback/03-20220610.html": "20220610",
    },
  },
  
  plugins: {
    copyright: {
      author: "黄家宝|AI悦创",
      global: true,
      triggerWords: 10,
      disableCopy: false,
      disableSelection: false,
    },
    

    blog: {
      autoExcerpt: true,
    },

    // 如果你不需要评论，可以直接删除 comment 配置，
    // 以下配置仅供体验，如果你需要评论，请自行配置并使用自己的环境，详见文档。
    // 为了避免打扰主题开发者以及消耗他的资源，请不要在你的正式环境中直接使用下列配置!!!!!
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
      pageview: true, // 浏览量统计
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
